import React, { useEffect, useRef, useState } from 'react';

/**
 * CursorGlow - Global custom cursor with glowing trail effect
 * Adds a luminous, color-shifting glow that follows the cursor across the page.
 * The glow changes color based on what section the cursor is hovering over.
 */
export default function CursorGlow() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const trailRef = useRef([]);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    // Only show on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      dot.style.display = 'none';
      glow.style.display = 'none';
      return;
    }

    const onMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onMouseDown = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(0.7)';
      glow.style.transform = 'translate(-50%, -50%) scale(0.8)';
    };

    const onMouseUp = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      glow.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth interpolation
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      dot.style.left = `${pos.current.x}px`;
      dot.style.top = `${pos.current.y}px`;

      // Glow follows with more lag for fluid feel
      const glowX = pos.current.x + (target.current.x - pos.current.x) * 0.08;
      const glowY = pos.current.y + (target.current.y - pos.current.y) * 0.08;
      glow.style.left = `${glowX}px`;
      glow.style.top = `${glowY}px`;
    };

    animId = requestAnimationFrame(animate);

    // Hide default cursor on interactive elements
    const style = document.createElement('style');
    style.textContent = `
      @media (hover: hover) and (pointer: fine) {
        a, button, [role="button"], input, textarea, select, .cursor-pointer {
          cursor: none !important;
        }
        a:hover ~ .cursor-dot,
        button:hover ~ .cursor-dot {
          transform: translate(-50%, -50%) scale(1.5) !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={dotRef}
        className="cursor-dot fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#fff',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s, transform 0.15s',
        }}
      />
      {/* Glow halo */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(121,40,202,0.25) 0%, rgba(255,216,61,0.1) 40%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(2px)',
          transition: 'transform 0.2s',
        }}
      />
    </>
  );
}
