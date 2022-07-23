import { useLoaderData, useOutletContext, useParams } from "@remix-run/react";
import React from "react";
import PlaceCard from "~/Components/PlaceCard/PlaceCard";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  // return url.searchParams.get("redirect");
	// return a json of all the searchParams
	let paramJson = {};
	url.searchParams.forEach((value, key) => {
		paramJson[key] = value;
	});
	
	return paramJson;
	
	return url;
};

export default function NavOption() {
  const urlParams = useLoaderData();
  const [contextData] = useOutletContext();
	const { option } = useParams();
	const [highlighted, setHighlighted] = React.useState(false);
	
	React.useEffect(() => {
		if (highlighted) {
			setTimeout(() => {
				setHighlighted(false);
			}, 1500);
		}
	}, [highlighted]);
	 
	React.useEffect(() => {
		let scrollToElement;
		if (urlParams.name) {
			scrollToElement = document.getElementById(urlParams.name);
			setHighlighted(true);
		} else if (!urlParams.redirect) {
      scrollToElement = document.querySelector(
        "body > div > main > section.NavigatePage__main--content"
      );
		}
		if (scrollToElement) {
			if (window.innerWidth >= 590) {
				window.scrollTo({
					top: scrollToElement.offsetTop - 220,
					behavior: "smooth",
				});
			} else {
				window.scrollTo({
					top: scrollToElement.offsetTop,
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
    <div className="NavigatePage__content--right">
      {contextData[option].map((i, index) => (
        <PlaceCard
					key={index}
					name={i.name}
					highlighted={urlParams.name == i.name && highlighted}
          actionLists={generateActionLinks(contextData[option][index])}
          desc={i.description}
          src={i.image}
        />
      ))}
    </div>
  );
}
