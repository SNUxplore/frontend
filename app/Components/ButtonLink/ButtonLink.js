import React from "react";

function ButtonLink({ className, href, content, fill, fill2, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`ButtonLinkWrapper 
        ${className}
        ${fill ? "ButtonLinkWrapper--fill" : ""} 
        ${fill2 ? "ButtonLinkWrapper--fill2" : ""}`}
    >
      {content}
    </a>
  );
}

export default ButtonLink;
