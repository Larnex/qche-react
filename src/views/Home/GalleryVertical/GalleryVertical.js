import React from "react";
import Oliver from "../../../assets/zdj/oliver.jpg";
import Sven from "../../../assets/zdj/s_wienmann.jpg";
import Maciej from "../../../assets/zdj/m_wierzbowski.jpg";
import "./GalleryVertical.scss";
import { useTranslation } from "react-i18next";

const GalleryVertical = () => {
  const { t } = useTranslation();

  return (
    <div className="grid-column-3" id="section-vertical">
      <figure>
        <div className="img-container">
          <img src={Oliver} alt="Oliver" className="img img-1"></img>
          <figcaption>
            {t("slide_2.team.OW.name")} <br />
            {t("slide_2.team.OW.position")}
            <br />
            {t("slide_2.team.OW.company")}
          </figcaption>
        </div>
      </figure>

      <figure>
        <div className="img-container">
          <img src={Sven} alt="Sven" className="img img-2"></img>
          <figcaption>
            {t("slide_2.team.SG.name")} <br />
            {t("slide_2.team.SG.position")}
            <br />
            {t("slide_2.team.SG.company")}
          </figcaption>
        </div>
      </figure>

      <figure>
        <div className="img-container">
          <img src={Maciej} alt="Maciej" className="img img-3"></img>
          <figcaption>
            {t("slide_2.team.MW.name")} <br />
            {t("slide_2.team.MW.position")}
            <br />
            {t("slide_2.team.MW.company")}
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default GalleryVertical;
