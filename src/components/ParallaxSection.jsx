import React, { useEffect, useRef } from 'react';

/**
 * ParallaxSection - Smooth scroll-based parallax wrapper
 * Children move at a different rate than the scroll, creating depth.
 * Uses IntersectionObserver + requestAnimationFrame for buttery performance.
 */
export default function ParallaxSection({
  children,
  className = '',
  speed = 0.3,     // 0 = no parallax, 1 = moves at scroll speed, negative = opposite
  direction = 'y', // 'y' or 'x'
  rotate = 0,      // Optional rotation in degrees at full scroll
}) {
  const ref = useRef(null);
  const isVisibleRef = useRef(false);
  const animRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { rootMargin: '100px' }
    );
    observer.observe(el);

    const update = () => {
      animRef.current = requestAnimationFrame(update);

      if (!isVisibleRef.current) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // 0 when element enters bottom, 1 when it exits top
      const progress = 1 - (rect.top + rect.height) / (windowH + rect.height);
      const offset = (progress - 0.5) * speed * 100;
      const rot = (progress - 0.5) * rotate;

      if (direction === 'x') {
        el.style.transform = `translate3d(${offset}px, 0, 0) rotate(${rot}deg)`;
      } else {
        el.style.transform = `translate3d(0, ${offset}px, 0) rotate(${rot}deg)`;
      }
    };

    animRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, [speed, direction, rotate]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
