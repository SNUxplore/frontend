import MockNavigator from "~/Components/MockNavigator/MockNavigator";
import styleSheet from "~/styles/routes/Faqs/Faqs.css";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function Index() {
  return (
    <div className="FaqsPage">
      <MockNavigator title="FAQa">
        <a href="/">Home</a>
        <a href="/admin">Admin</a>
        <a href="/events">Events</a>
        <a href="/navigate">Navigation</a>
      </MockNavigator>
    </div>
  );
}
