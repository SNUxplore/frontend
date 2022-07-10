import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink";

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
            Navigate <span>Campus</span>
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
    </div>
  );
}

export default InfoComponent;
