import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const useScroll = (start) => {
  useEffect(() => {
    if (!start) return;
  }, [start]);
};

export default useScroll;
