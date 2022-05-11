import React, { useEffect } from "react";
import useScrollProgress from "../../../utils/hooks/useScrollProgress";
import Progress from "../../Progress";
import BgFooter from "../BgFooter";
import FooterNavbar from "../Navbar/FooterNavbar";
import "./Rodo.scss";

const PrivatePolicy = () => {
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
              <h1 className="js-transition-title">Polityka Prywatności</h1>
            </div>
            <br />
            <p>
              Poniższa Polityka Prywatności określa{" "}
              <strong>
                zasady zapisywania i uzyskiwania dostępu do danych na
                Urządzeniach Użytkowników
              </strong>
              korzystających z Serwisu do celów świadczenia usług drogą
              elektroniczną przez Administratora oraz zasady gromadzenia i
              przetwarzania danych osobowych Użytkowników, które zostały podane
              przez nich osobiście i dobrowolnie za pośrednictwem narzędzi
              dostępnych w Serwisie. <br /> Poniższa Polityka Prywatności jest
              integralną częścią Regulaminu Serwisu, który określa zasady, prawa
              i obowiązki Użytkowników korzystających z Serwisu.
            </p>
            <br />
            <br />
            <h3>§1 Definicje</h3>
            <br />
            <ul>
              <li>
                <strong>Serwis</strong>- serwis internetowy "FUNDACJA QUANTUM
                CYBERSECURITY HUB EUROPE" działający pod adresem
                <a href="https://qche.ngo"> https://qche.ngo</a>
              </li>
              <li>
                <strong>Serwis zewnętrzny</strong> - serwisy internetowe
                partnerów, usługodawców lub usługobiorców współpracujących z
                Administratorem
              </li>
              <li>
                <strong>Administrator Serwisu / Danych</strong> -
                Administratorem Serwisu oraz Administratorem Danych (dalej
                Administrator) jest firma "FUNDACJA QUANTUM CYBERSECURITY HUB
                EUROPE", prowadząca działalność pod adresem: UL. LĘBORSKA 3B,
                80-386 GDAŃSK, o nadanym numerze identyfikacji podatkowej (NIP):
                5842813019, o nadanym numerze KRS: 0000944667, świadcząca usługi
                drogą elektroniczną za pośrednictwem Serwisu
              </li>
              <li>
                <strong>Użytkownik</strong> - osoba fizyczna, dla której
                Administrator świadczy usługi drogą elektroniczną za
                pośrednictwem Serwisu.
              </li>
              <li>
                <strong>Urządzenie</strong> - elektroniczne urządzenie wraz z
                oprogramowaniem, za pośrednictwem którego Użytkownik uzyskuje
                dostęp do Serwisu
              </li>
              <li>
                <strong>Cookies (ciasteczka)</strong> - dane tekstowe gromadzone
                w formie plików zamieszczanych na Urządzeniu Użytkownika
              </li>
              <li>
                <strong>RODO</strong> - Rozporządzenie Parlamentu Europejskiego
                i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
                ochrony osób fizycznych w związku z przetwarzaniem danych
                osobowych i w sprawie swobodnego przepływu takich danych oraz
                uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
                danych)
              </li>
              <li>
                <strong>Dane osobowe</strong> - oznaczają informacje o
                zidentyfikowanej lub możliwej do zidentyfikowania osobie
                fizycznej („osobie, której dane dotyczą”); możliwa do
                zidentyfikowania osoba fizyczna to osoba, którą można
                bezpośrednio lub pośrednio zidentyfikować, w szczególności na
                podstawie identyfikatora takiego jak imię i nazwisko, numer
                identyfikacyjny, dane o lokalizacji, identyfikator internetowy
                lub jeden bądź kilka szczególnych czynników określających
                fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną,
                kulturową lub społeczną tożsamość osoby fizycznej
              </li>
              <li>
                <strong>Przetwarzanie</strong> - oznacza operację lub zestaw
                operacji wykonywanych na danych osobowych lub zestawach danych
                osobowych w sposób zautomatyzowany lub niezautomatyzowany, taką
                jak zbieranie, utrwalanie, organizowanie, porządkowanie,
                przechowywanie, adaptowanie lub modyfikowanie, pobieranie,
                przeglądanie, wykorzystywanie, ujawnianie poprzez przesłanie,
                rozpowszechnianie lub innego rodzaju udostępnianie,
                dopasowywanie lub łączenie, ograniczanie, usuwanie lub
                niszczenie;
              </li>
              <li>
                <strong>Ograniczenie przetwarzania</strong> - oznacza oznaczenie
                przechowywanych danych osobowych w celu ograniczenia ich
                przyszłego przetwarzania
              </li>
              <li>
                <strong>Profilowanie</strong> - oznacza dowolną formę
                zautomatyzowanego przetwarzania danych osobowych, które polega
                na wykorzystaniu danych osobowych do oceny niektórych czynników
                osobowych osoby fizycznej, w szczególności do analizy lub
                prognozy aspektów dotyczących efektów pracy tej osoby fizycznej,
                jej sytuacji ekonomicznej, zdrowia, osobistych preferencji,
                zainteresowań, wiarygodności, zachowania, lokalizacji lub
                przemieszczania się
              </li>
              <li>
                <strong>Zgoda</strong> - zgoda osoby, której dane dotyczą
                oznacza dobrowolne, konkretne, świadome i jednoznaczne okazanie
                woli, którym osoba, której dane dotyczą, w formie oświadczenia
                lub wyraźnego działania potwierdzającego, przyzwala na
                przetwarzanie dotyczących jej danych osobowych
              </li>
              <li>
                <strong>Naruszenie ochrony danych osobowych</strong> - oznacza
                naruszenie bezpieczeństwa prowadzące do przypadkowego lub
                niezgodnego z prawem zniszczenia, utracenia, zmodyfikowania,
                nieuprawnionego ujawnienia lub nieuprawnionego dostępu do danych
                osobowych przesyłanych, przechowywanych lub w inny sposób
                przetwarzanych
              </li>
              <li>
                <strong>Pseudonimizacja</strong> - oznacza przetworzenie danych
                osobowych w taki sposób, by nie można ich było już przypisać
                konkretnej osobie, której dane dotyczą, bez użycia dodatkowych
                informacji, pod warunkiem że takie dodatkowe informacje są
                przechowywane osobno i są objęte środkami technicznymi i
                organizacyjnymi uniemożliwiającymi ich przypisanie
                zidentyfikowanej lub możliwej do zidentyfikowania osobie
                fizycznej
              </li>
              <li>
                <strong>Anonimizacja</strong> - Anonimizacja danych to
                nieodwracalny proces operacji na danych, który niszczy /
                nadpisuje "dane osobowe" uniemożliwiając identyfikację, lub
                powiązanie danego rekordu z konkretnym użytkownikiem lub osobą
                fizyczną.
              </li>
            </ul>
            <br />
            <br />
            <h3>§2 Inspektor Ochrony Danych</h3>
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
            <h3>§3 Rodzaje Plików Cookies</h3>

            <ul>
              <li>
                <strong>Cookies wewnętrzne</strong> - pliki zamieszczane i
                odczytywane z Urządzenia Użytkownika przez system
                teleinformatyczny Serwisu
              </li>
              <li>
                <strong>Cookies zewnętrzne</strong> - pliki zamieszczane i
                odczytywane z Urządzenia Użytkownika przez systemy
                teleinformatyczne Serwisów zewnętrznych. Skrypty Serwisów
                zewnętrznych, które mogą umieszczać pliki Cookies na
                Urządzeniach Użytkownika zostały świadomie umieszczone w
                Serwisie poprzez skrypty i usługi udostępnione i zainstalowane w
                Serwisie
              </li>
              <li>
                <strong>Cookies sesyjne </strong>- pliki zamieszczane i
                odczytywane z Urządzenia Użytkownika przez Serwis podczas jednej
                sesji danego Urządzenia. Po zakończeniu sesji pliki są usuwane z
                Urządzenia Użytkownika.
              </li>
              <li>
                <strong>Cookies trwałe</strong> - pliki zamieszczane i
                odczytywane z Urządzenia Użytkownika przez Serwis do momentu ich
                ręcznego usunięcia. Pliki nie są usuwane automatycznie po
                zakończeniu sesji Urządzenia chyba że konfiguracja Urządzenia
                Użytkownika jest ustawiona na tryb usuwanie plików Cookie po
                zakończeniu sesji Urządzenia.
              </li>
            </ul>
            <br />
            <br />
            <h3>§4 Bezpieczeństwo składowania danych</h3>
            <br />
            <ul>
              <li>
                <strong>Mechanizmy składowania i odczytu plików Cookie</strong>{" "}
                - Mechanizmy składowania, odczytu i wymiany danych pomiędzy
                Plikami Cookies zapisywanymi na Urządzeniu Użytkownika a
                Serwisem są realizowane poprzez wbudowane mechanizmy
                przeglądarek internetowych i nie pozwalają na pobieranie innych
                danych z Urządzenia Użytkownika lub danych innych witryn
                internetowych, które odwiedzał Użytkownik, w tym danych
                osobowych ani informacji poufnych. Przeniesienie na Urządzenie
                Użytkownika wirusów, koni trojańskich oraz innych robaków jest
                także praktycznie niemożliwe.
              </li>
              <li>
                <strong>Cookie wewnętrzne</strong> - zastosowane przez
                Administratora pliki Cookie są bezpieczne dla Urządzeń
                Użytkowników i nie zawierają skryptów, treści lub informacji
                mogących zagrażać bezpieczeństwu danych osobowych lub
                bezpieczeństwu Urządzenia z którego korzysta Użytkownik.
              </li>
              <li>
                <strong>Cookie zewnętrzne</strong> - Administrator dokonuje
                wszelkich możliwych działań w celu weryfikacji i doboru
                partnerów serwisu w kontekście bezpieczeństwa Użytkowników.
                Administrator do współpracy dobiera znanych, dużych partnerów o
                globalnym zaufaniu społecznym. Nie posiada on jednak pełnej
                kontroli nad zawartością plików Cookie pochodzących od
                zewnętrznych partnerów. Za bezpieczeństwo plików Cookie, ich
                zawartość oraz zgodne z licencją wykorzystanie przez
                zainstalowane w serwisie Skrypty, pochodzących z Serwisów
                zewnętrznych, Administrator nie ponosi odpowiedzialności na tyle
                na ile pozwala na to prawo. Lista partnerów zamieszczona jest w
                dalszej części Polityki Prywatności.
              </li>
              <li>
                <strong>Kontrola plików Cookie</strong>
              </li>
              <li>
                Użytkownik może w dowolnym momencie, samodzielnie zmienić
                ustawienia dotyczące zapisywania, usuwania oraz dostępu do
                danych zapisanych plików Cookies przez każdą witrynę internetową
              </li>
              <li>
                Informacje o sposobie wyłączenia plików Cookie w
                najpopularniejszych przeglądarkach komputerowych dostępne są na
                stronie: jak wyłączyć cookie lub u jednego ze wskazanych
                dostawców:
              </li>
              <li>
                Zarządzanie plikami cookies w przeglądarce{" "}
                <strong>Chrome</strong>
              </li>
              <li>
                Zarządzanie plikami cookies w przeglądarce{" "}
                <strong>Opera</strong>
              </li>
              <li>
                Zarządzanie plikami cookies w przeglądarce{" "}
                <strong>FireFox</strong>
              </li>
              <li>
                Zarządzanie plikami cookies w przeglądarce <strong>Edge</strong>
              </li>
              <li>
                Zarządzanie plikami cookies w przeglądarce{" "}
                <strong>Safari</strong>
              </li>
              <li>
                Zarządzanie plikami cookies w przeglądarce{" "}
                <strong>Internet Explorer 11</strong>
              </li>
              <li>
                Użytkownik może w dowolnym momencie usunąć wszelkie zapisane do
                tej pory pliki Cookie korzystając z narzędzi Urządzenia
                Użytkownika, za pośrednictwem którego Użytkownik korzysta z
                usług Serwisu.
              </li>
              <li>
                <strong>Zagrożenia po stronie Użytkownika</strong> -
                Administrator stosuje wszelkie możliwe środki techniczne w celu
                zapewnienia bezpieczeństwa danych umieszczanych w plikach
                Cookie. Należy jednak zwrócić uwagę, że zapewnienie
                bezpieczeństwa tych danych zależy od obu stron w tym
                działalności Użytkownika. Administrator nie bierze
                odpowiedzialności za przechwycenie tych danych, podszycie się
                pod sesję Użytkownika lub ich usunięcie, na skutek świadomej lub
                nieświadomej działalność Użytkownika, wirusów, koni trojańskich
                i innego oprogramowania szpiegującego, którymi może jest lub
                było zainfekowane Urządzenie Użytkownika. Użytkownicy w celu
                zabezpieczenia się przed tymi zagrożeniami powinni stosować się
                do zaleceń korzystania z sieci.
              </li>
              <li>
                <strong>Przechowywanie danych osobowych</strong> - Administrator
                zapewnia, że dokonuje wszelkich starań, by przetwarzane dane
                osobowe wprowadzone dobrowolnie przez Użytkowników były
                bezpieczne, dostęp do nich był ograniczony i realizowany zgodnie
                z ich przeznaczeniem i celami przetwarzania. Administrator
                zapewnia także, że dokonuje wszelkich starań w celu
                zabezpieczenia posiadanych danych przed ich utratą, poprzez
                stosowanie odpowiednich zabezpieczeń fizycznych jak i
                organizacyjnych
              </li>
              <li>
                <strong>Przechowywanie haseł</strong> - Administrator oświadcza,
                że hasła przechowywane są w zaszyfrowanej postaci, używając
                najnowszych standardów i wytycznych w tym zakresie. Deszyfracja
                podawanych w Serwisie haseł dostępu do konta jest praktycznie
                niemożliwa.
              </li>
            </ul>
            <br />
            <br />
            <h3>§5 Cele do których wykorzystywane są pliki Cookie</h3>
            <br />
            <ul>
              <li>Usprawnienie i ułatwienie dostępu do Serwisu</li>
              <li>Personalizacja Serwisu dla Użytkowników</li>
              <li>Umożliwienie Logowania do serwisu</li>
              <li>Marketing, Remarketing w serwisach zewnętrznych</li>
              <li>Usługi serwowania reklam</li>
              <li>Usługi afiliacyjne</li>
              <li>
                Prowadzenie statystyk (użytkowników, ilości odwiedzin, rodzajów
                urządzeń, łącze itp.)
              </li>
              <li>Serwowanie usług multimedialnych</li>
              <li>Świadczenie usług społecznościowych</li>
            </ul>
            <br />
            <br />
            <h3>§6 Cele przetwarzania danych osobowych</h3>
            <br />
            <p>
              Dane osobowe dobrowolnie podane przez Użytkowników są przetwarzane
              w jednym z następujących celów:
            </p>
            <br />
            <ul>
              <li>Realizacji usług elektronicznych:</li>
              <li>
                Usługi rejestracji i utrzymania konta Użytkownika w Serwisie i
                funkcjonalności z nim związanych
              </li>
              <li>
                Usługi Newslettera (w tym przesyłania za zgodą treści
                reklamowych)
              </li>
              <li>
                Usługi komentowania / polubienia wpisów w Serwisie bez
                konieczności rejestrowania się
              </li>
              <li>
                Usługi udostępniania informacji o treści umieszczonych w
                Serwisie w serwisach społecznościowych lub innych witrynach.
              </li>
              <li>
                Komunikacji Administratora z Użytkownikami w sprawach związanych
                z Serwisem oraz ochrony danych
              </li>
              <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
            </ul>
            <br />
            <p>
              Dane o Użytkownikach gromadzone anonimowo i automatycznie są
              przetwarzane w jednym z następujących celów:
            </p>
            <ul>
              <li>Prowadzenie statystyk</li>
              <li>Remarketing</li>
              <li>
                Serwowanie reklam dostosowanych do preferencji Użytkowników
              </li>
              <li>Obsługi programów afiliacyjnych</li>
              <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
            </ul>
            <br />
            <br />
            <h3>§7 Pliki Cookies Serwisów zewnętrznych</h3>
            <br />
            <p>
              Administrator w Serwisie wykorzystuje skrypty javascript i
              komponenty webowe partnerów, którzy mogą umieszczać własne pliki
              cookies na Urządzeniu Użytkownika. Pamiętaj, że w ustawieniach
              swojej przeglądarki możesz sam decydować o dozwolonych plikach
              cookies jakie mogą być używane przez poszczególne witryny
              internetowe. Poniżej znajduje się lista partnerów lub ich usług
              zaimplementowanych w Serwisie, mogących umieszczać pliki cookies:
            </p>
            <ul>
              <li>
                <strong>Usługi multimedialne:</strong>
              </li>
              <li>YouTube</li>
              <li>
                <strong>Usługi społecznościowe / łączone:</strong>
              </li>
              <li>
                (Rejestracja, Logowanie, udostępnianie treści, komunikacja,
                itp.)
              </li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Google+</li>
              <li>LinkedIn</li>
              <li>
                <strong>Usługi Newslettera:</strong>
              </li>
              <li>MailChimp</li>
              <li>HubSpot</li>
              <li>
                <strong>Prowadzenie statystyk:</strong>
              </li>
              <li>Google Analytics</li>
              <li>HubSpot</li>
              <li>
                <strong>Usługi inne:</strong>
              </li>
              <li>Mapy Google</li>
            </ul>
            <br />
            <p>
              Usługi świadczone przez podmioty trzecie są poza kontrolą
              Administratora. Podmioty te mogą w każdej chwili zmienić swoje
              warunki świadczenia usług, polityki prywatności, cel przetwarzania
              danych oraz sposów wykorzystywania plików cookie.
            </p>
            <br />
            <br />
            <h3>§8 Rodzaje gromadzonych danych</h3>
            <br />
            <p>
              Serwis gromadzi dane o Użytkownikach. Cześć danych jest gromadzona
              automatycznie i anonimowo, a część danych to dane osobowe podane
              dobrowolnie przez Użytkowników w trakcie zapisywania się do
              poszczególnych usług oferowanych przez Serwis.
            </p>
            <br />
            <p>
              <strong>Anonimowe dane gromadzone automatycznie:</strong>
            </p>
            <br />
            <ul>
              <li>Adres IP</li>
              <li>Typ przeglądarki</li>
              <li>Rozdzielczość ekranu</li>
              <li>Przybliżona lokalizacja</li>
              <li>Otwierane podstrony serwisu</li>
              <li>Czas spędzony na odpowiedniej podstronie serwisu</li>
              <li>Rodzaj systemu operacyjnego</li>
              <li>Adres poprzedniej podstrony</li>
              <li>Adres strony odsyłającej</li>
              <li>Język przeglądarki</li>
              <li>Prędkość łącza internetowego</li>
              <li>Dostawca usług internetowych</li>
            </ul>
            <br />
            <p>
              <strong>Dane gromadzone podczas rejestracji:</strong>
            </p>
            <br />
            <ul>
              <li>Adres e-mail</li>
              <li>Adres IP (zbierane automatycznie)</li>
            </ul>
            <br />
            <p>
              <strong>
                Dane gromadzone podczas zapisu do usługi Newsletter
              </strong>
            </p>
            <br />
            <ul>
              <li>Imię / nazwisko / pseudonim</li>
              <li>Adres e-mail</li>
              <li>Adres IP (zbierane automatycznie)</li>
            </ul>
            <br />
            <p>
              Część danych (bez danych identyfikujących) może być przechowywana
              w plikach cookies. Cześć danych (bez danych identyfikujących) może
              być przekazywana do dostawcy usług statystycznych.
            </p>
            <br />
            <br />
            <h3>§9 Dostęp do danych osobowych przez podmioty trzecie</h3>
            <br />
            <p>
              Co do zasady jedynym odbiorcą danych osobowych podawanych przez
              Użytkowników jest Administrator. Dane gromadzone w ramach
              świadczonych usług nie są przekazywane ani odsprzedawane podmiotom
              trzecim.
            </p>

            <br />

            <p>
              Dostęp do danych (najczęściej na podstawie Umowy powierzenia
              przetwarzania danych) mogą posiadać podmioty, odpowiedzialne za
              utrzymania infrastruktury i usług niezbędnych do prowadzenia
              serwisu tj.:
            </p>
            <br />
            <ul>
              <li>
                Firmy hostingowe, świadczące usługi hostingu lub usług
                pokrewnych dla Administratora
              </li>
              <li>
                Firmy, za pośrednictwem których świadczona jest usługa
                Newslettera
              </li>
            </ul>
            <br />
            <p>
              <strong>
                Powierzenie przetwarzania danych osobowych - Newsletter
              </strong>
            </p>
            <br />
            <p>
              Administrator w celu świadczenia usługi Newsletter, korzysta z
              usług podmiotu trzeciego - serwisu MailChimp, HubSpot, . Dane
              wprowadzone w formularzu zapisu do newslettera są przekazywane,
              przechowywane i przetwarzane w serwisie zewnętrznym tego
              usługodawcy.
            </p>
            <br />
            <p>
              Informujemy, że wskazany partner może modyfikować wskazaną
              politykę prywatności bez zgody Administratora.
            </p>

            <br />
            <br />
            <p>
              <strong>
                Powierzenie przetwarzania danych osobowych - Usługi Hostingu,
                VPS lub Serwerów Dedykowanych
              </strong>
            </p>
            <br />
            <p>
              Administrator w celu prowadzenia serwisu korzysta z usług
              zewnętrznego dostawcy hostingu, VPS lub Serwerów Dedykowanych -
              OVH sp. z o.o.. Wszelkie dane gromadzone i przetwarzane w serwisie
              są przechowywane i przetwarzane w infrastrukturze usługodawcy
              zlokalizowanej w Polsce. Istnieje możliwość dostępu do danych
              wskutek prac serwisowych realizowanych przez personel usługodawcy.
              Dostęp do tych danych reguluje umowa zawarta pomiędzy
              Administratorem a Usługodawcą.
            </p>
            <br />
            <br />
            <h3>§10 Sposób przetwarzania danych osobowych</h3>
            <br />
            <p>
              <strong>
                Dane osobowe podane dobrowolnie przez Użytkowników:
              </strong>
            </p>
            <br />
            <ul>
              <li>
                Dane osobowe nie będą przekazywane poza Unię Europejską, chyba
                że zostały opublikowane na skutek indywidualnego działania
                Użytkownika (np. wprowadzenie komentarza lub wpisu), co sprawi,
                że dane będą dostępne dla każdej osoby odwiedzającej serwis.
              </li>
              <li>
                Dane osobowe nie będą wykorzystywane do zautomatyzowanego
                podejmowania decyzji (profilowania).
              </li>
              <li>Dane osobowe nie będą odsprzedawane podmiotom trzecim.</li>
            </ul>
            <br />
            <p>
              <strong>
                Dane anonimowe (bez danych osobowych) gromadzone automatycznie:
              </strong>
            </p>
            <br />
            <ul>
              <li>
                Dane anonimiwe (bez danych osobowych) będą przekazywane poza
                Unię Europejską.
              </li>
              <li>
                Dane anonimiwe (bez danych osobowych) nie będą wykorzystywane do
                zautomatyzowanego podejmowania decyzji (profilowania).
              </li>
              <li>
                Dane anonimiwe (bez danych osobowych) nie będą odsprzedawane
                podmiotom trzecim.
              </li>
            </ul>
            <br />
            <br />
            <h3>§11 Podstawy prawne przetwarzania danych osobowych</h3>
            <br />
            <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
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
            <h3>§12 Okres przetwarzania danych osobowych</h3>
            <br />
            <p>
              <strong>
                Dane osobowe podane dobrowolnie przez Użytkowników:
              </strong>
            </p>
            <br />
            <p>
              Co do zasady wskazane dane osobowe są przechowywane wyłącznie
              przez okres świadczenia Usługi w ramach Serwisu przez
              Administratora. Są one usuwane lub anonimizowane w okresie do 30
              dni od chwili zakończenia świadczenia usług (np. usunięcie
              zarejestrowanego konta użytkownika, wypisanie z listy Newsletter,
              itp.)
            </p>
            <br />
            <p>
              Wyjątek stanowi sytuacja, która wymaga zabezpieczenia prawnie
              uzasadnionych celów dalszego przetwarzania tych danych przez
              Administratora. W takiej sytuacji Administrator będzie
              przechowywał wskazane dane, od czasu żądania ich usunięcia przez
              Użytkownika, nie dłużej niż przez okres 3 lat w przypadku
              naruszenia lub podejrzenia naruszenia zapisów regulaminu serwisu
              przez Użytkownika
            </p>
            <br />
            <p>
              <strong>
                Dane anonimowe (bez danych osobowych) gromadzone automatycznie:
              </strong>
            </p>
            <br />
            <p>
              Anonimowe dane statystyczne, niestanowiące danych osobowych, są
              przechowywane przez Administratora w celu prowadzenia statystyk
              serwisu przez czas nieoznaczony
            </p>
            <br />
            <br />
            <h3>
              §13 Prawa Użytkowników związane z przetwarzaniem danych osobowych
            </h3>
            <br />
            <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
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
                złożone do Administratora W przypadku kont użytkowników,
                usunięcie danych polega na anonimizacji danych umożliwiających
                identyfikację Użytkownika. Administrator zastrzega sobie prawo
                wstrzymania realizacji żądania usunięcia danych w celu ochrony
                prawnie uzasadnionego interesu Administratora (np. w gdy
                Użytkownik dopuścił się naruszenia Regulaminu czy dane zostały
                pozyskane wskutek prowadzonej korespondencji).
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
                <strong>
                  Użytkownikom przysługuje prawo wniesienia skargi do organu
                  nadzorczego zajmującego się ochroną danych osobowych.
                </strong>
              </li>
            </ul>
            <br />
            <br />
            <h3>§14 Kontakt do Administratora</h3>
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
            <h3>§15 Wymagania Serwisu</h3>
            <br />
            <ul>
              <li>
                Ograniczenie zapisu i dostępu do plików Cookie na Urządzeniu
                Użytkownika może spowodować nieprawidłowe działanie niektórych
                funkcji Serwisu.
              </li>
              <li>
                Administrator nie ponosi żadnej odpowiedzialności za
                nieprawidłowo działające funkcje Serwisu w przypadku gdy
                Użytkownik ograniczy w jakikolwiek sposób możliwość zapisywania
                i odczytu plików Cookie.
              </li>
            </ul>
            <br />
            <br />
            <h3>§16 Linki zewnętrzne</h3>
            <br />
            <p>
              W Serwisie - artykułach, postach, wpisach czy komentarzach
              Użytkowników mogą znajdować się odnośniki do witryn zewnętrznych,
              z którymi Właściciel serwisu nie współpracuje. Linki te oraz
              strony lub pliki pod nimi wskazane mogą być niebezpieczne dla
              Twojego Urządzenia lub stanowić zagrożenie bezpieczeństwa Twoich
              danych. Administrator nie ponosi odpowiedzialności za zawartość
              znajdującą się poza Serwisem.
            </p>
            <br />
            <br />
            <h3>§17 Zmiany w Polityce Prywatności</h3>
            <br />
            <ul>
              <li>
                Administrator zastrzega sobie prawo do dowolnej zmiany
                niniejszej Polityki Prywatności bez konieczności informowania o
                tym Użytkowników w zakresie stosowania i wykorzystywania danych
                anonimowych lub stosowania plików Cookie.
              </li>
              <li>
                Administrator zastrzega sobie prawo do dowolnej zmiany
                niniejszej Polityki Prywatności w zakresie przetwarzania Danych
                Osobowych, o czym poinformuje Użytkowników posiadających konta
                użytkownika lub zapisanych do usługi newsletter, za
                pośrednictwem poczty elektronicznej w terminie do 7 dni od
                zmiany zapisów. Dalsze korzystanie z usług oznacza zapoznanie
                się i akceptację wprowadzonych zmian Polityki Prywatności. W
                przypadku w którym Użytkownik nie będzie się zgadzał z
                wprowadzonymi zmianami, ma obowiązek usunąć swoje konto z
                Serwisu lub wypisać się z usługi Newsletter.
              </li>
              <li>
                Wprowadzone zmiany w Polityce Prywatności będą publikowane na
                tej podstronie Serwisu.
              </li>
              <li>
                Wprowadzone zmiany wchodzą w życie z chwilą ich publikacji.
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

export default PrivatePolicy;
