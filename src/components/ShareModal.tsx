import React, { useState } from 'react';
import { PeperoItem } from '../data/peperoData';
import { soundManager } from '../utils/sound';
import { X, Copy, Check, Share2, Sparkles, Heart } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  pepero: PeperoItem | null;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, pepero }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !pepero) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `🍫 [빼빼로 데이 X 제니스티(JennisTea) 심리테스트]
내가 고른 빼빼로: ${pepero.name} ${pepero.icon}
내 성격 유형: ${pepero.title}
찰떡 제니스티 페어링: 🍵 ${pepero.tea} (${pepero.teaEng})
"${pepero.teaDesc}"

나의 환상 짝꿍 빼빼로: ${pepero.bestChemistry.peperoName}
👇 당신의 빼빼로 취향과 제니스티(JennisTea) 궁합도 확인해보세요!
${currentUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      soundManager.playChime();
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '빼빼로 데이 X 제니스티(JennisTea) 심리테스트',
          text: shareText,
          url: currentUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-md bg-[#FFFDF9] rounded-3xl border-2 border-purple-200 shadow-2xl p-5 sm:p-6 text-[#2D2424] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-purple-100">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-full bg-[#F3E8FF] text-[#6B21A8]">
              <Share2 className="w-4 h-4" />
            </span>
            <h3 className="font-bold text-base text-[#581C87]">
              테스트 결과 공유하기
            </h3>
          </div>
          <button
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            className="p-1.5 rounded-full hover:bg-purple-100/60 text-stone-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Share Preview Card */}
        <div className="my-4 p-4 rounded-2xl bg-[#FAF5FF] border border-purple-200 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{pepero.icon}</span>
            <div>
              <span className="text-xs font-bold text-[#6B21A8] block">
                {pepero.name}
              </span>
              <span className="text-sm font-extrabold text-[#3B0764]">
                {pepero.title}
              </span>
            </div>
          </div>

          <div className="bg-white/95 p-2.5 rounded-xl border border-purple-100 text-xs text-[#3E342F] space-y-1 mb-2">
            <p className="font-semibold text-[#581C87]">
              🍵 추천 제니스티: {pepero.tea}
            </p>
            <p className="text-[11px] text-[#4C1D95] line-clamp-2">
              "{pepero.teaDesc}"
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#6B21A8] font-medium">
            <Heart className="w-3.5 h-3.5 text-[#E11D48] fill-[#E11D48]" />
            <span>환상의 짝꿍: <strong className="text-[#3B0764]">{pepero.bestChemistry.peperoName}</strong></span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleCopy}
            className={`w-full py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
              copied
                ? 'bg-[#16A34A] text-white'
                : 'bg-[#581C87] hover:bg-[#4A148C] text-white'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>복사 완료! 친구에게 붙여넣기 하세요 ✨</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>결과 메시지 복사하기</span>
              </>
            )}
          </button>

          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 text-[#581C87] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>카카오톡 / SNS 앱으로 바로 전송</span>
            </button>
          )}
        </div>

        <p className="mt-3 text-[11px] text-stone-500 text-center">
          친구들과 어떤 빼빼로와 제니스티(JennisTea)가 어울리는지 비교해보세요!
        </p>
      </div>
    </div>
  );
};
