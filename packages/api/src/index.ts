import { Router } from "itty-router";
import { RSVP } from "@weddingflare/lib";
import { emailRSVP } from "./handlers/email";
import { addNotionRSVP } from "./handlers/notion";
import { addKVRSVP, getKVRSVP, getKVCSV } from "./handlers/workerskv";
import { v4 as uuid } from "uuid";

const router = Router();

// Handle POST requests to the RSVP endpoint
router.post("/api/rsvp", async (request: Request) => {
  const rsvp: RSVP = await request.json();

  if (!rsvp) {
    return {
      status: 400,
      body: "RSVP is required",
    };
  }

  try {
    rsvp.id = uuid();

    // RSVP > KV
    if (typeof WF_KV !== "undefined") await addKVRSVP(rsvp);

    // RSVP > Notion
    // TODO: Fix notion
    /*
    if (
      typeof NOTION_API_KEY !== "undefined" ||
      typeof NOTION_DATABASE_ID !== "undefined"
    )
      await addNotionRSVP(rsvp);
    */

    //RSVP > Email (Confirmation w/ ical, only fires if a Message is provided in the RSVP)
    if (typeof SENDGRID_API_KEY !== "undefined") {
      await emailRSVP(rsvp);
    }

    return new Response(JSON.stringify({ id: rsvp.id }), { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return new Response(
        JSON.stringify({
          message: "Worker Error",
          error: JSON.parse(err.message),
        }),
        { status: 500 },
      );
    }
  }
});

router.get("/api/rsvp/:id", async (request: Request) => {
  const { params } = request as any;

  return new Response(JSON.stringify(await getKVRSVP(params.id), null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
});

router.get("/api/rsvp/csv", async (request: Request) => {
  return new Response(await getKVCSV()), {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
    },
  });
});

router.all("*", () => new Response("Not Found", { status: 404 }));

addEventListener("fetch", (event) => {
  event.respondWith(router.handle(event.request));
});
