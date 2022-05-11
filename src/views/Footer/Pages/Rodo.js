import React, { useEffect } from "react";
import useScrollProgress from "../../../utils/hooks/useScrollProgress";
import Progress from "../../Progress";
import BgFooter from "../BgFooter";
import FooterNavbar from "../Navbar/FooterNavbar";
import "./Rodo.scss";

export const Rodo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useScrollProgress(true);
  return (
    <div>
      <FooterNavbar></FooterNavbar>
      <section className="footer-slide slide">
        <div className="slide__content">
          <div className="slide--relative__container">
            <br />
            <br />
            <br />
            <div className="title__container">
              <h1 className="js-transition-title">
                Obowiązek informacyjny RODO
              </h1>
            </div>
            <br />
            <p>
              Poniższa informacja stanowi zwięzły, zrozumiały i przejrzysty
              skrót informacji zamieszczonych w Polityce Prywatności odnośnie
              Administratora danych, celu i sposobu przetwarzania danych
              osobowych oraz Twoich praw w związku z tym przetwarzaniem, w
              formie wymaganej do spełnienia obowiązku informacyjnego RODO.
              Szczegóły dotyczące sposobu przetwarzania i podmiotów
              uczestniczących w tym procesie dostępne są we wskazanej polityce.
            </p>
            <br />
            <br />
            <h3>Kto jest administratorem danych?</h3>
            <br />
            <p>
              Administratorem Danych Osobowych (dalej Administrator) jest firma
              "FUNDACJA QUANTUM CYBERSECURITY HUB EUROPE", prowadząca
              działalność pod adresem: UL. LĘBORSKA 3B, 80-386 GDAŃSK, o nadanym
              numerze identyfikacji podatkowej (NIP): 5842813019, o nadanym
              numerze KRS: 0000944667, świadcząca usługi drogą elektroniczną za
              pośrednictwem Serwisu
            </p>
            <br />
            <br />
            <h3>Jak można skontaktować się z administratorem danych?</h3>
            <br />
            <p>
              Z Administratorem można skontaktować się w jeden z poniższych
              sposobów
            </p>
            <br />
            <ul>
              <li>
                <strong>Adres pocztowy</strong> - FUNDACJA QUANTUM CYBERSECURITY
                HUB EUROPE, UL. LĘBORSKA 3B, 80-386 GDAŃSK
              </li>
              <li>
                <strong>Adres poczty elektronicznej</strong> - office@qche.ngo
              </li>
              <li>
                <strong>Połączenie telefoniczne</strong> - +48 668 001 785
              </li>
              <li>
                <strong>Formularz kontaktowy</strong> - dostępny pod adresem:
                /kontakt
              </li>
            </ul>
            <br />
            <br />
            <h3>Czy Administrator powołał Inspektora Danych Osobowych?</h3>
            <br />
            <p>
              Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora
              Ochrony Danych.
            </p>
            <br />
            <p>
              W sprawach dotyczących przetwarzania danych, w tym danych
              osobowych, należy kontaktować się bezpośrednio z Administratorem.
            </p>
            <br />
            <br />
            <h3>Skąd pozyskujemy dane osobowe i jakie są ich źródła?</h3>
            <br />
            <p>Dane pozyskiwane są z następujących źródeł:</p>
            <br />
            <ul>
              <li>od osób, których dane dotyczą</li>
              <li>
                w przypadku rejestracji przy użyciu portali społecznościowych,
                za wyrażoną świadomą zgodą tych osób, z tych portali
                społecznościowych Jaki jest zakres przetwarzanych przez nas
                danych osobowych?
              </li>
            </ul>
            <br />
            <br />
            <p>
              W serwisie przetwarzane są dane <strong>osobowe zwykłe</strong>,
              podane dobrowolnie przez osoby, których dotyczą
            </p>
            <br />
            <p>
              (Np. imię i nazwisko, login, adres e-mail, telefon, adres IP,
              itp.)
            </p>
            <br />
            <p>
              Szczegółowy zakres przetwarzanych danych dostępny jest w Polityce
              Prywatności.
            </p>
            <br />
            <br />
            <h3>Jakie są cele przetwarzania przez nas danych?</h3>
            <br />
            <p>
              Dane osobowe dobrowolnie podane przez Użytkowników są przetwarzane
              w jednym z następujących celów:
            </p>
            <br />
            <ul>
              <li>Realizacji usług elektronicznych:</li>
              <li>
                Usługi Newslettera (w tym przesyłania za zgodą treści
                reklamowych)
              </li>
              <li>
                Komunikacji Administratora z Użytkownikami w sprawach związanych
                z Serwisem oraz ochrony danych
              </li>
              <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
            </ul>
            <br />
            <br />
            <h3>Jakie są podstawy prawne przetwarzania danych?</h3>
            <br />
            <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
            <br />
            <ul>
              <li>
                Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z
                dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                związku z przetwarzaniem danych osobowych i w sprawie swobodnego
                przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                (ogólne rozporządzenie o ochronie danych)
              </li>
              <li>art. 6 ust. 1 lit. a</li>
              <li>
                osoba, której dane dotyczą wyraziła zgodę na przetwarzanie
                swoich danych osobowych w jednym lub większej liczbie
                określonych celów
              </li>
              <li>art. 6 ust. 1 lit. b</li>
              <li>
                przetwarzanie jest niezbędne do wykonania umowy, której stroną
                jest osoba, której dane dotyczą, lub do podjęcia działań na
                żądanie osoby, której dane dotyczą, przed zawarciem umowy
              </li>
              <li>art. 6 ust. 1 lit. f</li>
              <li>
                przetwarzanie jest niezbędne do celów wynikających z prawnie
                uzasadnionych interesów realizowanych przez administratora lub
                przez stronę trzecią
              </li>
              <li>
                Ustawa z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U.
                2018 poz. 1000)
              </li>
              <li>
                Ustawa z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U.
                2004 nr 171 poz. 1800)
              </li>
              <li>
                Ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach
                pokrewnych (Dz. U. 1994 Nr 24 poz. 83)
              </li>
            </ul>
            <br />
            <br />
            <h3>
              Jaki jest prawnie uzasadniony interes realizowany przez
              Administratora?
            </h3>
            <br />
            <ul>
              <li>
                W celu ewentualnego ustalenia, dochodzenia lub obrony przed
                roszczeniami – podstawą prawną przetwarzania jest nasz
                uzasadniony interes (art. 6 ust. 1 lit. f) RODO) polegający na
                ochronie naszych praw, w tym między innymi;
              </li>
              <li>W celu oceny ryzyka potencjalnych klientów</li>
              <li>W celu oceny planowanych kampanii marketingowych</li>
              <li>
                W celu realizacji marketingu bezpośredniego Przez jaki okres
                przetwarzamy dane osobowe?
              </li>
            </ul>
            <br />
            <br />
            <p>
              Co do zasady, wskazane dane osobowe są przechowywane wyłącznie
              przez okres świadczenia usługi w ramach prowadzonego serwisu przez
              Administratora. Są one usuwane lub anonimizowane w okresie do
              <strong> 30 dni od chwili zakończenia świadczenia usług </strong>
              (np. usunięcie zarejestrowanego konta użytkownika, wypisanie z
              listy Newsletter, itp.)
            </p>
            <br />
            <p>
              W wyjątkowych sytuacjach, w celu zabezpieczenie prawnie
              uzasadnionego interesu realizowanego przez Administratora, okres
              ten może ulec wydłużeniu. W takiej sytuacji Administrator będzie
              przechowywał wskazane dane, od czasu żądania ich usunięcia przez
              Użytkownika, nie dłużej niż przez okres 3 lat w przypadku
              naruszenia lub podejrzenia naruszenia zapisów regulaminu serwisu
              przez osobę, której dane dotyczą.
            </p>
            <br />
            <br />
            <h3>Kto jest odbiorcą danych w tym danych osobowych?</h3>
            <p>Co do zasady jedynym odbiorcą danych jest Administrator.</p>
            <br />
            <p>
              Przetwarzanie danych może jednak być powierzone innym podmiotom,
              realizującym usługi na rzecz Administratora w celu utrzymania
              działalności Serwisu.
            </p>
            <br />
            <p>Do podmiotów takich można zaliczyć między innymi:</p>
            <br />
            <ul>
              <li>
                Firmy hostingowe, świadczące usługi hostingu lub usług
                pokrewnych dla Administratora
              </li>
              <li>
                Firmy, za pośrednictwem których świadczona jest usługa
                Newslettera Czy Państwa dane osobowe będą przekazywane poza Unię
                Europejską?
              </li>
            </ul>
            <br />
            <p>
              Dane osobowe{" "}
              <strong>nie będą przekazywane poza Unię Europejską</strong> ,
              chyba że zostały opublikowane na skutek indywidualnego działania
              Użytkownika (np. wprowadzenie komentarza lub wpisu), co sprawi, że
              dane będą dostępne dla każdej osoby odwiedzającej serwis.
            </p>

            <br />
            <br />

            <h3>
              Czy dane osobowe będą podstawą zautomatyzowanego podejmowania
              decyzji?
            </h3>
            <p>
              Dane osobowe <strong>nie będą wykorzystywane</strong> do
              zautomatyzowanego podejmowania decyzji (profilowania).
            </p>
            <br />
            <br />
            <h3>
              Jakie mają Państwo prawa związane z przetwarzaniem danych
              osobowych?
            </h3>
            <br />
            <ul>
              <li>
                <strong>Prawo dostępu do danych osobowych</strong>
              </li>
              <li>
                Użytkownikom przysługuje prawo uzyskania dostępu do swoich
                danych osobowych, realizowane na żądanie złożone do
                Administratora
              </li>
              <li>
                <strong>Prawo do sprostowania danych osobowych</strong>
              </li>
              <li>
                Użytkownikom przysługuje prawo żądania od Administratora
                niezwłocznego sprostowania danych osobowych, które są
                nieprawidłowe lub / oraz uzupełnienia niekompletnych danych
                osobowych, realizowane na żądanie złożone do Administratora
              </li>
              <li>
                <strong>Prawo do usunięcia danych osobowych</strong>
              </li>
              <li>
                Użytkownikom przysługuje prawo żądania od Administratora
                niezwłocznego usunięcia danych osobowych, realizowane na żądanie
                złożone do Administratora.
              </li>
              <li>
                W przypadku kont użytkowników, usunięcie danych polega na
                anonimizacji danych umożliwiających identyfikację Użytkownika.
              </li>
              <li>
                W przypadku usługi Newsletter, Użytkownik ma możliwość
                samodzielnego usunięcia swoich danych osobowych korzystając z
                odnośnika umieszczonego w każdej przesyłanej wiadomości e-mail.
              </li>
              <li>
                <strong>
                  Prawo do ograniczenia przetwarzania danych osobowych
                </strong>
              </li>
              <li>
                Użytkownikom przysługuje prawo ograniczenia przetwarzania danych
                osobowych w przypadkach wskazanych w art. 18 RODO, m.in.
                kwestionowania prawidłowość danych osobowych, realizowane na
                żądanie złożone do Administratora
              </li>
              <li>
                <strong>Prawo do przenoszenia danych osobowych</strong>
              </li>
              <li>
                Użytkownikom przysługuje prawo uzyskania od Administratora,
                danych osobowych dotyczących Użytkownika w ustrukturyzowanym,
                powszechnie używanym formacie nadającym się do odczytu
                maszynowego, realizowane na żądanie złożone do Administratora
              </li>
              <li>
                <strong>
                  Prawo wniesienia sprzeciwu wobec przetwarzania danych
                  osobowych
                </strong>
              </li>
              <li>
                Użytkownikom przysługuje prawo wniesienia sprzeciwu wobec
                przetwarzania jego danych osobowych w przypadkach określonych w
                art. 21 RODO, realizowane na żądanie złożone do Administratora
              </li>
              <li>
                <strong>Prawo wniesienia skargi</strong>
              </li>
              <li>
                Użytkownikom przysługuje prawo wniesienia skargi do organu
                nadzorczego zajmującego się ochroną danych osobowych.
              </li>
            </ul>
          </div>
        </div>

        <BgFooter></BgFooter>
      </section>
      <Progress></Progress>
    </div>
  );
};
