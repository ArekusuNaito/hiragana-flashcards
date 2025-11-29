import React, { useEffect, useState } from 'react';
import type { HiraganaChar } from '../data/hiragana';

interface CardProps {
  item: HiraganaChar;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation when item changes
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [item]);

  return (
    <div className="w-full max-w-md relative">
      <div
        className={`bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center aspect-[3/4] border border-slate-100 transition-all duration-300 transform ${
          animate ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
        } hover:scale-[1.01]`}
      >
        {/* Hiragana Character */}
        <div className="font-japanese text-9xl font-bold text-slate-800 mb-6 select-none">
          {item.char}
        </div>

        {/* Romaji Display */}
        <div className="mt-4">
          <span className="text-2xl font-semibold text-slate-500 tracking-widest uppercase">
            {item.romaji}
          </span>
        </div>

        {/* Type Label */}
        <div className="absolute top-4 right-4">
          <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">
            {item.group}
          </span>
        </div>
      </div>
    </div>
  );
};
