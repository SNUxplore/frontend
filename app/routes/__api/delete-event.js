import { deleteEvent } from "../services/club.server";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const id = parseInt(url.searchParams.get("id"));

  const data = await deleteEvent(id);
  return null;
};
