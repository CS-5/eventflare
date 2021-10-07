import { Router } from "itty-router";
import { RSVP } from "@weddingflare/lib";
import { emailRSVP } from "./handlers/email";
import { notionRSVP } from "./handlers/notion";

const router = Router();

// Handle POST requests to the RSVP endpoint
router.post("/api/rsvp", async (request: Request) => {
  const rsvp: RSVP = await request.json();

  try {
    // RSVP > Notion
    //TODO: Disabled for troubleshooting
    //await notionRSVP(rsvp);

    //RSVP > Email (Confirmation w/ ical, only fires if a Message is provided in the RSVP)
    await emailRSVP(rsvp);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      process.exit(1);
    }
  }
});

router.all("*", () => new Response("Not Found", { status: 404 }));

addEventListener("fetch", (event) => {
  event.respondWith(router.handle(event.request));
});
