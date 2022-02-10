import React, { useState } from "react";
import ParticlesComponent from "./Particles";
import useLocomotiveScroll from "./utils/hooks/useLocomotiveScroll";
import HomePage from "./views/Home/HomePage/HomePage";
import Navbar from "./views/Navbar/Navbar";
import navigation from "./data/data";

const Container = (props) => {
  const [isLoading, setLoading] = useState(false);

  window.onload = () => setLoading(true);

  useLocomotiveScroll(!isLoading);

  return (
    <div>
      <Navbar items={navigation} logo={props.logo}></Navbar>
      <ParticlesComponent></ParticlesComponent>
      <HomePage img={props.img} />
    </div>
  );
};

export default Container;
