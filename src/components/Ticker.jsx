import React from 'react';

export default function Ticker() {
  const items = [
    'COMPANY-WISE PREP',
    'APTITUDE & REASONING',
    'CODING PRACTICE',
    'CAMPUS LEADERBOARDS',
    'PLACEMENT INSIGHTS',
    'MOCK TECHNICAL ROUNDS',
    'NATIONAL LEVEL MAPS',
    'SECURE ASSESSMENT AUDIT',
    'SYSTEM DESIGN ESSENTIALS'
  ];

  return (
    <div className="relative border-y border-slate-200 bg-white/80 py-3.5 overflow-hidden select-none shadow-sm">
      <div className="flex w-max animate-marquee space-x-8 items-center text-xs font-mono font-bold tracking-widest text-slate-700">
        {[...items, ...items].map((text, index) => (
          <React.Fragment key={index}>
            <span className="hover:text-purple-700 transition-colors cursor-default whitespace-nowrap">
              {text}
            </span>
            <span className="text-amber-500 text-sm font-black">✳</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
