import React, { useEffect, useRef } from 'react';

export const MouseTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; age: number }[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      points.current.push({ x: e.clientX, y: e.clientY, age: 0 });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw points
      points.current.forEach((point, i) => {
        point.age += 1;
      });

      // Remove old points
      points.current = points.current.filter(p => p.age < 20);

      if (points.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points.current[0].x, points.current[0].y);
        
        for (let i = 1; i < points.current.length; i++) {
          const point = points.current[i];
          ctx.lineTo(point.x, point.y);
        }
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 3;
        // Golden/Green gradient effect
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#FFD700');
        gradient.addColorStop(1, '#2E8B57');
        ctx.strokeStyle = gradient;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FFD700';
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />;
};