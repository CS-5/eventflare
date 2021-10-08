import { RSVP } from "@weddingflare/lib";
import { createObjectCsvStringifier } from "csv-writer";

export const addKVRSVP = async (rsvp: RSVP): Promise<void> => {
  if (!rsvp.id) return;
  return await WF_KV.put(rsvp.id, JSON.stringify(rsvp));
};

export const getKVRSVP = async (key: string): Promise<RSVP | null> => {
  return await WF_KV.get<RSVP>(key, "json");
};

export const getKVCSV = async (): Promise<string> => {
  const csvWriter = createObjectCsvStringifier({
    header: [
      { id: "id", title: "ID" },
      { id: "fName", title: "First Name" },
      { id: "lName", title: "Last Name" },
      { id: "number", title: "# Attending" },
      { id: "email", title: "Email" },
    ],
  });

  let records: {
    id: string;
    fName: string;
    lName: string;
    number: string;
    email: string;
  } = [];

  // csvWriter.getHeaderString();
  // csvWriter.stringifyRecords(records);
};
