import React, { useEffect, useRef } from 'react';

/**
 * GradientTrail - Interactive mouse trail with gradient particles
 * Creates floating, fading particles along the mouse path for an enchanting effect.
 * Only activates on desktop (non-touch) devices.
 */
export default function GradientTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const maxParticles = 50;
    const colors = [
      'rgba(121, 40, 202, ',
      'rgba(255, 216, 61, ',
      'rgba(147, 51, 234, ',
      'rgba(245, 158, 11, ',
      'rgba(192, 132, 252, ',
    ];

    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;
    let isMoving = false;
    let moveTimeout;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMoving = false;
      }, 100);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const animate = () => {
      animId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Only spawn particles when mouse moves significantly
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 3 && isMoving && particles.length < maxParticles) {
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 10,
          y: mouseY + (Math.random() - 0.5) * 10,
          size: 2 + Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1,
          decay: 0.015 + Math.random() * 0.02,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
        });
        lastX = mouseX;
        lastY = mouseY;
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.01; // Slight float upward
        p.life -= p.decay;
        p.size *= 0.98;

        if (p.life <= 0 || p.size < 0.2) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.life + ')';
        ctx.fill();
      }
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9997]"
      aria-hidden="true"
    />
  );
}
