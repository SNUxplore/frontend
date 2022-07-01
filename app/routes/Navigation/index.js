import MockNavigator from "~/Components/MockNavigator/MockNavigator";
import styleSheet from "~/styles/routes/Navigation/Navigation.css";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function Index() {
  return (
    <div className="NavigationPage">
      <MockNavigator title="Navigation">
        <a href="/">Home</a>
        <a href="/admin">Admin</a>
        <a href="/events">Events</a>
        <a href="/faqs">FAQs</a>
      </MockNavigator>
      <MockNavigator title="Navigation-Sub links">
        <a href="/navigation/residential">Residential</a>
        <a href="/navigation/food">Food</a>
        {/* You get the idea */}
      </MockNavigator>
    </div>
  );
}
