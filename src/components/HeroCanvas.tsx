"use client";

import { useEffect, useRef } from "react";

type Orb = {
  x: number;
  y: number;
  r: number;
  hue: number;
  sat: number;
  light: number;
  vx: number;
  vy: number;
  pulse: number;
};

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    const orbs: Orb[] = [];

    const palette = [
      { hue: 312, sat: 90, light: 58 },
      { hue: 188, sat: 92, light: 54 },
      { hue: 46, sat: 95, light: 56 },
      { hue: 268, sat: 85, light: 62 },
      { hue: 24, sat: 95, light: 58 },
    ];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      orbs.length = 0;
      const { width, height } = canvas.getBoundingClientRect();
      const count = width < 640 ? 18 : 32;
      for (let i = 0; i < count; i++) {
        const p = palette[i % palette.length];
        orbs.push({
          x: width * (0.28 + Math.random() * 0.5),
          y: height * (0.18 + Math.random() * 0.42),
          r: 8 + Math.random() * (width < 640 ? 28 : 46),
          hue: p.hue,
          sat: p.sat,
          light: p.light,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.28,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const ribbon = (w: number, h: number) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const y = h * 0.42;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(w * 0.08, y + i * 10);
        const amp = 28 + i * 8;
        ctx.bezierCurveTo(
          w * 0.32,
          y - amp + Math.sin(t * 0.012 + i) * 18,
          w * 0.58,
          y + amp + Math.cos(t * 0.01 + i) * 16,
          w * 0.92,
          y + 4 + i * 6,
        );
        ctx.strokeStyle =
          i === 1
            ? "rgba(212, 175, 55, 0.55)"
            : i === 0
              ? "rgba(255, 47, 185, 0.28)"
              : "rgba(45, 226, 230, 0.28)";
        ctx.lineWidth = i === 1 ? 2.4 : 1.4;
        ctx.stroke();
      }
      ctx.restore();
    };

    const banana = (w: number, h: number) => {
      ctx.save();
      const g = ctx.createLinearGradient(0, h * 0.55, w * 0.42, h);
      g.addColorStop(0, "rgba(232, 48, 180, 0)");
      g.addColorStop(0.35, "rgba(255, 196, 40, 0.85)");
      g.addColorStop(0.7, "rgba(45, 196, 230, 0.75)");
      g.addColorStop(1, "rgba(80, 70, 255, 0.55)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(-20, h * 0.62);
      ctx.quadraticCurveTo(w * 0.08, h * 0.52, w * 0.22, h * 0.78);
      ctx.quadraticCurveTo(w * 0.32, h * 1.02, w * 0.18, h + 20);
      ctx.lineTo(-20, h + 20);
      ctx.closePath();
      ctx.globalAlpha = 0.92;
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      const { width: w, height: h } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, w, h);

      const vg = ctx.createRadialGradient(w * 0.55, h * 0.32, 20, w * 0.5, h * 0.4, w * 0.55);
      vg.addColorStop(0, "rgba(40, 12, 48, 0.35)");
      vg.addColorStop(1, "rgba(8, 10, 16, 0)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);

      banana(w, h);
      ribbon(w, h);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const o of orbs) {
        o.x += o.vx;
        o.y += o.vy;
        o.pulse += 0.018;
        if (o.x < w * 0.18 || o.x > w * 0.86) o.vx *= -1;
        if (o.y < h * 0.08 || o.y > h * 0.62) o.vy *= -1;
        const pr = o.r * (0.82 + Math.sin(o.pulse) * 0.18);
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, pr);
        g.addColorStop(0, `hsla(${o.hue}, ${o.sat}%, ${o.light}%, 0.85)`);
        g.addColorStop(0.45, `hsla(${o.hue}, ${o.sat}%, ${o.light}%, 0.28)`);
        g.addColorStop(1, `hsla(${o.hue}, ${o.sat}%, ${o.light}%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(o.x, o.y, pr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      t += 1;
      raf = window.requestAnimationFrame(draw);
    };

    resize();
    seed();
    draw();
    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
