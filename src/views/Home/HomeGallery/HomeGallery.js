import React from "react";
import "./HomeGallery.scss";
import SZimnol from "../../../assets/zdj/Sebastian3.jpg";
import MPawlowski from "../../../assets/zdj/m_pawlowski.jpg";

const HomeGallery = (props) => {
  return (
    <section className="slide slide--3 js-slide item" id="section2">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            {/* <div className="slide__title--container"> */}

            <div className="slide__text">
              <h1>ZESPÓŁ FUNDACJI</h1>
              <p>
                To grupa pasjonatów i wizjonerów, która składa się z prezesów
                firm założycielskich, ale także z naukowców, badaczy i
                specjalistów z zakresu cyberbezpieczeństwa standardowego oraz
                kwantowego. Członkowie Zarządu ściśle współpracują, dokładając
                wszelkich starań, aby połączyć biznes z dziedziną nowych
                technologii kwantowych w zakresie cyberbezpieczeństwa. Celem ich
                działania jest komercjalizacja wyników badań i wdrażanie ich do
                gospodarki.
              </p>
            </div>
            {/* </div> */}
            <div className="grid__img">
              <figure className="img__cont-1 img__cont">
                <img src={SZimnol} alt="S.Zimnol" className="img img-1"></img>
                <figcaption>
                  Sebastian Zimnol <br />
                  Założyciel i Prezes Zarządu Fundacji
                  <br />
                  WETOG PL
                </figcaption>
              </figure>

              <figure className="img__cont-1 img__cont">
                <img
                  src={MPawlowski}
                  alt="M.Pawlowski"
                  className="img img-2"
                ></img>
                <figcaption>
                  dr hab. Marcin Pawłowski <br /> Wiceprezes Zarządu Fundacji{" "}
                  <br />
                  Uniwersytet Gdański
                </figcaption>
              </figure>
            </div>
          </div>
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
