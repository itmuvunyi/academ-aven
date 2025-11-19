'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  vx: number; // velocity x
  vy: number; // velocity y
}

interface Constellation {
  stars: { x: number; y: number }[];
  name: string;
}

export default function CelestialBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create stars array
    const stars: Star[] = [];
    const starCount = 200;

    // Set canvas size
    const resizeCanvas = () => {
      const oldWidth = canvas.width || window.innerWidth;
      const oldHeight = canvas.height || window.innerHeight;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Adjust star positions proportionally on resize
      if (oldWidth > 0 && oldHeight > 0 && stars.length > 0) {
        const scaleX = canvas.width / oldWidth;
        const scaleY = canvas.height / oldHeight;
        stars.forEach((star) => {
          star.x *= scaleX;
          star.y *= scaleY;
        });
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        vx: (Math.random() - 0.5) * 0.3, // horizontal velocity
        vy: (Math.random() - 0.5) * 0.3, // vertical velocity
      });
    }

    // Define constellation patterns
    const constellations: Constellation[] = [
      {
        name: 'Orion',
        stars: [
          { x: 0.2, y: 0.3 },
          { x: 0.25, y: 0.35 },
          { x: 0.3, y: 0.3 },
          { x: 0.25, y: 0.25 },
          { x: 0.2, y: 0.3 },
        ],
      },
      {
        name: 'Ursa Major',
        stars: [
          { x: 0.7, y: 0.2 },
          { x: 0.75, y: 0.25 },
          { x: 0.8, y: 0.2 },
          { x: 0.75, y: 0.3 },
          { x: 0.7, y: 0.35 },
          { x: 0.65, y: 0.3 },
          { x: 0.7, y: 0.2 },
        ],
      },
      {
        name: 'Cassiopeia',
        stars: [
          { x: 0.15, y: 0.6 },
          { x: 0.2, y: 0.65 },
          { x: 0.25, y: 0.6 },
          { x: 0.3, y: 0.65 },
          { x: 0.35, y: 0.6 },
        ],
      },
    ];

    let animationFrame: number;
    let time = 0;

    const draw = () => {
      // Clear canvas
      ctx.fillStyle = '#0a0e27';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0e27');
      gradient.addColorStop(0.5, '#1a1f3a');
      gradient.addColorStop(1, '#0f1419');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach((star) => {
        // Update star position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star with twinkle effect
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();

        // Add glow effect for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle * 0.2})`;
          ctx.fill();
        }

        // Add motion trail for faster moving stars
        if (Math.abs(star.vx) > 0.1 || Math.abs(star.vy) > 0.1) {
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - star.vx * 3, star.y - star.vy * 3);
          ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * twinkle * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw constellation lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);

      constellations.forEach((constellation) => {
        ctx.beginPath();
        constellation.stars.forEach((star, index) => {
          const x = star.x * canvas.width;
          const y = star.y * canvas.height;
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        ctx.stroke();
      });

      // Draw constellation stars (brighter)
      constellations.forEach((constellation) => {
        constellation.stars.forEach((star) => {
          const x = star.x * canvas.width;
          const y = star.y * canvas.height;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.fill();

          // Glow
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.fill();
        });
      });

      time += 0.01;
      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

