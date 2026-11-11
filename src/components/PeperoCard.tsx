import React, { useState } from 'react';
import { PeperoItem } from '../data/peperoData';
import { PeperoStickVisual } from './PeperoStickVisual';
import { soundManager } from '../utils/sound';
import { 
  RotateCw, 
  Share2, 
  Sparkles, 
  Thermometer, 
  Clock, 
  Droplets, 
  HeartHandshake, 
  Volume2, 
  VolumeX,
  BookOpen,
  Leaf
} from 'lucide-react';

interface PeperoCardProps {
  pepero: PeperoItem;
  onReset: () => void;
  onOpenShare: () => void;
  onOpenCatalog: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const PeperoCard: React.FC<PeperoCardProps> = ({
  pepero,
  onReset,
  onOpenShare,
  onOpenCatalog,
  soundEnabled,
  onToggleSound,
}) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [showBrewingDetails, setShowBrewingDetails] = useState(false);

  const toggleFlip = () => {
    soundManager.playPop();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-[520px] mx-auto perspective-1000">
      {/* Top action helper bar */}
      <div className="flex items-center justify-between mb-3 px-2">
        <button
          onClick={onReset}
          className="text-xs font-semibold text-[#6D4C41] hover:text-[#581C87] transition-colors flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-purple-200 shadow-xs cursor-pointer"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>다른 빼빼로 고르기</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onToggleSound();
              soundManager.playPop();
            }}
            title={soundEnabled ? '효과음 끄기' : '효과음 켜기'}
            className="p-1.5 rounded-full bg-white/80 hover:bg-white text-stone-600 transition-colors border border-purple-200 shadow-xs cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#581C87]" /> : <VolumeX className="w-3.5 h-3.5 text-stone-400" />}
          </button>

          <button
            onClick={toggleFlip}
            className="text-xs font-semibold text-[#581C87] hover:text-[#4A148C] transition-colors flex items-center gap-1 bg-[#F5F0FF] px-3 py-1.5 rounded-full border border-purple-300 shadow-xs cursor-pointer"
          >
            <span>{isFlipped ? '카드 앞면 보기' : '결과 카드 보기'}</span>
            <RotateCw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* 3D Flip Card Container */}
      <div 
        className={`w-full min-h-[640px] relative transition-transform duration-700 preserve-3d cursor-default ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* ================= FRONT SIDE (Packaging Gift Box) ================= */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-linear-to-b from-[#FFFFFF] via-[#FAF5FF] to-[#F3EBFF] border-2 border-[#E2D5F5] p-6 shadow-2xl flex flex-col justify-between items-center text-center overflow-hidden">
          {/* Decorative Corner Filigrees */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#6B21A8]/30 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#6B21A8]/30 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#6B21A8]/30 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#6B21A8]/30 rounded-br-lg pointer-events-none" />

          {/* Ribbon Seal Badge */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#581C87] text-white text-xs font-bold tracking-widest rounded-full shadow-md uppercase">
              <Sparkles className="w-3 h-3 text-purple-200" />
              11.11 JENNISTEA PAIRING CARD
            </span>
          </div>

          {/* Card Center Illustration */}
          <div className="my-auto flex flex-col items-center">
            <div className="relative mb-6">
              {/* Outer Glow Ring */}
              <div className="w-36 h-36 rounded-full bg-linear-to-tr from-purple-200/60 via-purple-100/50 to-pink-100/40 flex items-center justify-center p-2 shadow-inner border border-purple-300/40">
                <div className="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center relative overflow-hidden">
                  <PeperoStickVisual pepero={pepero} size="lg" animated />
                  <span className="absolute bottom-1 right-1 text-2xl drop-shadow-sm">{pepero.icon}</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-[#3B0764] tracking-tight mb-1">
              {pepero.name}
            </h3>
            <p className="text-xs font-semibold tracking-wider text-[#7E22CE] uppercase mb-4">
              {pepero.englishName}
            </p>

            <p className="text-sm text-[#4C1D95] max-w-xs leading-relaxed font-medium">
              당신이 선택한 달콤한 빼빼로 한 자루 속,<br />
              숨겨진 성격 심리와 찰떡 제니스티(JennisTea)가 기다립니다.
            </p>
          </div>

          {/* Flip trigger button on front */}
          <div className="w-full pb-2">
            <button
              onClick={toggleFlip}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#581C87] hover:bg-[#4A148C] text-white font-bold text-base shadow-lg shadow-purple-900/25 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>카드 뒤집어 결과 확인하기 ✨</span>
            </button>
          </div>
        </div>

        {/* ================= BACK SIDE (Result & Tea Pairing) ================= */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-linear-to-b from-[#FFFFFF] via-[#FAF6FF] to-[#F5EFFF] border-2 border-[#E2D5F5] p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Top Header Section */}
          <div className="text-center">
            {/* Pepero Tag */}
            <div className="inline-block bg-[#F3E8FF] border border-[#E9D5FF] text-[#581C87] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 shadow-2xs">
              <span className="mr-1">{pepero.icon}</span>
              <span id="pepero-name-tag">{pepero.name}를 고른 당신</span>
            </div>

            {/* Psychological Title */}
            <h2 className="text-xl sm:text-2xl font-black text-[#581C87] tracking-tight mb-2.5" id="psych-title">
              {pepero.title}
            </h2>

            {/* Divider */}
            <div className="w-10 h-[3px] bg-[#6B21A8] mx-auto rounded-full mb-3" />

            {/* Psychology Description Box */}
            <div className="bg-[#FAF5FF] border border-[#EDE4FC] rounded-2xl p-3.5 sm:p-4 mb-4 text-left shadow-2xs">
              <p className="text-[13px] sm:text-sm text-[#372A46] leading-relaxed break-keep font-normal" id="psych-desc">
                {pepero.psych}
              </p>
              {/* Keyword Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2 border-t border-purple-200/60">
                {pepero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold text-[#6B21A8] bg-[#F3E8FF] px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* JennisTea Match Box */}
          <div className="border-2 border-dashed border-[#7E22CE] bg-linear-to-b from-[#FAF5FF] to-[#F3EBFF] rounded-2xl p-4 sm:p-4.5 mb-4 relative shadow-2xs text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-extrabold text-[#6B21A8] tracking-wider uppercase">
                RECOMMENDED JENNISTEA
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#6B21A8] text-white">
                {pepero.teaCategory}
              </span>
            </div>

            <div className="flex items-center gap-2 my-1">
              <span className="text-2xl">{pepero.teaIcon}</span>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#3B0764] leading-snug" id="tea-name">
                  {pepero.tea}
                </h3>
                <p className="text-[11px] text-[#7E22CE] font-semibold tracking-wide">
                  {pepero.teaEng}
                </p>
              </div>
            </div>

            {/* Tea Description */}
            <p className="text-xs sm:text-[13px] text-[#4C1D95] leading-relaxed break-keep mt-2 font-medium" id="tea-desc">
              {pepero.teaDesc}
            </p>

            {/* Flavor Balance Meters */}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-purple-200 text-[11px]">
              <div>
                <div className="flex justify-between text-stone-600 mb-0.5">
                  <span>아로마 / 향미</span>
                  <span className="font-bold text-[#6B21A8]">{pepero.flavorNotes.aroma}/5</span>
                </div>
                <div className="w-full bg-[#E9D5FF] h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#7E22CE] h-full rounded-full" 
                    style={{ width: `${(pepero.flavorNotes.aroma / 5) * 100}%` }} 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-stone-600 mb-0.5">
                  <span>바디감 / 깊이</span>
                  <span className="font-bold text-[#6B21A8]">{pepero.flavorNotes.body}/5</span>
                </div>
                <div className="w-full bg-[#E9D5FF] h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#7E22CE] h-full rounded-full" 
                    style={{ width: `${(pepero.flavorNotes.body / 5) * 100}%` }} 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-stone-600 mb-0.5">
                  <span>단맛 / 부드러움</span>
                  <span className="font-bold text-[#6B21A8]">{pepero.flavorNotes.sweetness}/5</span>
                </div>
                <div className="w-full bg-[#E9D5FF] h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#7E22CE] h-full rounded-full" 
                    style={{ width: `${(pepero.flavorNotes.sweetness / 5) * 100}%` }} 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-stone-600 mb-0.5">
                  <span>청량감 / 깔끔함</span>
                  <span className="font-bold text-[#6B21A8]">{pepero.flavorNotes.refreshing}/5</span>
                </div>
                <div className="w-full bg-[#E9D5FF] h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#7E22CE] h-full rounded-full" 
                    style={{ width: `${(pepero.flavorNotes.refreshing / 5) * 100}%` }} 
                  />
                </div>
              </div>
            </div>

            {/* Brewing Recipe Toggle */}
            <div className="mt-3">
              <button
                onClick={() => setShowBrewingDetails(!showBrewingDetails)}
                className="w-full text-[11px] font-bold text-[#581C87] hover:text-[#3B0764] flex items-center justify-between bg-white/70 px-2.5 py-1.5 rounded-lg border border-purple-200 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-1">
                  🍵 <span>홈카페 브루잉 가이드 & 페어링 팁</span>
                </span>
                <span>{showBrewingDetails ? '접기 ▲' : '보기 ▼'}</span>
              </button>

              {showBrewingDetails && (
                <div className="mt-2 p-2.5 bg-white/95 rounded-lg border border-purple-200 text-[11px] text-[#3B0764] space-y-2 animate-fadeIn">
                  <div className="grid grid-cols-4 gap-1 text-center">
                    <div className="bg-[#FAF5FF] p-1.5 rounded-md border border-purple-100">
                      <div className="flex items-center justify-center gap-0.5 text-stone-500 mb-0.5">
                        <Thermometer className="w-3 h-3 text-[#E11D48]" />
                        <span className="text-[10px]">온도</span>
                      </div>
                      <div className="font-bold text-[#581C87] text-xs">{pepero.brewing.temp}</div>
                    </div>
                    <div className="bg-[#FAF5FF] p-1.5 rounded-md border border-purple-100">
                      <div className="flex items-center justify-center gap-0.5 text-stone-500 mb-0.5">
                        <Leaf className="w-3 h-3 text-[#16A34A]" />
                        <span className="text-[10px]">잎의 양</span>
                      </div>
                      <div className="font-bold text-[#581C87] text-xs">{pepero.brewing.leaf}</div>
                    </div>
                    <div className="bg-[#FAF5FF] p-1.5 rounded-md border border-purple-100">
                      <div className="flex items-center justify-center gap-0.5 text-stone-500 mb-0.5">
                        <Droplets className="w-3 h-3 text-[#0284C7]" />
                        <span className="text-[10px]">물 용량</span>
                      </div>
                      <div className="font-bold text-[#581C87] text-xs">{pepero.brewing.water}</div>
                    </div>
                    <div className="bg-[#FAF5FF] p-1.5 rounded-md border border-purple-100">
                      <div className="flex items-center justify-center gap-0.5 text-stone-500 mb-0.5">
                        <Clock className="w-3 h-3 text-[#9333EA]" />
                        <span className="text-[10px]">우리는 시간</span>
                      </div>
                      <div className="font-bold text-[#581C87] text-xs">{pepero.brewing.time}</div>
                    </div>
                  </div>

                  <p className="leading-relaxed bg-[#FAF5FF] p-2 rounded-md border border-purple-200 text-[11px] text-[#4C1D95]">
                    💡 <strong className="text-[#6B21A8]">시너지 팁:</strong> {pepero.pairingTip}
                  </p>
                </div>
              )}
            </div>

            {/* Best Chemistry Pepero */}
            <div className="mt-2.5 pt-2 border-t border-purple-200/60 flex items-start gap-1.5 text-[11px] text-[#581C87]">
              <HeartHandshake className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
              <span>
                <strong>환상의 짝꿍 빼빼로:</strong> <span className="font-bold text-[#3B0764]">{pepero.bestChemistry.peperoName}</span> ({pepero.bestChemistry.reason})
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-1">
            <button
              onClick={() => {
                soundManager.playPop();
                onReset();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#581C87] hover:bg-[#4A148C] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <RotateCw className="w-4 h-4" />
              <span>다른 빼빼로 또 고르기 ↺</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  soundManager.playPop();
                  onOpenShare();
                }}
                className="py-2.5 px-3 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 text-[#4C1D95] font-semibold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#6B21A8]" />
                <span>결과 공유하기</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playPop();
                  onOpenCatalog();
                }}
                className="py-2.5 px-3 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 text-[#581C87] font-semibold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#7E22CE]" />
                <span>9종 전종 도감</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
