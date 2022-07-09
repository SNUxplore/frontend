import styleSheet from "~/styles/routes/Navigate/Navigate.css";
import Header from "../../Components/Header/Header";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function Index() {
  return (
    <div className="NavigatePage">
      <Header />
    </div>
  );
}
