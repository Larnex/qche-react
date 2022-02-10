import React from "react";
import NavbarLogo from "./NavbarLogo";
import s from "./FooterNavbar.module.scss";

const FooterNavbar = () => {
  return (
    <div>
      <nav className={s.navbar}>
        <NavbarLogo></NavbarLogo>
      </nav>
    </div>
  );
};

export default FooterNavbar;
