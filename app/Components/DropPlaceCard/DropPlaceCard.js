import React from "react";
import placeholder from "~/Assets/Img/PlaceCard.png";
import mapLogo from "../../Assets/Img/mapIcon2.svg";
import callLogo from "../../Assets/Img/Call.svg";
import mailLogo from "../../Assets/Img/Mail.svg";
import foodMenuLogo from "../../Assets/Img/foodMenu.svg";

function DropPlaceCard({ name, actionLists, desc, src, highlighted }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropDownRef = React.useRef();
  const [scrollHeight, setScrollHeight] = React.useState(115);

  const [style, setStyle] = React.useState({
    transitionDuration: "500ms",
    transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    transitionProperty: "height",
    height: "0px",
    overflow: "hidden",
  });

  React.useEffect(() => {
    if (dropDownRef.current.scrollHeight != 0) {
      setScrollHeight(dropDownRef.current.scrollHeight);
    }
  });

  React.useEffect(() => {
    if (isOpen) {
      setStyle({
        transitionDuration: "300ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionProperty: "height",
        overflow: "hidden",
        height: "0",
      });

      setTimeout(() => {
        setStyle({
          transitionDuration: "500ms",
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transitionProperty: "height",
          overflow: "hidden",
          height: `${scrollHeight}px`,
        });
      }, 50);
    } else {
      setStyle({
        transitionDuration: "300ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionProperty: "height",
        overflow: "hidden",
        height: "0",
      });
      setTimeout(() => {
        setStyle({
          transitionDuration: "500ms",
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transitionProperty: "height",
          overflow: "hidden",
          display: "none",
        });
      }, 290);
    }
  }, [isOpen]);

  return (
    <div
      className={`DropPlaceCardWrapper ${
        highlighted ? "DropPlaceCardWrapper--highlighted" : ""
      }`}
      id={name}
    >
      <button
        className={`DropPlaceCardWrapper__face ${
          isOpen ? "DropPlaceCardWrapper__face--active" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="DropPlaceCardWrapper__face--image"
          src={src != "" ? src : placeholder}
          alt="Placeholder"
        />
        <div className="DropPlaceCardWrapper__face--text">
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
        <span>+</span>
      </button>
      <div
        className="DropPlaceCardWrapper__content"
        style={style}
        ref={dropDownRef}
      >
        <div className="DropPlaceCardWrapper__content--top">
          <p>{desc}</p>

          <p className="PlaceCardWrapper__content--poc">
            <span>Receptionist: </span>Gravida Mouna
          </p>
        </div>
        <div className="DropPlaceCardWrapper__actions">
          {actionLists.map((action, index) => (
            <a
              key={index}
              className="DropPlaceCardWrapper__actions--link"
              href={action.href}
              target="_blank"
            >
              {action.title == "Map" && (
                <img
                  className="DropPlaceCardWrapper__actions--icon"
                  src={mapLogo}
                  alt="map"
                />
              )}
              {action.title == "Call" && (
                <img
                  className="DropPlaceCardWrapper__actions--icon"
                  src={callLogo}
                  alt="call"
                />
              )}
              {action.title == "Mail" && (
                <img
                  className="DropPlaceCardWrapper__actions--icon"
                  src={mailLogo}
                  alt="mail"
                />
              )}
              {action.title == "Menu" && (
                <img
                  className="DropPlaceCardWrapper__actions--icon"
                  src={foodMenuLogo}
                  alt="mail"
                />
              )}
              {action.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DropPlaceCard;
