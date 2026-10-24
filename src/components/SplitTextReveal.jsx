import React, { useState, useEffect, useRef } from 'react';

/**
 * SplitTextReveal - Character-by-character staggered text reveal animation
 * Each character animates in with spring physics, creating a wave-like entrance.
 * Triggers on scroll into view.
 */
export default function SplitTextReveal({
  text = '',
  className = '',
  as: Tag = 'span',
  staggerMs = 30,
  animation = 'rise', // 'rise' | 'rotate' | 'scale' | 'blur'
  triggerOnce = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnce]);

  const getCharStyle = (index) => {
    const delay = `${index * staggerMs}ms`;

    if (!isVisible) {
      switch (animation) {
        case 'rotate':
          return {
            opacity: 0,
            transform: 'rotateX(90deg) translateY(20px)',
            transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
          };
        case 'scale':
          return {
            opacity: 0,
            transform: 'scale(0) translateY(10px)',
            transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}`,
          };
        case 'blur':
          return {
            opacity: 0,
            filter: 'blur(12px)',
            transform: 'translateY(8px)',
            transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
          };
        case 'rise':
        default:
          return {
            opacity: 0,
            transform: 'translateY(100%)',
            transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
          };
      }
    }

    return {
      opacity: 1,
      transform: 'none',
      filter: 'none',
      transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
    };
  };

  // Split text into words, then chars
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <Tag ref={ref} className={className} style={{ display: 'inline' }}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          {word.split('').map((char, ci) => {
            const idx = charIndex++;
            return (
              <span
                key={idx}
                style={{
                  display: 'inline-block',
                  ...getCharStyle(idx),
                  willChange: 'transform, opacity',
                }}
              >
                {char}
              </span>
            );
          })}
          {wordIdx < words.length - 1 && (
            <span style={{ display: 'inline-block', width: '0.3em' }}>{'\u00A0'}</span>
          )}
        </span>
      ))}
    </Tag>
  );
}
