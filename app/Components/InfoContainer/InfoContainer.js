import React from "react";
import AcademicInfo from "../AcademicInfo/AcademicInfo";
import profile from "../../Assets/Img/profile.svg";

function InfoContainer(dept, name, actionLists, block, school) {
  return (
    <div className="InfoContainer">
      <div className="InfoContainer__head">
        <div className="InfoContainer__head__header">
          <p className="InfoContainer__head__header--block">{block}</p>
          <p className="InfoContainer__head__header--school">{school}</p>
        </div>

        <AcademicInfo dept={dept} name={name} actionLists={actionLists} />
      </div>
      <hr />
      <div className="InfoContainer__body">
        <div className="InfoContainer__body__header">
          <p className="InfoContainer__body__header--title">
            Departments & HODs
          </p>
        </div>
        <div className="InfoContainer__body__component">
          <AcademicInfo dept={dept} name={name} actionLists={actionLists} />
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;
