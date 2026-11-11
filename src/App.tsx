import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { PEPERO_DATA, PeperoItem } from './data/peperoData';
import { PeperoStickVisual } from './components/PeperoStickVisual';
import { PeperoCard } from './components/PeperoCard';
import { CatalogModal } from './components/CatalogModal';
import { ShareModal } from './components/ShareModal';
import { soundManager } from './utils/sound';
import { 
  Sparkles, 
  Dices, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Heart,
  Coffee
} from 'lucide-react';

export default function App() {
  const [selectedPepero, setSelectedPepero] = useState<PeperoItem | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);

  // Sync sound manager state
  useEffect(() => {
    soundManager.enabled = soundEnabled;
  }, [soundEnabled]);

  const handleToggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const fireCelebrationConfetti = () => {
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#7E22CE', '#9333EA', '#A855F7', '#C084FC', '#E879F9'],
    });
  };

  const handleSelectPepero = (item: PeperoItem) => {
    soundManager.playPop();
    setTimeout(() => {
      soundManager.playChime();
      fireCelebrationConfetti();
    }, 280);
    setSelectedPepero(item);
  };

  const handleReset = () => {
    setSelectedPepero(null);
  };

  const handleRandomPick = () => {
    soundManager.playPop();
    const randomIndex = Math.floor(Math.random() * PEPERO_DATA.length);
    handleSelectPepero(PEPERO_DATA[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-[#F5EEFD] text-[#2D2424] flex flex-col justify-between selection:bg-[#F3E8FF] selection:text-[#581C87]">
      {/* Decorative Lavender-Purple Top Ambient Bar */}
      <div className="w-full h-1.5 bg-linear-to-r from-[#581C87] via-[#9333EA] to-[#C084FC]" />

      <main className="w-full max-w-[540px] mx-auto px-4 py-6 sm:py-8 flex-1 flex flex-col justify-center items-center">
        {/* Navigation / Sound Bar */}
        <div className="w-full flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#581C87] bg-white/80 px-3 py-1 rounded-full border border-purple-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>11.11 JENNISTEA EDITION</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                soundManager.playPop();
                setIsCatalogOpen(true);
              }}
              title="9종 전종 도감 보기"
              className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/80 hover:bg-white text-purple-900 border border-purple-200 shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
            >
              <BookOpen className="w-3 h-3 text-[#7E22CE]" />
              <span className="hidden sm:inline">전종 도감</span>
            </button>

            <button
              onClick={() => {
                handleToggleSound();
                soundManager.playPop();
              }}
              title={soundEnabled ? '효과음 켜짐' : '효과음 꺼짐'}
              className="p-1.5 rounded-full bg-white/80 hover:bg-white text-purple-900 border border-purple-200 shadow-2xs transition-all cursor-pointer"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#7E22CE]" />
              ) : (
                <VolumeX className="w-4 h-4 text-purple-300" />
              )}
            </button>
          </div>
        </div>

        {/* ================= SELECTION SCREEN ================= */}
        {!selectedPepero ? (
          <div className="w-full text-center animate-fadeIn">
            <header className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F3E8FF] text-[#581C87] text-xs font-bold rounded-full mb-3 border border-purple-200">
                <span>Sweet Pepero Day with JennisTea</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#581C87] tracking-tight mb-2.5 flex items-center justify-center gap-2">
                <span>🍫</span>
                <span>빼빼로 X 제니스티</span>
                <span>🍵</span>
              </h1>
              <p className="text-sm sm:text-base text-purple-950/80 leading-relaxed break-keep max-w-sm mx-auto font-normal">
                내가 가장 끌리는 빼빼로를 클릭하면<br />
                <strong className="text-[#3B0764] font-bold">내 성격 심리</strong>와 딱 맞는 <strong className="text-[#581C87] font-bold">제니스티(JennisTea)</strong>를 추천해 드려요!
              </p>
            </header>

            {/* 3x3 Pepero Selection Grid */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 mb-6" id="pepero-grid">
              {PEPERO_DATA.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectPepero(item)}
                  className="group bg-white/95 border-2 border-purple-200/80 hover:border-[#7E22CE] rounded-2xl p-3 sm:p-4 cursor-pointer transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-purple-900/15 flex flex-col items-center justify-between transform hover:-translate-y-1.5 active:translate-y-0 relative overflow-hidden"
                >
                  {/* Subtle top background glow */}
                  <div className="absolute top-0 inset-x-0 h-10 bg-linear-to-b from-purple-100/40 to-transparent pointer-events-none" />

                  {/* Pepero Stick Miniature + Emoji Icon */}
                  <div className="relative mb-2.5 flex flex-col items-center justify-center pt-1">
                    <PeperoStickVisual pepero={item} size="md" animated />
                    <span className="text-xl sm:text-2xl mt-1.5 transition-transform duration-300 group-hover:scale-125">
                      {item.icon}
                    </span>
                  </div>

                  {/* Pepero Name */}
                  <div className="w-full">
                    <span className="text-xs sm:text-[13px] font-bold text-[#3B0764] group-hover:text-[#7E22CE] transition-colors line-clamp-1 block">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-purple-600/70 block tracking-tight line-clamp-1">
                      {item.teaCategory} 매칭
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Helper Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
              <button
                onClick={handleRandomPick}
                className="w-full sm:w-auto px-4 py-2.5 bg-white hover:bg-purple-50/80 border border-purple-200 rounded-xl text-xs font-bold text-[#581C87] shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-purple-300"
              >
                <Dices className="w-4 h-4 text-[#9333EA]" />
                <span>무엇을 고를지 고민된다면? 🎲 랜덤 추천</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playPop();
                  setIsCatalogOpen(true);
                }}
                className="w-full sm:w-auto px-4 py-2.5 bg-[#F3E8FF] hover:bg-[#E9D5FF] border border-purple-300 rounded-xl text-xs font-bold text-[#581C87] shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Coffee className="w-4 h-4 text-[#7E22CE]" />
                <span>제니스티 9종 페어링 가이드 보기</span>
              </button>
            </div>
          </div>
        ) : (
          /* ================= RESULT CARD SCENE ================= */
          <div className="w-full animate-fadeIn" id="card-scene">
            <PeperoCard
              pepero={selectedPepero}
              onReset={handleReset}
              onOpenShare={() => setIsShareOpen(true)}
              onOpenCatalog={() => setIsCatalogOpen(true)}
              soundEnabled={soundEnabled}
              onToggleSound={handleToggleSound}
            />
          </div>
        )}
      </main>

      {/* Global Modals */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelect={(item) => setSelectedPepero(item)}
        currentSelectedId={selectedPepero?.id}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        pepero={selectedPepero}
      />

      {/* Footer Branding */}
      <footer className="w-full border-t border-purple-200/70 bg-[#EFE5FC]/80 py-4 px-4 text-center text-xs text-[#581C87]">
        <div className="max-w-[500px] mx-auto flex flex-col items-center gap-1.5">
          <p className="flex items-center gap-1 font-semibold text-[#4C1D95]">
            <span>🍫 11월 11일 빼빼로 데이</span>
            <span>•</span>
            <span className="text-[#6B21A8]">제니스티(JennisTea) 티타임</span>
            <Heart className="w-3 h-3 text-[#E11D48] fill-[#E11D48]" />
          </p>
          <p className="text-[11px] text-purple-900/70">
            단맛을 우아하게 잡아주는 프리미엄 블렌딩 티와 함께 더욱 특별한 디저트 시간을 즐겨보세요.
          </p>
        </div>
      </footer>
    </div>
  );
}
