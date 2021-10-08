import { RSVP } from "@weddingflare/lib";

const SENDGRID_URL = "https://api.sendgrid.com/v3/mail/send";

export const emailRSVP = async (rsvp: RSVP): Promise<void> => {
  const message = rsvp.message;

  // Ensure all required fields are defined (including empty strings for non-optional fields)
  if (!SENDGRID_API_KEY || !rsvp.email || !message?.from || !message?.subject)
    return;

  // Create the message
  const msg = {
    personalizations: [{ to: [{ email: rsvp.email }] }],
    from: message.from,
    subject: message.subject,
    content: [{ type: "text/plain", value: `${message.body}` }],
  };

  // Send it!
  const res = await fetch(SENDGRID_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify(msg),
  });

  if (!res.ok) {
    throw Error(await res.text());
  }
};
