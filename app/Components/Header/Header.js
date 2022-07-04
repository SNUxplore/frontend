import React from "react";
import appLogo from "../../Assets/Img/xploreLogo.svg";
import instagramLogo from "../../Assets/Img/instagramLogo.svg";
import facebookLogo from "../../Assets/Img/facebookLogo.svg";
import twitterLogo from "../../Assets/Img/twitterLogo.svg";

function Header() {
  return (
    <div className="HeaderWrapper">
      <div className="HeaderWrapper__left">
        <img
          className="HeaderWrapper__left--logo"
          src={appLogo}
          alt="snu explore Logo"
        />
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
          <a href="/faq">FAQs</a>
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
  );
}

export default Header;
