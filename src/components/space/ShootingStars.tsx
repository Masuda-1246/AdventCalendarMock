import React, { useMemo } from 'react';

export const ShootingStars = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      top: `${Math.random() * 50}%`,
      left: `${Math.random() * 100}%`,
      delay: `${i * 3}s`,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
};