import { Client } from "@notionhq/client";
import { RSVP } from "@weddingflare/lib";

export const notionRSVP = async (rsvp: RSVP): Promise<void> => {
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) return;

  /* Create new client with API key */
  const notion = new Client({
    auth: NOTION_API_KEY,
  });

  /* Attempt to create new DB entry with RSVP info */

  // TODO: Currently disabled for troubleshooting
  /*
  await notion.pages.create({
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      title: [],
      "Number Attending": {
        number: rsvp.number,
      },
      Email: {
        email: rsvp.email,
      },
    },
  });*/
};
