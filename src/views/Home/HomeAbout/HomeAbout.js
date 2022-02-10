import React from "react";
import "./HomeAbout.scss";

const HomeAbout = (props) => {
  return (
    <section className="slide slide--2 js-slide item" id="section1">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <div className="slide__title--container">
              <h1 className="js-transition-title">Nasza Misja</h1>
            </div>
            <div className="slide__text">
              <p className="js-transition-text">
                Fundacja Quantum Cybersecurity Hub Europe została powołana do
                życia 17.01.2022 r. z inicjatywy pasjonatów nauki i innowacji.
                <br />
                <br />
                Naszą misją jest przeprowadzanie prac badawczych naukowych i
                rozwojowych oraz niesienie szeroko rozumianej pomocy
                edukacyjnej, szkoleniej i humanitarnej w obszarze
                cyberbezpieczeństwa standardowego i kwantowego.
                <br />
                <br />
                Fundacja QCHE to wszystkie działania na rzecz zwiększenia
                skuteczności oraz wydajności pomocy humanitarnej. Wobec
                zaistniałych i potencjalnych cyberprzestępstw, tworzymy i
                wdrażamy platformy oraz produkty oparte na cyberbezpieczeństwie
                kwantowym. W ramach naszej działalności zajmujemy się szkoleniem
                i wysyłaniem specjalistów w miejsca poszkodowane w wyniku
                cyberataków.
              </p>
            </div>
          </div>
        </div>
        <div className="slide__img js-transition-img">
          <figure className="js-transition-img__inner">
            <img
              src={props.img}
              draggable="false"
              alt="main"
              style={props.reverse}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
