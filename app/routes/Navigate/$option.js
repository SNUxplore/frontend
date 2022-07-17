import { useParams } from "@remix-run/react";
import PlaceCard from "~/Components/PlaceCard/PlaceCard";

export default function NavOption() {
  const { option } = useParams();
  return (
    <div className="NavigatePage__content--right">
      {Array.from({ length: 8 }, (v, k) => k + 1).map((i, index) => (
        <PlaceCard key={index} />
      ))}
    </div>
  );
}
