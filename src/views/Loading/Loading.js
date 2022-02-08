import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div id="preload">
      <div id="logo_preload">
        <div id="mask"></div>
      </div>
      <div id="bars">
        <div className="bar" id="bar1"></div>
        <div className="bar" id="bar2"></div>
        <div className="bar" id="bar3"></div>
        <div className="bar" id="bar4"></div>
        <div className="bar" id="bar5"></div>
      </div>
    </div>
  );
};

export default Loading;
