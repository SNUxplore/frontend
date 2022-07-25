import logoPreview from "../../Assets/Img/twitterLogo.svg";

function EventCard({ eventName, logo, clubName, date, location, more, desc }) {
  return (
    <div className="EventCardWrapper">
      <div className="EventCardWrapper__left">
        <div className="EventCardWrapper__left--top">
          <img src={logoPreview} alt="logo" />
          <h4>{clubName}</h4>
        </div>
        <h2 className="EventCardWrapper__left--title">{eventName}</h2>
        <p className="EventCardWrapper__left--location">{location}</p>
      </div>
      <div className="EventCardWrapper__right">
        <p className="EventCardWrapper__right--date">{date}</p>
        <button className="EventCardWrapper__right--button">
          More Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;
