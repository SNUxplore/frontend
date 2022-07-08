import xploreLogo from "app/Assets/Img/xploreLogo.svg";
import Mail from "app/Assets/Img/Mail.svg";
import Call from "app/Assets/Img/Call.svg";
import facebookLogoWhite from"app/Assets/Img/facebookLogoWhite.svg";
import instagramLogoWhite from "app/Assets/Img/instagramLogoWhite.svg";
import linkedInLogo from "app/Assets/Img/linkedInLogo.svg";

function Footer () {
    return (
        <div className = "FooterBackground">
            <div className = "LogoandTag">
            <img src = {xploreLogo} alt = "xplore Logo"  className="Logo"/>
            <p className = "CopyrightTag" >© 2022 SnuExplore, All Rights Reserved</p>

            </div>
            
            <ul className = "Service">
                <li className = "RowHeading">Services</li>
                <li><a href="/about">About us</a></li>
                <li><a href="/navigate">Navigate Campus</a></li>
                <li><a href="/events">Happening @SNU</a></li>
                <li><a href="/events">Events</a></li>
            </ul>
            <ul className = "Resources Service">
                <li className = "RowHeading">Resources</li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/admin">Admin</a></li>
                <li><a href="/club">Club login</a></li>
            </ul>

            <ul className = "Contacts Service">
                <li className = "RowHeading">Contacts</li>
                <li className = "mailIcon"><img src={Mail} alt="Mail Icon" /> Xplore@snu.edu.in</li>
                <li className = "callIcon"><img src= {Call} alt="Call"/> +91 9838834210</li>
                <li className = "SocialMediaHandles"><a href="https://www.facebook.com/snu.explore/"><img src= {facebookLogoWhite} alt="Facebook logo" className = "SocialMediaIcons"/></a><a href="https://www.linkedin.com/snu.xplore/"><img src= {linkedInLogo} alt="LinkedIn logo" className = "SocialMediaIcons LinkedIn"/></a><a href="https://www.instagram.com/snu.xplore/"><img src= {instagramLogoWhite} alt="Instagram logo" className = "SocialMediaIcons"/></a></li>
                
            </ul>

          

        </div>
    );

}

export default Footer;