import React from "react";

function ButtonLink({ href, content, fill }) {
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
