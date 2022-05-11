import React, { useEffect } from "react";
import BgFooter from "../BgFooter";
import FooterNavbar from "../Navbar/FooterNavbar";
import "./Rodo.scss";
import Progress from "../../Progress";
import { useTranslation } from "react-i18next";

const Note = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <FooterNavbar></FooterNavbar>
      <section
        className="footer-slide slide-note"
        style={{ overflow: "hidden" }}
      >
        <div className="slide__content">
          <div className="slide--relative__container">
            <br />
            <br />
            <br />

            <div className="title__container">
              <h1 className="js-transition-title">{t("Note.title")}</h1>
            </div>
            <br />
            <p>
              {t("Note.subtitle_1")}
              <br />
              <br /> {t("Note.text_1")}
            </p>
          </div>
        </div>

        <BgFooter></BgFooter>
      </section>
      <Progress></Progress>
    </div>
  );
};

export default Note;
