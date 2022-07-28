import { PhoneCall, EnvelopeSimpleOpen } from "phosphor-react";
import placeholder from "~/Assets/Img/PlaceCard.png";

function getLongLat(url) {
  var regex = new RegExp("@(.*),(.*),");
  const latLongMatch = url.match(regex);
  console.log(latLongMatch);
  return latLongMatch;
}

export default function NavigateCard({
  name,
  actionLists,
  desc,
  src,
  highlighted,
}) {
  const location = actionLists.filter((action) => {
    return action.title == "Map";
  });
  const call = actionLists.filter((action) => {
    return action.title == "Call";
  });
  const mail = actionLists.filter((action) => {
    return action.title == "Mail";
  });
  const menu = actionLists.filter((action) => {
    return action.title == "Menu";
  });
  let lo;

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
          <a href={location[0].href}>
            <button
              className="location-button"
              onClick={(lo = getLongLat(location[0].href))}
            >
              Location
            </button>
          </a>
          {menu.length == 0 ? (
            ""
          ) : (
            <a href={menu[0].href}>
              <button className="menu-button">Menu</button>
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
