import React from "react";
import "./App.scss";
import Footer from "./views/Footer/Footer";
import bg from "./assets/Główna_grafika_quantum.png";
import { Rodo } from "./views/Footer/Pages/Rodo";
import PrivatePolicy from "./views/Footer/Pages/PrivatePolicy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./Container";
import { Regulations } from "./views/Footer/Pages/Regulations";
import Logo from "./assets/Logo_QCHE_czerwone.png";
import Note from "./views/Footer/Pages/Note";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Container logo={Logo} img={bg} />}
            ></Route>
            <Route path="/rodo" element={<Rodo></Rodo>}></Route>
            <Route
              path="/regulamin"
              element={<Regulations></Regulations>}
            ></Route>

            <Route
              path="/polityka-prywatnosci"
              element={<PrivatePolicy />}
            ></Route>
            <Route path="/nota-fundacji" element={<Note />}></Route>
          </Routes>
          <Footer bg={bg}></Footer>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
