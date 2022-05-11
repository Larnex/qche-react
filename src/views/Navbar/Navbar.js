import React, { useState, useEffect, useRef, createRef } from "react";
import "./Navbar.scss";
import NavbarLogo from "./NavbarLogo";
import NavList from "./NavList";
import NavBurger from "./NavBurger";
import gsap from "gsap";
import useMediaQuery from "../../utils/hooks/useMediaQuery";

const Navbar = ({ items, logo }) => {
  const navItems = items.map((item) => {
    return {
      ...item,
      ref: createRef(),
    };
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 989px)");

  const navRef = useRef();

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

export default Navbar;
