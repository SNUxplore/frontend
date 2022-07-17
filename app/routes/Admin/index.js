import MockNavigator from "~/Components/MockNavigator/MockNavigator";
import styleSheet from "~/styles/routes/Admin/Admin.css";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function Index() {
  return (
    <div className="AdminPage">
      <MockNavigator title="Admin">
        <a href="/">Home</a>
        <a href="/navigate">Navigation</a>
        <a href="/events">Events</a>
        <a href="/faqs">FAQs</a>
      </MockNavigator>
    </div>
  );
}
