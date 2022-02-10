import React, { useEffect } from "react";
import BgFooter from "../BgFooter";
import FooterNavbar from "../Navbar/FooterNavbar";
import "./Rodo.scss";

const Note = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FooterNavbar></FooterNavbar>
      <section className="footer-slide slide-note">
        <div className="slide__content">
          <div className="slide--relative__container">
            <div className="title__container">
              <h1 className="js-transition-title">Nota fundacji</h1>
            </div>
            <p>
              1. Dane identyfikacyjne Fundacji:
              <br />
              <br /> Fundacja Quantum Cybersecurity Hub Europe z siedzibą w
              Gdańsku, przy ul. Lęborskiej 3B (80-386), zarejestrowana w
              rejestrze stowarzyszeń, innych organizacji społecznych i
              zawodowych, fundacji oraz samodzielnych publicznych zakładów
              opieki zdrowotnej Krajowego Rejestru Sądowego prowadzonym przez
              Sąd Rejonowy Gdańsk Północ w Gdańsku, VII Wydział Gospodarczy
              Krajowego Rejestru Sądowego, pod numerem 0000944667, numer NIP:
              5842813019, numer REGON: 52105582200000.
            </p>
          </div>
        </div>

        <BgFooter></BgFooter>
      </section>
      <progress value="100" max="100"></progress>
    </div>
  );
};

export default Note;
