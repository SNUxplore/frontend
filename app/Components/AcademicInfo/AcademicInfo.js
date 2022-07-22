import React from "react";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";
import profile from "../../Assets/Img/profile.svg";

function AcademicInfo() {
  return (
    <div className="AcademicInfo">
      <div className="AcademicInfo__details">
        <div className="AcademicInfo__details--icon">
          <img className="AcademicInfo__details--image" src={profile} />
        </div>
        <div className="AcademicInfo__details__text">
          <p className="AcademicInfo__details__text--name">Name</p>
          <p className="AcademicInfo__details__text--dept">Chemistry</p>
        </div>
      </div>
      <div className="AcademicInfo__button">
        <ButtonLink
          className="AcademicInfo__button--button"
          content={"contact"}
          href="#"
        />
      </div>
    </div>
  );
}

export default AcademicInfo;
