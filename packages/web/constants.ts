import { Message } from "@weddingflare/lib";

/* Overview */
export const title = "Jack & Jill";
export const location = "Somewhere, USA";
export const url = "https://weddingflare.carsonseese.com";

/* Date/Time */
const timezone = "America/New_York";
export const startDate = new Date("August 01, 2022 12:00");
export const endDate = new Date("August 01, 2022 18:00");
export const localDate = startDate.toLocaleDateString("en-US", {
  timeZone: timezone,
  month: "long",
  day: "numeric",
  year: "numeric",
});

/* Email Message */
export const message: Message | undefined = {
  from: process.env.MAIL_FROM ?? "",
  subject: "Thanks for submitting your RSVP!",
  event: {
    calendarName: "Weddingflare",
    eventName: title,
    start: startDate,
    end: endDate,
    desc: `Please join us on ${localDate} for ${title}'s wedding!'`,
    location: location,
    organizer: "Weddingflare",
    timezone: timezone,
    url: "",
  },
};

console.log(JSON.stringify(message));

/* Other */
export const mapsAPIKey = process.env.MAPS_API_KEY ?? "";
