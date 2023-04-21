import { Event, stringOrDate } from 'react-big-calendar';

export interface Attendees {
  attendee: {
    email: string;
  };
}

export interface CalEvent extends Event {
  id?: number;
  description?: string;
  location?: string;
  visibility?: string;
  ownerId?: number;
  calendarId?: number;
  attendees?: Attendees[];
}
export interface backendCalEvent {
  id?: string;
  name?: string;
  startTime?: Date | undefined;
  endTime?: Date;
  description?: string;
  location: string;
  ownerId: number;
  eventTypeId: number;
  calendarId: number;
  isDeleted: boolean;
}

export interface CalendarEventProps {
  show?: boolean;
  event?: CalEvent;
  new?: boolean;
}

export interface UpdateEvent {
  event: CalEvent;
  start: stringOrDate;
  end: stringOrDate;
}

export interface EventState {
  events: CalEvent[];
  addEvent: (event: CalEvent) => void;
  removeEvent: (event: CalEvent) => void;
}

export interface User {
  firstname: string;
  lastname: string;
  bio: string;
  username: string;
  timezone: string;
  onboarding: boolean;
}

export interface UserState {
  user: User;
  updateUser: (data: Record<updateUserKey, string>) => void;
}
