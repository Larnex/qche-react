import React from "react";
import "./HomeContact.scss";
import Map from "../../../assets/zdj/mapa.png";

const HomeContact = (props) => {
  return (
    <section className="slide slide--9 js-slide item" id="section8">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <div className="title__container">
              <h1 className="js-transition-title">KONTAKT</h1>
            </div>

            <div className="container--text">
              <div className="container--img">
                <img src={Map} alt="UGLOGO" />
              </div>

              <div className="text">
                <h3>FUNDACJA QUANTUM CYBERSECURITY HUB EUROPE</h3>
                <p>
                  Adres: ul. Lęborska 3B 80-386 Gdańsk
                  <br />
                  E-mail: office@qche.ngo
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

export default HomeContact;
