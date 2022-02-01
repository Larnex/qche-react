import React from "react";

const HomeIntro = (props) => {
  return (
    <section className="slide slide--1 js-slide" data-scroll-section>
      <div className="slide__inner">
        <h1 className="slide__title">
          <div className="js-transition-title">Quantum is the future,</div>
          <div className="js-transition-title">the future starts today</div>
        </h1>
        <div className="slide__img js-transition-img">
          <figure className="js-transition-img__inner">
            <img src={props.img} draggable="false" alt="main" />
          </figure>
        </div>
      </div>

      {/* <div className="slide__inner">
        <div className="slide__img slide__img--proxy"></div>
      </div> */}
    </section>
  );
};

export default HomeIntro;
