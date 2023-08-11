import React from "react";

function ButtonLink({
  className,
  href,
  content,
  fill,
  fill2,
  bannerFill,
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      className={`ButtonLinkWrapper 
        ${className}
        ${fill ? "ButtonLinkWrapper--fill" : ""} 
        ${fill2 ? "ButtonLinkWrapper--fill2" : ""}
        ${bannerFill ? "ButtonLinkWrapper--bannerFill" : ""}`}
    >
      {content}
    </a>
  );
}

export default ButtonLink;
