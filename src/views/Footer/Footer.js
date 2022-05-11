import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = (props) => {
  const scrollBack = () => {
    window.scrollTo(0, 0);
  };

  const { t } = useTranslation();

  return (
    <div className="footer-links">
      <div className="footer-center">
        <span>
          <Link to="/"> @QCHE 2022</Link>
        </span>
        <span>|</span>
        <span>
          <Link to="/" onClick={scrollBack}>
            Home
          </Link>
        </span>
        <span>|</span>
        <span>
          <Link to="/nota-fundacji">{t("footer.item-1")}</Link>
        </span>
        <span>|</span>

        <span>
          <Link to="/rodo">{t("footer.item-2")}</Link>
        </span>
        <span>|</span>

        <span>
          <Link to="/polityka-prywatnosci">{t("footer.item-3")}</Link>
        </span>
        <span>|</span>

        <span>
          <Link to="/regulamin">{t("footer.item-4")}</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
