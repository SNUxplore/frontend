import logoPreview from "../../Assets/Img/twitterLogo.svg"

function EventCard() {
  return (
    <div className="EventCardWrapper">
      <div className="EventCardWrapper__card">
        <div className="EventCardWrapper__card__left">
          <div className="EventCardWrapper__card__left__club">
          <img src={logoPreview} />
          <h4>Club Name</h4>
          </div>
          <h2>Event Name</h2>
          <p>A&B Atrium</p>
          
        </div>
        <div className="EventCardWrapper__right">
          <p>20th July, 7:00 - 10:00 pm</p>
          
          <button>Read More &rarr;</button>
        </div>
      </div>
    </div>
  )
}

export default EventCard;