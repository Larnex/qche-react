import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const useLocoScroll = (start) => {
  useEffect(() => {
    if (!start) return;

    // let loadingFinished = false;

    // if (!loadingFinished) {
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

    // loadingFinished = true;
    // }
    // if (loadingFinished) {
    const horizontalSections = gsap.utils.toArray("section.horizontal");
    const navLinks = gsap.utils.toArray("nav > .list > .items > a");

    // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    horizontalSections.forEach(function (sec, i) {
      var thisPinWrap = sec.querySelector(".pin-wrap");
      var thisAnimWrap = thisPinWrap.querySelector(".animation-wrap");

      var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

      gsap.fromTo(
        thisAnimWrap,
        {
          x: () =>
            thisAnimWrap.classList.contains("to-right") ? 0 : getToValue(),
        },
        {
          x: () =>
            thisAnimWrap.classList.contains("to-right") ? getToValue() : 0,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top top",
            end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
            pin: thisPinWrap,
            invalidateOnRefresh: true,
            //anticipatePin: 1,
            scrub: 1.3,
            // markers: true,
          },
        }
      );
    });

    const element = document.querySelector("#section3");
    const bodyRect = document.body.getBoundingClientRect(),
      elemRect = element.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top;

    const slides = gsap.utils.toArray(".slide");

    slides.forEach((slide, i) => {
      ScrollTrigger.create({
        start: 0,
        end:
          i < 3 ? i * window.innerWidth : offset + (i - 3) * window.innerWidth,

        onLeave: () => {
          if (i !== 0) {
            gsap.to(navLinks, {
              scale: 1.3,
              borderBottom: "none",
            });
            gsap.to(navLinks[i], { scale: 1, borderBottom: "3px solid red" });
          }
        },
        onEnterBack: () => {
          if (i !== 0) {
            gsap.to(navLinks, { scale: 1, borderBottom: "none" });
            gsap.to(navLinks[i], { scale: 1.3, borderBottom: "3px solid red" });
          }
        },
      });
    });

    navLinks.forEach((link, i) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const navLink = e.target;

        navLinks.forEach((val, j) => {
          if (j === i) return;

          navLinks[j].style.borderBottom = "none";
        });

        navLink.style.borderBottom = "3px solid red";

        gsap.to(window, {
          duration: 1,

          // ! To-do: fix scrolling after vertical sector
          scrollTo:
            i < 3
              ? i * window.innerWidth
              : offset + (i - 3) * window.innerWidth,
        });

        if (i !== 0) {
          gsap.to(navLinks, { scale: 1, borderBottom: "none" });
          gsap.to(navLinks[i], { scale: 1.3, borderBottom: "3px solid red" });
        }
      });
    });

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

    // }

    // const scrollEl = document.querySelector("#horizontal");

    // gsap.registerPlugin(ScrollTrigger);

    // let locoScroll = new LocomotiveScroll({
    //   el: scrollEl,
    //   smooth: true,
    //   direction: "horizontal",
    // });

    // const progressBar = document.querySelector(".progress-bar");

    // locoScroll.on("scroll", (obj) => {
    //   let widthToProgress = gsap.utils.mapRange(0, obj.limit.x, 0, 100);
    //   let howMuchScrolled = widthToProgress(obj.scroll.x);
    //   progressBar.style.width = `${howMuchScrolled / 3}%`;

    //   ScrollTrigger.update();
    // });
    // locoScroll.update();

    // ScrollTrigger.scrollerProxy(scrollEl, {
    //   scrollTop(value) {
    //     return arguments.length
    //       ? locoScroll.scrollTo(value, 0, 0)
    //       : locoScroll.scroll.instance.scroll.y;
    //   },

    //   getBoundingClientRect() {
    //     return {
    //       top: 0,
    //       left: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     };
    //   },
    //   pinType: scrollEl.style.transform ? "transform" : "fixed",
    // });

    // const lsUpdate = () => {
    //   locoScroll && locoScroll.update();
    // };

    // ScrollTrigger.addEventListener("refresh", lsUpdate);
    // ScrollTrigger.refresh();

    // return () => {
    //   locoScroll &&
    //     ScrollTrigger.removeEventListener("refresh", lsUpdate) &&
    //     locoScroll.destroy() &&
    //     (locoScroll = null);
    // };
  }, [start]);
};

export default useLocoScroll;
