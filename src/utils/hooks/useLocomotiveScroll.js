import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const useLocoScroll = (start) => {
  useEffect(() => {
    if (!start) return;

    var tl = new gsap.timeline();
    tl.to("#mask", { duration: 1, height: 0, opacity: 0 })
      .to("#logo_preload", { duration: 0.3, opacity: 0 })
      .to("#bars", { duration: 0.3, opacity: 1 }, "-=0.2")
      .to("#bar1", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar2", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar3", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar4", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#bar5", { duration: 0.3, width: "100%" }, "-=0.1")
      .to("#preload", { duration: 1, zIndex: -1, opacity: 0 }, "-=0.3")
      .timeScale(1);

    const horizontalSections = gsap.utils.toArray("section.horizontal");
    const navLinks = gsap.utils.toArray(".header > .header__wrapper > nav > a");

    horizontalSections.forEach(function (sec, i) {
      var thisPinWrap = sec.querySelector(".pin-wrap");
      var thisAnimWrap = thisPinWrap.querySelector(".animation-wrap");

      var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

      ScrollTrigger.matchMedia({
        "(min-width: 990px)": function () {
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
                end: () =>
                  "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
                pin: thisPinWrap,
                invalidateOnRefresh: true,
                scrub: 1.1,
              },
            }
          );
        },
      });
    });

    let allWidth = [];

    function getSlideWidth(element) {
      console.log("element:", element);
      // element = document.querySelector("#section-vertical");
      const bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect().right;

      allWidth.push(elemRect);
      console.log(elemRect);
    }

    const slidesss = document.querySelectorAll(".slide");

    slidesss.forEach((value, i) => {
      getSlideWidth(value);
    });

    // const element = document.querySelector("#section-vertical");
    // const bodyRect = document.body.getBoundingClientRect(),
    //   elemRect = element.getBoundingClientRect(),
    //   offset = elemRect.top - bodyRect.top;

    const verticalHeight = gsap.getProperty("#section-vertical", "height");
    console.log("verticalHeight:", verticalHeight);

    const slides = gsap.utils.toArray(".slide");
    // const slide = slides[3];
    // let position;

    // if (slide.clientWidth > 989) {
    //   position = slide.getBoundingClientRect().right;
    // } else {
    //   position = slide.getBoundingClientRect().top;
    // }

    slides.forEach((slide, i) => {
      ScrollTrigger.create({
        start: 0,
        end: () => {
          console.log("END", slide, i);
          if (i < 2) {
            return (
              i * window.innerWidth + window.innerWidth - window.innerWidth / 2
            );
          } else if (i < 4) {
            return (
              (i + 1) * window.innerWidth +
              verticalHeight -
              window.innerWidth / 2
            );
          } else {
            return (
              (i + 1) * window.innerWidth +
              verticalHeight * 3 -
              window.innerWidth / 2
            );
          }
        },
        onLeave: () => {
          console.log("ONLEAVE", slide, i);
          if (i !== 0) {
            gsap.to(navLinks, {
              scale: 1,
              duration: 0.2,
              borderBottom: "none",
            });

            gsap.to(navLinks[i], {
              duration: 0.2,
              scale: 1.1,
              borderBottom: "3px solid red",
            });
          } else {
            gsap.to(navLinks[i], {
              duration: 0.2,
              scale: 1.1,
              borderBottom: "3px solid red",
            });
          }
        },
        onEnterBack: () => {
          console.log("ONENTERBACK", slide, i);

          if ((slide.id = "section0")) {
            navLinks.forEach((v, i) => (v.style.borderBottom = "none"));
          }

          if (i !== 0) {
            gsap.to(navLinks[i], {
              scale: 1,
              borderBottom: "none",
            });

            gsap.to(navLinks[i - 1], {
              duration: 0.2,
              scale: 1.1,
              borderBottom: "3px solid red",
            });
          } else {
            gsap.to(navLinks[i], {
              borderBottom: "none",
            });

            gsap.to(navLinks[i + 1], { scale: 1, borderBottom: "none" });
          }
        },
      });
    });

    navLinks.forEach((link, i) => {
      link.addEventListener("click", (e) => {
        // e.preventDefault();

        const navLink = e.target;

        navLinks.forEach((val, j) => {
          if (j === i) return;

          navLinks[j].style.borderBottom = "none";
        });

        navLink.style.borderBottom = "3px solid red";

        gsap.to(window, {
          duration: 0.1,

          scrollTo: () => {
            console.log("SCROLLTO:", link, i);

            if (i < 2) {
              return i * window.innerWidth + window.innerWidth;
            } else if (i < 4) {
              return (i + 1) * window.innerWidth + verticalHeight;
            } else {
              return (i + 1) * window.innerWidth + verticalHeight * 3;
            }
          },
        });

        gsap.to(navLinks, { scale: 1, borderBottom: "none" });
        gsap.to(navLinks[i], {
          scale: 1.1,
          borderBottom: "3px solid red",
        });
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
  }, [start]);
};

export default useLocoScroll;
