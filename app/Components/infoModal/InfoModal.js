import fireIcon from "../../Assets/Img/modalFireIcon_lightTheme.svg";
import dateIcon from "../../Assets/Img/modaldateIcon_lightTheme.svg";
import timeIcon from "../../Assets/Img/modalTimeIcon_lightTheme.svg";
import locationIcon from "../../Assets/Img/modalLocationIcon_lightTheme.svg";
import appLogo from "../../Assets/Img/xploreLogo.svg";
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
            {data.logo}
          </h1>
          <p className="ModalWrapper__container__infoContainer--details">
            <img
              className="ModalWrapper__container__infoContainer--icon"
              src={fireIcon}
              alt="fire icon"
            />
            <span>Event :</span> {data.eventName}
          </p>
          <p className="ModalWrapper__container__infoContainer--details">
            <img
              className="ModalWrapper__container__infoContainer--icon"
              src={timeIcon}
              alt="time icon"
            />
            <span>Timings :</span> {data.startTime} - {data.endTime}
          </p>
          <p className="ModalWrapper__container__infoContainer--details">
            <img
              className="ModalWrapper__container__infoContainer--icon"
              src={dateIcon}
              alt="date icon"
            />
            <span>Date :</span>
            {data.date}
          </p>
          <p className="ModalWrapper__container__infoContainer--details">
            <img
              className="ModalWrapper__container__infoContainer--icon"
              src={locationIcon}
              alt="Location icon"
            />
            <span>Location :</span> {data.location}
          </p>
          <h3 className="ModalWrapper__container__infoContainer--titleSecondary">
            Description
          </h3>
          <p className="ModalWrapper__container__infoContainer--eventDesc">
            {data.desc}
          </p>
          <p className="ModalWrapper__container__infoContainer--titleSecondary">
            Club socials
          </p>
          {data.websiteUrl ? (
            <div className="ModalWrapper__container__infoContainer--socialsWrapper">
              <p>Webpage link :</p>
              <a
                className="ModalWrapper__container__infoContainer--linkHighlight"
                href={data.websiteUrl}
              >
                {data.websiteUrl}
              </a>
            </div>
          ) : (
            <></>
          )}
          {data.instagramUrl ? (
            <div className="ModalWrapper__container__infoContainer--socialsWrapper">
              <p>Instagram Link :</p>
              <a
                className="ModalWrapper__container__infoContainer--linkHighlight"
                href={data.instagramUrl}
              >
                {data.instagramUrl}
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
