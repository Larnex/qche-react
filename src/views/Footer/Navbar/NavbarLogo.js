import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo_QCHE_czerwone.png";
import s from "./NavbarLogo.module.scss";

const NavbarLogo = () => {
  return (
    <div className={s.logo__container}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <a
        className={s.logo}
        href="https://www.linkedin.com/company/qche"
        _target="blank"
      >
        <AiFillLinkedin></AiFillLinkedin>
      </a>
    </div>
  );
};

export default NavbarLogo;
