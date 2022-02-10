import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useLoading = (start) => {
  useEffect(() => {
    if (!start) return;

    var tl = new gsap.timeline();
    tl.to("#mask", { duration: 2, height: 0, opacity: 0 })
      .to("#logo_preload", { duration: 0.3, opacity: 0 })
      .to("#bars", { duration: 0.3, opacity: 1 }, "-=0.2")
      .to("#bar1", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar2", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar3", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar4", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar5", { duration: 0.3, width: "100%" }, "-=0.1")
      .to(
        "#preload",
        { duration: 1, width: 0, height: 0, zIndex: -1, opacity: 0 },
        "-=0.3"
      )
      .timeScale(1);
  }, [start]);
};

export default useLoading;
