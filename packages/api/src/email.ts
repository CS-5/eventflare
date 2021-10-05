import { RSVP } from "./types";
import sgmail from "@sendgrid/mail";
import ical from "ical-generator";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

let enabled = false;
if (SENDGRID_API_KEY) {
  sgmail.setApiKey(SENDGRID_API_KEY);
  enabled = true;
}

export const emailRSVP = async (rsvp: RSVP): Promise<void> => {
  const message = rsvp.message;

  if (!enabled || !message) return;

  /* Create ical invite */
  const ics = ical({
    name: message.event.calendar,
    timezone: message.event.timezone,
  }).createEvent({
    start: message.event.start,
    end: message.event.end,
    summary: message.event.name,
    description: message.event.desc,
    location: message.event.location,
    url: message.event.url,
    organizer: message.event.organizer,
  });

  /* Create message */
  const msg = {
    to: rsvp.email,
    from: message.from,
    subject: message.subject,
    text: ics.toString(),
  };

  /* Send message */
  await sgmail.send(msg);
};
