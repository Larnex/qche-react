import React from "react";
import s from "./NavbarLogo.module.scss";
import { AiFillLinkedin } from "react-icons/ai";
import LanguageSwitcher from "./LanguageSwitcher";

const NavbarLogo = ({ logo }) => {
  return (
    <div className={s.logo}>
      <div className={s.nav}>
        <img src={logo} alt="logo" />
        <a href="https://www.linkedin.com/company/qche" _target="blank">
          <AiFillLinkedin></AiFillLinkedin>
        </a>
      </div>

      <div className={s.switcher}>
        <LanguageSwitcher></LanguageSwitcher>
      </div>
    </div>
  );
};

export default NavbarLogo;
