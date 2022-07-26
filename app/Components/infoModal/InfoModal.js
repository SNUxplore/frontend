import React from "react";

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
            <img src="" alt="CLUB LOGO" />
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
