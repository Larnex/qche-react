import React, { useState, useEffect, useRef, createRef } from "react";
import "./Navbar.scss";
import NavbarLogo from "./NavbarLogo";
import NavList from "./NavList";
import NavBurger from "./NavBurger";
import gsap from "gsap";
import useMediaQuery from "../../utils/hooks/useMediaQuery";

// const [toggleMenu, setToggleMenu] = useState(false);
// const [screenWidth, setScreenWidth] = useState(window.innerWidth);

// useEffect(() => {
//   const changeWidth = () => {
//     setScreenWidth(window.innerWidth);
//   };

//   return () => {
//     window.addEventListener("resize", changeWidth);
//   };
// }, []);

// const toggleNav = () => {
//   setToggleMenu(!toggleMenu);
// };
const Navbar = ({ items, logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 989px)");

  const navRef = useRef();

  const [navItems] = useState(
    items.map((item) => {
      return {
        ...item,
        ref: createRef(),
      };
    })
  );
  console.log("[navItems]:", [navItems]);
  console.log("navItems:", navItems);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [menuTL] = useState(
    gsap.timeline({
      paused: true,
      defaults: { duration: 1, ease: "expo.out" },
    })
  );

  useEffect(() => {
    const itemsRefs = navItems.map((item) => item.ref.current);

    if (isSmallScreen) {
      menuTL
        .fromTo(navRef.current, { opacity: 0 }, { opacity: 1 })
        .fromTo(
          itemsRefs,
          { autoAlpha: 0, y: 48 },
          { autoAlpha: 1, y: 0, stagger: 0.1 },
          "-=0.4"
        )
        .reverse();
    } else {
      menuTL.seek(0).clear().pause();
      gsap.set([navRef.current, itemsRefs], { clearProps: "all" });
    }
  }, [isSmallScreen]);

  useEffect(() => {
    menuTL.reversed(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header__wrapper">
        <NavbarLogo logo={logo}></NavbarLogo>
        <NavList
          items={navItems}
          isMenuOpen={isMenuOpen}
          ref={navRef}
        ></NavList>
        <NavBurger toggleNav={toggleNav} isMenuOpen={isMenuOpen}></NavBurger>
      </div>
    </header>
  );
};

/* <ul className="list">
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
      </li> */
/*<li className="items">
          <a href="#section7">Współpraca</a>
        </li>
        <li className="items">
          <a href="#section8">Kontakt</a>
        </li> */
/* </ul> */
/* <button onClick={toggleNav} className="btn">
      X
    </button> */

export default Navbar;
