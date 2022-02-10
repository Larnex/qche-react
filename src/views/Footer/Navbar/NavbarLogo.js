import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo_QCHE_czerwone.png";
import s from "./NavbarLogo.module.scss";

const NavbarLogo = () => {
  return (
    <div className={s.logo__container}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default NavbarLogo;
