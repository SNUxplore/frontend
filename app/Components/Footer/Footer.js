// import xploreLogo from "app/Assets/Img/logo_blue.svg";
import Mail from "app/Assets/Img/Mail.svg";
import Call from "app/Assets/Img/Call.svg";
import instagramLogoWhite from "app/Assets/Img/instagramLogoWhite.svg";
import FooterLogo from "app/Assets/Img/FooterLogo.svg";
import linkedInLogo from "app/Assets/Img/linkedInLogo.svg";

function Footer() {
  return (
    <div className="FooterWrapper">
      <div className="FooterWrapper__container">
        <div className="FooterWrapper__top">
          <div className="FooterWrapper__left">
            <img
              src={FooterLogo}
              alt="xplore Logo"
              className="FooterWrapper__left--logo"
            />
            
          </div>

          <div className="FooterWrapper__right">
            <ul className="FooterWrapper__right--Service">
              <li className="SocialMediaHandles" id="SocialMediaMobile">
                <a target="_blank" href="https://www.linkedin.com/company/snuxplore" rel="noreferrer">
                  <img
                    src={linkedInLogo}
                    alt="LinkedIn logo"
                    className="SocialMediaIcons LinkedIn"
                  />
                </a>
                <a target="_blank" href="https://www.instagram.com/snu.xplore/" rel="noreferrer">
                  <img
                    src={instagramLogoWhite}
                    alt="Instagram logo"
                    className="SocialMediaIcons"
                  />
                </a>
              </li>
              <li className="FooterWrapper__right--rowHeading">Services</li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/navigate">Navigate Campus</a>
              </li>
              <li>
                <a href="/snugpt">SNU-GPT</a>
              </li>
            </ul>
            {/* <ul className="FooterWrapper__right--Service">
              <li className="FooterWrapper__right--rowHeading">Resources</li>
              <li>
                <a href="/faqs">FAQ</a>
              </li>
              <li>
                <a href="/admin">Admin</a>
              </li>
              <li>
                <a href="/club">Club login</a>
              </li>
            </ul> */}
            <ul className="FooterWrapper__right--Service">
              <li className="FooterWrapper__right--rowHeading">Contacts</li>
              <li className="mailIcon">
                <img src={Mail} alt="Mail Icon" />
                <a href="mailto:">snuxplore@gmail.com</a>
              </li>
              <li className="callIcon">
                <img src={Call} alt="Call" />
                <a href="tel:">+91 9838834210</a>
              </li>
              <li className="SocialMediaHandles">
                <a target="_blank" href="https://www.linkedin.com/company/snuxplore" rel="noreferrer">
                  <img
                    src={linkedInLogo}
                    alt="LinkedIn logo"
                    className="SocialMediaIcons LinkedIn"
                  />
                </a>
                <a target="_blank" href="https://www.instagram.com/snu.xplore/" rel="noreferrer">
                  <img
                    src={instagramLogoWhite}
                    alt="Instagram logo"
                    className="SocialMediaIcons"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="FooterWrapper__bottom">
          <p className="FooterWrapper__bottom--Copyright">
            © 2022 SNUxplore, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
