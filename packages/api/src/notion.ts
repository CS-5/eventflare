import { Client } from "@notionhq/client";
import { RSVP } from "./types";

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

let enabled = false;
if (NOTION_API_KEY) {
  enabled = true;
}

export const notionRSVP = async (rsvp: RSVP): Promise<void> => {
  if (!enabled || !NOTION_DATABASE_ID) return;

  /* Create new client with API key */
  const notion = new Client({
    auth: NOTION_API_KEY,
  });

  /* Attempt to create new DB entry with RSVP info */
  await notion.pages.create({
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      Name: {
        title: [
          {
            type: "text",
            rich_text: { content: `${rsvp.fName} ${rsvp.lName}` },
          },
        ],
      },
      "Number Attending": {
        number: rsvp.number,
      },
      Email: {
        email: rsvp.email,
      },
    } as any,
  });
};
