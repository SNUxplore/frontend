import React from "react";
// import appLogo from "../../Assets/Img/newLogo.svg";
import appLogo from "../../Assets/Img/logo.svg";
import darkModeDesktop from "../../Assets/Img/darkModeThemeDesktop.svg";
import darkModeFillTheme from "../../Assets/Img/darkModeFillTheme.svg";
import darkModeNotActive from "../../Assets/Img/darkModeNotActive.svg";
import pinkModeFillTheme from "../../Assets/Img/pinkModeFillTheme.svg";
import { NavLink } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import { useLoaderData } from "@remix-run/react";
import SearchBar from "../SearchBar/SearchBar";
import ButtonLink from "../ButtonLink/ButtonLink";

function Header() {
  const node = React.useRef();
  const url = useLoaderData();
  const [currentTheme, setCurrentTheme] = React.useState("light");


  React.useEffect(() => {
    if (localStorage.getItem("theme")) {
      setCurrentTheme(localStorage.getItem("theme"));
      // setCurrentTheme('light');
    }
  });

  const dropdown = useMediaQuery({
    query: "(max-width: 1230px)",
  });

  let themeIconSrc = {
    light: darkModeDesktop,
    dark: darkModeFillTheme,
    pink: darkModeNotActive,
  };

  let themeStyle = {
    light: "rgba(54, 59, 83, 0.09)",
    dark: "rgba(217, 217, 217, 0.05)",
    pink: "rgba(217, 217, 217, 0.05)",
  };

  let pinkThemeIconSrc = {
    light: darkModeDesktop,
    dark: darkModeNotActive,
    pink: pinkModeFillTheme,
  };

  return (
    <nav ref={node} className="HeaderWrapper">
      <div className="HeaderWrapper__menu">
        <div className="HeaderWrapper__left">
          <a href="/">
            <img src={appLogo} alt="snu explore Logo" />
          </a>
          <div className="HeaderWrapper__left--searchBar">
            <SearchBar />
          </div>
        </div>

        <div className="HeaderWrapper__right">
          {/* <ButtonLink href="https://www.instagram.com/snu.xplore/"
            className="HeaderWrapper__right--contactButton"
            content="Contact"
          /> */}
          {/* <button>
            Contact
          </button> */}
          <a href="https://www.instagram.com/snu.xplore/" target="_blank" className="HeaderWrapper__right--contactButton">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;