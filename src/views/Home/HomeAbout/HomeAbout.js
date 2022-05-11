import React from "react";
import { useTranslation } from "react-i18next";
import "./HomeAbout.scss";

const HomeAbout = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <section className="slide slide--2 js-slide item" id="section1">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <div className="slide__title--container">
              <h1 className={i18n.language + "_title"}>{t("navbar_1")}</h1>
            </div>
            <div className="slide__text">
              <p className="js-transition-text">
                {t("slide_1.text-1-row")}

                <br />
                <br />

                {t("slide_1.text-2-row")}

                <br />
                <br />

                {t("slide_1.text-3-row")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
