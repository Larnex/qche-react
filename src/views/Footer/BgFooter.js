import React from "react";
import bg from "../../assets/Główna_grafika_quantum.png";
import s from "./BgFooter.module.scss";

const BgFooter = () => {
  return (
    <div className={s.bg__container}>
      <img src={bg} alt="bg" />
    </div>
  );
};

export default BgFooter;
