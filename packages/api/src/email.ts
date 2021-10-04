import sgmail from "@sendgrid/mail";
import ical from "ical-generator";

export interface RSVP {
  fName: string;
  lName: string;
  number: number;
  email: string;
  event: Event;
}

interface Event {
  name: string;
}

//TODO: https://stackoverflow.com/questions/67149571/how-to-send-ics-calendar-invite-through-sendgrid-so-that-it-renders-in-email-cl

export const send = async (rsvp: RSVP) => {
  createEvent(rsvp.event);
};

const createEvent = (event: Event) => {

}
