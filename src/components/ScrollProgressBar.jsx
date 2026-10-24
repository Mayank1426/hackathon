import React, { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[3.5px] z-[200] pointer-events-none"
      aria-hidden="true"
    >
      {/* ★ Enhanced shimmer gradient progress bar */}
      <div 
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #FFCA29, #452080, #5E2EB0, #FFD54F, #FFCA29)',
          backgroundSize: '200% 100%',
          animation: 'wave-underline 3s linear infinite',
          boxShadow: scrollProgress > 5 ? '0 0 10px rgba(69,32,128,0.45), 0 0 20px rgba(255,202,41,0.3)' : 'none',
        }}
      />
    </div>
  );
}
