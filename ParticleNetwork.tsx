import React, { useEffect, useRef } from 'react';

const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Mouse interaction state
    let mouse = { x: -1000, y: -1000 };

    // Configuration
    const particleColor = '255, 122, 53'; // RGB for #FF7A35 (primary)
    
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        // Random velocity
        this.vx = (Math.random() - 0.5) * 1; 
        this.vy = (Math.random() - 0.5) * 1; 
        // Varied sizes for depth
        this.size = Math.random() * 2.5 + 1.5; 
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(${particleColor}, ${this.size > 3 ? 0.6 : 0.4})`; // Larger particles slightly more opaque
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = (w: number, h: number) => {
      particles = [];
      // Calculate density based on area
      const area = w * h;
      // Approx 1 particle per 12000 px^2 (responsive density)
      const density = Math.floor(area / 12000); 
      // Clamp density
      const count = Math.min(Math.max(density, 40), 120);

      for (let i = 0; i < count; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        initParticles(canvas.width, canvas.height);
      }
    };

    const animate = () => {
      if (!ctx) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const connectionDist = 140;
      const mouseDist = 180;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(w, h);
        p.draw();

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${particleColor}, ${0.3 * (1 - dist / connectionDist)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect particles to mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseDist) {
          ctx.beginPath();
          // Slightly stronger opacity for mouse connections
          ctx.strokeStyle = `rgba(${particleColor}, ${0.5 * (1 - dist / mouseDist)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          
          // Subtle attraction to mouse
          p.vx += (mouse.x - p.x) * 0.0001;
          p.vy += (mouse.y - p.y) * 0.0001;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
        // Calculate mouse position relative to canvas
        const rect = canvas.getBoundingClientRect();
        // Only track if mouse is near or inside the canvas section
        if (
            e.clientX >= rect.left - 100 &&
            e.clientX <= rect.right + 100 &&
            e.clientY >= rect.top - 100 &&
            e.clientY <= rect.bottom + 100
        ) {
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        } else {
            mouse.x = -1000;
            mouse.y = -1000;
        }
    };

    // Initial setup
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default ParticleNetwork;