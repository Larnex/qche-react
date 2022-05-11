import React from "react";
import "./HomeGallery.scss";
import SZimnol from "../../../assets/zdj/Sebastian3.jpg";
import MPawlowski from "../../../assets/zdj/m_pawlowski.jpg";
import { useTranslation } from "react-i18next";
import ScrollDown from "../../ScrollDown/ScrollDown";

const HomeGallery = () => {
  const { t } = useTranslation();

  return (
    <section className="slide slide--3 js-slide item" id="section2">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <div className="slide__text">
              <div className="slide__text--title">{t("slide_2.title")}</div>

              <p>{t("slide_2.text")}</p>
            </div>
            <div className="grid__img">
              <figure className="img__cont-1 img__cont">
                <img src={SZimnol} alt="S.Zimnol" className="img img-1"></img>
                <figcaption>
                  {t("slide_2.team.SZ.name")} <br />
                  {t("slide_2.team.SZ.position")}
                  <br />
                  {t("slide_2.team.SZ.company")}
                </figcaption>
              </figure>

              <figure className="img__cont-1 img__cont">
                <img
                  src={MPawlowski}
                  alt="M.Pawlowski"
                  className="img img-2"
                ></img>
                <figcaption>
                  {t("slide_2.team.MP.name")} <br />
                  {t("slide_2.team.MP.position")}
                  <br />
                  {t("slide_2.team.MP.company")}
                </figcaption>
              </figure>
            </div>
            <ScrollDown></ScrollDown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
