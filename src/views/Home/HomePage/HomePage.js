import React, { useState, useEffect } from "react";
import HomeIntro from "../HomeIntro/HomeIntro";
import HomeAbout from "../HomeAbout/HomeAbout";
import "./HomePage.scss";
import HomeGallery from "../HomeGallery/HomeGallery";
import GalleryVertical from "../GalleryVertical/GalleryVertical";
import HomeCybersecurity from "../HomeCybersecurity/HomeCybersecurity";
import HomePartners from "../HomePartnerts/HomePartners";
import Blog from "../Blog/Blog";
import HomePartnership from "../HomePartnership/HomePartnership";
import HomeDonate from "../HomeDonate/HomeDonate";
import HomeContact from "../HomeContact/HomeContact";
import Loading from "../../Loading/Loading";
import useLoading from "../../../utils/hooks/useLoading";
import Progress from "../../Progress";
import useScrollProgress from "../../../utils/hooks/useScrollProgress";

const HomePage = (props) => {
  let styles = {
    transform: "scaleX(-1)",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoading, setLoading] = useState(false);

  window.onload = () => setLoading(true);

  useScrollProgress(true);

  useLoading(!isLoading);

  return (
    <div>
      <Loading></Loading>
      <main className="scroll">
        <section className="horizontal">
          <div className="pin-wrap">
            <div className="animation-wrap to-right">
              <HomeIntro img={props.img} />
              <HomeAbout img={props.img} reverse={styles} />
              <HomeGallery img={props.img} />
            </div>
          </div>
        </section>
        <section className="blank" id="vertical">
          <GalleryVertical></GalleryVertical>
        </section>

        <section className="horizontal">
          <div className="pin-wrap">
            <div className="animation-wrap to-right">
              <HomeCybersecurity img={props.img} />
              <HomePartners img={props.img} reverse={styles} />
              <Blog img={props.img} />
              <HomeDonate img={props.img} reverse={styles}></HomeDonate>
              <HomePartnership img={props.img}></HomePartnership>
              <HomeContact img={props.img} reverse={styles}></HomeContact>
            </div>
          </div>
        </section>
      </main>
      <Progress />
    </div>
  );
};

export default HomePage;
