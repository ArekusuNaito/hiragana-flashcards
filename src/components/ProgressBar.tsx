import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  duration: number; // seconds
  isPlaying: boolean;
  // We use a key or trigger to reset the animation
  resetKey: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ duration, isPlaying, resetKey }) => {
  const [width, setWidth] = useState(0);
  const [transition, setTransition] = useState('none');

  useEffect(() => {
    // Reset
    setTransition('none');
    setWidth(0);

    if (!isPlaying) return;

    // Force reflow to ensure the reset happens before the new animation
    const timer1 = setTimeout(() => {
      setTransition(`width ${duration}s linear`);
      setWidth(100);
    }, 50);

    return () => clearTimeout(timer1);
  }, [duration, isPlaying, resetKey]);

  return (
    <div className="absolute -top-2 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-indigo-500"
        style={{
          width: `${width}%`,
          transition: transition,
        }}
      />
    </div>
  );
};
