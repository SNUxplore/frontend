import React from "react";
import appLogo from "../../Assets/Img/logo.svg";
import NavbarDropdown from "../../Assets/Img/NavbarDropdown.svg";

function Navbar() {
  return (
    <div className="NavbarWrapper">
        <div className="NavbarWrapper__left">
            <a href="/" className="NavbarWrapper__dropdown">
                {/* <img src={appLogo} className="NavbarWrapper__dropdown--logo" />
                <span>home</span> */}
                <img src={NavbarDropdown} className="NavbarWrapper__dropdown--logo" />
            </a>
        </div>
        <div className="NavbarWrapper__right">
            <div className="NavbarWrapper__items">
                {/* <a href="" className="NavbarWrapper__items--item NavbarWrapper__items--GPT">SNU-GPT</a> */}
                <a href="/snugpt" className="NavbarWrapper__items--item">SNU-GPT</a>
                <a href="/#features" className="NavbarWrapper__items--item">Features</a>
                <a href="/about" className="NavbarWrapper__items--item">About</a>
                {/* <a href="" className="NavbarWrapper__items--item NavbarWrapper__items--Contact">Contact</a> */}
                <a href="/about" className="NavbarWrapper__items--item">Contact</a>
            </div>
        </div>
    </div> 
  );
}

export default Navbar;
