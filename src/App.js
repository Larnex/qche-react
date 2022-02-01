import { useState } from "react";
import "./App.scss";
import ParticlesComponent from "./Particles";
import useLocomotiveScroll from "./utils/hooks/useLocomotiveScroll";
import HomePage from "./views/Home/HomePage/HomePage";
import Loading from "./views/Loading/Loading";

const App = () => {
  const [isLoading, setLoading] = useState(false);

  window.onload = () => setLoading(true);

  useLocomotiveScroll(!isLoading);

  return (
    <div>
      {/* <Loading /> */}

      <div id="main" data-scroll-container data-scroll-direction="horizontal">
        <ParticlesComponent></ParticlesComponent>
        <HomePage />
      </div>
    </div>
  );
};

export default App;
