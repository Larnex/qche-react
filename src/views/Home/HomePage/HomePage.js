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
import PartnersVertical from "../PartnersVertical/PartnersVertical";
import PartnersVerticalCenter from "../PartnersVerticalCenter/PartnersVerticalCenter";

const HomePage = (props) => {
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
              <HomeIntro />
              <HomeAbout />
              <HomeGallery />
            </div>
          </div>
        </section>

        <section className="horizontal">
          <div className="pin-wrap">
            <div className="animation-wrap to-right">
              <GalleryVertical></GalleryVertical>

              <HomeCybersecurity />
              <HomePartners />
            </div>
          </div>
        </section>

        <section className="horizontal">
          <div className="pin-wrap">
            <div className="animation-wrap to-right">
              <PartnersVerticalCenter></PartnersVerticalCenter>
            </div>
          </div>
        </section>

        <section className="horizontal">
          <div className="pin-wrap">
            <div className="animation-wrap to-right">
              <PartnersVertical></PartnersVertical>

              <HomeDonate></HomeDonate>
              <HomePartnership></HomePartnership>
              <HomeContact></HomeContact>
            </div>
          </div>
        </section>
      </main>
      <Progress />
    </div>
  );
};

export default HomePage;
