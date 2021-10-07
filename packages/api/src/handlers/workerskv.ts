import { RSVP } from "@weddingflare/lib";

export const addKVRSVP = async (rsvp: RSVP): Promise<void> => {
  if (!rsvp.id) return;
  return await WF_KV.put(rsvp.id, JSON.stringify(rsvp));
};

export const getKVRSVP = async (key: string): Promise<RSVP | null> => {
  return await WF_KV.get<RSVP>(key, "json");
};
