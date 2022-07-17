import MockNavigator from "~/Components/MockNavigator/MockNavigator";
import styleSheet from "~/styles/routes/Events/Events.css";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function Index() {
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
