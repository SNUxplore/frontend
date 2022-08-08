import React from "react";
import { Link } from "@remix-run/react";
import data from "~/Assets/Data/data.json";
import { useMediaQuery } from "react-responsive";
import { Outlet, useLoaderData } from "@remix-run/react";
import SearchBar from "../Components/SearchBar/SearchBar";
import styleSheet from "~/styles/routes/Navigate/Navigate.css";
import MapContainer from "~/Components/MapContainer/MapContainer";

import poiIcon from "../Assets/Img/poiIcon.svg";
import penIcon from "../Assets/Img/penIcon.svg";
import cartIcon from "../Assets/Img/cartIcon.svg";
import foodIcon from "../Assets/Img/foodIcon.svg";
import upDropDown from "../Assets/Img/upDropDown.svg";
import xploreLogo from "../Assets/Img/newLogo.svg";
import downDropDown from "../Assets/Img/downDropDown.svg";
import basketBallIcon from "../Assets/Img/basketBallIcon.svg";
import residentialIcons from "../Assets/Img/residentialsIcon.svg";
import Footer from "~/Components/Footer/Footer";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  return request.url;
};

export default function Navigate() {
  const url = useLoaderData();
  const path = new URL(url).pathname.replace("/navigate/", "");

  const [currentOption, setCurrentOption] = React.useState(
    path ? path : Object.keys(data)[0]
  );
  const filterRef = React.useRef();
  const [styles, setStyle] = React.useState({
    height: "0px",
    overflow: "hidden",
    transitionDuration: "500ms",
    transitionProperty: "height",
    transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrollHeight, setScrollHeight] = React.useState(0);

  const mobile = useMediaQuery({
    query: "(min-width: 585px)",
  });

  let iconSrcPanel = {
    Residential: residentialIcons,
    Food: foodIcon,
    Academics: penIcon,
    Essentials: cartIcon,
    POI: poiIcon,
    Sports: basketBallIcon,
  };

  const styleOnMobile = {
    display: "flex",
    height: "fit-content",
  };

  let style;

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
      // setStyle({
      //   transitionDuration: "300ms",
      //   transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      //   transitionProperty: "height",
      //   overflow: "hidden",
      //   height: "0",
      // });

      // setTimeout(() => {
      setStyle({
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionProperty: "height",
        overflow: "hidden",
        height: ``,
      });
      // }, 50);
    } else {
      // setStyle({
      //   transitionDuration: "300ms",
      //   transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      //   transitionProperty: "height",
      //   overflow: "hidden",
      //   height: "0",
      // });
      // setTimeout(() => {
      setStyle({
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionProperty: "height",
        overflow: "hidden",
        display: "none",
      });
      // }, 290);
    }
  }, [isOpen]);

  return (
    <div className="NavigatePage">
      <div className="NavigatePage__left">
        <div className="NavigatePage__left--container" id="container">
          <div className="NavigatePage__left--header">
            <a href="/">
              <img
                src={xploreLogo}
                alt="xploreLogo"
                className="NavigatePage__left--header--logo"
              />
            </a>
            <a href="/" className="NavigatePage__left--header--back">
              &larr; Back to Home
            </a>
          </div>
          <div className="NavigatePage__left__content">
            <h1 className="NavigatePage__left__content--title">
              Navigate<span>Campus</span>
            </h1>
            <p className="NavigatePage__left__content--desc">
              Having an issue finding your way around campus? Don't worry we got
              you covered!
            </p>
          </div>
          <SearchBar style={{ width: "100%", marginBottom: "20px" }} />
          <div
            className={`NavigatePage__right--panel ${
              isOpen ? "NavigatePage__right--panel--active" : ""
            }`}
          >
            <button onClick={() => setIsOpen(!isOpen)}>
              <img alt="dropDown" src={isOpen ? upDropDown : downDropDown} />{" "}
              Filter your search
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
        </div>
        {!mobile && <Footer />}
      </div>

      <div className="NavigatePage__right" id="map">
        <MapContainer />
      </div>
    </div>
  );
}
