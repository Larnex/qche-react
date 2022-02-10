import React from "react";
import "./HomeCybersecurity.scss";

const HomeCybersecurity = (props) => {
  return (
    <section className="slide slide--4 js-slide item" id="section3">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <h1 className="js-transition-title">
              CYBERBEZPIECZEŃSTWO KWANTOWE
            </h1>

            <div className="slide__text">
              <p className="js-transition-text">
                Trudno znaleźć inna dziedzinę techniki, w której podstawowe
                prawa rządzące wszechświatem tak bezpośrednio przekładają się na
                praktyczne rozwiązania ważnych problemów jak dzieje się to w
                informatyce kwantowej. Bezpieczeństwo jednych protokołów
                komunikacyjnych opiera się na zasadzie nieoznaczoności
                Heisenberga podczas kiedy inne bazują na nielokalności. Z kolei
                komputery kwantowe wykorzystują splątanie do wykonywania
                operacji niemożliwych do przeprowadzenia na ich klasycznych
                odpowiednikach. Ponieważ te zjawiska są bardzo sprzeczne z naszą
                intuicją podobnie jest z ich zastosowaniami. Zadania wykonywane
                za pomocą technologii kwantowych były jeszcze niedawno uznawane
                za niemożliwe i jest to szczególnie dobrze widoczne w przypadku
                cyberbezpieczeństwa.
              </p>
            </div>
          </div>
        </div>

        <div className="slide__img js-transition-img">
          <figure className="js-transition-img__inner">
            <img src={props.img} draggable="false" alt="main" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HomeCybersecurity;
