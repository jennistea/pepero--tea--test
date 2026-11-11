import React from 'react';
import { PeperoItem } from '../data/peperoData';

interface PeperoStickVisualProps {
  pepero: PeperoItem;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const PeperoStickVisual: React.FC<PeperoStickVisualProps> = ({
  pepero,
  size = 'md',
  animated = false,
}) => {
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  const height = isLg ? 'h-36' : isSm ? 'h-14' : 'h-24';
  const width = isLg ? 'w-5' : isSm ? 'w-2.5' : 'w-3.5';

  return (
    <div className={`relative flex flex-col items-center justify-end ${height} ${width} ${animated ? 'group-hover:scale-105 transition-transform duration-300' : ''}`}>
      {/* Stick Biscuit Body */}
      <div 
        className="w-full h-full rounded-t-full rounded-b-sm flex flex-col justify-between overflow-hidden shadow-sm relative border border-black/10"
        style={{
          background: `linear-gradient(90deg, #E2B77D 0%, #F5CE98 45%, #D6A465 100%)`,
        }}
      >
        {/* Nude special: hollow top filling or standard coating */}
        {pepero.id === 'nude' ? (
          <div className="w-full h-full relative flex flex-col justify-between p-[2px]">
            {/* Hollow Biscuit Shell with inner cream visible */}
            <div className="w-full h-[85%] rounded-t-full bg-[#E5B57A] flex flex-col items-center justify-start pt-1 overflow-hidden relative">
              <div className="w-[60%] h-[90%] rounded-t-full bg-[#FFF3D6] shadow-inner opacity-90 border border-amber-200/50" />
              {/* Toasted ridges on the outside of biscuit */}
              <div className="absolute inset-0 flex flex-col justify-around opacity-30 pointer-events-none">
                <div className="h-[2px] bg-amber-900 mx-1 rounded" />
                <div className="h-[2px] bg-amber-900 mx-1 rounded" />
                <div className="h-[2px] bg-amber-900 mx-1 rounded" />
                <div className="h-[2px] bg-amber-900 mx-1 rounded" />
              </div>
            </div>
            {/* Handle */}
            <div className="w-full h-[15%] bg-[#D6A465]" />
          </div>
        ) : (
          <>
            {/* Chocolate / Topping Coated Top (75%) */}
            <div 
              className="w-full h-[76%] rounded-t-full relative overflow-hidden shadow-inner flex flex-col items-center"
              style={{
                backgroundColor: pepero.coatingColor,
                backgroundImage: pepero.id === 'matcha' 
                  ? 'linear-gradient(135deg, #53704C 0%, #3B5336 100%)'
                  : pepero.id === 'strawberry'
                  ? 'linear-gradient(135deg, #F07E9A 0%, #D44E72 100%)'
                  : pepero.id === 'dark'
                  ? 'linear-gradient(135deg, #2B1812 0%, #150B07 100%)'
                  : pepero.id === 'salty'
                  ? 'linear-gradient(135deg, #FFF1D6 0%, #E6C899 100%)'
                  : pepero.id === 'cookie'
                  ? 'linear-gradient(135deg, #FFF9F0 0%, #EFE5D5 100%)'
                  : 'linear-gradient(135deg, #532C18 0%, #35190B 100%)'
              }}
            >
              {/* Highlights for 3D cylinder appearance */}
              <div className="absolute top-0 bottom-0 left-[20%] w-[25%] bg-white/20 blur-[1px] pointer-events-none rounded-t-full" />
              
              {/* Specialized toppings */}
              {pepero.toppings === 'nuts' && (
                <div className="absolute inset-0 flex flex-wrap content-around justify-around p-0.5 opacity-80 pointer-events-none">
                  <div className="w-1.5 h-1 bg-[#DEAE6E] rounded-xs rotate-12 shadow-xs" />
                  <div className="w-1 h-1.5 bg-[#C98B4B] rounded-xs -rotate-45 shadow-xs" />
                  <div className="w-1.5 h-1.5 bg-[#ECD4B2] rounded-xs rotate-45 shadow-xs" />
                  <div className="w-1 h-1 bg-[#B5783A] rounded-xs rotate-20" />
                  <div className="w-1.5 h-1 bg-[#DEAE6E] rounded-xs -rotate-30" />
                  {isLg && (
                    <>
                      <div className="w-2 h-1.5 bg-[#DEAE6E] rounded-xs rotate-15 shadow-xs" />
                      <div className="w-1.5 h-2 bg-[#C98B4B] rounded-xs -rotate-12 shadow-xs" />
                    </>
                  )}
                </div>
              )}

              {pepero.toppings === 'crisp' && (
                <div className="absolute inset-0 flex flex-wrap content-around justify-around p-0.5 opacity-85 pointer-events-none">
                  <div className="w-1 h-1 bg-[#F5DEB3] rounded-full scale-110 shadow-xs" />
                  <div className="w-1 h-1 bg-[#D2B48C] rounded-full scale-90" />
                  <div className="w-1.5 h-1 bg-[#FFE4C4] rounded-full rotate-45" />
                  <div className="w-1 h-1.5 bg-[#CD853F] rounded-full" />
                  {isLg && (
                    <>
                      <div className="w-1.5 h-1.5 bg-[#FFF0DB] rounded-full shadow-xs" />
                      <div className="w-1 h-1 bg-[#E2B77D] rounded-full" />
                    </>
                  )}
                </div>
              )}

              {pepero.toppings === 'black_cookie' && (
                <div className="absolute inset-0 flex flex-wrap content-around justify-around p-0.5 pointer-events-none">
                  <div className="w-1.5 h-1 bg-[#222] rounded-xs rotate-12" />
                  <div className="w-1 h-1.5 bg-[#111] rounded-xs -rotate-45" />
                  <div className="w-1.5 h-1.5 bg-[#333] rounded-xs rotate-30" />
                  <div className="w-1 h-1 bg-[#1a1a1a] rounded-xs" />
                  {isLg && (
                    <>
                      <div className="w-2 h-1.5 bg-[#252525] rounded-xs rotate-15" />
                      <div className="w-1.5 h-2 bg-[#181818] rounded-xs -rotate-25" />
                    </>
                  )}
                </div>
              )}

              {pepero.toppings === 'berry_dots' && (
                <div className="absolute inset-0 flex flex-wrap content-around justify-around p-0.5 opacity-70 pointer-events-none">
                  <div className="w-1 h-1 bg-[#9E1B32] rounded-full" />
                  <div className="w-1 h-1 bg-[#7E0018] rounded-full" />
                  <div className="w-1 h-1 bg-[#C71585] rounded-full" />
                </div>
              )}

              {pepero.toppings === 'salt' && (
                <div className="absolute inset-0 flex flex-wrap content-around justify-around p-0.5 opacity-90 pointer-events-none">
                  <div className="w-1 h-1 bg-white rounded-xs rotate-45 shadow-xs" />
                  <div className="w-0.5 h-0.5 bg-white/90 rounded-xs" />
                  <div className="w-1 h-0.5 bg-white/90 rounded-xs -rotate-30" />
                </div>
              )}

              {/* Drip finish at bottom of chocolate coating */}
              <div 
                className="absolute bottom-0 w-full h-[4px] rounded-b-sm opacity-90"
                style={{ backgroundColor: pepero.coatingColor }}
              />
            </div>

            {/* Biscuit Handle Bottom (24%) */}
            <div className="w-full h-[24%] relative flex items-center justify-center">
              {/* Subtle toast marks */}
              <div className="w-[60%] h-[1px] bg-amber-700/20 rounded" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
