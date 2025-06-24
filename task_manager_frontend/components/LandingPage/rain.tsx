"use client"

import { JSX, useEffect, useState } from "react";

export default function Rain() {
  const [drops, setDrops] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    const dropsArr = Array.from({ length: 30 }).map((_, i) => {
      // Generate all random values here
      const left = Math.random() * 100;
      const delay = Math.random() * 2;
      const duration = 0.8 + Math.random() * 0.7;
      const opacity = 0.15 + Math.random() * 0.25;
      const width = 1 + Math.random() * 1.5;
      const height = 16 + Math.random() * 18;
      return (
        <div
          key={i}
          className="absolute top-[-30px]"
          style={{
            left: `${left}%`,
            width: `${width}px`,
            height: `${height}px`,
            opacity,
            animation: `rain-fall ${duration}s linear ${delay}s infinite`,
            background: 'linear-gradient(to bottom, #60a5fa 60%, transparent)',
            borderRadius: '999px',
            zIndex: 10,
          }}
        />
      );
    });
    setDrops(dropsArr);
  }, []);

  if (!drops) return null; // Don't render anything on the server

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {drops}
      <style>{`
        @keyframes rain-fall {
          0% { transform: translateY(0); }
          100% { transform: translateY(110vh); }
        }
      `}</style>
    </div>
  );
}