import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="footer-links">
      <span>
        <Link to="/"> @QCHE 2022</Link>
      </span>
      <span>|</span>
      <span>
        <Link to="/nota-fundacji">Nota fundacji</Link>
      </span>
      <span>|</span>

      <span>
        <Link to="/rodo">RODO</Link>
      </span>
      <span>|</span>

      <span>
        <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
      </span>
      <span>|</span>

      <span>
        <Link to="/regulamin">Regulamin</Link>
      </span>
    </div>
  );
};

export default Footer;
