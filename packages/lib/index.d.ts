export interface RSVP {
  fName: string;
  lName: string;
  number: number;
  email?: string;
  message?: Message;
}

export interface Message {
  from: string;
  subject: string;
  event: Event;
}

export interface Event {
  calendarName: string;
  eventName: string;
  start: Date;
  end: Date;
  timezone: string;
  organizer: string;
  desc?: string;
  location?: string;
  url?: string;
}
