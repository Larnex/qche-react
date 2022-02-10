import React from "react";
import s from "./NavbarLogo.module.scss";
import { AiFillLinkedin } from "react-icons/ai";

const NavbarLogo = ({ logo }) => {
  return (
    <div className={s.logo}>
      <img src={logo} alt="logo" />
      <a href="https://www.linkedin.com/company/qche" _target="blank">
        <AiFillLinkedin></AiFillLinkedin>
      </a>
    </div>
  );
};

export default NavbarLogo;
