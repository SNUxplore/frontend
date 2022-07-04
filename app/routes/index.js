import styleSheet from "~/styles/routes/LandingPage.css";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function LandingPage() {
  return <div className="LandingPage"></div>;
}
