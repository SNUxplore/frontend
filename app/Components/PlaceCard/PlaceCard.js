import React from "react";
import placeholder from "~/Assets/Img/PlaceCard.png";
import ButtonLink from "../ButtonLink/ButtonLink";
function PlaceCard({ name, actionLists }) {
  return (
    <div className="PlaceCardWrapper">
      <div className="PlaceCardWrapper__content">
        <img
          className="PlaceCardWrapper--image"
          src={placeholder}
          alt="Placeholder"
        />
        <h2 className="PlaceCardWrapper__content--title">{name}</h2>
        <p className="PlaceCardWrapper__content--desc">
          This is where everyone comes to study and pass time...
        </p>
        {/* <p className="PlaceCardWrapper__content--poc">
          <span>Receptionist: </span>Gravida Mouna
        </p> */}
      </div>
      <div className="PlaceCardWrapper__actions">
        {actionLists.map((action, index) => (
          <a
            key={index}
            className="PlaceCardWrapper__actions--link"
            href={action.href}
            target="_blank"
          >
            {action.title}
          </a>
        ))}
        {/* <a className="PlaceCardWrapper__actions--link" href="#">
          Call
        </a>
        <a className="PlaceCardWrapper__actions--link" href="#">
          Mail
        </a> */}
      </div>
    </div>
  );
}

export default PlaceCard;
