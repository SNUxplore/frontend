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
      if (window.innerWidth >= 590) {
        window.scrollTo({
          top: contentContainer.offsetTop - 220,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: contentContainer.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [option]);

  function generateActionLinks(entry) {
    let actionLinks = [];
    if (entry.callWarden) {
      actionLinks.push({
        title: "Call",
        href: `tel:${entry.callWarden}`,
      });
    }
    if (entry.mailWarden) {
      actionLinks.push({
        title: "Mail",
        href: `mailto:${entry.mailWarden}`,
      });
    }
    if (entry.location) {
      actionLinks.push({
        title: "Map",
        href: entry.location,
      });
    }
    if (entry.menu) {
      actionLinks.push({
        title: "Menu",
        href: entry.menu,
      });
    }

    return actionLinks;
  }

  return (
    <div className="NavigatePage__content--right">
      {contextData[option].map((i, index) => (
        <PlaceCard
          key={index}
          name={i.name}
          actionLists={generateActionLinks(contextData[option][index])}
        />
      ))}
    </div>
  );
}
