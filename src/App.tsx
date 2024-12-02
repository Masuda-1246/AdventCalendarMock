import React from 'react';
import { Header } from './components/Header';
import { CalendarGrid } from './components/CalendarGrid';
import { Timeline } from './components/Timeline';
import { AnimatedBackground } from './components/AnimatedBackground';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900/95 text-white relative">
      <AnimatedBackground />
      <Header />
      <main className="py-8 relative z-10">
        <CalendarGrid />
        <Timeline />
      </main>
    </div>
  );
}

export default App;