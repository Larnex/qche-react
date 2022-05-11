import React from "react";
import s from "./HomeDonate.module.scss";
import { useTranslation } from "react-i18next";

const HomeDonate = (props) => {
  const { t } = useTranslation();

  return (
    <section className="slide slide--7 js-slide item" id="section6">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <h1 className={s.title}>{t("navbar_6")}</h1>

            <h3 className={s.subtitle}>{t("slide_6.subtitle")}</h3>

            <div className="slide__text">
              <p className={s.text}>
                {t("slide_6.bank_name")} <br />
                {t("slide_6.bank_nr")} <br />
                {t("slide_6.bank_iban")} <br />
                {t("slide_6.bank_bic")} <br /> {t("slide_6.bank_title")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDonate;
