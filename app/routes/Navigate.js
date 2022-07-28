import React from "react";
import styleSheet from "~/styles/routes/Navigate/Navigate.css";
import { Outlet, useLoaderData } from "@remix-run/react";
import data from "~/Assets/Data/data.json";
import { Link } from "@remix-run/react";
import xploreLogo from "../Assets/Img/xploreLogo.svg";
import upDropDown from "../Assets/Img/upDropDown.svg";
import downDropDown from "../Assets/Img/downDropDown.svg";
import residentialsIcons from "../Assets/Img/residentialsIcon.svg";
import foodIcon from "../Assets/Img/foodIcon.svg";
import penIcon from "../Assets/Img/penIcon.svg";
import cartIcon from "../Assets/Img/cartIcon.svg";
import poiIcon from "../Assets/Img/poiIcon.svg";
import basketBallIcon from "../Assets/Img/basketBallIcon.svg";
import MapContainer from "~/Components/MapContainer/MapContainer";

import { useMediaQuery } from "react-responsive";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  return request.url;
};
export default function Navigate() {
  const mobile = useMediaQuery({
    query: "(min-width: 585px)",
  });
  let iconSrcPanel = {
    Residential: residentialsIcons,
    Food: foodIcon,
    Academics: penIcon,
    Essentials: cartIcon,
    POI: poiIcon,
    Sports: basketBallIcon,
  };
  const url = useLoaderData();
  const path = new URL(url).pathname.replace("/navigate/", "");
  const [currentOption, setCurrentOption] = React.useState(
    path ? path : Object.keys(data)[0]
  );
  React.useEffect(() => {
    // Dynamically change left container's height
    const changeHeight = () => {
      const height = document
        .querySelector(".NavigatePage__main--content")
        .getBoundingClientRect().height;
      document.querySelector(".NavigatePage__content--left").style.height =
        height + "px";
    };

    const resize_ob = new ResizeObserver(function (entries) {
      let rect = entries[0].contentRect;
      let height = rect.height;
      document.querySelector(".NavigatePage__content--left").style.height =
        height + "px";
    });

    window.onload = changeHeight;
    window.onresize = changeHeight;
    resize_ob.observe(document.querySelector(".NavigatePage__content--right"));
  });

  const [isOpen, setIsOpen] = React.useState(false);
  const filterRef = React.useRef();
  const [scrollHeight, setScrollHeight] = React.useState(0);

  const [styles, setStyle] = React.useState({
    transitionDuration: "500ms",
    transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    transitionProperty: "height",
    height: "0px",
    overflow: "hidden",
  });

  const styleOnMobile = {
    display: "flex",
    height: "fit-content",
    width: "100%",
  };

  var style;

  if (mobile) {
    style = styles;
  } else {
    style = styleOnMobile;
  }

  React.useEffect(() => {
    if (filterRef.current.scrollHeight != 0) {
      setScrollHeight(filterRef.current.scrollHeight);
    }
  });

  React.useEffect(() => {
    if (isOpen) {
      setStyle({
        transitionDuration: "300ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionProperty: "height",
        overflow: "hidden",
        height: "0",
      });

      setTimeout(() => {
        setStyle({
          transitionDuration: "500ms",
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transitionProperty: "height",
          overflow: "hidden",
          height: `${scrollHeight}px`,
          paddingBottom: "1.5rem",
        });
      }, 50);
    } else {
      setStyle({
        transitionDuration: "300ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionProperty: "height",
        overflow: "hidden",
        height: "0",
      });
      setTimeout(() => {
        setStyle({
          transitionDuration: "500ms",
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transitionProperty: "height",
          overflow: "hidden",
          display: "none",
        });
      }, 290);
    }
  }, [isOpen]);

  return (
    <div className="NavigatePage">
      <div className="NavigatePage__left">
        <container id="container">
          <div className="NavigatePage__left--header">
            <a href="/">
              <img
                src={xploreLogo}
                className="NavigatePage__left--header--logo"
              />
            </a>
            <a href="/" className="NavigatePage__left--header--back">
              &larr; Back to Home
            </a>
          </div>
          <div className="NavigatePage__left__content">
            <p className="NavigatePage__left__content--title">
              Navigate<span>Campus</span>
            </p>
            <p>
              Having an issue finding your way around campus? Don't worry we got
              you covered!
            </p>
          </div>
          <SearchBar style={{ width: "100%", marginBottom: "12%" }} />
          <div className="NavigatePage__right--panel">
            <button
              className={`NavigatePage__right--panel" ${
                isOpen ? "NavigatePage__right--panel--active" : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={isOpen ? upDropDown : downDropDown} /> Filter your
              search
            </button>
            <div
              className="NavigatePage__right--panel--ac"
              style={style}
              ref={filterRef}
            >
              {Object.keys(data).map((key, index) => (
                <Link
                  replace
                  className={`${currentOption === key ? "activeTab" : ""}`}
                  key={index}
                  to={`/navigate/${key}`}
                  onClick={() => setCurrentOption(key)}
                >
                  <div>
                    <img src={iconSrcPanel[key]} /> {key}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Outlet context={data} />
        </container>
      </div>

      {mobile && (
        <div className="NavigatePage__right" id="map">
          {/* <iframe
            frameBorder="0"
            styles="border:0"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAWWT0hia4MlZlReCvmoWB4PiOdxAy6elI &q=Shiv+nadar+university+delhi+noida"
            allowfullscreen
          ></iframe> */}
          <MapContainer />
        </div>
      )}
    </div>
  );
}
