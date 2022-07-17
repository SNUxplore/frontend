import React from "react";
import placeholder from "~/Assets/Img/PlaceCard.png";
import ButtonLink from "../ButtonLink/ButtonLink";
function PlaceCard(props) {
  return (
    <div className="PlaceCardWrapper">
      <img
        className="PlaceCardWrapper--image"
        src={placeholder}
        alt="Placeholder"
      />
      <div className="PlaceCardWrapper__content">
        <h2 className="PlaceCardWrapper__content--title">Library</h2>
        <p className="PlaceCardWrapper__content--desc">
          This is where everyone comes to study and pass time...
          <a className="PlaceCardWrapper__content--viewMore" href="#">
            View More
          </a>
        </p>
        <p className="PlaceCardWrapper__content--poc">
          <span>Receptionist: </span>Gravida Mouna
        </p>
        <div className="PlaceCardWrapper__actions">
          <a className="PlaceCardWrapper__actions--link" href="#">
            Call
          </a>
          <a className="PlaceCardWrapper__actions--link" href="#">
            Mail
          </a>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
