import { Client } from "@notionhq/client";
import { RSVP } from "@weddingflare/lib";

export const addNotionRSVP = async (rsvp: RSVP): Promise<void> => {
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) return;

  /* Create new client with API key */
  const notion = new Client({
    auth: NOTION_API_KEY,
  });

  /* Attempt to create new DB entry with RSVP info */
  await notion.pages.create({
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      title: {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: `${rsvp.fName} ${rsvp.lName}`,
            },
          },
        ],
      },
      "Number Attending": {
        type: "number",
        number: rsvp.number,
      },
      Email: {
        type: "email",
        email: rsvp.email,
      },
    } as any,
  });
};
