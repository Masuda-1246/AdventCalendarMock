import React, { useMemo } from 'react';
import { Stars } from './space/Stars';
import { Nebula } from './space/Nebula';
import { ShootingStars } from './space/ShootingStars';

export const AnimatedBackground = () => {
  const spaceDust = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 20}s`,
      delay: `-${Math.random() * 20}s`,
    }));
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-gray-950">
        <Nebula />
        <ShootingStars />
        
        {/* Space dust */}
        <div className="absolute inset-0 pointer-events-none">
          {spaceDust.map((dust, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: dust.left,
                top: dust.top,
                animation: `space-dust ${dust.duration} linear infinite`,
                animationDelay: dust.delay,
                willChange: 'transform, opacity',
              }}
            />
          ))}
        </div>
      </div>
      <Stars />
    </>
  );
};