import { Router } from "itty-router";
import { RSVP } from "@cs-5/weddingflare-lib";
import { emailRSVP } from "./handlers/email";
import { notionRSVP } from "./handlers/notion";

const router = Router();

// Handle POST requests to the RSVP endpoint
router.post("/api/rsvp", async (request: Request) => {
  const rsvp: RSVP = JSON.parse(await request.json());

  try {
    await notionRSVP(rsvp); // RSVP > Notion

    await emailRSVP(rsvp); //RSVP > Email (Confirmation w/ ical)
  } catch (error) {
    console.error(error);
  }
});

router.all("*", () => new Response("Not Found", { status: 404 }));

addEventListener("fetch", (event) => {
  event.respondWith(router.handle(event.request));
});
