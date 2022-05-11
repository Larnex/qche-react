import React from "react";
import s from "./Background.module.scss";
import animation from "./assets/zdj/animacja_gif.gif";

const Background = () => {
  return (
    <div className={s.container}>
      <div className={s.background__layout}></div>
      {/* <video className={s.background} autoPlay loop muted playsInline>
        <source src={animation} type="video/mp4" />
      </video> */}

      <img src={animation} alt="" className={s.background} />
    </div>
  );
};

export default Background;
