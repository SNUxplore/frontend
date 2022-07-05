import React from "react";

function ButtonLink({ className, href, content, fill, fill2 }) {
  return (
    <div>
      <a
        href={href}
        className={`ButtonLinkWrapper ${
          fill ? "ButtonLinkWrapper--fill" : ""
        } ${fill2 ? "ButtonLinkWrapper--fill2" : ""} `}
      >
        {content}
      </a>
    </div>
  );
}

export default ButtonLink;
