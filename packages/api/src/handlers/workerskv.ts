import { RSVP } from "@weddingflare/lib";
import { v4 as uuid } from "uuid";

export const kvRSVP = async (rsvp: RSVP): Promise<void> => {
  await WF_DEV_KV.put(uuid(), JSON.stringify(rsvp));
};

export const getRSVP = async (key: string): Promise<RSVP> => {
  return JSON.parse(await WF_DEV_KV.get(key, type: "json")) as RSVP;
};
