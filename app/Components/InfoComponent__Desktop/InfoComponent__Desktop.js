import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import Feature1 from "../../Assets/Img/Feature-1.svg";
import Feature2 from "../../Assets/Img/Feature-2.svg";
import Feature3 from "../../Assets/Img/Feature-3.svg";

function InfoComponent({ indicatorState = 1 }) {
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
              ? "Happening"
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
            Nibh turpis porta integer diam. Quis id adipiscing aliquam ut
            pretium suspendisse eget.
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
