import { useLoaderData, useOutletContext, useParams } from "@remix-run/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import DropPlaceCard from "~/Components/DropPlaceCard/DropPlaceCard";
import PlaceCard from "~/Components/PlaceCard/PlaceCard";
import NavigateCard from "~/Components/NavigateCard/NavigateCard";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  let paramJson = {};
  url.searchParams.forEach((value, key) => {
    paramJson[key] = value;
  });

  return paramJson;
};

export default function NavOption() {
  const urlParams = useLoaderData();
  const contextData = useOutletContext();
  const { option } = useParams();
  const [highlighted, setHighlighted] = React.useState(false);

  const mobile = useMediaQuery({
    query: "(min-width: 585px)",
  });

  React.useEffect(() => {
    if (highlighted) {
      setTimeout(() => {
        setHighlighted(false);
      }, 1500);
    }
  }, [highlighted]);

  React.useEffect(() => {
    let scrollToElement;
    let container;
    if (urlParams.name) {
      scrollToElement = document.getElementById(urlParams.name);
      container = document.getElementById("container");
      setHighlighted(true);
    } else if (!urlParams.redirect) {
      scrollToElement = document.querySelector(
        "body > div > main > section.NavigatePage__main--content"
      );
    }
    if (scrollToElement) {
      if (window.innerWidth >= 585) {
        window.scrollTo({
          top: scrollToElement.offsetTop - 50,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: scrollToElement.offsetTop - 20,
          behavior: "smooth",
        });
      }
    }
  }, [option, urlParams]);

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
    <>
      <div className="NavigatePage__content--right NavigatePage__content--desktop">
        {mobile &&
          contextData[option].map((i, index) => (
            <NavigateCard
              key={index}
              name={i.name}
              highlighted={urlParams.name == i.name && highlighted}
              actionLists={generateActionLinks(contextData[option][index])}
              desc={i.description}
              src={i.image}
            />
          ))}

        {/* {mobile && contextData[option].map((i, index) => (
          <PlaceCard
            key={index}
            name={i.name}
            highlighted={urlParams.name == i.name && highlighted}
            actionLists={generateActionLinks(contextData[option][index])}
            desc={i.description}
            src={i.image}
          />
        ))} */}
      </div>
      <div className="NavigatePage__content--right NavigatePage__content--mobile">
        {!mobile &&
          contextData[option].map((i, index) => (
            <DropPlaceCard
              key={index}
              name={i.name}
              highlighted={urlParams.name == i.name && highlighted}
              actionLists={generateActionLinks(contextData[option][index])}
              desc={i.description}
              src={i.image}
            />
          ))}
      </div>
    </>
  );
}
