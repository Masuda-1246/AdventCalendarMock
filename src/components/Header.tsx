import React from 'react';
import { Calendar } from 'lucide-react';
import calendarData from '../data/calendar.json';

export const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center space-x-4">
          <Calendar className="w-8 h-8 text-indigo-400" />
          <div>
            <h1 className="text-xl font-bold text-white">
              {calendarData.title}
            </h1>
            <p className="text-sm text-gray-400">
              {calendarData.subtitle}
            </p>
          </div>
        </div>
        <p className="mt-2 text-gray-300 text-sm">
          {calendarData.description}
        </p>
      </div>
    </header>
  );
};