import { Link } from "@remix-run/react";
import { PhoneCall, EnvelopeSimpleOpen } from "phosphor-react";
import placeholder from "~/Assets/Img/PlaceCard.png";

export default function NavigateCard({
  name,
  actionLists,
  desc,
  src,
  highlighted,
}) {
  const nameOfThePlace = name;
  const call = actionLists.filter((action) => {
    return action.title == "Call";
  });
  const mail = actionLists.filter((action) => {
    return action.title == "Mail";
  });
  const menu = actionLists.filter((action) => {
    return action.title == "Menu";
  });

  return (
    <div
      id={name}
      className={`NavCardContainer ${
        highlighted ? "NavCardContainer--highlighted" : ""
      }`}
    >
      <div className="NavCardContainer__picture">
        <img src={src != "" ? src : placeholder} alt="Placeholder"></img>
      </div>
      <div className="NavCardContainer__content">
        <h2 className="NavCardContainer__content__name">{name}</h2>
        <p className="NavCardContainer__content__desc">{desc}</p>
        <div className="NavCardContainer__content__ctas">
          <Link replace to={"?name=button=" + nameOfThePlace}>
            <button className="NavCardContainer__content__ctas--location-button">
              Location
            </button>
          </Link>
          {menu.length == 0 ? (
            ""
          ) : (
            <a target="_blank" href={menu[0].href}>
              <button className="NavCardContainer__content__ctas--menu-button">
                Menu
              </button>
            </a>
          )}
        </div>
      </div>
      <div className="NavCardContainer__contact">
        {call.length == 0 ? (
          ""
        ) : (
          <a href={call[0].href}>
            <PhoneCall size={21} weight="fill"></PhoneCall>
          </a>
        )}
        {mail.length == 0 ? (
          ""
        ) : (
          <a href={mail[0].href}>
            <EnvelopeSimpleOpen size={21} weight="fill"></EnvelopeSimpleOpen>
          </a>
        )}
      </div>
    </div>
  );
}
