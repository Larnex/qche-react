import React from "react";
import { useTranslation } from "react-i18next";
import s from "./LanguageSwitcher.module.scss";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className={s.select}>
      <div value={i18n.language} className={s.container}>
        <button
          className={i18n.language === "pl" ? s.isActive : null}
          onClick={() => i18n.changeLanguage("pl")}
        >
          PL
        </button>
        <span className={s.border}></span>
        <button
          className={i18n.language === "de" ? s.isActive : null}
          onClick={() => i18n.changeLanguage("de")}
        >
          DE
        </button>
        <span className={s.border}></span>
        <button
          className={i18n.language === "en" ? s.isActive : null}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
