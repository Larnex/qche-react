import React from "react";
import "./HomeContact.scss";
import Map from "../../../assets/zdj/mapa.png";
import { useTranslation } from "react-i18next";

const HomeContact = () => {
  const { t } = useTranslation();
  return (
    <section className="slide slide--9 js-slide item" id="section8">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <div className="title__container">
              <h1 className="js-transition-title">{t("navbar_8")}</h1>
            </div>

            <div className="container--text">
              <div className="container--img">
                <img src={Map} alt="Map" />
              </div>

              <div className="text">
                <h3>{t("slide_8.subtitle")}</h3>
                <p>
                  {t("slide_8.address")}
                  <br />
                  {t("slide_8.email")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
