import styleSheet from "~/styles/routes/demo.css";
import Footer from "~/Components/Footer/Footer";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function DemoPage() {
  return <div className="DemoPage">This is a demo page template.
  <Footer/>
  </div>;
}
