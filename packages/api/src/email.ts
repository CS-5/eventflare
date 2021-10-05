import sgmail from "@sendgrid/mail";
import ical from "ical-generator";

export interface RSVP {
  fName: string;
  lName: string;
  number: number;
  email: string;
  message: Message;
  event: Event;
}

interface Event {
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

interface Message {
  from: string;
  subject: string;
}

//TODO: https://stackoverflow.com/questions/67149571/how-to-send-ics-calendar-invite-through-sendgrid-so-that-it-renders-in-email-cl

export const send = async (rsvp: RSVP) => {
  const ics = ical({
    name: rsvp.event.calendar,
    timezone: rsvp.event.timezone,
  }).createEvent({
    start: rsvp.event.start,
    end: rsvp.event.end,
    summary: rsvp.event.name,
    description: rsvp.event.desc,
    location: rsvp.event.location,
    url: rsvp.event.url,
    organizer: rsvp.event.organizer,
  });

  const msg = {
    to: rsvp.email,
    from: rsvp.message.from,
    subject: rsvp.message.subject,
    text: ics.toString(),
  };

  try {
    await sgmail.send(msg);
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
