import { v4 as uuid } from "uuid";
import type { RSVP, APIResponse } from "../../types";
import { createObjectCsvStringifier } from "csv-writer";


export const onRequestPost: PagesFunction<{
  EF_RSVP_RESPONSES: KVNamespace;
  NOTION_API_KEY: string;
  NOTION_DATABASE_ID: string;
  SENDGRID_API_KEY: string;
}> = async ({ request, env }) => {
  const rsvp: RSVP = await request.json();

  if (!rsvp) {
    return response(
      {
        success: false,
        message: "No RSVP data provided",
      },
      400
    );
  }

  try {
    rsvp.id = uuid();

    // RSVP > KV
    // TODO: After converting this project to CF Pages Functions, this check may not be required
    if (typeof env.EF_RSVP_RESPONSES !== "undefined")
      await addKVRSVP(env.EF_RSVP_RESPONSES, rsvp);

    return response(
      { success: true, message: "RSVP Successful", result: rsvp },
      200
    );
  } catch (err) {
    if (err instanceof Error) {
      return response(
        {
          success: false,
          message: "Worker error",
          error: err,
        },
        500
      );
    }
  }

  return response(
    {
      success: false,
      message: "Unknown error",
    },
    500
  );
};

export const onRequestGet: PagesFunction<{
  WF_RSVP_RESPONSES: KVNamespace;
}> = async ({ request, env }) => {
  const csvWriter = createObjectCsvStringifier({
    header: [
      { id: "id", title: "ID" },
      { id: "fName", title: "First Name" },
      { id: "lName", title: "Last Name" },
      { id: "attending", title: "Attending Y/N" },
      { id: "number", title: "Attending #" },
    ],
  });

  const records: {
    id: string;
    fName: string;
    lName: string;
    attending: boolean;
    number: number;
  }[] = [];

  const keys = await env.WF_RSVP_RESPONSES.list();

  for (const key of keys.keys) {
    const rsvp = await env.WF_RSVP_RESPONSES.get<RSVP>(key.name, "json");
    if (rsvp) {
      records.push({
        id: rsvp.id ?? "00000000-0000-0000-0000-000000000000",
        fName: rsvp.fName,
        lName: rsvp.lName,
        attending: rsvp.attending,
        number: rsvp.number,
      });
    }
  }

  if (records) {
    return new Response(
      `${csvWriter.getHeaderString()}${csvWriter.stringifyRecords(records)}`
    );
  }
  return response(
    {
      success: false,
      message: "No records found",
    },
    404
  );
};

/**
 * Adds a new RSVP to the KV store
 * @param store the KVNamespace to add the RSVP to
 * @param rsvp The RSVP object to add to the KV store
 * @returns A promise that resolves when the RSVP is added to the KV store
 */
const addKVRSVP = async (store: KVNamespace, rsvp: RSVP): Promise<void> => {
  if (!rsvp.id) return;
  return await store.put(rsvp.id, JSON.stringify(rsvp));
};

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
