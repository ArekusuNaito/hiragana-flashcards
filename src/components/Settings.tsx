import React from 'react';
import type { GameMode } from '../hooks/useHiraganaGame';

interface SettingsProps {
  mode: GameMode;
  speed: number;
  onModeChange: (mode: GameMode) => void;
  onSpeedChange: (speed: number) => void;
}

export const Settings: React.FC<SettingsProps> = ({
  mode,
  speed,
  onModeChange,
  onSpeedChange,
}) => {
  return (
    <div className="w-full max-w-md space-y-4">
      {/* Mode Toggles */}
      <div className="bg-white p-2 rounded-xl shadow-sm flex justify-between gap-2">
        <button
          onClick={() => onModeChange('linear')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-colors ${
            mode === 'linear'
              ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
              : 'bg-white text-slate-600 hover:bg-slate-50'
          }`}
        >
          Linear (Lineal)
        </button>
        <button
          onClick={() => onModeChange('random')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-colors ${
            mode === 'random'
              ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
              : 'bg-white text-slate-600 hover:bg-slate-50'
          }`}
        >
          Random (Aleatorio)
        </button>
      </div>

      {/* Speed Slider */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-slate-500 w-24">
            Speed (Velocidad):
          </span>
          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={speed}
            onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-xs font-mono w-12 text-right">
            {speed.toFixed(1)}s
          </span>
        </div>
      </div>
    </div>
  );
};
