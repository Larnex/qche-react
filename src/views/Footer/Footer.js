import React from "react";
import "./Footer.scss";
import { Link, Outlet } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="footer-links">
      <span>
        <Link to="/"> @QCHE 2022</Link>
      </span>
      <span>
        <Link to="/">Nota fundacji</Link>
      </span>
      <span>
        <Link to="/rodo">RODO</Link>
      </span>
      <span>
        <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
      </span>
      <span>
        <Link to="/regulamin">Regulamin</Link>
      </span>
    </div>
  );
};

export default Footer;
