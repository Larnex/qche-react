import React from "react";
import { useTranslation } from "react-i18next";
import EC3L from "../../../assets/EC3L_logo_biale.png";
import TrustCertsLogo from "../../../assets/TrustCerts_logo_biale.png";
import "./PartnersVertical.scss";

const PartnersVertical = () => {
  const { t } = useTranslation();

  return (
    <section className="slide--5 js-slide item">
      <div className="slide__inner slide__inner--height--110vh">
        <div className="slide__content slide__content--center">
          <div className="slide__relative--container">
            <div className="container--text">
              <div className="container--img">
                <img alt="EC3L" src={EC3L} />
              </div>

              <div className="text">
                <h3>{t("slide_4.ec3l.subtitle")}</h3>
                <p>
                  {t("slide_4.ec3l.text-1-row")}
                  <br />
                </p>
              </div>
            </div>

            <div className="container--text" style={{ paddingBottom: "100px" }}>
              <div className="container--img">
                <img alt="TrustCerts" src={TrustCertsLogo} />
              </div>

              <div className="text">
                <h3>{t("slide_4.trustCerts.subtitle")}</h3>
                <p>
                  {t("slide_4.trustCerts.text-1-row")}
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

export default PartnersVertical;
