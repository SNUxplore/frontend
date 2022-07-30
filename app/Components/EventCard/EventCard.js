import React from "react";
import logoPreview from "../../Assets/Img/twitterLogo.svg";
import InfoModal from "../infoModal/InfoModal";
import appLogo from "../../Assets/Img/xploreLogo.svg";

function EventCard({ eventName, logo, clubName, date, location, more, desc }) {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [eventData, setEventData] = React.useState([]);
  return (
    <div className="EventCardWrapper">
      {isModalOpen && (
        <InfoModal data={eventData} setModalOpen={setModalOpen} />
      )}
      <div className="EventCardWrapper__left">
        <div className="EventCardWrapper__left--top">
          <img src={appLogo} alt="logo" />
          <h4>{clubName}</h4>
        </div>
        <h2 className="EventCardWrapper__left--title">{eventName}</h2>
        <p className="EventCardWrapper__left--location">{location}</p>
      </div>
      <div className="EventCardWrapper__right">
        <p>{date}</p>
        <button
          onClick={() => {
            setEventData([
              eventName,
              logo,
              clubName,
              date,
              location,
              more,
              desc,
            ]);
            setModalOpen(true);
          }}
          className="EventCardWrapper__right--button"
        >
          More Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;
