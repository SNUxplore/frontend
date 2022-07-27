import React from "react";
import profile from "../../Assets/Img/profile.svg";

function AcademicInfo({ name, dept, isAdmin, actionLists }) {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div className={`AcademicInfo ${isAdmin ? "AcademicInfo--admin" : ""}`}>
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
            id={index == openIndex ? "openLink" : ""}
            style={{
              display:
                openIndex === null || index === openIndex ? "flex" : "none",
            }}
            href={action.href}
            onClick={() => {
              if (
                !(
                  (action.title == "Office" || action.title == "Ext") &&
                  action.value.length > 7
                )
              ) {
                return;
              }
              if (index == openIndex) {
                setOpenIndex(null);
              } else {
                setOpenIndex(index);
              }
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {!(
              action.title == "Office" ||
              (action.title == "Ext" && index == openIndex)
            )
              ? action.title
              : action.value.length > 7 && index != openIndex
              ? action.value.substring(0, 7) + "..."
              : action.value}
          </a>
        ))}
      </div>
    </div>
  );
}

export default AcademicInfo;
