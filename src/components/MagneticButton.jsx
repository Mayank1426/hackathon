import React, { useRef, useState } from 'react';

/**
 * MagneticButton - Interactive button that magnetically attracts toward cursor
 * Uses spring physics for smooth, organic-feeling motion.
 * Wrap any child to make it magnetic.
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  radius = 150,
  as: Tag = 'div',
  ...props
}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const dist = Math.sqrt(distX * distX + distY * distY);

    if (dist < radius) {
      const pull = (1 - dist / radius) * strength;
      setTransform({
        x: distX * pull,
        y: distY * pull,
        scale: 1 + pull * 0.08,
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0, scale: 1 });
  };

  return (
    <Tag
      ref={ref}
      className={`${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})`,
        transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        willChange: 'transform',
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
