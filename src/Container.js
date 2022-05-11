import React, { useState, useEffect } from "react";
import useLocomotiveScroll from "./utils/hooks/useLocomotiveScroll";
import HomePage from "./views/Home/HomePage/HomePage";
import Navbar from "./views/Navbar/Navbar";
import Navigation from "./data/data.js";
import Background from "./Background";
import { Popup } from "./views/Popup/Popup";

const Container = (props) => {
  let navigate = Navigation();

  const [isLoading, setLoading] = useState(false);

  window.onload = () => setLoading(true);

  useLocomotiveScroll(!isLoading);

  return (
    <div>
      <Popup></Popup>
      <Navbar items={navigate} logo={props.logo}></Navbar>
      <Background></Background>
      <HomePage img={props.img} />
    </div>
  );
};

export default Container;
