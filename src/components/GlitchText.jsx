import React, { useEffect, useRef, useState } from 'react';

/**
 * GlitchText - Cyberpunk glitch text effect on hover
 * Creates a digital distortion with color-offset text layers.
 */
export default function GlitchText({
  children,
  className = '',
  as: Tag = 'span',
  glitchOnHover = true,
  continuous = false,
}) {
  const [isGlitching, setIsGlitching] = useState(continuous);

  return (
    <Tag
      className={`glitch-text-wrapper ${isGlitching ? 'is-glitching' : ''} ${className}`}
      onMouseEnter={() => glitchOnHover && setIsGlitching(true)}
      onMouseLeave={() => glitchOnHover && !continuous && setIsGlitching(false)}
      data-text={typeof children === 'string' ? children : ''}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
    </Tag>
  );
}
