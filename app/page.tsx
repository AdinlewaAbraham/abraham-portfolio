"use client";
import ExperienceCard from "@/components/ExperienceCard";
import "./globals.css";

import Header from "@/components/Header";
import Image, { StaticImageData } from "next/image";
import buzzhivePic from "@/assects/buzzhive.png";
import etherflowPic from "@/assects/etherflow.png";
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
  link: string;
}

export interface Project {
  imgURL: StaticImageData;
  header: String;
  content: string;
  techStack: string[];
  link: string;
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
      date: "2023 — Present",
      header: "Mobile Engineer · Tekyville",
      content:
        "Led the development of LogiTracker, a cutting-edge logistics tracking product, during my tenure as a Full Stack Mobile Developer at Tekyville. Worked within the dynamic tech environment of Nigeria, creating a robust solution for logistics companies to track goods and drivers, mitigating theft risks. Employed a tech stack comprising React Native, Express, and MongoDB to ensure the seamless functionality and performance of the LogiTracker application. Delivered high-quality, production-ready code, contributing to the success of Tekyville's mission in revolutionizing logistics management in Nigeria.",
      techStack: ["React Native", "Node.js", "MongoDB", "TypeScript"],
      link: "https://www.tekyville.com/",
    },
    {
      date: "2022 — 2023",
      header: "Developer · Grandida",
      content:
        "Contributed as a Full Stack Web3 Developer at Grandida, leading initiatives like Reccoin—an app designed to incentivize plastic pickers. As the backend developer, I played a pivotal role in the development of smart contracts using Solidity. Leveraging a tech stack that included Solidity for blockchain development, Next.js for web interfaces, and Hardhat for testing and deployment, I spearheaded the successful implementation of projects that aligned with Grandida's mission of creating impactful solutions. My time at Grandida was characterized by a commitment to excellence, translating innovative ideas into tangible, sustainable, and socially responsible applications.",
      techStack: ["Solidity", "React", "Next.js"],
      link: "https://grandida.com/",
    },
  ];
  const projectArray: Project[] = [
    {
      imgURL: buzzhivePic,
      header: "Buzzhive",
      content:
        "A feature-rich chat app where users can send polls, reply, forward messages, and share media files. Engage in dynamic conversations and explore diverse communication options within a vibrant and user-friendly interface.",
      techStack: ["Next.js", "Firebase", "Tailwind CSS"],
      link: "https://buzzhive.vercel.app/",
    },
    {
      imgURL: buzzhivePic,
      header: "TeamSync",
      content:
        "Simplifying project management. Assign tasks, manage team members, and utilize views like boards, calendar, timeline, and tables for efficient collaboration and insight.",

      techStack: ["Next.js", "MongoDB", "Node.js", "TypeScript"],
      link: "",
    },
    {
      imgURL: etherflowPic,
      header: "EtherFlow",
      content:
        "A Fullstack Web3 dApp simplifying Ether transactions. Seamlessly execute transactions with an integrated beneficiary system, enabling users to save Ether accounts for recurring transactions. Enjoy a user-friendly platform that streamlines the Ether transfer process, ensuring easy and efficient transactions with integrated beneficiary management.",
      techStack: ["Solidity", "Next.js", "Firebase", "Javascript"],
      link: "https://etherflow-seven.vercel.app/",
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
                Experienced Fullstack Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                Architecting Exceptional and Accessible Digital Experiences for
                the Web and Mobile Platforms.
              </p>
              <nav className="nav hidden lg:block">
                <ul className="mt-16 w-max">
                  {["about", "experience", "projects"].map((navSection) => (
                    <li>
                      <a
                        className="group flex items-center py-3 active"
                        href={`#${navSection}`}
                      >
                        <span
                          className={` nav-indicator mr-4 h-px transition-all group-hover:w-16
                     group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none  ${
                       navSection === activeSection ? "w-16 bg-slate-200 " : "w-8 bg-slate-600"
                     }`}
                        />
                        <span
                          className={` nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200
                     group-focus-visible:text-slate-200 ${
                       navSection === activeSection
                         ? "text-slate-200"
                         : "text-slate-500"
                     }`}
                        >
                          {navSection}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/AdinlewaAbraham",
                },
                {
                  icon: <FaXTwitter />,
                  link: "https://twitter.com/ADINLEWAABRAHA1",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/adinlewa-abraham-3657a0257/",
                },
                {
                  icon: <IoMdMail />,
                  link: "mailto:abrahamadinlewa@gmail.com",
                },
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
              <div className="[&>p>span]:text-slate-200 [&>p>span]:font-medium">
                <p className="mb-4">
                  In 2020, I delved into the world of web and mobile
                  development, and by 2021, I was building with a tech stack
                  that includes <span>React</span>, <span>Next.js</span>,{" "}
                  <span>React Native</span>, <span>Node.js</span>,{" "}
                  <span>Express</span> and <span>MongoDB</span>. My coding
                  journey has led me to contribute my skills to various
                  projects, leaving a mark at notable companies, including{" "}
                  <span>Grandida</span>.
                </p>
                <p className="mb-4">
                  Today, my focus is on crafting{" "}
                  <span>user-centric solutions</span>, leveraging the power of{" "}
                  <span>React</span> and <span>Next.js</span> for dynamic web
                  applications and <span>React Native</span> for versatile
                  mobile experiences. I've navigated the challenges of
                  advertising agencies, startups, student-led design studios,
                  and the robust environments of companies like{" "}
                  <span>Grandida</span>, where I've honed my skills in building
                  impactful digital solutions.
                </p>
                <p>
                  Beyond coding, I'm a proud audiophile, surrounded by an array
                  of high-fidelity headphones. In my downtime, I dive into the
                  gaming realm, navigating digital adventures. Join me as we
                  shape the future, one line of code at a time.
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
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p className="[&>span]:text-slate-400 [&>span]:font-medium">
                Implemented from inspiration, the portfolio site was coded in{" "}
                <span>Visual Studio Code</span>. Developed with{" "}
                <span>Next.js</span> and <span>Tailwind CSS</span>, and
                seamlessly deployed via <span>Vercel</span>. Typography is
                elegantly presented using the Inter typeface.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
