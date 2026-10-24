import React, { useEffect, useRef } from 'react';

/**
 * AuroraBackground - Full-page animated aurora borealis gradient effect
 * Creates a mesmerizing, slowly shifting color field that responds to scroll position.
 * Uses pure Canvas 2D for buttery 60fps performance.
 */
export default function AuroraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let scrollY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Aurora color palettes calibrated with #452080 (Royal Purple) and #FFCA29 (Warm Gold)
    const palettes = [
      ['#452080', '#FFCA29', '#5E2EB0', '#FFD54F'],
      ['#2A1054', '#FFCA29', '#6B3FB5', '#E5AC0E'],
      ['#FFCA29', '#452080', '#FFD54F', '#7E43DB'],
    ];

    const blobs = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      radius: 0.2 + Math.random() * 0.35,
      speedX: (Math.random() - 0.5) * 0.0003,
      speedY: (Math.random() - 0.5) * 0.0003,
      phase: Math.random() * Math.PI * 2,
      colorIdx: i % 4,
    }));

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = (time) => {
      animId = requestAnimationFrame(animate);
      const t = time * 0.001;

      // Scroll-based palette interpolation
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPct = totalHeight > 0 ? scrollY / totalHeight : 0;
      const palIdx = Math.min(Math.floor(scrollPct * palettes.length), palettes.length - 1);
      const palette = palettes[palIdx];

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each aurora blob
      blobs.forEach((blob) => {
        blob.x += blob.speedX + Math.sin(t * 0.5 + blob.phase) * 0.0002;
        blob.y += blob.speedY + Math.cos(t * 0.3 + blob.phase) * 0.0001;

        // Wrap around
        if (blob.x < -0.3) blob.x = 1.3;
        if (blob.x > 1.3) blob.x = -0.3;
        if (blob.y < -0.3) blob.y = 1.3;
        if (blob.y > 1.3) blob.y = -0.3;

        const cx = blob.x * canvas.width;
        const cy = blob.y * canvas.height;
        const r = blob.radius * Math.max(canvas.width, canvas.height);

        // Pulsing radius
        const pulseR = r * (1 + Math.sin(t * 0.8 + blob.phase) * 0.15);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, pulseR);
        const color = palette[blob.colorIdx];
        grad.addColorStop(0, color + '18'); // very subtle center
        grad.addColorStop(0.4, color + '0D');
        grad.addColorStop(1, color + '00');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.7 }}
      aria-hidden="true"
    />
  );
}
