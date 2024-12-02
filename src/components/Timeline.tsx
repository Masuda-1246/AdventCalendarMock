import React from 'react';
import { Clock, ExternalLink, Lock } from 'lucide-react';
import calendarData from '../data/calendar.json';

export const Timeline = () => {
  const today = new Date();

  const handleClick = (link: string, entryDate: Date) => {
    if (today < entryDate) return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="relative">
        {/* Timeline header */}
        <div className="flex items-center space-x-2 mb-6">
          <Clock className="w-5 h-5 text-indigo-400" />
          <h2 className="text-lg font-semibold text-white">Timeline</h2>
        </div>

        {/* Timeline entries */}
        <div className="relative">
          {calendarData.entries.sort((a, b) => a.day - b.day).map((entry, index) => {
            const entryDate = new Date(2024, 11, entry.day);
            const isToday = today.getDate() === entry.day && 
                           today.getMonth() === 11 && 
                           today.getFullYear() === 2024;
            const isFuture = today < entryDate;

            return (
              <div key={entry.day} className="mb-8 relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500" />
                
                {/* Entry content */}
                <div className="ml-12 relative">
                  {/* Date circle */}
                  <div className={`absolute -left-12 w-8 h-8 rounded-full flex items-center justify-center
                    ${isToday 
                      ? 'bg-yellow-500 border-2 border-yellow-400' 
                      : 'bg-gray-800 border-2 border-indigo-500'}`}>
                    <span className={`text-sm ${isToday ? 'text-gray-900' : 'text-gray-300'}`}>
                      {entry.day}
                    </span>
                  </div>
                  
                  {/* Content card */}
                  <div 
                    onClick={() => entry.link && handleClick(entry.link, entryDate)}
                    className={`bg-gray-800 rounded-lg p-4 
                      ${isFuture ? 'opacity-75 cursor-not-allowed' : entry.link ? 'hover:bg-gray-750 cursor-pointer' : ''} 
                      transition-colors duration-300 group relative`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <img
                        src={entry.avatar}
                        alt={entry.author}
                        className={`w-6 h-6 rounded-full flex-shrink-0
                          ${isToday ? 'border border-yellow-400' : 'border border-indigo-400'}`}
                      />
                      <span className="text-sm font-medium text-gray-300 truncate">{entry.author}</span>
                      <div className="ml-auto flex items-center space-x-2">
                        {isFuture && <Lock className="w-4 h-4 text-gray-400" />}
                        {!isFuture && entry.link && (
                          <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">{entry.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};