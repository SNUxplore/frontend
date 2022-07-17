import React from "react";

function ButtonLink({ className, href, content, fill, fill2 }) {
  return (
    <a
      href={href}
      className={`ButtonLinkWrapper ${fill ? "ButtonLinkWrapper--fill" : ""} `}
    >
      <p>{content}</p>
    </a>
  );
}

export default ButtonLink;
