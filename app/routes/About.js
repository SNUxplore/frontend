import react from "react";
import Header from "~/Components/Header/Header";
import styleSheet from "~/styles/routes/About/About.css";
import Footer from "~/Components/Footer/Footer";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function About() {
  return (
    <div>
      <Header />
      
      <Footer />
    </div>
  )
}