import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * TextScramble - Matrix-style text reveal effect
 * Characters scramble through random glyphs before resolving to final text.
 * Triggers automatically when the element scrolls into view.
 */
const CHARS = '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default function TextScramble({
  text = '',
  className = '',
  as: Tag = 'span',
  speed = 30,
  revealDelay = 0,
  triggerOnView = true,
  scrambleOnHover = false,
}) {
  const ref = useRef(null);
  const [displayText, setDisplayText] = useState(triggerOnView ? '' : text);
  const [hasTriggered, setHasTriggered] = useState(!triggerOnView);
  const frameRef = useRef(null);
  const queueRef = useRef([]);

  const scramble = useCallback(() => {
    const oldText = displayText;
    const length = Math.max(oldText.length, text.length);
    const queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = text[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end, char: '' });
    }

    queueRef.current = queue;
    let frame = 0;

    const update = () => {
      let output = '';
      let complete = 0;

      for (let i = 0; i < queue.length; i++) {
        const { from, to, start, end } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!queue[i].char || Math.random() < 0.28) {
            queue[i].char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          output += queue[i].char;
        } else {
          output += from;
        }
      }

      setDisplayText(output);

      if (complete < queue.length) {
        frameRef.current = requestAnimationFrame(() => {
          frame++;
          update();
        });
      }
    };

    update();
  }, [text]);

  // Scroll-trigger
  useEffect(() => {
    if (!triggerOnView || hasTriggered) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.unobserve(el);
          setTimeout(() => scramble(), revealDelay);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView, hasTriggered, scramble, revealDelay]);

  // Hover scramble
  const handleMouseEnter = () => {
    if (scrambleOnHover) scramble();
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className}`}
      onMouseEnter={handleMouseEnter}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {displayText || (triggerOnView ? '\u00A0'.repeat(text.length) : text)}
    </Tag>
  );
}
