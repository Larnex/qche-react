import React from "react";

const HomeAbout = (props) => {
  return (
    <section className="slide slide--2 js-slide" data-scroll-section>
      <div className="slide__inner">
        <div className="slide__img js-transition-img">
          <figure className="js-transition-img__inner">
            <img src={props.img} draggable="false" alt="main" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
