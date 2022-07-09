import styleSheet from "~/styles/routes/Navigate/Food.css";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function FoodPage() {
  return <div className="FoodPage">Food related stuff</div>;
}
