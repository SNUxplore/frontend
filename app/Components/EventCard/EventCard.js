import logoPreview from "../../Assets/Img/twitterLogo.svg";
import InfoModal from "../infoModal/InfoModal";

function EventCard({ eventName, logo, clubName, date, location, more, desc }) {
  const [isModalOpen, setModalOpen] = React.useState(false);
  return (
    <div className="EventCardWrapper">
      {isModalOpen && (
        <InfoModal data={eventName} setModalOpen={setModalOpen} />
      )}
      <div className="EventCardWrapper__left">
        <div className="EventCardWrapper__left--top">
          <img src={logoPreview} alt="logo" />
          <h4>{clubName}</h4>
        </div>
        <h2 className="EventCardWrapper__left--title">{eventName}</h2>
        <p className="EventCardWrapper__left--desc">{desc}</p>
      </div>
      <div className="EventCardWrapper__right">
        <p>{date}</p>
        <p>{location}</p>
        <button
          onClick={() => setModalOpen(true)}
          className="EventCardWrapper__right--button"
        >
          More Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;
