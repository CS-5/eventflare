import { Message } from "@weddingflare/lib";

/* Overview */
export const SITE_TITLE = "Weddingflare"; // Note: Title is used to set the site title and from name (email)
export const SITE_URL = "https://weddingflare.carsonseese.com";

/* Event Loocation, Date, Time */
export const EVENT_LOCATION = "Somewhere, USA";
export const EVENT_TIMEZONE = "America/New_York";
export const EVENT_DATETIME = new Date("August 01, 2022 12:00");
export const EVENT_LOCAL_TIME = EVENT_DATETIME.toLocaleTimeString("en-US", {
  timeZone: EVENT_TIMEZONE,
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});
export const EVENT_LOCAL_DATE = EVENT_DATETIME.toLocaleDateString("en-US", {
  timeZone: EVENT_TIMEZONE,
  month: "long",
  day: "numeric",
  year: "numeric",
});

/* Email Message */
export const EMAIL_FROM = process.env.EMAIL_FROM ?? "";

/* Other */
export const MAPS_API_KEY = process.env.MAPS_API_KEY ?? "";
