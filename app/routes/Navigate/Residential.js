import styleSheet from "~/styles/routes/Navigate/Residential.css";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function ResidentialPage() {
  return <div className="ResidentialPage">Residential Details</div>;
}
