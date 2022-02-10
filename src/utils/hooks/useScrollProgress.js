import gsap from "gsap";
import { useEffect } from "react";

// gsap.registerPlugin()

const useScrollProgress = (start) => {
  useEffect(() => {
    if (!start) return;

    gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        scrub: 1.3,
        start: "top top",
        end: "bottom bottom",
      },
    });
  }, [start]);
};

export default useScrollProgress;
