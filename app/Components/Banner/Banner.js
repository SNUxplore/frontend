import React from "react";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";

function Banner({ title1, title2, desc, href, fillType, redirectContent }) {
  return (
    <div className="Banner">
      <div className="Banner__Container">
        <div className="Banner__left">
          <h1 className="Banner__title">
            {title1} <br /> <span>{title2}</span>
          </h1>
        </div>
        <div className="Banner__right">
          <div className="Banner__right--container">
            <p className="Banner--desc">{desc}</p>
            <ButtonLink
              href={href}
              content={redirectContent}
              fill={fillType === "fill"}
              fill2={fillType === "fill2"}
              bannerFill={fillType === "bannerFill"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
