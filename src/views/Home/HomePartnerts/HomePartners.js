import React from "react";
import "./HomePartners.scss";
import UGLogo from "../../../assets/zdj/UG_logo_RGB_sygnet_negatyw_biały.png";

const HomePartners = (props) => {
  return (
    <section className="slide slide--5 js-slide item" id="section4">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <div className="title__container">
              <h1 className="js-transition-title">NASI PARTNERZY</h1>
            </div>

            <div className="container--text">
              <div className="container--img">
                <img src={UGLogo} alt="UGLOGO" />
              </div>

              <div className="text">
                <h3>UNIWERSYTET GDAŃSKI</h3>
                <p>
                  Współpraca QCHE i Uniwersytetu Gdańskeigo opiera się o
                  działania mające na celu upowszechnienie, wspieranie i
                  promowanie badań rozwijających technologie kwantowe w obszarze
                  cyberbezpieczeństwa. Naszym wspólnym celem jest podnoszenie
                  świadomości społeczeństwa w zakresie cyberbezpieczeństwa oraz
                  wdrażanie najnowszych rozwiązań techonologicznych w
                  gospodarce.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide__img js-transition-img">
          <figure className="js-transition-img__inner">
            <img src={props.img} draggable="false" alt="main" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
