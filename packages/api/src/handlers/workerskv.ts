import { RSVP } from "@eventflare/lib";
import { createObjectCsvStringifier } from "csv-writer";

// Writes an RSVP to KV
export const addKVRSVP = async (rsvp: RSVP): Promise<void> => {
  if (!rsvp.id) return;
  return await EF_KV.put(rsvp.id, JSON.stringify(rsvp));
};

// Gets the RSVP details from the value matching the key provided
export const getKVRSVP = async (key: string): Promise<RSVP | null> => {
  return await EF_KV.get<RSVP>(key, "json");
};

// Generates a CSV with the 1000 most recent RSVPs (limited by the number of keys that can be listed in a single request)
export const getKVCSV = async (): Promise<string | undefined> => {
  const csvWriter = createObjectCsvStringifier({
    header: [
      { id: "id", title: "ID" },
      { id: "fName", title: "First Name" },
      { id: "lName", title: "Last Name" },
      { id: "number", title: "# Attending" },
      { id: "email", title: "Email" },
    ],
  });

  // This array could be typed as RSVP, but that could cause issues if an entry contains a Message.
  let records: {
    id: string;
    fName: string;
    lName: string;
    number: number;
    email: string;
  }[] = [];

  const keys = await EF_KV.list();

  for (const key of keys.keys) {
    const rsvp = await EF_KV.get<RSVP>(key.name, "json");
    if (rsvp) {
      records.push({
        id: rsvp.id ?? "00000000-0000-0000-0000-000000000000",
        fName: rsvp.fName,
        lName: rsvp.lName,
        number: rsvp.number,
        email: rsvp.email ?? "none@nobody.no",
      });
    }
  }

  if (records) {
    return `${csvWriter.getHeaderString()}${csvWriter.stringifyRecords(
      records,
    )}`;
  }
  return;
};
