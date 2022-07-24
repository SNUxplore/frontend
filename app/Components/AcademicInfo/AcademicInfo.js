import React from "react";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";
import profile from "../../Assets/Img/profile.svg";

function AcademicInfo({
	data,
	actionLists
}) {
  return (
    <div className="AcademicInfo">
      <div className="AcademicInfo__content">
        <div className="AcademicInfo__content__image">
          <img
            className="AcademicInfo__content__image"
            src={profile}
            alt="profile"
          />
        </div>
        <div className="AcademicInfo__content__text">
          <p className="AcademicInfo__content__text--dept">{data["School"]}</p>

          <p className="AcademicInfo__content__text--name">{data["Dean"]}</p>
        </div>
      </div>
      <div className="AcademicInfo__action">
        {/* {actionLists.map((action, index) => (
          <a
            key={index}
            className="AcademicInfo__actions__link"
            href={action.href}
            target="_blank"
          >
            Contact
          </a>
        ))} */}
      </div>
    </div>
  );
}

export default AcademicInfo;
