import { json } from "@remix-run/node";
import { getEventsByClub } from "../services/club.server";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const emailId = url.searchParams.get("emailId");
  if (emailId === null || emailId === undefined)
    return json({ success: false, error: "Didn't give valid email ID" });

  return await getEventsByClub(emailId)
    .then((data) => data)
    .catch((e) => {
      throw new Error("Get events by club error" + e);
    });
};
