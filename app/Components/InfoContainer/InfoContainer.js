import React from "react";
import AcademicInfo from "../AcademicInfo/AcademicInfo";
import profile from "../../Assets/Img/profile.svg";

function InfoContainer({ data, isAdmin, type = "" }) {
  const innerData = isAdmin ? data : data["Departments"];
  function generateActionLinks(entry) {
    let actionLinks = [];
    if (entry["DeansEmail"]) {
      actionLinks.push({
        title: "Contact",
        href: `mailto:${entry["DeansEmail"]}`,
      });
    }
    if (entry["HodsEmail"]) {
      actionLinks.push({
        title: "Contact",
        href: `mailto:${entry["HodsEmail"]}`,
      });
    }
    if (entry["Office"]) {
      actionLinks.push({
        title: "Office",
        value: entry["Office"],
      });
    }
    if (entry["Email"]) {
      actionLinks.push({
        title: "Email",
        value: entry["Email"],
      });
    }
    if (entry["Ext"]) {
      actionLinks.push({
        title: "Ext",
        value: entry["Ext"],
      });
    }
    return actionLinks;
  }

  return (
    <div className="InfoContainer">
      <div className="InfoContainer__head">
        <div className="InfoContainer__head__header">
          <p className="InfoContainer__head__header--block">
            {isAdmin ? "Department" : data["Block"] + " Block"}
          </p>
          <p className="InfoContainer__head__header--school">
            {isAdmin ? type : data["School"]}
          </p>
        </div>

        {!isAdmin && (
          <AcademicInfo
            dept={"Dean of School"}
            name={data["Dean"]}
            isDean={true}
            actionLists={generateActionLinks(data)}
          />
        )}
      </div>
      {/* <hr /> */}
      <div className="InfoContainer__body">
        <div className="InfoContainer__body__header">
          <p className="InfoContainer__body__header--title">
            {isAdmin ? "Roles, Functions & SPOCs" : "Departments & HODs"}
          </p>
        </div>
        <div className="InfoContainer__body__component">
          {innerData.map((entry, index) => (
            <AcademicInfo
              key={index}
              dept={isAdmin ? entry["Function"] : entry["Department"]}
              name={isAdmin ? entry["SPOC"] : entry["Hod"]}
              isAdmin={isAdmin}
              actionLists={generateActionLinks(entry)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;
