import React from "react";
import HomeIntro from "../HomeIntro/HomeIntro";
import HomeAbout from "../HomeAbout/HomeAbout";
import "./HomePage.scss";
import bg from "../../../assets/Główna_grafika_quantum.png";
import HomeGallery from "../HomeGallery/HomeGallery";

const HomePage = () => {
  let styles = {
    transform: "scaleX(-1)",
  };
  return (
    <main className="scroll">
      <div className="scroll-content">
        <div
          id="horizontal"
          data-scroll-container
          data-scroll-direction="horizontal"
        >
          <HomeIntro img={bg} />
          <HomeAbout img={bg} reverse={styles} />
          <HomeGallery img={bg} />
        </div>

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
