import logoPreview from "../../Assets/Img/twitterLogo.svg";
import React from "react";
import fireIcon from "../../Assets/Img/modalFireIcon_lightTheme.svg";
import dateIcon from "../../Assets/Img/modaldateIcon_lightTheme.svg";
import timeIcon from "../../Assets/Img/modalTimeIcon_lightTheme.svg";
import locationIcon from "../../Assets/Img/modalLocationIcon_lightTheme.svg";
import appLogo from "../../Assets/Img/xploreLogo.svg";
import clubInstagram from "../../Assets/Img/insta_dark.svg";
import clubTwitter from "../../Assets/Img/twitter_dark.svg";
import clubFacebook from "../../Assets/Img/facebook_dark.svg";
import modalCloseIcon from "../../Assets/Img/modalClose__LightTheme.svg";

function InfoModal({ setModalOpen, data }) {
  return (
    <div className="ModalWrapper">
      <div className="ModalWrapper__container">
        <button
          className="ModalWrapper__container--closebtn"
          onClick={() => setModalOpen(false)}
        >
          <img src={modalCloseIcon} alt="modalCloseIcon" />
        </button>
        <div className="ModalWrapper__container__infoContainer">
          <h1 className="ModalWrapper__container__infoContainer--title">
            <img src={appLogo} alt="CLUB LOGO" />
            {data[2]}
          </h1>
          <p className="ModalWrapper__container__infoContainer--details">
            <img
              className="ModalWrapper__container__infoContainer--icon"
              src={fireIcon}
              alt="fire icon"
            />
            <span>Event :</span> {data[0]}
          </p>
          <p className="ModalWrapper__container__infoContainer--details">
            <img
              className="ModalWrapper__container__infoContainer--icon"
              src={timeIcon}
              alt="time icon"
            />
            <span>Timings :</span> 
            {data[3].split(" ")[1]} - {data[3].split(" ")[3]}
          </p>
          <p className="ModalWrapper__container__infoContainer--details">
            <img
              className="ModalWrapper__container__infoContainer--icon"
              src={dateIcon}
              alt="date icon"
            />
            <span>Date :</span>
            {data[3].split(" ")[0]}
          </p>
          <p className="ModalWrapper__container__infoContainer--details">
            <img
              className="ModalWrapper__container__infoContainer--icon"
              src={locationIcon}
              alt="Location icon"
            />
            <span>Location :</span> {data[4]}
          </p>
          <h3 className="ModalWrapper__container__infoContainer--titleSecondary">
            Description
          </h3>
          <p className="ModalWrapper__container__infoContainer--eventDesc">
            {data[6]}
          </p>
          <p className="ModalWrapper__container__infoContainer--titleSecondary">
            Club socials
          </p>
          <div className="ModalWrapper__container__infoContainer--socialsWrapper">
            <img
              src={clubInstagram}
              alt="clubInsta"
              className="ModalWrapper__container__infoContainer--Socialsicon"
            />
            <img
              src={clubTwitter}
              alt="clubTwitter"
              className="ModalWrapper__container__infoContainer--SocialsiconTW"
            />
            <img
              className="ModalWrapper__container__infoContainer--Socialsicon"
              src={clubFacebook}
              alt="clubFacebook"
            />
          </div>
          <a
            className="ModalWrapper__container__infoContainer--linkHighlight"
            href="https://ecellsnu.com/home"
          >
            https://ecellsnu.com/home
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
