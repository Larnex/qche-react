import React, { useEffect } from "react";
import FooterNavbar from "../Navbar/FooterNavbar";

const Note = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FooterNavbar></FooterNavbar>
    </div>
  );
};

export default Note;
