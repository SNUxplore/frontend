import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import Feature1 from "../../Assets/Img/Feature-1.svg";
import Feature2 from "../../Assets/Img/Feature-2.svg";
import Feature3 from "../../Assets/Img/Feature-3.svg";
import Feature1Blue from "../../Assets/Img/navigateCampus_Blue.svg";
import Feature1Pink from "../../Assets/Img/navigateCampus_Pink.svg";
import Feature2Blue from "../../Assets/Img/happeningSnu_Blue.svg";
import Feature2Pink from "../../Assets/Img/happeningSnu_Pink.svg";
import Feature3Blue from "../../Assets/Img/adminContact_Blue.svg";
import Feature3Pink from "../../Assets/Img/adminContact_pink.svg";


function InfoComponent({ indicatorState = 1 }) {
  const [theme, setTheme] = React.useState("");
  React.useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  });

  return (
    <div className="InfoComponent__Container">
      <div className="InfoComponent__content--container">
        <div className="InfoComponent__content--container__indicator--container">
          <div
            className={
              indicatorState === 1
                ? "InfoComponent__content--container__indicator--container__indicator active"
                : "InfoComponent__content--container__indicator--container__indicator"
            }
          />
          <div
            className={
              indicatorState === 2
                ? "InfoComponent__content--container__indicator--container__indicator active"
                : "InfoComponent__content--container__indicator--container__indicator"
            }
          />
          <div
            className={
              indicatorState === 3
                ? "InfoComponent__content--container__indicator--container__indicator active"
                : "InfoComponent__content--container__indicator--container__indicator"
            }
          />
        </div>
        <div className="InfoComponent__content--container__content">
          <h1 className="InfoComponent__content--container__content__title">
            {indicatorState === 1
              ? "Navigate"
              : indicatorState === 2
              ? "Happenings"
              : "Admin &"}{" "}
            <span>
              {indicatorState === 1
                ? "Campus"
                : indicatorState === 2
                ? "@SNU"
                : "Info"}
            </span>
          </h1>
          <p className="InfoComponent__content--container__content__para">
            {indicatorState === 1
            ? "Find detailed information on all buildings and locations on campus. Locate the Dargaah, call your warden. All of it is here, just for you."
            : indicatorState === 2
            ? "No more stalking club insta handles for event info. Recent, ongoing and upcoming events. Stalls, competitions and fests. All posted right here."
            : "The information bridge between the admin and student bodies. Deans, HoD's and PoC's contact details all in one place. No more confusion on who to contact for what."}
          </p>
          <ButtonLink
            fill={false}
            content={
              indicatorState === 1
                ? "Explore now"
                : indicatorState === 2
                ? "Find an Event"
                : "Admin & Info"
            }
          />
        </div>
      </div>
      <div className="InfoComponent__image--container">
        <img
          className="InfoComponent__image--container__image"
          src={
            indicatorState === 1
              ? Feature1 
              : indicatorState === 2
              ? Feature2 
              : Feature3
          }
          alt="feature-1Img"
        />
      </div>
    </div>
  );
}

export default InfoComponent;
