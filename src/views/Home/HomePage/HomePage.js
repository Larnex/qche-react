import React from "react";
import HomeIntro from "../HomeIntro/HomeIntro";
import HomeAbout from "../HomeAbout/HomeAbout";
import "./HomePage.scss";
import bg from "../../../assets/Główna_grafika_quantum.png";

const HomePage = () => {
  return (
    <main className="scroll">
      <div className="scroll-content">
        <HomeIntro img={bg} />
        <HomeAbout img={bg} />
        <div className="progress-bar">
          <div className="pb-outer">
            <div className="inner-pb"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
