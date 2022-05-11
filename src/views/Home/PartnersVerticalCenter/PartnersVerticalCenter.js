import React from "react";
import { useTranslation } from "react-i18next";
import ruhrHubLogo from "../../../assets/ruhrHUB_logo2.png";
import futuriserLogo from "../../../assets/FUTURISER_logo.png";
import quantumBusinessLogo from "../../../assets/Logo-QuantumBusiness-blanc.png";
import "./PartnersVerticalCenter.scss";

const PartnersVerticalCenter = () => {
  const { t } = useTranslation();

  return (
    <section
      className="slide slide--5 js-slide item slide-5-center"
      id="section4"
    >
      <div className="slide__inner slide__inner--height">
        <div className="slide__content slide__content--center">
          <div className="slide__relative--container" style={{ paddingTop: 0 }}>
            <div className="container--text">
              <div className="container--img">
                <img src={ruhrHubLogo} alt="ruhrHubLogo" />
              </div>

              <div className="text">
                <h3>{t("slide_4.ruhrHUB.subtitle")}</h3>
                <p>
                  {t("slide_4.ruhrHUB.text-1-row")}
                  <br />
                </p>
              </div>
            </div>

            <div className="container--text">
              <div className="container--img">
                <img src={futuriserLogo} alt="futuriserLogo" />
              </div>

              <div className="text">
                <h3>{t("slide_4.futuriser.subtitle")}</h3>
                <p>
                  {t("slide_4.futuriser.text-1-row")}
                  <br />
                </p>
              </div>
            </div>

            <div className="container--text">
              <div className="container--img">
                <img src={quantumBusinessLogo} alt="quantumBusinessLogo" />
              </div>

              <div className="text">
                <h3>{t("slide_4.quantumBusiness.subtitle")}</h3>
                <p>
                  {t("slide_4.quantumBusiness.text-1-row")}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersVerticalCenter;
