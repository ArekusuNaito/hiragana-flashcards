import React from 'react';

interface ControlsProps {
  isPlaying: boolean;
  onNext: () => void;
  onPrev: () => void;
  onTogglePlay: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
  isPlaying,
  onNext,
  onPrev,
  onTogglePlay,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm space-y-4 w-full max-w-md">
      <div className="flex justify-center items-center gap-6 pt-2">
        {/* Prev Button */}
        <button
          onClick={onPrev}
          className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all"
          title="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Play/Pause Toggle */}
        <button
          onClick={onTogglePlay}
          className="p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 transition-all transform hover:scale-105 active:scale-95"
        >
          {isPlaying ? (
            // Pause Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            // Play Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all"
          title="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
