import MockNavigator from "~/Components/MockNavigator/MockNavigator";
import styleSheet from "~/styles/routes/LandingPage.css";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <MockNavigator title="Landing Page">
        <a href="/navigation">Navigation</a>
        <a href="/admin">Admin</a>
        <a href="/events">Events</a>
        <a href="/faqs">FAQs</a>
      </MockNavigator>
    </div>
  );
}
