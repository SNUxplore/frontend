import Feature3Img from "../../Assets/Img/Feature-3.svg";
import Feature2Img from "../../Assets/Img/Feature-2.svg";
import Feature1Img from "../../Assets/Img/Feature-1.svg";
import arrowLeft from "../../Assets/Img/arrowLeft.svg";
import arrowRight from "../../Assets/Img/arrowRight.svg";
import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink";

export default function InfoComponent__Mobile() {
  const [infoIndex, setInfoIndex] = React.useState(0);

  const indicatorScrollRight = () => {
    infoIndex < 2 ? setInfoIndex(infoIndex + 1) : 2;
    console.log(infoIndex);
  };

  const indicatorScrollLeft = () => {
    infoIndex > 0 ? setInfoIndex(infoIndex - 1) : 0;
  };

  return (
    <div className="MobileContainer">
      <h1 className="MobileContainer__title">
        {infoIndex === 0
          ? "Navigate"
          : infoIndex === 1
          ? "Happening"
          : "Admin &"}{" "}
        <span>
          {infoIndex === 0 ? "Campus" : infoIndex === 1 ? "@SNU" : "Info"}
        </span>
      </h1>
      <p className="MobileContainer__desc">
        We get it, navigating the university can be challenging! But have no
        worries, We can connect you to resourses that will unlock all that Shiv
        Nadar University has to offer.
      </p>
      <ButtonLink
        content={
          infoIndex === 0
            ? "Explore now"
            : infoIndex === 1
            ? "Find an Event"
            : "Admin & Info"
        }
      />
      <div className="MobileContainer__ImageContainer">
        <img
          className="MobileContainer__ImageContainer__image"
          src={
            infoIndex === 0
              ? Feature1Img
              : infoIndex === 1
              ? Feature2Img
              : Feature3Img
          }
        ></img>
      </div>
      <div className="MobileContainer__scrollerContainer">
        <img
          className="MobileContainer__scrollerContainer__arrow"
          src={arrowLeft}
          onClick={() => indicatorScrollLeft()}
        />
        <div className="MobileContainer__scrollerContainer__indicators">
          <div className={infoIndex === 0 ? "circle active" : "circle"}></div>
          <div className={infoIndex === 1 ? "circle active" : "circle"}></div>
          <div className={infoIndex === 2 ? "circle active" : "circle"}></div>
        </div>
        <img
          className="MobileContainer__scrollerContainer__arrow"
          src={arrowRight}
          onClick={() => indicatorScrollRight()}
        />
      </div>
    </div>
  );
}