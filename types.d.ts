export interface RSVP {
  id?: string;
  fName: string;
  lName: string;
  number: number;
  attending: boolean;
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

export interface APIResponse {
  success: boolean;
  result?: any;
  error?: Error;
  message?: string;
}
