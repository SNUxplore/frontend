import React from "react";
import appLogo from "../../Assets/Img/xploreLogo.svg";
import instagramLogo from "../../Assets/Img/instagramLogo.svg";
import facebookLogo from "../../Assets/Img/facebookLogo.svg";
import twitterLogo from "../../Assets/Img/twitterLogo.svg";
import locationIcon from "../../Assets/Img/locationIcon.svg";
import fireIcon from "../../Assets/Img/fireIcon.svg";
import infoIcon from "../../Assets/Img/infoIcon.svg";
import questionIcon from "../../Assets/Img/questionIcon.svg";
import usersIcon from "../../Assets/Img/usersIcon.svg";
import lightModeIcon from "../../Assets/Img/lightModeIcon.svg";
import darkModeIcon from "../../Assets/Img/darkModeIcon.svg";
import darkModeOneTheme from "../../Assets/Img/darkModeOneTheme.svg";
import darkModeTwoTheme from "../../Assets/Img/darkModeTwoTheme.svg";

import { useMediaQuery } from "react-responsive";

function Header() {
  const [navState, setNavState] = React.useState(false);
  const dropdown = useMediaQuery({
    query: "(max-width: 1530px)",
  });
  
  return (
    <nav className="HeaderWrapper">
      {dropdown && (
        <a href="/">
          <img
            className={`HeaderWrapper__left--logo ${
              navState ? "HeaderWrapper__left--logo--blur" : ""
            }`}
            src={appLogo}
            alt="snu explore Logo"
          />
        </a>
      )}
      <div
        className={`HeaderWrapper__menu ${
          navState ? "HeaderWrapper__menu--open" : ""
        }`}
      >
        <div className="HeaderWrapper__left">
          {!dropdown && (
            <a href="/">
              <img
                className="HeaderWrapper__left--logo"
                src={appLogo}
                alt="snu explore Logo"
              />
            </a>
          )}
        </div>
        <ul className="HeaderWrapper__middle">
          {dropdown && (
            <div style={{ width: "100%" }}>
              <li className="HeaderWrapper__middle--option">
                <p>Features</p>
              </li>
              <div className="HeaderWrapper__middle--lineSep"></div>
            </div>
          )}
          <li className="HeaderWrapper__middle--option">
            <a href="/navigate">
              {dropdown && (
                <img
                  className="HeaderWrapper__middle--option"
                  src={locationIcon}
                  alt="snu explore Logo"
                />
              )}
              Navigate Campus
            </a>
          </li>
          <li className="HeaderWrapper__middle--option">
            <a href="/events">
              {dropdown && (
                <img
                  className="HeaderWrapper__middle--option fire"
                  src={fireIcon}
                  alt="snu explore Logo"
                />
              )}
              Happening@SNU
            </a>
          </li>
          {dropdown && (
            <div style={{ marginTop: "17px", width: "100%" }}>
              <li className="HeaderWrapper__middle--option">
                <p>Help and more</p>
              </li>
              <div className="HeaderWrapper__middle--lineSep"></div>
            </div>
          )}
          <li className="HeaderWrapper__middle--option">
            <a href="/admin">
              {dropdown && (
                <img
                  className="HeaderWrapper__middle--option fire"
                  src={infoIcon}
                  alt="snu explore Logo"
                />
              )}
              Admins & Contact
            </a>
          </li>
          <li className="HeaderWrapper__middle--option">
            <a href="/faqs">
              {dropdown && (
                <img
                  className="HeaderWrapper__middle--option fire"
                  src={questionIcon}
                  alt="snu explore Logo"
                />
              )}
              FAQs
            </a>
          </li>
          <li className="HeaderWrapper__middle--option">
            <a href="/about">
              {dropdown && (
                <img
                  className="HeaderWrapper__middle--option fire"
                  src={usersIcon}
                  alt="snu explore Logo"
                />
              )}
              About Us
            </a>
          </li>
          {dropdown && (
            <div style={{ marginTop: "17px", width: "100%" }}>
              <li className="HeaderWrapper__middle--option">
                <p>Themes</p>
              </li>
              <div className="HeaderWrapper__middle--lineSep"></div>
            </div>
          )}
          {dropdown && (
            <li className="HeaderWrapper__middle--option">
              <a href="#">
                <img
                  className="HeaderWrapper__middle--option fire"
                  src={lightModeIcon}
                  alt="snu explore Logo"
                />
                Light Mode
              </a>
            </li>
          )}
          {dropdown && (
            <li className="HeaderWrapper__middle--option">
              <a href="#">
                <img
                  className="HeaderWrapper__middle--option fire"
                  src={darkModeIcon}
                  alt="snu explore Logo"
                />
                Dark Mode #1
                <img
                  className="HeaderWrapper__middle--option fire"
                  src={darkModeOneTheme}
                  style={{ marginLeft: '15px'}}
                  alt="snu explore Logo"
                />
              </a>
            </li>
          )}
          {dropdown && (
            <li className="HeaderWrapper__middle--option">
              <a href="#">
                <img
                  className="HeaderWrapper__middle--option fire"
                  src={darkModeIcon}
                  alt="snu explore Logo"
                />
                Dark Mode #2
                <img
                  className="HeaderWrapper__middle--option fire"
                  src={darkModeTwoTheme}
                  style={{ marginLeft: '15px', filter: 'none' }}
                  alt="snu explore Logo"
                />
              </a>
            </li>
          )}
        </ul>
        <div className="HeaderWrapper__right">
          {dropdown && (
            <div style={{ width: "100%" }}>
              <p className="HeaderWrapper__right--paragraph">Social Medias</p>
              <div className="HeaderWrapper__right--lineSep"></div>
            </div>
          )}
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
        {dropdown && (
          <div style={{ position: 'relative', width: "100%", height : "1000px" }}>
          <div className="HeaderWrapper__dots">
            <span className="HeaderWrapper__dots--dot"></span>
            <span className="HeaderWrapper__dots--dot"></span>
            <span className="HeaderWrapper__dots--dot"></span>
          </div>
          </div>
        )}
      </div>
      <div
        className="HeaderWrapper__Hamburger"
        style={{
          position: navState ? "fixed" : "",
          top: "41px",
          right: "30px",
        }}
      >
        <input
          type="checkbox"
          id="NavBarInput"
          onChange={() => {
            setNavState(!navState);
            document.querySelector('nav ~ div').style.filter = `${
              !navState ? "blur(3.5px)" : "none"
            }`
            document.querySelector('nav ~ main').style.filter = `${
              !navState ? "blur(3.5px)" : "none"
            }`
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
