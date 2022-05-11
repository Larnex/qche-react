import React from "react";
import s from "./NavList.module.scss";

const NavList = React.forwardRef(({ items, isMenuOpen }, ref) => {
  const openClass = isMenuOpen ? s.open : "";

  console.log("items", items);

  return (
    <nav className={`${s.nav} ${openClass}`} ref={ref}>
      {items.map((item, i) => (
        <a
          href={`#${item.id}`}
          key={item.id + i}
          className={`${s.nav__item}`}
          ref={item.ref}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
});

export default NavList;
