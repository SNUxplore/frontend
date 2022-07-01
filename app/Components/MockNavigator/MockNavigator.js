import React from "react";

function MockNavigator({ title, children }) {
  return (
    <div className="MockNavigatorWrapper">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default MockNavigator;
