"use client";
import ExperienceCard from "@/components/ExperienceCard";
import "./globals.css";

import Header from "@/components/Header";
import Image, { StaticImageData } from "next/image";
import buzzhivePic from "@/assects/buzzhive.png";
import ProjectCard from "@/components/ProjectCard";
import { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export interface Experience {
  date: string;
  header: String;
  content: string;
  techStack: string[];
}

export interface Project {
  imgURL: StaticImageData;
  header: String;
  content: string;
  techStack: string[];
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const trackedElement = useRef(null);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("main section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (trackedElement.current) {
      const element = trackedElement.current as HTMLDivElement;
      const rect = element.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      setMousePosition({ x: mouseX, y: mouseY });
    }
  };

  const experienceArray = [
    {
      date: "2021 — Present",
      header: "Lead Engineer · Somethign",
      content:
        "When Im not at the computer, Im usually rock climbing out with my wife and two cats or running around Hyrule searching for Korok seeds K o r o k s e e d s .",
      techStack: ["string", "React", "PHP"],
    },
    {
      date: "2021 — Present",
      header: "Lead Engineer · Somethign",
      content:
        "When Im not at the computer, Im usually rock climbing out with my wife and two cats or running around Hyrule searching for Korok seeds K o r o k s e e d s .",
      techStack: ["string", "React", "PHP"],
    },
    {
      date: "2021 — Present",
      header: "Lead Engineer · Somethign",
      content:
        "When Im not at the computer, Im usually rock climbing out with my wife and two cats or running around Hyrule searching for Korok seeds K o r o k s e e d s .",
      techStack: ["string", "React", "PHP"],
    },
  ];
  const projectArray = [
    {
      imgURL: buzzhivePic,
      header: "Buzzhive",
      content:
        "When Im not at the computer, Im usually rock climbing out with my wife and two cats or running around Hyrule searching for Korok seeds K o r o k s e e d s .",
      techStack: ["string", "React", "PHP"],
    },
    {
      imgURL: buzzhivePic,
      header: "Buzzhive",
      content:
        "When Im not at the computer, Im usually rock climbing out with my wife and two cats or running around Hyrule searching for Korok seeds K o r o k s e e d s .",
      techStack: ["string", "React", "PHP"],
    },
    {
      imgURL: buzzhivePic,
      header: "Buzzhive",
      content:
        "When Im not at the computer, Im usually rock climbing out with my wife and two cats or running around Hyrule searching for Korok seeds K o r o k s e e d s .",
      techStack: ["string", "React", "PHP"],
    },
  ];
  return (
    <div
      className="bg-slate-900 relative leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
      onMouseMove={handleMouseMove}
      onScroll={() => console.log("scrolling")}
      ref={trackedElement}
    >
      <div
        className="pointer-events-none fixed inset-0 z-20 transition duration-300 lg:absolute "
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0  ">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Adinlewa Abraham
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Principal Software Engineer at Algolia
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                i do stuff with my laptop and create magic and i am unemployable
                because i am bad.
              </p>
              <nav className="nav hidden lg:block"></nav>
            </div>
            <ul className="mt-16 w-max">
              {["about", "experience", "projects"].map((navSection) => (
                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href={`#${navSection}`}
                  >
                    <span
                      className={` nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16
                     group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none  ${
                        navSection === activeSection && "w-16 bg-slate-200 "
                      }`}
                    />
                    <span
                      className={` nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200
                     group-focus-visible:text-slate-200 ${
                      navSection === activeSection ? "text-slate-200" : "text-slate-500"
                      }`}
                    >
                      {navSection}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              {[
                { icon: <FaGithub />, link: "" },
                { icon: <FaXTwitter />, link: "" },
                { icon: <FaLinkedin />, link: "" },
                { icon: <IoMdMail />, link: "" },
              ].map((social) => (
                <li className="mr-5 text-2xl">
                  <a
                    className="block hover:text-slate-200"
                    href={social.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </header>
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  ABOUT Back in 2012, I decided to try my hand at creating
                  custom Tumblr themes and tumbled head first into the rabbit
                  hole of coding and web development. Fast-forward to today, and
                  I’ve had the privilege of building software for an advertising
                  agency, a start-up, a student-led design studio, and a huge
                  corporation.
                </p>
                <p className="mb-4">
                  My main focus Back in 2012, I decided to try my hand at
                  creating custom Tumblr themes and tumbled head first into the
                  rabbit hole of coding and web development. Fast-forward to
                  today, and I’ve had the privilege of building software for an
                  advertising agency, a start-up, a student-led design studio,
                  and a huge corporation.
                </p>
                <p>
                  When I’m not at the computer, I’m usually rock climbing,
                  hanging out with my wife and two cats, or running around
                  Hyrule searching for Korok seeds K o r o k s e e d s .
                </p>
              </div>
            </section>
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <ol className="">
                {experienceArray.map((experience, index) => (
                  <ExperienceCard experience={experience} key={index} />
                ))}
              </ol>
              <div className="mt-12">
                <a
                  className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
                  aria-label="View Full Résumé"
                  href="https://drive.google.com/file/d/16scu-_UoyIV2_JkZC_iS-IPxSvWokYPY/view?usp=sharing"
                  target="_blank"
                >
                  <span>
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                      View Full{" "}
                    </span>
                    <span className="whitespace-nowrap">
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        Résumé
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </section>
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <ol>
                {projectArray.map((project, index) => (
                  <ProjectCard project={project} key={index} />
                ))}
              </ol>
            </section>
            <footer className="">
              <p>
                Loosely designed in Figma and coded in Visual Studio Code by
                yours truly. Built with Next.js and Tailwind CSS, deployed with
                Vercel. All text is set in the Inter typeface.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
