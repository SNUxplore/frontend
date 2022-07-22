import React from "react";
import placeholder from "~/Assets/Img/PlaceCard.png";
import ButtonLink from "../ButtonLink/ButtonLink";
import mapLogo from "../../Assets/Img/mapIcon2.svg";
import callLogo from "../../Assets/Img/Call.svg";
import mailLogo from "../../Assets/Img/Mail.svg";
import foodMenuLogo from "../../Assets/Img/foodMenu.svg";

import { useMediaQuery } from "react-responsive";

function PlaceCard({ name, actionLists, desc, src, highlighted }) {
  const iconShow = useMediaQuery({
    query: "(max-width: 450px)",
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <div
      id={name}
      className={`PlaceCardWrapper ${
        highlighted ? "PlaceCardWrapper--highlighted" : ""
      }`}
    >
      <div className="PlaceCardWrapper__content ">
      <img
        className="PlaceCardWrapper--image"
        src={src != "" ? src : placeholder}
        alt="Placeholder"
      />
        <div className="PlaceCardWrapper__content--text">
          <h2 className="PlaceCardWrapper__content--title" onClick={toggling}>
            {name}
          </h2>

          <p className="PlaceCardWrapper__content--desc">{desc}</p>
        </div>
      </div>
      <div className="PlaceCardWrapper__actions">
        {actionLists.map((action, index) => (
          <a
            key={index}
            className="PlaceCardWrapper__actions--link"
            href={action.href}
            target="_blank"
          >
            {action.title == "Map" && (
              <img
                className="PlaceCardWrapper__actions--icon"
                src={mapLogo}
                alt="map"
              />
            )}
            {iconShow && action.title == "Call" && (
              <img
                className="PlaceCardWrapper__actions--icon"
                src={callLogo}
                alt="call"
              />
            )}
            {iconShow && action.title == "Mail" && (
              <img
                className="PlaceCardWrapper__actions--icon"
                src={mailLogo}
                alt="mail"
              />
            )}
            {iconShow && action.title == "Menu" && (
              <img
                className="PlaceCardWrapper__actions--icon"
                src={foodMenuLogo}
                alt="mail"
              />
            )}
            {action.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default PlaceCard;
