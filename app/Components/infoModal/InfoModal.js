import logoPreview from "../../Assets/Img/twitterLogo.svg";
import React from "react";
import fireIcon from "../../Assets/Img/modalFireIcon_lightTheme.svg";
import dateIcon from "../../Assets/Img/modaldateIcon_lightTheme.svg";
import timeIcon from "../../Assets/Img/modalTimeIcon_lightTheme.svg";
import locationIcon from "../../Assets/Img/modalLocationIcon_lightTheme.svg";

function InfoModal({ setModalOpen, data }) {
  return (
    <div className="ModalWrapper">
      {console.log(data)}
      <div className="ModalWrapper__container">
        <button
          className="ModalWrapper__container--closebtn"
          onClick={() => setModalOpen(false)}
        >
          close
        </button>
        <div className="ModalWrapper__container__infoContainer">
          <h1 className="ModalWrapper__container__infoContainer--title">
            <img src={logoPreview} alt="CLUB LOGO" />
            {data[2]}
          </h1>
          <p className="ModalWrapper__container__infoContainer--details">
            <img src="" alt="fire icon" />
            <span>Event :</span> {data[0]}
          </p>
          <p className="ModalWrapper__container__infoContainer--details">
            <img src="" alt="time icon" />
            <span>Timings :</span> --
          </p>
          <p className="ModalWrapper__container__infoContainer--details">
            <span>
              {" "}
              <img src="" alt="date icon" />
              Date :
            </span>
            {data[3]}
          </p>
          <p className="ModalWrapper__container__infoContainer--details">
            <span>
              {" "}
              <img src="" alt="Location icon" />
              Location :
            </span>
            {data[4]}
          </p>
          <h3 className="ModalWrapper__container__infoContainer--titleSecondary">
            Description
          </h3>
          <p className="ModalWrapper__container__inforContainer--eventDesc">
            {data[6]}
          </p>
          <p className="ModalWrapper__container__infoContainer--titleSecondary">
            social icons here
          </p>
          <a href="www.google.com">
            <img src="" alt="link icon" />
            www.cowsAndBears.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
