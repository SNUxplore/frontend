import React from "react";

function InfoComponent({ title, information, button, indicatorState = 1 }) {
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
      </div>
    </div>
  );
}

export default InfoComponent;
