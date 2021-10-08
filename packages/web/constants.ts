/* Overview */
export const SITE_TITLE = "Eventflare"; // Note: Title is used to set the site title and from name (email)
export const SITE_URL = "https://Eventflare.carsonseese.com";

/* Event Loocation, Date, Time */
export const EVENT_LOCATION = {
  address: "Nothing, AZ",
  lat: 34.48,
  lng: -113.3359,
};
export const EVENT_TIMEZONE = "America/New_York";
export const EVENT_DATETIME = new Date("August 01, 2022 14:00");
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

/* Schedule */
export const SCHEDULE = [
  {
    time: "August 1st @ 2PM",
    description: "Arrive and socialize",
  },
  {
    time: "August 1st @ 3PM",
    description: "Event start",
  },
  {
    time: "...",
    description: "...",
  },
  {
    time: "August 1st @ 8PM",
    description: "Party",
  },
];

/* Email Message */
export const EMAIL_FROM = process.env.EMAIL_FROM ?? "";

/* Other */
export const MAPS_API_KEY = process.env.MAPS_API_KEY ?? "";
