import React from "react";

const HomeDonate = (props) => {
  return (
    <section className="slide slide--7 js-slide item" id="section6">
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

export default HomeDonate;
