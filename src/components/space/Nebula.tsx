import React from 'react';

export const Nebula = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-blue-900/20 animate-nebula" />
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/10 via-transparent to-cyan-900/10 animate-nebula-reverse" />
    </div>
  );
};