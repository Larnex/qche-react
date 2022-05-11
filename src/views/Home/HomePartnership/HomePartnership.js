import React from "react";
import { useTranslation } from "react-i18next";
import "./HomePartnership.scss";

const HomePartnership = (props) => {
  const { t } = useTranslation();

  return (
    <section className="slide slide--8 js-slide item" id="section7">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <div className="title__container">
              <h1 className="js-transition-title">{t("navbar_7")}</h1>
            </div>

            <div className="container--text">
              <div className="text">
                <h3>{t("slide_7.column_1.title")}</h3>
                <ul>
                  <li>{t("slide_7.column_1.list_1")}</li>
                  <li>{t("slide_7.column_1.list_2")}</li>
                  <li>{t("slide_7.column_1.list_3")}</li>
                  <li>{t("slide_7.column_1.list_4")}</li>
                </ul>
              </div>
              <div className="text">
                <h3>{t("slide_7.column_2.title")}</h3>
                <p>{t("slide_7.column_2.text")}</p>
              </div>
            </div>
            <div className="footer">
              <p>{t("slide_7.footer")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePartnership;
