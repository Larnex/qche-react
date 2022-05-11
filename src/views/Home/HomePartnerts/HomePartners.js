import React from "react";
import "./HomePartners.scss";
import UGLogo from "../../../assets/UG_logo_RGB_sygnet_negatyw_biały.png";
import WetogLogo from "../../../assets/Logo_PL_wetog.png";
import { useTranslation } from "react-i18next";
import ScrollDown from "../../ScrollDown/ScrollDown";

const HomePartners = (props) => {
  const { t } = useTranslation();
  return (
    <section className="slide slide--5 js-slide item" id="section4">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <h1 className="js-transition-title">{t("navbar_4")}</h1>

            <div className="container--text">
              <div className="container--img">
                <img src={UGLogo} alt="UGLOGO" className="UG" />
              </div>

              <div className="text">
                <h3>{t("slide_4.UG.subtitle")}</h3>
                <p>
                  {t("slide_4.UG.text-1-row")}
                  <br />
                  {t("slide_4.UG.text-2-row")}
                </p>
              </div>
            </div>

            <div className="container--text" style={{ marginTop: 0 }}>
              <div className="container--img">
                <img alt="WetogLogo" src={WetogLogo} />
              </div>

              <div className="text">
                <h3>{t("slide_4.wetog.subtitle")}</h3>
                <p>
                  {t("slide_4.wetog.text-1-row")}
                  <br />
                </p>
              </div>
            </div>
            <ScrollDown></ScrollDown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
