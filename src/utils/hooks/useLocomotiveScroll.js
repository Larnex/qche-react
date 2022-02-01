import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

const useLocoScroll = (start) => {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#main");

    gsap.registerPlugin(ScrollTrigger);

    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      direction: "horizontal",
    });

    const progressBar = document.querySelector(".progress-bar");

    locoScroll.on("scroll", (obj) => {
      let widthToProgress = gsap.utils.mapRange(0, obj.limit.x, 0, 100);
      let howMuchScrolled = widthToProgress(obj.scroll.x);
      console.log("howMuchScrolled:", howMuchScrolled);
      progressBar.style.width = `${howMuchScrolled / 2}%`;

      ScrollTrigger.update();
    });
    locoScroll.update();

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        console.log("value:", value);
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },

      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    const lsUpdate = () => {
      locoScroll && locoScroll.update();
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      locoScroll &&
        ScrollTrigger.removeEventListener("refresh", lsUpdate) &&
        locoScroll.destroy() &&
        (locoScroll = null);
    };
  }, [start]);
};

export default useLocoScroll;
