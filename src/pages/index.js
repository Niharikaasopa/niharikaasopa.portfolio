"use client"

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ProjectsSlider } from "@/components/ProjectsSlider";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import { Skills } from "@/components/Skills";


export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth < 1200) return; // Stop animation on small screens

    const tlAbout = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-about",
        start: "top 40%",
        end: "bottom 100%",
        scrub: 2,
      },
    });

    tlAbout
      .fromTo(
        ".section-about h2",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
      )
      .fromTo(
        ".section-about p",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
      )
      .fromTo(
        ".section-about a",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power1.inOut" }
      )
      .fromTo(
        ".section-about img",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
      );

    const tlProjects = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-projects",
        start: "top 80%",
        end: "bottom 100%",
        scrub: 2,
      },
    });

    tlProjects.fromTo(
      ".section-projects h2",
      { y: -100, opacity: 0 }, // Starting state
      { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" } // Ending state
    );

    return () => {
      tlAbout.kill();
      tlProjects.kill();
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Skills />
      <ProjectsSlider />
      <Footer />
    </>
  );
}