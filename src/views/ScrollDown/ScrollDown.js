import React from "react";
import "./ScrollDown.scss";

const ScrollDown = () => {
  return (
    <div className="mouse-scroll__container">
      <div
        className="mouse-scroll"
        style={{
          width: "2em",
          height: "2em",
          backgroundColor: "transparent",
          zIndex: 80,
          bottom: "25px",
          position: "absolute",
          borderWidth: "0 0.25em 0.25em 0",
          borderStyle: "solid",
          borderColor: "antiquewhite",
          animation: "scrolldown 1.2s ease-in-out infinite 0.15s",
        }}
      ></div>
      <div
        className="mouse-scroll-2"
        style={{
          width: "2em",
          height: "2em",
          backgroundColor: "transparent",
          zIndex: 80,
          bottom: "40px",
          position: "absolute",
          borderWidth: "0 0.25em 0.25em 0",
          borderStyle: "solid",
          borderColor: "antiquewhite",
          animation: "scrolldown 1.2s ease-in-out infinite",
        }}
      ></div>
    </div>
  );
};

export default ScrollDown;
