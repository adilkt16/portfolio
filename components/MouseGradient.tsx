'use client';

import { useEffect, useState } from 'react';

export default function MouseGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `
          radial-gradient(220px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.07) 35%, transparent 65%),
          radial-gradient(680px at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 155, 221, 0.22), transparent 75%)
        `,
      }}
    />
  );
}
