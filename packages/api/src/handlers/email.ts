import { RSVP } from "@weddingflare/lib";
import ical from "ical-generator";

const SENDGRID_URL = "https://api.sendgrid.com/v3/mail/send";

export const emailRSVP = async (rsvp: RSVP): Promise<void> => {
  const message = rsvp.message;

  if (!SENDGRID_API_KEY || !message) return;

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
    personalizations: [{ to: [{ email: rsvp.email }] }],
    from: { email: message.from },
    subject: message.subject,
    content: [{ type: "text/plain", value: ics.toString() }],
  };

  /* Send message */
  await fetch(SENDGRID_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify(msg),
  });
};
