import React from "react";
import { useTranslation } from "react-i18next";
import "./HomeCybersecurity.scss";

const HomeCybersecurity = () => {
  const { t } = useTranslation();

  return (
    <section className="slide slide--4 js-slide item" id="section3">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <h1 className="js-transition-title">{t("navbar_3")}</h1>

            <div className="slide__text">
              <p className="js-transition-text">{t("slide_3.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCybersecurity;
