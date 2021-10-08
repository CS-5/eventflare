import { Router } from "itty-router";
import { APIResponse, RSVP } from "@eventflare/lib";
import { emailRSVP } from "./handlers/email";
import { addNotionRSVP } from "./handlers/notion";
import { addKVRSVP, getKVRSVP, getKVCSV } from "./handlers/workerskv";
import { v4 as uuid } from "uuid";

const router = Router();

// Handle POST requests to the RSVP endpoint
router.post("/api/rsvp", async (request: Request) => {
  const rsvp: RSVP = await request.json();

  if (!rsvp) {
    return response(
      {
        success: false,
        message: "No RSVP data provided",
      },
      400,
    );
  }

  try {
    rsvp.id = uuid();

    // RSVP > KV
    if (typeof EF_KV !== "undefined") await addKVRSVP(rsvp);

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

    return response(
      { success: true, message: "RSVP Successful", result: rsvp },
      200,
    );
  } catch (err) {
    if (err instanceof Error) {
      return response(
        {
          success: false,
          message: "Worker error",
          error: err,
        },
        500,
      );
    }
  }
});

router.get("/api/rsvp/csv", async () => {
  const csv = await getKVCSV();

  if (!csv) {
    return response(
      {
        success: false,
        message: "No RSVP data found in KV store",
      },
      404,
    );
  }

  return new Response(await getKVCSV(), {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
    },
  });
});

router.get("/api/rsvp/:id", async (request: Request) => {
  const { params } = request as any;

  try {
    const rsvp = await getKVRSVP(params.id);

    if (!rsvp) {
      return response(
        {
          success: false,
          message: "RSVP ID not found",
        },
        404,
      );
    }

    return response(
      {
        success: true,
        result: rsvp,
      },
      200,
    );
  } catch (err) {
    if (err instanceof Error) {
      return response(
        {
          success: false,
          message: "Worker error",
          error: err,
        },
        500,
      );
    }
  }
});

router.all("*", () => new Response("Not Found", { status: 404 }));

addEventListener("fetch", (event) => {
  event.respondWith(router.handle(event.request));
});

/**
 * Helper function to generate response message to return to the client. Helps standardize
 * communication and error logging between API and web frontend.
 * @param apiResponse A standardized response object, shared between the API and web frontend
 * @param status HTTP status code
 * @returns A standard HTTP Response object
 */
const response = (apiResponse: APIResponse, status: number): Response => {
  if (!apiResponse.success) console.error(apiResponse.error?.message);

  return new Response(JSON.stringify(apiResponse), {
    status: status,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
