import React from "react";
import "./Loading.scss";
import logo from "../../assets/Logo_QCHE_biale.png";
import gsap from "gsap";

const Loading = () => {
  var tl = new gsap.timeline();
  setTimeout(function () {
    tl.to("#mask", { duration: 2, height: 0 })
      .to("#logo_preload", { duration: 0.3, opacity: 0 })
      .to("#bars", { duration: 0.3, opacity: 1 }, "-=0.2")
      .to("#bar1", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar2", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar3", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar4", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar5", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#preload", { display: "none", opacity: 0, height: 0 })
      .to("#bars", { opacity: 0, display: "none", height: 0 });
  }, 3);
  return (
    <div>
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
      <div>
        <header id="masthead" className="site-header">
          <div className="site-branding">
            <a href="/">
              <img src={logo} alt="Website Logo" scale="0" />
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Loading;
