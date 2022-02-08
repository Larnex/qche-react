import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo_QCHE_biale.png";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    return () => {
      window.addEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      {(toggleMenu || screenWidth > 1200) && (
        <ul className="list">
          <li className="items main-link">
            <a href="#section0">Główna</a>
          </li>
          <li className="items">
            <a href="#section1">Nasza Misja</a>
          </li>
          <li className="items">
            <a href="#section2">Zespół Fundacji</a>
          </li>
          <li className="items">
            <a href="#section3">Cyberbezpieczeństwo kwantowe</a>
          </li>
          <li className="items">
            <a href="#section4">Nasi Partnerzy</a>
          </li>
          <li className="items">
            <a href="#section5">Blog</a>
          </li>
          <li className="items">
            <a href="#section6">Współpraca</a>
          </li>
          {/*<li className="items">
            <a href="#section7">Współpraca</a>
          </li>
          <li className="items">
            <a href="#section8">Kontakt</a>
          </li> */}
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        X
      </button>
    </nav>
  );
};

export default Navbar;
