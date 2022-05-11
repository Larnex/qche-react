import React, { useEffect } from "react";
import FooterNavbar from "../Navbar/FooterNavbar";
import "./Rodo.scss";
import BgFooter from "../BgFooter";
import Progress from "../../Progress";
import useScrollProgress from "../../../utils/hooks/useScrollProgress";

export const Regulations = () => {
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
              <h1 className="js-transition-title">Regulamin strony www </h1>
            </div>
            <br />

            <p>Regulamin serwisu.</p>
            <br />
            <br />
            <h3>I. Pojęcia ogólne</h3>
            <br />
            <ul>
              <li>
                <strong>Regulamin</strong> – niniejszy regulamin
              </li>
              <li>
                <strong>Serwis</strong> serwis internetowych "Fundacja Quantum
                Cebersecurity Hub Europe ", działających pod adresem
                <a href="https://qche.ngo"> https://qche.ngo</a>
              </li>
              <li>
                <strong>Usługodawca</strong> - firma "Fundacja Quantum
                Cebersecurity Hub Europe " z adresem siedziby: UL. LĘBORSKA 3B,
                80-386 GDAŃSK, NIP: 5842813019, KRS: 0000944667,
              </li>
              <li>
                <strong>Usługobiorca</strong> – każda osoba fizyczna, uzyskująca
                dostęp do Serwisu i korzystająca z usług świadczonych za
                pośrednictwem Serwisu przez Usługodawcę.
              </li>
              <li>
                <strong>Komunikacja Drogą Elektroniczną</strong> – Komunikacja
                pomiędzy stronami za pośrednictwem poczty elektronicznej
                (e-mail) oraz formularzy kontaktowych dostępnych na stronie www.
              </li>
            </ul>

            <br />
            <br />
            <h3>II. Postanowienia ogólne</h3>
            <br />
            <ul>
              <li>
                Regulamin, określa zasady funkcjonowania i użytkowania Serwisu
                oraz określa zakres praw i obowiązków Usługobiorców i
                Usługodawcy związanych z użytkowaniem Serwisu.
              </li>
              <li>
                Przedmiotem usług Usługodawcy jest udostępnienie nieodpłatnych
                narzędzi w postaci Serwisu, umożliwiających Usługobiorcom dostęp
                do treści w postaci wpisów, artykułów i materiałów
                audiowizualnych lub aplikacji internetowych i formularzy
                elektronicznych
              </li>
              <li>
                Wszelkie ewentualne treści, artykuły i informacje zawierające
                cechy wskazówek lub porad publikowane na łamach Serwisu są
                jedynie ogólnym zbiorem informacji i nie są kierowane do
                poszczególnych Usługobiorców. Usługodawca nie ponosi
                odpowiedzialności za wykorzystanie ich przez Usługobiorców.
              </li>
              <li>
                Usługobiorca bierze na siebie pełną odpowiedzialno za sposób
                wykorzystania materiałów udostępnianych w ramach Serwisu w tym
                za wykorzystanie ich zgodnie z obowiązującymi przepisami prawa.
              </li>
              <li>
                Usługodawca nie udziela żadnej gwarancji co do przydatności
                materiałów umieszczonych w Serwisie.
              </li>
              <li>
                Usługodawca nie ponosi odpowiedzialności z tytułu ewentualnych
                szkód poniesionych przez Usługobiorców Serwisu lub osoby trzecie
                w związku z korzystaniem z Serwisu. Wszelkie ryzyko związane z
                korzystaniem z Serwisu, a w szczególności z używaniem i
                wykorzystywaniem informacji umieszczonych w Serwisie, ponosi
                Usługobiorca korzystający z usług Serwisu.
              </li>
            </ul>
            <br />
            <br />
            <h3>III. Warunki używania Serwisu</h3>
            <br />
            <ul>
              <li>
                Używanie Serwisu przez każdego z Usługobiorców jest nieodpłatne
                i dobrowolne.
              </li>
              <li>
                Usługobiorcy mają obowiązek zapoznania się z Regulaminem oraz
                pozostałymi dokumentami stanowiącymi jego integralną część i
                muszą zaakceptować w całości jego postanowienia w celu dalszego
                korzystania z Serwisu.
              </li>
              <li>
                Usługobiorcy nie mogą wykorzystywać żadnych pozyskanych w
                Serwisie danych osobowych do celów marketingowych.
              </li>
              <li>Wymagania techniczne korzystania z Serwisu:</li>
              <li>
                urządzenie z wyświetlaczem umożliwiające wyświetlanie stron
                internetowych,
              </li>
              <li>połączenie z internetem,</li>
              <li>
                dowolna przeglądarka internetowa, która wyświetla strony
                internetowe zgodnie ze standardami i postanowieniami Konsorcjum
                W3C i obsługuje strony www udostępniane w języku HTML5,
              </li>
              <li>włączoną obsługę skryptów JavaScript,</li>
              <li>włączoną obsługę plików Cookie</li>
              <li>
                W celu zapewnienia bezpieczeństwa Usługodawcy, Usługobiorcy oraz
                innych Usługobiorców korzystających z Serwisu, wszyscy
                Usługobiorcy korzystający z Serwisu powinni stosować się do
                ogólnie przyjętych zasad bezpieczeństwa w sieci,
              </li>
              <li>
                Zabrania się działań wykonywanych osobiście przez Usługobiorców
                lub przy użyciu oprorgamowania:
              </li>
              <li>
                bez zgody pisemnej, dekompilacji i analizy kodu źródłowego,
              </li>
              <li>
                bez zgody pisemnej, powodujących nadmierne obciążenie serwera
                Serwisu,
              </li>
              <li>
                bez zgody pisemnej, prób wykrycia luk w zabezpieczeniach Serwisu
                i konfiguracji serwera,
              </li>
              <li>
                podejmowania prób wgrywania lub wszczykiwania na serwer i do
                bazy danych kodu, skryptów i oprogramowania mogących wyrządzić
                szkodę oprogramowaniu Serwisu, innym Usługobiorcom lub
                Usługodawcy,
              </li>
              <li>
                podejmowania prób wgrywania lub wszczykiwania na serwer i do
                bazy danych kodu, skryptów i oprogramowania mogących śledzić lub
                wykradać dane Usługobiorców lub Usługodawcy,
              </li>
              <li>
                podejmowania jakichkolwiek działań mających na celu uszkodzenie,
                zablokowanie działania Serwisu lub uniemożliwienie realizacji
                celu w jakim działa Serwis.
              </li>
              <li>
                W przypadku wykrycia zaistnienia lub potencjalnej możliwości
                zaistnienia incydentu Cyberbezpieczeństwa lub naruszenia RODO,
                Usługobiorcy w pierwszej kolejności powinni zgłosić ten fakt
                Usługodawcy w celu szybkiego usunięcia problemu / zagrożenia i
                zabezpieczenia interesów wszystkich Usługobiorców Serwisu.
              </li>
            </ul>
            <br />
            <br />
            <h3>IV. Warunki oraz zasady rejestracji</h3>
            <ul>
              <li>
                Usługobiorcy mogą korzystać z Serwisu bez konieczności
                rejestracji.
              </li>
              <li>
                Usługobiorcy muszą być zarejestrowani i posiadać konto w
                Serwisie by korzystać z dodatkowych usług świadczonych w
                Serwisie, dostępnych jedynie dla Usługobiorców po zalogowaniu.
              </li>
              <li>Rejestracja w Serwisie jest dobrowolna.</li>
              <li>Rejestracja w Serwisie jest nieodpłatna.</li>
              <li>
                Każdy Usługobiorca może posiadać tylko jedno konto w Serwisie.
              </li>
              <li>Wymagania techniczne związane z rejestracją konta:</li>
              <li>
                posiadanie indywidualnego konta poczty elektronicznej e-mail,
              </li>
              <li>
                Rejestrujący się w Serwisie Usługobiorcy wyrażają zgodę na
                przetwarzanie ich danych osobowych przez Usługobiorcę w zakresie
                w jakim zostały one wprowadzone do Serwisu podczas procesu
                rejestracji oraz ich późniejszych zmianom lub usunięciu.
              </li>
              <li>
                Usługodawca ma prawo zawieszać lub usuwać konta Usługobiorców
                według własnego uznania, uniemożliwiając lub ograniczając w ten
                sposób dostęp do poszczególnych lub wszystkich usług, treści,
                materiałów i zasobów Serwisu, w szczególności jeżeli
                Usługobiorca dopuści się łamania Regulaminu, powszechnie
                obowiązujących przepisów prawa, zasad współżycia społecznego lub
                działa na szkodę Usługodawcy lub innych Usługobiorców,
                uzasadnionego interesu Usługodawcy oraz podmiotów trzecich
                współpracujących lub nie z Usługodawcą.
              </li>
              <li>
                Wszelkie usługi Serwisu mogą być zmieniane co do ich treści i
                zakresu, dodawane lub odejmowane, a także czasowo zawieszane lub
                dostęp do nich może być ograniczany, według swobodnej decyzji
                Usługodawcy, bez możliwości wnoszenia sprzeciwu w tym zakresie
                przez Usługobiorców.
              </li>
              <li>
                Dodatkowe zasady bezpieczeństwa w zakresie korzystania z konta:
              </li>
              <li>
                Zabrania się Usługobiorcom zarejestrowanym w Serwisie do
                udostępniania loginu oraz hasła do swojego konta osobom trzecim.
              </li>
              <li>
                Usługodawca nie ma prawa i nigdy nie będzie zażądać od
                Usługobiorcy hasła do wybranego konta.
              </li>
              <li>Usuwanie konta:</li>
              <li>
                Każdy Usługobiorca posiadający konto w Serwisie ma możliwość
                samodzielnego usunięcia konta z Serwisu.
              </li>
              <li>
                Usługobiorcy mogą to uczynić po zalogowaniu się w panelu w
                Serwisie.
              </li>
              <li>
                Usunięcie konta skutkuje usunięciem wszelkich danych
                identyfikacyjnych Usługobiorcy oraz anonimizacją nazwy
                użytkownika i adresu e-mail.
              </li>
            </ul>
            <br />
            <br />
            <h3>V. Warunki świadczenia usługi Newsletter</h3>
            <br />
            <ul>
              <li>
                Usługobiorcy mogą korzystać z Serwisu bez konieczności
                zapisywania się do Newslettera.
              </li>
              <li>Zapisanie się usługi Newslettera jest dobrowolne.</li>
              <li>Zapisanie się do usługi Newslettera jest nieodpłatne.</li>
              <li>Wymagania techniczne związane z usługą Newsletter:</li>
              <li>
                posiadanie indywidualnego konta poczty elektronicznej e-mail,
              </li>
              <li>Warunki świadczenia usługi Newsletter:</li>
              <li>
                podanie w formularzu elektronicznym indywidualnego konta poczty
                elektronicznej e-mail,
              </li>
              <li>
                weryfikacja podanego konta pocztowego e-mail poprzez
                uruchomienie przesłanego na nie odnośnika,
              </li>
              <li>wyrażenie zgody na otrzymywania powiadomień e-mail,</li>
              <li>Zakres usługi Newsletter:</li>
              <li>
                powiadamianie o nowych aktualnościach, wpisach, konkursach, i
                innych akcjach promocyjnych związanych z usługami Serwisu,
              </li>
              <li>
                powiadamianie o akcjach promocyjnych partnerów Serwisu
                (wiadomości Marketingowe),
              </li>
              <li>Wypisanie się z usługi Newsletter:</li>
              <li>
                Każdy Usługobiorca zapisany do usługi Newsletter ma możliwość
                samodzielnego wypisania się z Usługi.
              </li>
              <li>
                Usługobiorcy mogą to uczynić poprzez link umieszczony w każdej
                przesłanej wiadomości e-mail.
              </li>
              <li>
                Wypisanie się z usługi Newsletter skutkuje usunięciem podanego
                adresu e-mail z bazy Usługodawcy.
              </li>
            </ul>
            <br />
            <br />
            <h3>
              VI. Warunki komunikacji i świadczenia pozostałych usług w Serwisie
            </h3>
            <br />
            <ul>
              <li>
                Serwis udostępnia usługi i narzędzia umożliwiające Usługobiorcom
                interakcję z Serwisem w postaci:
              </li>
              <li>Formularz kontaktowy</li>
              <li>Komentowania wpisów i artykułów</li>
              <li>Serwis udostępnia dane kontaktowe w postaci:</li>
              <li>Adresu e-mail</li>
              <li>
                W przypadku kontaktu Usługobiorcy z Usługodawcą, dane osobowe
                Usługobiorców będa przetwarzane zgodnie z "Polityką
                Prywatności", stanowiącą integralną część Regulaminu.
              </li>
              <li>
                Warunki umieszczania treści przez Usługobiorców w Serwisie:
              </li>
              <li>
                Zabrania się umieszczania w Serwisie treści obraźliwych lub
                oszczerczych względem Usługodawcy, pozostałych Usługobiorców,
                osób trzecich oraz podmiotów trzecich,
              </li>
              <li>
                Zabrania się umieszczania w Serwisie materiałów tekstowcyh,
                graficznych, audiowizualnych, skryptów, programów i innych
                utworów, na które Usługobiorca nie posiada się licencji, lub
                których autor praw majątkowych nie wyraził zgody na darmową
                publikację,
              </li>
              <li>
                Zabrania się umieszczania w Serwisie treści wulgarnych,
                pornograficznych, erotycznych i niezgodnych z polskim i
                europejskim prawem a także odnośników do stron zawierających
                wskazane treści,
              </li>
              <li>
                Zabrania się umieszczania w Serwisie skryptów i programów
                nadmiernie obciążających serwer, oprogramowania nielegalnego,
                oprogramowania służącego do naruszania zabezpieczeń oraz innych
                podobnych działań a także odnośników do stron zawierających
                wskazane materiały,
              </li>
              <li>
                Zabrania się umieszczania w Serwisie treści merketingowych i
                reklamujących inne serwisy komercyjne, produkty, usługi czy
                komercyjne strony internetowe
              </li>
            </ul>
            <br />
            <br />
            <h3>VII. Gromadzenie danych o Usługobiorcach</h3>
            <br />
            <p>
              W celu prawidłowego świadczenia usług przez Serwis, zabezpieczenia
              prawnego interesu Usługodawcy oraz w celu zapewnienia zgodności
              działania Serwisu z obowiązującym prawem, Usługodawca za
              pośrednictwem Serwisu gromadzi i przetwarza niektóre dane o
              Użytkownikach.
            </p>
            <br />
            <p>
              W celu prawidłowego świadczenia usług, Serwis wykorzystuje i
              zapisuje niektóre anonimowe informacje o Usługobiorcy w plikach
              cookies.
            </p>
            <br />
            <p>
              Zakres, cele, sposób oraz zasady przetwarzania danych dostępne są
              w załącznikach do Regulaminu: „Obowiązek informacyjny RODO” oraz w
              „Polityce prywatności„, stanowiących integralną część Regulaminu.
            </p>
            <br />
            <ul>
              <li>Dane zbierane podczas rejestracji:</li>
              <li>Nazwa użytkownika, imię i nazwisko, adres e-mail</li>
              <li>
                W przypadku Usługobiorców zalogowanych (posiadających konto w
                Serwisie), w plikach cookies zapisywanych na urządzeniu
                Usługobiorcy może być umieszczony identyfikator Usługobiorcy
                powiązany z kontem Usługobiorcy
              </li>
              <li>Dane zbierane podczas zapisywania do newslettera:</li>
              <li>adres e-mail</li>
            </ul>
            <br />
            <br />
            <h3>VIII. Prawa autorskie</h3>
            <br />
            <ul>
              <li>
                Właścicielem Serwisu oraz praw autorskich do serwisu jest
                Usługodawca.
              </li>
              <li>
                Część danych zamieszczonych w Serwisie są chronione prawami
                autorskimi należącymi do firm, instytucji i osób trzecich,
                niepowiązanych w jakikolwiek sposób z Usługodawcą, i są
                wykorzystywane na podstawie uzyskanych licencji, lub opartych na
                licencji darmowej.
              </li>
              <li>
                Na podstawie Ustawy z dnia 4 lutego 1994 o prawie autorskim
                zabrania się wykorzystywania, kopiowania, reprodukowania w
                jakiejkolwiek formie oraz przetrzymywania w systemach
                wyszukiwania z wyłączeniem wyszukiwarki Google, Bing, Yahoo,
                NetSprint, DuckDuckGo, Facebook oraz LinkedIn jakichkolwiek
                artykułów, opisów, zdjęć oraz wszelkich innych treści,
                materiałów graficznych, wideo lub audio znajdujących się w
                Serwisie bez pisemnej zgody lub zgody przekazanej za pomocą
                Komunikacji Drogą Elektroniczną ich prawnego właściciela.
              </li>
              <li>
                Zgodnie z Ustawą z dnia 4 lutego 1994 o prawie autorskim
                ochronie nie podlegają proste informacje prasowe, rozumiane jako
                same informacje, bez komentarza i oceny ich autora. Autor
                rozumie to jako możliwość wykorzystywania informacji z
                zamieszczonych w serwisie tekstów, ale już nie kopiowania
                całości lub części artykułów o ile nie zostało to oznaczone w
                poszczególnym materiale udostępnionym w Serwisie.
              </li>
            </ul>
            <br />
            <br />
            <h3>IX. Zmiany Regulaminu</h3>
            <br />
            <ul>
              <li>
                Wszelkie postanowienia Regulaminu mogą być w każdej chwili
                jednostronnie zmieniane przez Usługodawcę, bez podawania
                przyczyn.
              </li>
              <li>
                Informacja o zmianie Regulaminu będzie rozsyłana Drogą
                Elektroniczną do Usługobiorców zarejestrowanych w Serwisie.
              </li>
              <li>
                W przypadku zmiany Regulaminu jego postanowienia wchodzą w życie
                natychmiast po jego publikacji dla Usługobiorców
                nieposiadających konta w Serwisie.
              </li>
              <li>
                W przypadku zmiany Regulaminu jego postanowienia wchodzą w życie
                z 7-dniowym okresem przejściowym dla Usługobiorców posiadających
                konta w Serwisie zarejestrowane przez zmianą Regulaminu.
              </li>
              <li>
                Traktuje się iż każdy Usługobiorca, kontynuujący korzystanie z
                Serwisu po zmianie Regulaminu akceptuje go w całości.
              </li>
            </ul>
            <br />
            <br />
            <h3>X. Postanowienia końcowe</h3>
            <ul>
              <li>
                Usługodawca nie odpowiada w żaden sposób, jak tylko pozwalają na
                to obowiązujące przepisy prawa, za treści przekazywane i
                publikowane w Serwisie przez Usługobiorców, za ich prawdziwość,
                rzetelność, autentyczność czy wady prawne.
              </li>
              <li>
                Usługodawca dokona wszelkich starań by usługi Serwisu były
                oferowane w sposób ciągły. Nie ponosi on jednak żadnej
                odpowiedzialności za zakłócenia spowodowane siłą wyższą lub
                niedozwoloną ingerencją Usługobiorców, osób trzecich czy
                działalnością zewnętrznych automatycznych programów.
              </li>
              <li>
                Usługodawca zastrzega sobie prawo do zmiany jakichkolwiek
                informacji umieszczonych w Serwisie w wybranym przez Usługodawcę
                terminie, bez konieczności uprzedniego powiadomienia
                Usługobiorców korzystających z usług Serwisu.
              </li>
              <li>
                Usługodawca zastrzega sobie prawo do czasowego, całkowitego lub
                częściowego wyłączenia Serwisu w celu jego ulepszenia, dodawania
                usług lub przeprowadzania konserwacji, bez wcześniejszego
                uprzedzania o tym Usługobiorców.
              </li>
              <li>
                Usługodawca zastrzega sobie prawo do wyłączenia Serwisu na
                stałe, bez wcześniejszego uprzedzania o tym Usługobiorców.
              </li>
              <li>
                Usługodawca zastrzega sobie prawo do dokonania cesji w części
                lub w całości wszelkich swoich praw i obowiązków związanych z
                Serwisem, bez zgody i możliwości wyrażania jakichkolwiek
                sprzeciwów przez Usługobiorców.
              </li>
              <li>
                Obowiązujące oraz poprzednie Regulaminy Serwisu znajduję się na
                tej podstronie pod aktualnym Regulaminem.
              </li>
              <li>
                We wszelkich sprawach związanych z działalnością Serwisu należy
                kontaktować się z Usługodawcę korzystając z jednej z poniższych
                form kontaktu:
              </li>
              <li>Używając formularza kontaktowego dostępnego w Serwisie</li>
              <li>Wysyłając wiadomość na adres e-mail: office@qche.ngo</li>
              <li>
                Poprzez połączenie telefoniczne z numerem: +48 668 001 785
              </li>
              <li>
                Kontakt przy użyciu wskazanych środków komunikacji wyłącznie w
                sprawach związanych z prowadzonym Serwisem.
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
