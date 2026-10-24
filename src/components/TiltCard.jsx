import React, { useRef, useState } from 'react';

/**
 * TiltCard - Premium 3D perspective tilt card with dynamic lighting
 * Tracks mouse position to create a realistic 3D tilt effect with
 * a moving spotlight/glare that follows the cursor.
 */
export default function TiltCard({
  children,
  className = '',
  tiltDeg = 12,
  glareOpacity = 0.15,
  scale = 1.02,
  perspective = 1000,
  borderGlow = true,
}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * tiltDeg * 2;
    const rotateX = (0.5 - y) * tiltDeg * 2;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.15s ease-out',
    });

    // Moving spotlight glare
    setGlareStyle({
      background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,${glareOpacity}), transparent 60%)`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* Glare overlay */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
        style={{
          ...glareStyle,
          transition: 'opacity 0.4s ease',
        }}
      />
      {/* Animated border glow */}
      {borderGlow && (
        <div
          className="absolute -inset-px rounded-[inherit] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(121,40,202,0.3), rgba(255,216,61,0.3), rgba(121,40,202,0.3))',
            filter: 'blur(4px)',
          }}
        />
      )}
    </div>
  );
}
