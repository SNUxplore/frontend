import React from "react";
import placeholder from "~/Assets/Img/PlaceCard.png";
import ButtonLink from "../ButtonLink/ButtonLink";
import mapLogo from "../../Assets/Img/mapIcon2.svg";

function PlaceCard({
	name,
	actionLists,
	desc,
	src,
	highlighted,
}) {
  return (
		<div
			id={name}
			className={`
			PlaceCardWrapper
			${highlighted ? "PlaceCardWrapper--highlighted" : ""}
			`}>
      <div className="PlaceCardWrapper__content">
        <img
          className="PlaceCardWrapper--image"
          src={src != "" ? src : placeholder}
          alt="Placeholder"
        />
        <h2 className="PlaceCardWrapper__content--title">{name}</h2>
        <p className="PlaceCardWrapper__content--desc">{desc}</p>

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
            {action.title == "Map" && (
              <img
                className="PlaceCardWrapper__actions--icon"
                src={mapLogo}
                alt="map"
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
