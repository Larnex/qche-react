import React from "react";
import "./HomePartnership.scss";

const HomePartnership = (props) => {
  return (
    <section className="slide slide--8 js-slide item" id="section7">
      <div className="slide__inner">
        <div className="slide__content">
          <div className="slide__relative--container">
            <div className="title__container">
              <h1 className="js-transition-title">WSPÓŁPRACA</h1>
            </div>

            <div className="container--text">
              <div className="text">
                <h3>PRZEDSIĘBIORSTWA, ORGANIZACJE, INSTYTUCJE PUBLICZNE</h3>
                <ul>
                  <li>Implementowanie nowych technologii w codziennej pracy</li>
                  <li>Wspólna realizacja projektów partnerskich</li>
                  <li>
                    Znajdowanie nowych rozwiązań z zakresu cyberbezpieczeństwa
                    we własnej branży
                  </li>
                  <li>
                    Poszerzanie wiedzy o cyberbezpieczeństwie standardowym i
                    kwantowym
                  </li>
                </ul>
              </div>
              <div className="text">
                <h3>ROZWÓJ TECHNOLOGII</h3>
                <p>
                  Fundacja QCHE podejmuje działania na skalę ogólnopolską i
                  europejską, jesteśmy otwarci na współpracę która może wspomóc
                  działania fundacji m. in. w zakresie technologicznym i
                  udostępniania nowych możliwości kwantowych.
                </p>
              </div>
            </div>
            <div className="footer">
              <p>
                Zachęcamy do kontaktu. Chętnie poznamy państwa pomysły i punkt
                widzenia.
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

export default HomePartnership;
