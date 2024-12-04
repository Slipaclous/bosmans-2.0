import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
type OpeningHours = {
  open: string;
  close: string;
  pause?: {
    start: string;
    end: string;
  };
};
export const OPENING_HOURS: Record<number, OpeningHours | null> = {
  1: { open: '08:00', pause: { start: '12:00', end: '13:00' }, close: '17:00' }, // Monday
  2: { open: '08:00', pause: { start: '12:00', end: '13:00' }, close: '17:00' }, // Tuesday
  3: { open: '08:00', pause: { start: '12:00', end: '13:00' }, close: '17:00' }, // Wednesday
  4: { open: '08:00', pause: { start: '12:00', end: '13:00' }, close: '17:00' }, // Thursday
  5: { open: '08:00', pause: { start: '12:00', end: '13:00' }, close: '17:00' }, // Friday
  6: { open: '08:00', close: '12:00' }, // Saturday
  0: null, // Sunday - closed
};

export function isGarageOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  const todayHours = OPENING_HOURS[day];

  if (!todayHours) {
    return false;
  }

  const [openHour, openMinute] = todayHours.open.split(':').map(Number);
  const [closeHour, closeMinute] = todayHours.close.split(':').map(Number);
  const openTime = openHour * 60 + openMinute;
  const closeTime = closeHour * 60 + closeMinute;

  if (todayHours.pause) {
    const [pauseStartHour, pauseStartMinute] = todayHours.pause.start.split(':').map(Number);
    const [pauseEndHour, pauseEndMinute] = todayHours.pause.end.split(':').map(Number);
    const pauseStartTime = pauseStartHour * 60 + pauseStartMinute;
    const pauseEndTime = pauseEndHour * 60 + pauseEndMinute;

    if (currentTime >= pauseStartTime && currentTime < pauseEndTime) {
      return false; // Currently in the lunch break
    }
  }

  return currentTime >= openTime && currentTime < closeTime;
}

