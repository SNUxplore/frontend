import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "./services/auth.server";

export const loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return json(user);
};
export default function CreateEvent() {
  const data = useLoaderData();
  console.log(data);
  return <div>Create Event</div>;
}
