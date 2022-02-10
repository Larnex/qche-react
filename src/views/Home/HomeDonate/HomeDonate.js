import React from "react";
import s from "./HomeDonate.module.scss";

const HomeDonate = (props) => {
  return (
    <section className="slide slide--7 js-slide item" id="section6">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <h1 className="js-transition-title">MOŻLIWOŚĆ WSPARCIA</h1>

            <h3 className={s.subtitle}>
              KONTO FUNDACJI QUANTUM CYBERSECURITY HUB EUROPE
            </h3>

            <div className="slide__text">
              <p className="js-transition-text">
                Bank: PKO Bank Polski SA. <br />
                Numer rachunku: 59 1020 1811 0000 0402 0389 1827 <br />
                IBAN: PL 59 1020 1811 0000 0402 0389 1827 <br />
                BIC: <strong>BPKOPLPW</strong> <br /> Tytuł przelewu: darowizna
                na cele statutowe Fundacji
              </p>
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

export default HomeDonate;
