import { Router } from "itty-router";
import { RSVP } from "@weddingflare/lib";
import { emailRSVP } from "./handlers/email";
import { addNotionRSVP } from "./handlers/notion";
import { addKVRSVP, getKVKeys } from "./handlers/workerskv";

const router = Router();

// Handle POST requests to the RSVP endpoint
router.post("/api/rsvp", async (request: Request) => {
  const rsvp: RSVP = await request.json();

  try {
    // RSVP > KV
    if (typeof WF_KV !== "undefined") await addKVRSVP(rsvp);

    // RSVP > Notion
    if (
      typeof NOTION_API_KEY !== "undefined" ||
      typeof NOTION_DATABASE_ID !== "undefined"
    )
      await addNotionRSVP(rsvp);

    //RSVP > Email (Confirmation w/ ical, only fires if a Message is provided in the RSVP)
    if (typeof SENDGRID_API_KEY !== "undefined") await emailRSVP(rsvp);

    return new Response("OK", { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return new Response("Error", { status: 500 });
    }
  }
});

router.get("/api/rsvp", async (request: Request) => {
  const keys = await getKVKeys();
  return new Response(keys.join("\n"));
});

router.all("*", () => new Response("Not Found", { status: 404 }));

addEventListener("fetch", (event) => {
  event.respondWith(router.handle(event.request));
});
