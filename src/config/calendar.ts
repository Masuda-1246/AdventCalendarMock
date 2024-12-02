export const CALENDAR_CONFIG = {
  // 0: Sunday, 1: Monday, ..., 6: Saturday
  startDay: 0,
  year: 2024,
  month: 12, // December
  totalDays: 31,
} as const;

export const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const getCalendarDays = () => {
  const firstDay = new Date(CALENDAR_CONFIG.year, CALENDAR_CONFIG.month - 1, 1).getDay();
  const offset = (firstDay - CALENDAR_CONFIG.startDay + 7) % 7;
  
  return Array.from({ length: offset + CALENDAR_CONFIG.totalDays }, (_, i) => {
    if (i < offset) return null;
    return i - offset + 1;
  });
};