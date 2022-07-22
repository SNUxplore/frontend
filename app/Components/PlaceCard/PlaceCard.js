import React from "react";
import placeholder from "~/Assets/Img/PlaceCard.png";
import ButtonLink from "../ButtonLink/ButtonLink";
import mapLogo from "../../Assets/Img/mapIcon2.svg";
import callLogo from "../../Assets/Img/Call.svg";
import mailLogo from "../../Assets/Img/Mail.svg";
import foodMenuLogo from "../../Assets/Img/foodMenu.svg";

import { useMediaQuery } from "react-responsive";

function PlaceCard({ name, actionLists, desc, src }) {
  const iconShow = useMediaQuery({
    query: "(max-width: 450px)",
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const names = "content";

  // var styles;

  // if (iconShow) {
  //   if (isOpen) {
  //     styles = {
  //       height: "fit-content",
  //     };
  //   } else {
  //     styles = {
  //       overflow: "hidden",
  //       height: "0",
  //     };
  //   }
  // } else {
  //   styles = { width: "100%", height: "auto" };
  // }

  return (
    <div className="PlaceCardWrapper">
      <div className="PlaceCardWrapper__content">
        <img
          className="PlaceCardWrapper--image"
          src={src != "" ? src : placeholder}
          alt="Placeholder"
        />
        <div className="PlaceCardWrapper__conAndActions ">
          <div className="PlaceCardWrapper__content--text">
            <h2 className="PlaceCardWrapper__content--title" onClick={toggling}>
              {name}
            </h2>

            <div id={names}>
              {" "}
              {/* style={styles}*/}
              <p className="PlaceCardWrapper__content--desc">{desc}</p>
              {/* <p className="PlaceCardWrapper__content--poc">
          <span>Receptionist: </span>Gravida Mouna
        </p> */}
              <div className="PlaceCardWrapper__actions">
                {actionLists.map((action, index) => (
                  <a
                    key={index}
                    className="PlaceCardWrapper__actions--link"
                    href={action.href}
                    target="_blank"
                  >
                    {(() => {
                      if (action.title == "Map") {
                        return (
                          <img
                            className="PlaceCardWrapper__actions--icon"
                            src={mapLogo}
                            alt="map"
                          />
                        );
                      }

                      if (iconShow && action.title == "Call") {
                        return (
                          <img
                            className="PlaceCardWrapper__actions--icon"
                            src={callLogo}
                            alt="call"
                          />
                        );
                      }

                      if (iconShow && action.title == "Mail") {
                        return (
                          <img
                            className="PlaceCardWrapper__actions--icon"
                            src={mailLogo}
                            alt="mail"
                          />
                        );
                      }
                      if (iconShow && action.title == "Menu") {
                        return (
                          <img
                            className="PlaceCardWrapper__actions--icon"
                            src={foodMenuLogo}
                            alt="mail"
                          />
                        );
                      }
                    })()}
                    {action.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
