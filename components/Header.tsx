import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const textElement = document.querySelector(".zoom-text");

    // gsap.to(".zoom-text", {
    //   scrollTrigger: ".zoom-text",
    //   pin: true,
    //   scale: 10,
    //   end: "+=500",
    //   ease: "power1.inOut",
    // });

    gsap.to(".animate-on-scroll", {
      opacity: 1,
      scale: 100,
      // transform: "translate3d(90vw, 0, 0)",
      duration: 1,
      scrollTrigger: {
        trigger: ".animate-on-scroll",
        start: "top 50%", // Adjust this value based on when you want the animation to start
        end: "bottom 0%", // Adjust this value based on when you want the animation to end
        scrub: 1, // Smoothly transitions the animation during scrolling
        pin: true,
      },
    });
  }, []);
  return (
    <header className="bg-gray-700 h-screen flex items-center justify-center container border">
      <h1
        className="zoom-text text-2xl text-white animate-on-scroll"
        ref={headerRef}
      >
        bismillah{" "}
      </h1>
    </header>
  );
};

export default Header;
