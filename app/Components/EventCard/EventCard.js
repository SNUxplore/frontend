import logoPreview from "../../Assets/Img/twitterLogo.svg";
import moreDetailsCTA from "../../Components/moreDetailsCTA/moreDetailsCTA";

function EventCard({ eventName, logo, clubName, date, location, more, desc }) {
  return (
    <div className="EventCardWrapper">
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
      </div>
      <moreDetailsCTA />
    </div>
  );
}

export default EventCard;
