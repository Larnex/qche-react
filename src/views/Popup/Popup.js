import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./Popup.module.scss";
import logo from "../../assets/logo_help-ukraine.png";

export const Popup = () => {
  const { t } = useTranslation();

  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? (
        <div className={s.container}>
          <button onClick={() => setShow(false)}>X</button>
          <div className={s.logo__container}>
            <img src={logo} alt="" className={s.logo} />
          </div>
          <div className={s.text__container}>
            <p className={s.text}>{t("popup-text")}</p>
          </div>

          <div className={s.subtitle__container}>
            <h3 className={s.subtitle}>{t("popup-subtitle")}</h3>
          </div>

          <div className={s.link__container}>
            <a href="https://helpukraine.cloud">helpukraine.cloud</a>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
