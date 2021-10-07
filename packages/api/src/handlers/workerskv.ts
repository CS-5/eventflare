import { RSVP } from "@weddingflare/lib";
import { v4 as uuid } from "uuid";

export const addKVRSVP = async (rsvp: RSVP): Promise<void> => {
  return await WF_KV.put(uuid(), JSON.stringify(rsvp));
};

export const getKVRSVP = async (key: string): Promise<RSVP | null> => {
  return await WF_KV.get<RSVP>(key, "json");
};

export const getKVKeys = async (): Promise<string[]> => {
  const keys = (await WF_KV.list()).keys.map((key) => key.name);
  return keys;
};
