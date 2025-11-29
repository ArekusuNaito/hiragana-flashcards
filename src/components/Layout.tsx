import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-slate-800 bg-gray-50 font-sans">
      {children}
    </div>
  );
};
