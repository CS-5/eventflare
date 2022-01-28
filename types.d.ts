export interface RSVP {
  id?: string;
  fName: string;
  lName: string;
  number: number;
  attending: boolean;
}

export interface APIResponse {
  success: boolean;
  result?: any;
  error?: Error;
  message?: string;
}
