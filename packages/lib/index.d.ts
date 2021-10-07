export interface RSVP {
  fName: string;
  lName: string;
  number: number;
  email?: string;
  message?: Message;
}

export interface Message {
  from: {
    name: string;
    email: string;
  };
  subject: string;
  body: string;
}
