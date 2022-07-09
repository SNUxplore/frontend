import React from "react";
import appLogo from "../../Assets/Img/xploreLogo.svg";
import instagramLogo from "../../Assets/Img/instagramLogo.svg";
import facebookLogo from "../../Assets/Img/facebookLogo.svg";
import twitterLogo from "../../Assets/Img/twitterLogo.svg";

import { useMediaQuery } from "react-responsive";

function Header() {
  const [navState, setNavState] = React.useState(false);
  const dropdown = useMediaQuery({
    query: "(max-width: 1530px)",
  });

  return (
    <nav className="HeaderWrapper">
      {dropdown && (
        <img
          className="HeaderWrapper__left--logo"
          src={appLogo}
          alt="snu explore Logo"
        />
      )}
      <div
        className={`HeaderWrapper__menu ${
          navState ? "HeaderWrapper__menu--open" : ""
        }`}
      >
        <div className="HeaderWrapper__left">
          {!dropdown && (
            <img
              className="HeaderWrapper__left--logo"
              src={appLogo}
              alt="snu explore Logo"
            />
          )}
        </div>

        <ul className="HeaderWrapper__middle">
          <li className="HeaderWrapper__middle--option">
            <a href="/navigate">Navigate Campus</a>
          </li>
          <li className="HeaderWrapper__middle--option">
            <a href="/events">Happening@SNU</a>
          </li>
          <li className="HeaderWrapper__middle--option">
            <a href="/admin">Admins & Contact</a>
          </li>
          <li className="HeaderWrapper__middle--option">
            <a href="/faqs">FAQs</a>
          </li>
          <li className="HeaderWrapper__middle--option">
            <a href="/about">About Us</a>
          </li>
        </ul>

        <div className="HeaderWrapper__right">
          <a href="https://www.instagram.com/snu.xplore/">
            <img
              className="HeaderWrapper__right--logo"
              src={instagramLogo}
              alt="snu explore Logo"
            />
          </a>
          <a href="https://www.facebook.com/snu.explore/">
            <img
              className="HeaderWrapper__right--logo"
              src={facebookLogo}
              alt="snu explore Logo"
            />
          </a>
          <a href="https://twitter.com/snu_explore">
            <img
              className="HeaderWrapper__right--logo"
              src={twitterLogo}
              alt="snu explore Logo"
            />
          </a>
        </div>
      </div>
      <div className="HeaderWrapper__Hamburger">
        <input
          type="checkbox"
          id="NavBarInput"
          onChange={() => {
            setNavState(!navState);
            console.log(navState);
          }}
        />
        <div className="hamButton">
          <label className="HamMenu" htmlFor="NavBarInput">
            <span className="span HL1" />
            <span className="span HL2" />
            <span className="span HL3" />
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Header;
