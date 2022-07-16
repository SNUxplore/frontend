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
          {dropdown && (
            <div>
              <li className="HeaderWrapper__middle--option"><p>Features</p></li>
              <div className = "HeaderWrapper__middle--lineSep"></div>
            

            </div>
            
          )}
          <li className="HeaderWrapper__middle--option">
            <a href="/navigate">{dropdown && (<img className = "HeaderWrapper__middle--option"
              src={locationIcon}
              alt="snu explore Logo"/>)}Navigate Campus</a>
          </li>
          <li className="HeaderWrapper__middle--option">
            <a href="/events">{dropdown && (<img className = "HeaderWrapper__middle--option fire"
              src={fireIcon}
              alt="snu explore Logo"/>)}Happening@SNU</a>
          </li>
          {dropdown && (
            <div>
              <li className="HeaderWrapper__middle--option"><p>Help and more</p></li>
              <div className = "HeaderWrapper__middle--lineSep"></div>
            

            </div>
            
          )}
          <li className="HeaderWrapper__middle--option">
            <a href="/admin">{dropdown && (<img className = "HeaderWrapper__middle--option fire"
              src={infoIcon}
              alt="snu explore Logo"/>)}Admins & Contact</a>
          </li>
          <li className="HeaderWrapper__middle--option">
            <a href="/faq">{dropdown && (<img className = "HeaderWrapper__middle--option fire"
              src={questionIcon}
              alt="snu explore Logo"/>)}FAQs</a>
          </li>
          <li className="HeaderWrapper__middle--option">
            <a href="/about">{dropdown && (<img className = "HeaderWrapper__middle--option fire"
              src={usersIcon}
              alt="snu explore Logo"/>)}About Us</a>
          </li>
        </ul>
        

        <div className="HeaderWrapper__right">
        
        {dropdown && (
            <div >
              <p className = "HeaderWrapper__right--paragraph">Social Medias</p>
              <div className = "HeaderWrapper__right--lineSep"></div>
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
