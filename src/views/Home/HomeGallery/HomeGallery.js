import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const HomeGallery = (props) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const sections = gsap.utils.toArray(".gallery-card");
      console.log("galleryRef:", galleryRef.current.offsetHeight);

      gsap.to(sections, {
        yPercent: 10,
        ease: "none",
        // duration: 6,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top bottom",
          pin: true,
          scrub: true,
          markers: true,
          //   end: "top",
          end: `+=${galleryRef.offsetHeight}`,
        },
      });

      ScrollTrigger.refresh();

      console.log(galleryRef, sections);
    });
  });

  return (
    <section className="slide slide--3 js-slide" data-scroll-section>
      <div className="slide__inner grid" ref={galleryRef}>
        <article className="gallery-card card--1"></article>
        <article className="gallery-card card--2"></article>
        <article className="gallery-card card--3"></article>
        <article className="gallery-card card--4"></article>

        {/* <div className="slide__img js-transition-img">
          <figure className="js-transition-img__inner">
            <img src={props.img} draggable="false" alt="main" />
          </figure>
        </div> */}
      </div>

      {/* <div className="slide__inner">
        <div className="slide__img slide__img--proxy"></div>
      </div> */}
    </section>
  );
};

export default HomeGallery;
