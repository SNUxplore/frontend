import React from "react";
import "./FaqDropdown.css";

function FaqDropdown({ question, answer, isExpanded, onClick }) {
  const dropDownRef = React.useRef();
  const [scrollHeight, setScrollHeight] = React.useState(0);
  const [style, setStyle] = React.useState({
    transitionDuration: "500ms",
    transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    transitionProperty: "height",
    height: "0px",
    overflow: "hidden",
  });
  React.useEffect(() => {
    if (dropDownRef.current.scrollHeight != 0) {
      setScrollHeight(dropDownRef.current.scrollHeight);
    }
  });

  React.useEffect(() => {
    if (isExpanded) {
      setStyle({
        transitionDuration: "300ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionProperty: "height",
        overflow: "hidden",
        height: "0",
      });

      setTimeout(() => {
        setStyle({
          transitionDuration: "500ms",
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transitionProperty: "height",
          overflow: "hidden",
          height: `${scrollHeight}px`,
        });
      }, 50);
    } else {
      setStyle({
        transitionDuration: "300ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionProperty: "height",
        overflow: "hidden",
        height: "0",
      });
      setTimeout(() => {
        setStyle({
          transitionDuration: "500ms",
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transitionProperty: "height",
          overflow: "hidden",
          display: "none",
        });
      }, 290);
    }
  }, [isExpanded]);

  return (
    <div className={`dropDown ${isExpanded ? "dropDown--active" : ""} `}>
      <button
        className={`dropDown__question ${
          isExpanded ? "dropDown__question--active" : ""
        } `}
        onClick={onClick}
      >
        <p>{question}</p>
        <div
          className={`dropDown__questionExpanded ${
            isExpanded ? "dropDown__questionExpanded--active" : ""
          }`}
        >
          <p>+</p>
        </div>
      </button>
      <div
        className={`dropDown__answer ${
          isExpanded ? "dropDown__answer--active" : ""
        } `}
        style={style}
      >
        <p ref={dropDownRef}>{answer}</p>
      </div>
      <div className="dropDown__borderLine"></div>
    </div>
  );
}

export default FaqDropdown;
