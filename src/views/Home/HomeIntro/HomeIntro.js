import React from "react";
import s from "./HomeIntro.module.scss";

const HomeIntro = (props) => {
  return (
    <section className="slide slide--1 js-slide item" id="section0">
      <div className="slide__inner">
        <h1 className={s.slide__title}>
          <div className="js-transition-title">Quantum is the future,</div>
          <div className="js-transition-title">the future starts today</div>
        </h1>
        {/* <div className="slide__img js-transition-img">
          <figure className="js-transition-img__inner">
            <img src={props.img} draggable="false" alt="main" />
          </figure>
        </div> */}
      </div>
    </section>
  );
};

export default HomeIntro;
