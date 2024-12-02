import React from 'react';
import { Calendar, ExternalLink, Lock } from 'lucide-react';

interface Entry {
  author: string;
  avatar: string;
  title: string;
  link: string;
}

interface CalendarEntryProps {
  day: number;
  entry?: Entry;
}

export const CalendarEntry = ({ day, entry }: CalendarEntryProps) => {
  const today = new Date();
  const entryDate = new Date(2024, 11, day);
  const isToday = today.getDate() === day && 
                  today.getMonth() === 11 && 
                  today.getFullYear() === 2024;
  const isPast = today > entryDate;
  const isFuture = today < entryDate;
  const isAvailable = Boolean(entry);
  const isClickable = isAvailable && !isFuture;

  const handleClick = () => {
    if (isClickable && entry?.link) {
      window.open(entry.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative overflow-hidden h-full
        ${isToday ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-gray-900' : ''}
        ${isClickable 
          ? 'bg-gradient-to-br from-indigo-900 to-purple-900 hover:from-indigo-800 hover:to-purple-800 cursor-pointer' 
          : isFuture && isAvailable
            ? 'bg-gradient-to-br from-gray-800 to-gray-700 cursor-not-allowed'
            : 'bg-gray-800'}
        transition-all duration-300 group
        rounded-xl p-2
        flex flex-col items-center justify-between`}
    >
      {/* Top section - Day number and icons */}
      <div className="w-full grid grid-cols-[1fr_auto] items-start">
        <div className={`text-xs sm:text-sm font-medium px-1.5 py-0.5 sm:px-2 sm:py-1 rounded w-fit
          ${isToday ? 'bg-yellow-500 text-gray-900' : 'bg-black/30 text-gray-300'}`}>
          {day}
        </div>
        <div className="flex items-center space-x-1">
          {isFuture && isAvailable && (
            <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
          )}
          {isClickable && entry?.link && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
            </div>
          )}
        </div>
      </div>
      
      {/* Middle section - Avatar and author */}
      <div className="flex-1 flex items-center justify-center w-full">
        {entry ? (
          <div className="flex flex-col items-center gap-2 w-full px-1">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden 
              ${isToday ? 'border-2 border-yellow-400' : 'border-2 border-indigo-400'} 
              flex-shrink-0 ${isFuture ? 'opacity-50' : ''}`}>
              <img
                src={entry.avatar}
                alt={entry.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-[8px] xs:text-[10px] sm:text-xs text-gray-300 truncate w-full text-center">
              {entry.author}
            </div>
          </div>
        ) : (
          <Calendar className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 opacity-30" />
        )}
      </div>
      
      {/* Bottom section - Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};