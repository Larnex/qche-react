import React from "react";

const Blog = (props) => {
  return (
    <section className="slide slide--6 js-slide item" id="section5">
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

export default Blog;
