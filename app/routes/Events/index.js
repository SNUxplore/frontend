import { useLoaderData } from "@remix-run/react";
import MockNavigator from "~/Components/MockNavigator/MockNavigator";
import styleSheet from "~/styles/routes/Events/Events.css";
import { getEvents } from "../services/club.server";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  console.log({ request });
  const data = getEvents()
    .then((data) => data)
    .catch((err) => console.log(err));
  return data;
};

export default function Index() {
  const data = useLoaderData();
  // receives data, use it wisely
  console.log(data);
  return (
    <div className="EventsPage">
      <MockNavigator title="Events">
        <a href="/">Home</a>
        <a href="/admin">Admin</a>
        <a href="/navigate">Navigation</a>
        <a href="/faqs">FAQs</a>
      </MockNavigator>
    </div>
  );
}
