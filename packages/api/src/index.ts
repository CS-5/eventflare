import { Router } from "itty-router";
import { send, RSVP } from "./email";

const router = Router();

router.post("/api/rsvp", async (request: Request) => {
  const json = await request.json();
  const rsvp: RSVP = JSON.parse(json);

  await send(rsvp);
});

router.all("*", () => new Response("Not Found", { status: 404 }));

addEventListener("fetch", (event) => {
  event.respondWith(router.handle(event.request));
});
