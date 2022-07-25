import React from "react";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";
import profile from "../../Assets/Img/profile.svg";

function AcademicInfo({
	name,
	dept,
	isAdmin,
	actionLists
}) {
  return (
		<div className={`
		AcademicInfo
		${isAdmin ? "AcademicInfo--admin" : ""}
		`}>
			<div className="AcademicInfo__content">
				<div className="AcademicInfo__content__image">
					<img
						className="AcademicInfo__content__image"
						src={profile}
						alt="profile"
					/>
				</div>
				<div className="AcademicInfo__content__text">
					<p className="AcademicInfo__content__text--dept">{dept}</p>
					<p className="AcademicInfo__content__text--name">{name}</p>
				</div>
			</div>
      <div className="AcademicInfo__action">
        {actionLists.map((action, index) => (
          <a
            key={index}
            className="AcademicInfo__action__link"
						href={action.href}
						onClick={() => {
							if (action.title === "Ext") {
								navigator.clipboard.writeText(action.value);
							}
						}}
						target="_blank"
						rel="noopener noreferrer"
          >
            {!(action.title == "Office") ? action.title : action.value}
          </a>
        ))}
      </div>
    </div>
  );
}

export default AcademicInfo;
