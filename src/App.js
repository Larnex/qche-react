import { useState } from "react";
import "./App.scss";
import ParticlesComponent from "./Particles";
import useLocomotiveScroll from "./utils/hooks/useLocomotiveScroll";
import HomePage from "./views/Home/HomePage/HomePage";
import Loading from "./views/Loading/Loading";
import Navbar from "./views/Navbar/Navbar";
import HomeGallery from "./views/Home/HomeGallery/HomeGallery";

const App = () => {
  const [isLoading, setLoading] = useState(false);

  window.onload = () => setLoading(true);

  useLocomotiveScroll(!isLoading);

  return (
    <div>
      {/* <Loading /> */}
      {/* <Navbar /> */}
      <div>
        {/* <ParticlesComponent></ParticlesComponent> */}
        <HomePage />
      </div>
    </div>
  );
};

export default App;
