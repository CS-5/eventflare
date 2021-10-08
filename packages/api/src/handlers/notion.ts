import { Client } from "@notionhq/client";
import { RSVP } from "@eventflare/lib";

export const addNotionRSVP = async (rsvp: RSVP): Promise<void> => {
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) return;

  /* Create new client with API key */
  const notion = new Client({
    auth: NOTION_API_KEY,
  });

  /* Attempt to create new DB entry with RSVP info */
  const { fName, lName, email, number } = rsvp;
  await notion.pages.create({
    // BUG: This doesn't work
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: `${fName} ${lName}`,
            },
          },
        ],
      },
      "Number Attending": {
        number,
      },
      Email: {
        email,
      },
    } as any,
  });
};
