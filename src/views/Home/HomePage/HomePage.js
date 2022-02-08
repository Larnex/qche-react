import React from "react";
import HomeIntro from "../HomeIntro/HomeIntro";
import HomeAbout from "../HomeAbout/HomeAbout";
import "./HomePage.scss";
import bg from "../../../assets/Główna_grafika_quantum.png";
import HomeGallery from "../HomeGallery/HomeGallery";
import GalleryVertical from "../GalleryVertical/GalleryVertical";
import HomeCybersecurity from "../HomeCybersecurity/HomeCybersecurity";
import HomePartners from "../HomePartnerts/HomePartners";
import Blog from "../Blog/Blog";
import HomePartnership from "../HomePartnership/HomePartnership";

const HomePage = () => {
  let styles = {
    transform: "scaleX(-1)",
  };
  return (
    <main className="scroll">
      <section className="horizontal">
        <div className="pin-wrap">
          <div className="animation-wrap to-right">
            <HomeIntro img={bg} />
            <HomeAbout img={bg} reverse={styles} />
            <HomeGallery img={bg} />
          </div>
        </div>
      </section>
      <section className="blank" id="vertical">
        <GalleryVertical></GalleryVertical>
      </section>

      <section className="horizontal">
        <div className="pin-wrap">
          <div className="animation-wrap to-right">
            <HomeCybersecurity img={bg} />
            <HomePartners img={bg} reverse={styles} />
            <Blog img={bg} />
            <HomePartnership img={bg} reverse={styles}></HomePartnership>
          </div>
        </div>

        {/* <div className="progress-bar">
          <div className="pb-outer">
            <div className="inner-pb"></div>
          </div>
        </div> */}
      </section>

      <progress max="100" value="0"></progress>
    </main>
  );
};

export default HomePage;
