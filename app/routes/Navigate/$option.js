import { useLoaderData, useOutletContext, useParams } from "@remix-run/react";
import PlaceCard from "~/Components/PlaceCard/PlaceCard";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  return url.searchParams.get("redirect");
};

export default function NavOption() {
  const redirect = useLoaderData();
  const contextData = useOutletContext();
  const { option } = useParams();
  React.useEffect(() => {
    if (redirect === null) {
      const contentContainer = document.querySelector(
        "body > div > main > section.NavigatePage__main--content"
      );
      window.scrollTo({
        top: contentContainer.offsetTop - 220,
        behavior: "smooth",
      });
    }
  }, [option]);

  return (
    <div className="NavigatePage__content--right">
      {contextData[option].map((i, index) => (
        <PlaceCard key={index} />
      ))}
    </div>
  );
}
