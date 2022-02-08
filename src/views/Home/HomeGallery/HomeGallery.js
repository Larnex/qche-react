import React from "react";
import SZimnol from "../../../assets/zdj/Sebastian3.jpg";
import MPawlowski from "../../../assets/zdj/m_pawlowski.jpg";

const HomeGallery = (props) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     const sections = gsap.utils.toArray(".gallery-card");
  //     console.log("galleryRef:", galleryRef.current.offsetHeight);

  //     gsap.to(sections, {
  //       yPercent: 10,
  //       ease: "none",
  //       duration: 3,
  //       scrollTrigger: {
  //         trigger: galleryRef.current,
  //         pin: true,
  //         scrub: true,
  //         markers: true,
  //         end: `+=${galleryRef.offsetHeight}`,
  //       },
  //     });

  //     ScrollTrigger.refresh();

  //     console.log(galleryRef, sections);
  //   });
  // });

  return (
    <section className="slide slide--3 js-slide item" id="section2">
      <div className="slide__inner grid">
        <div className="slide__title--container">
          <h1 className="slide__title">ZESPÓŁ FUNDACJI</h1>
        </div>
        <div className="grid__img">
          <figure>
            <img src={SZimnol} alt="S.Zimnol" className="img img-1"></img>
            <figcaption>
              Sebastian Zimnol <br />
              Założyciel i Prezes Zarządu Fundacji
              <br />
              WETOG PL
            </figcaption>
          </figure>

          <figure>
            <img src={MPawlowski} alt="M.Pawlowski" className="img img-2"></img>
            <figcaption>
              dr hab. Marcin Pawłowski <br /> Wiceprezes Zarządu Fundacji <br />
              Uniwersytet Gdański
            </figcaption>
          </figure>
        </div>

        {/* <h1 className="slide__title">
          <div className="js-transition-title">Quantum is the future,</div>
          <div className="js-transition-title">the future starts today</div>
        </h1> */}
        <div className="slide__img js-transition-img">
          <figure className="js-transition-img__inner">
            <img src={props.img} draggable="false" alt="main" />
          </figure>
        </div>
      </div>
    </section>

    // <div className="slide__inner">
    //   <div className="slide__img slide__img--proxy"></div>
    // </div>

    // <section className="slide slide--3 js-slide">
    //   <div className="slide__inner grid" ref={galleryRef}>
    //     <article className="gallery-card card--1"></article>
    //     <article className="gallery-card card--2"></article>
    //     <article className="gallery-card card--3"></article>
    //     <article className="gallery-card card--4"></article>
    //   </div>
    // </section>
  );
};

export default HomeGallery;
