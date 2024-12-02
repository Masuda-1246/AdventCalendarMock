import React from 'react';
import { CalendarEntry } from './CalendarEntry';
import calendarData from '../data/calendar.json';
import { DAYS_OF_WEEK, CALENDAR_CONFIG, getCalendarDays } from '../config/calendar';

export const CalendarGrid = () => {
  const orderedDays = [...DAYS_OF_WEEK.slice(CALENDAR_CONFIG.startDay), ...DAYS_OF_WEEK.slice(0, CALENDAR_CONFIG.startDay)];
  const calendarDays = getCalendarDays();

  return (
    <div className="w-full max-w-6xl mx-auto px-1 xs:px-2 sm:px-4 md:px-6">
      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 xs:gap-1.5 sm:gap-2 mb-1 xs:mb-2 sm:mb-4">
        {orderedDays.map((day, index) => (
          <div
            key={day}
            className={`text-center py-1 sm:py-2 font-medium text-[8px] xs:text-[10px] sm:text-sm
              ${(index + CALENDAR_CONFIG.startDay) % 7 === 0 ? 'text-red-400' : ''}
              ${(index + CALENDAR_CONFIG.startDay) % 7 === 6 ? 'text-blue-400' : ''}
              ${(index + CALENDAR_CONFIG.startDay) % 7 !== 0 && (index + CALENDAR_CONFIG.startDay) % 7 !== 6 ? 'text-gray-200' : ''}
              bg-gray-800/80 backdrop-blur-sm rounded-md sm:rounded-lg`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 auto-rows-fr gap-1 xs:gap-1.5 sm:gap-2">
        {calendarDays.map((day, index) => (
          <React.Fragment key={index}>
            {day ? (
              <CalendarEntry
                day={day}
                entry={calendarData.entries.find((e) => e.day === day)}
              />
            ) : (
              <div className="bg-gray-800/20 rounded-xl" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};