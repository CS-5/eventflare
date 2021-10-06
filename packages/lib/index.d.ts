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
  calendar: string;
  start: Date;
  end: Date;
  name: string;
  desc: string;
  location: string;
  url: string;
  organizer: string;
  timezone: string;
}
