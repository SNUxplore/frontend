import { redirect } from "@remix-run/node";
import { useLoaderData, useOutletContext, useParams } from "@remix-run/react";
import PlaceCard from "~/Components/PlaceCard/PlaceCard";
import InfoContainer from "~/Components/InfoContainer/InfoContainer";
import AcademicInfo from "~/Components/AcademicInfo/AcademicInfo";

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

export default function AdminDetails() {
  const urlParams = useLoaderData();
  const admin = useOutletContext();
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
        "body > div > div.InfoContainer__head__header"
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
  const adminData = {};
  admin[option].forEach((item) => {
    if (adminData[item.type] instanceof Array) {
      adminData[item.type].push({ ...item });
    } else {
      adminData[item.type] = [{ ...item }];
    }
  });

  return (
    <div className="AdminPage__content--right">
      {option === "Academics" &&
        admin[option].map((entry, index) => {
          return (
            <InfoContainer
              key={index}
              data={entry}
              isAdmin={false}
            />
          );
        })}
        {option === "Admin Info" &&
        Object.keys(adminData).map((entry, index) => {
          return (
            <InfoContainer
              key={index}
              data={adminData[entry]}
              type={entry}
              isAdmin={true}
            />
          );
        })}
    </div>
  );
}
