import { Client } from "@notionhq/client";
import { RSVP } from "@eventflare/lib";
import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";

export const addNotionRSVP = async (rsvp: RSVP): Promise<void> => {
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) return;

  /* Create new client with API key */
  const notion = new Client({
    auth: NOTION_API_KEY,
  });

  /* Attempt to create new DB entry with RSVP info */
  const { fName, lName, email, number } = rsvp;

  const newDoc: CreatePageParameters["properties"] = {
    Name: {
      type: "title",
      title: [
        {
          type: "text",
          text: {
            content: `${fName} ${lName}`,
          },
        },
      ],
    },
    "Number Attending": {
      type: "number",
      number,
    },
  };

  if (email) {
    newDoc["Email"] = {
      type: "email",
      email,
    };
  }

  await notion.pages.create({
    parent: { database_id: NOTION_DATABASE_ID },
    properties: newDoc,
  });
};
