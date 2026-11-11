import React, { useState } from 'react';
import { PEPERO_DATA, PeperoItem } from '../data/peperoData';
import { PeperoStickVisual } from './PeperoStickVisual';
import { soundManager } from '../utils/sound';
import { X, Check, Sparkles, Filter } from 'lucide-react';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (pepero: PeperoItem) => void;
  currentSelectedId?: string;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  currentSelectedId,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories = ['all', '홍차', '허브티', '녹차', '밀크티 / 블렌딩'];

  const filteredItems = PEPERO_DATA.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.teaCategory === filterCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-2xl max-h-[90vh] bg-[#FFFDF9] rounded-3xl border-2 border-[#E2D5F5] shadow-2xl flex flex-col overflow-hidden text-[#2D2424]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-purple-100 flex items-center justify-between bg-[#FAF5FF]">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#6B21A8] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>JENNISTEA X PEPERO COLLECTION</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-[#581C87]">
              빼빼로 9종 & 제니스티(JennisTea) 페어링 전종 도감
            </h2>
          </div>
          <button
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            className="p-2 rounded-full hover:bg-purple-100/60 text-stone-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-4 py-2.5 bg-[#F5EEFF] border-b border-purple-100 flex items-center gap-2 overflow-x-auto text-xs">
          <Filter className="w-3.5 h-3.5 text-[#6B21A8] shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundManager.playPop();
                setFilterCategory(cat);
              }}
              className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-all cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#581C87] text-white shadow-xs font-bold'
                  : 'bg-white/80 text-purple-900 hover:bg-white border border-purple-200'
              }`}
            >
              {cat === 'all' ? '전체 보기' : cat}
            </button>
          ))}
        </div>

        {/* Scrollable Catalog Grid */}
        <div className="p-4 overflow-y-auto space-y-3">
          {filteredItems.map((item) => {
            const isCurrent = currentSelectedId === item.id;
            return (
              <div
                key={item.id}
                className={`p-3.5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                  isCurrent
                    ? 'border-[#7E22CE] bg-[#FAF5FF] shadow-sm'
                    : 'border-purple-100 bg-white hover:border-[#9333EA]/50 hover:bg-[#FAF8FF]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-14 bg-[#F5EEFF] rounded-xl flex items-center justify-center shrink-0 border border-purple-100">
                    <PeperoStickVisual pepero={item} size="sm" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base font-black text-[#2D2424]">
                        {item.name}
                      </span>
                      <span className="text-xs text-[#8A7165]">
                        {item.icon}
                      </span>
                      <span className="text-[11px] font-bold text-[#6B21A8] bg-[#F3E8FF] px-2 py-0.5 rounded-full">
                        {item.title}
                      </span>
                    </div>

                    {/* Tea match line */}
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-[#581C87] font-semibold flex-wrap">
                      <span>🍵 <strong>{item.tea}</strong></span>
                      <span className="text-[11px] text-[#6B21A8] bg-[#EDE4FC] px-1.5 py-0.2 rounded">
                        {item.teaCategory}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#554668] line-clamp-1 mt-0.5">
                      {item.teaDesc}
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex items-center justify-end">
                  <button
                    onClick={() => {
                      soundManager.playPop();
                      onSelect(item);
                      onClose();
                    }}
                    className={`w-full sm:w-auto px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      isCurrent
                        ? 'bg-[#581C87] text-white shadow-xs'
                        : 'bg-[#F5EEFF] hover:bg-[#581C87] hover:text-white text-[#581C87] border border-purple-200'
                    }`}
                  >
                    {isCurrent ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>현재 선택됨</span>
                      </>
                    ) : (
                      <span>이 페어링 선택하기</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#FAF5FF] border-t border-purple-100 text-center text-xs text-[#6B21A8]">
          🍫 빼빼로 데이의 달콤함을 제니스티(JennisTea)의 향긋함으로 완성해보세요
        </div>
      </div>
    </div>
  );
};
