import React from 'react';

/**
 * BrandLogo - Official DKoder brand identity component
 * Uses the official 3D mascot emblem (D with grad cap and code brackets)
 */
export default function BrandLogo({ 
  variant = 'both', // 'both' | 'icon' | 'badge' | 'minimal'
  size = 'md',     // 'sm' | 'md' | 'lg' | 'xl'
  showTagline = false,
  tagline = 'Placement Prep, With A Plan',
  className = '',
  href = '#home'
}) {
  const sizeMap = {
    sm: { icon: 30, text: 'text-lg', dot: 'text-xl' },
    md: { icon: 40, text: 'text-xl', dot: 'text-2xl' },
    lg: { icon: 54, text: 'text-2xl sm:text-3xl', dot: 'text-3xl' },
    xl: { icon: 70, text: 'text-3xl sm:text-4xl', dot: 'text-4xl' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const content = (
    <div className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Official 3D DKoder Mascot Logo */}
      <div 
        className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <img
          src="/dkoder-logo.png"
          alt="DKoder Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(255,202,41,0.4)]"
          loading="eager"
        />
      </div>

      {/* Typography */}
      {variant !== 'badge' && variant !== 'icon' && (
        <div className="flex flex-col">
          <span className={`font-black tracking-tight text-slate-900 leading-tight flex items-center ${currentSize.text}`}>
            dkoder<span className={`text-[#FFCA29] animate-pulse leading-none ${currentSize.dot}`}>.</span>
          </span>
          {showTagline && (
            <span className="text-[10px] font-mono text-slate-500 font-semibold tracking-wider uppercase -mt-0.5">
              {tagline}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="no-underline inline-block">
        {content}
      </a>
    );
  }

  return content;
}
