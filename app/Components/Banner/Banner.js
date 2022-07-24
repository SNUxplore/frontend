import React from "react";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";

function Banner({ title1, title2, desc, href, fillType,redirectContent }) {
  return (
    <div className="Banner">
      <div className="Banner__left">
        <h1 className="Banner__title--white">{title1}</h1>
        <h1 className="Banner__title--primaryTextColor">{title2}</h1>
      </div>
      <div className="Banner__right">
        <div className="Banner__right--container">
          <p className="Banner--desc">{desc}</p>
          <ButtonLink
            className="Banner--button"
            href={href}
            content={redirectContent}
            fill={fillType === "fill"}
            fill2={fillType === "fill2"}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
