"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Logo1 from "../public/logoa.png";
import useScrollNav from "@/hooks/use-scroll-nav";
import { useMemo } from "react";
import {
  FaGithub,
  FaCodepen,
  FaInstagram,
  FaGoodreads,
  FaLinkedin,
} from "react-icons/fa6";

export default function Portfolio() {
  const sectionIds = useMemo(() => ["about", "experience", "projects"], []);
  const activeSection = useScrollNav(sectionIds);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.slice(1);
    return {
      link: `group flex items-center py-3 ${isActive ? "active" : ""}`,
      indicator: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? "w-16 bg-slate-200 h-2"
          : "group-hover:w-16 group-hover:bg-slate-200"
      }`,
      text: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? "text-slate-200"
          : "text-slate-500 group-hover:text-slate-200"
      }`,
      ariaCurrent: isActive ? "page" : undefined,
    };
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-screen-xl px-8 py-0.5">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Fixed Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20">
            <div>
              <div className="text-4xl flex items-center font-bold tracking-tight text-slate-200 sm:text-5xl -ml-6">
                <img
                  src={Logo1.src}
                  alt="Logo Image"
                  style={{ width: "90px" }}
                />
                <h1 style={{ marginLeft: "-18px" }}>yan Modak</h1>
              </div>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Backend | Blockchain Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                @<span className="text-teal-300">Emertech Innovations </span>
              </p>

              {/* Navigation */}
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  {navItems.map((item) => {
                    const { link, indicator, text, ariaCurrent } =
                      getNavItemClasses(item.href);
                    return (
                      <li key={item.name}>
                        <a
                          className={link}
                          href={item.href}
                          aria-current={ariaCurrent as "page" | undefined}
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById(item.href.slice(1))
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                          }}
                        >
                          <span className={indicator} />
                          <span className={text}>{item.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://github.com/Ayan-Blufy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>

                  <FaGithub className="text-gray-500 hover:text-white transition-colors duration-200 h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://www.linkedin.com/in/ayan-modak-201aab226/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>

                  <FaLinkedin className="text-gray-500 hover:text-white transition-colors duration-200 h-6 w-6" />
                </a>
              </li>

              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://www.instagram.com/oxby7e/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Instagram</span>

                  <FaInstagram className="text-gray-500 hover:text-white transition-colors duration-200 h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Column - Main Content */}
          <main
            id="content"
            className="pt-12 md:pt-16 lg:pt-24 lg:w-[52%] py-4 md:py-8 lg:py-24"
          >
            {/* About Section */}
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
                  Hi, I’m Ayan, a backend and blockchain developer with over 2.5
                  years of experience. I specialise in building robust, scalable
                  solutions and have extensive expertise in{" "}
                  <span className="text-teal-300">
                    supply chain optimisation ,
                  </span>
                  <span className="text-teal-300">
                    {" "}
                    traceability (track and trace){" "}
                  </span>
                  , and <span className="text-teal-300">tokenomics</span> .
                  Additionally, I have worked extensively on{" "}
                  <span className="text-teal-300"> regulatory compliance </span>{" "}
                  and{" "}
                  <span className="text-teal-300">
                    {" "}
                    climate change initiatives{" "}
                  </span>
                  , as well as
                  <span className="text-teal-300">
                    {" "}
                    sustainable blockchain applications{" "}
                  </span>{" "}
                  .
                </p>
                <p className="mb-4">
                  Currently, I'm a Back-End Engineer at{" "}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://emertech.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Emertech Innovations .
                  </a>
                  Where I contribute to the design and scale APIs and
                  microservices that power our products and integrations, with a
                  focus on performance, reliability, security, and clean data
                  models (Node.js/TypeScript, Prisma, PostgreSQL, Redis,
                  AWS,Circle ci, Docker,MongoDB,Nest js,etc).
                </p>
                <p className="mb-4">
                  I am also working on a use case called{" "}
                  <span className="text-teal-300"> Zahabi </span>{" "}
                  (Revolutionising Gold Investment with Blockchain), which aims
                  to help finance institutions and retail shops monetise their
                  idle gold assets.
                </p>
                <p className="mb-4">
                  Visit us at:
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 p-2"
                    href="https://zahabi.in"
                    target="_blank"
                  >
                    www.zahabi.in
                  </a>
                </p>
                <p>
                  In my spare time, I'm usually explore new places , play
                  table-tennis, or working on personal projects. I also enjoy
                  sharing my knowledge through writing and mentoring, and I'm
                  always eager to learn new technologies and improve my skills.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        2023 — Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                              href="https://emertech.io"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Backend Engineer,{" "}
                                <span className="inline-block">
                                  Emertech Innovations
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          I build and maintain REST/GraphQL services,
                          event-driven pipelines, and database schemas.
                          Additionally, I focus on optimizing system
                          performance, ensuring security best practices, and
                          implementing scalable solutions to meet evolving
                          business needs.
                        </p>
                        <p className="mt-2 font-extrabold">Tech-Stack:</p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Node.js/TypeScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Prisma
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Nginx
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              PostgreSQL
                            </div>
                          </li>
                           <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              MongoDB
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Redis
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Docker
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              AWS (Vpc,Lambda, SQS,S3)
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        Dec 2021 — Mar 2022
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                              href="https://crypticonicsec.in/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Web Development Intern,{" "}
                                <span className="inline-block">
                                  Crypticonic Security
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Worked with amazing framework's and library's like
                          React js,Next js,Node js to develop various cool
                          projects.
                        </p>
                        <p className="mt-2 font-extrabold">Tech-Stack:</p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Node.js
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Mongodb
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              React js
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              AWS
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <div className="mb-12">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base"
                    href="https://my-tf-test-bucket-ayan0093.s3.us-east-1.amazonaws.com/Ayan_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="inline-block">
                      View Full Resume
                      <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                    </span>
                  </a>
                </div>

                <ol className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="https://www.newline.co/courses/build-a-spotify-connected-app"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Build a Spotify Connected App{" "}
                              <span className="inline-block">
                                <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Video course that teaches how to build a web app with
                          the Spotify Web API…
                        </p>
                      </div>
                      <img
                        alt="Build a Spotify Connected App course"
                        loading="lazy"
                        width="200"
                        height="48"
                        decoding="async"
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        src="/spotify-course-interface.png"
                      />
                    </div>
                  </li>

                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="https://spotify-profile.herokuapp.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Spotify Profile{" "}
                              <span className="inline-block">
                                <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Web app for visualizing personalized Spotify data…
                        </p>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          ⭐ 691
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Express
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Spotify API
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Heroku
                            </div>
                          </li>
                        </ul>
                      </div>
                      <img
                        alt="Spotify Profile"
                        loading="lazy"
                        width="200"
                        height="48"
                        decoding="async"
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        src="/spotify-profile-dark-interface.png"
                      />
                    </div>
                  </li>

                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Halcyon Theme{" "}
                              <span className="inline-block">
                                <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Minimal dark blue theme for VS Code…
                        </p>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          📦 100k+ Installs
                        </p>
                      </div>
                      <img
                        alt="Halcyon Theme"
                        loading="lazy"
                        width="200"
                        height="48"
                        decoding="async"
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        src="/dark-blue-code-editor.png"
                      />
                    </div>
                  </li>

                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="https://github.com/bchiang7/v4"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              brittanychiang.com (v4){" "}
                              <span className="inline-block">
                                <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          An old portfolio site built with Gatsby…
                        </p>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          ⭐ 6,005
                        </p>
                      </div>
                      <img
                        alt="brittanychiang.com v4"
                        loading="lazy"
                        width="200"
                        height="48"
                        decoding="async"
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        src="/gatsby-portfolio-website.png"
                      />
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Writing Section */}
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="mb-12">
                <Link
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base"
                  href="/archive"
                >
                  <span className="inline-block">
                    View Full Project Archive
                    <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                  </span>
                </Link>
              </div>

              <ol className="group/list">
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                        2024
                      </p>
                      <h3>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dc55ff0"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            5 Common Accessibility Pitfalls and How to Avoid
                            Them{" "}
                            <span className="inline-block">
                              <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                          </span>
                        </a>
                      </h3>
                    </div>
                    <img
                      alt="Accessibility article"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      src="/accessibility-icon.png"
                    />
                  </div>
                </li>

                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                        2020
                      </p>
                      <h3>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Integrating Algolia Search with WordPress Multisite{" "}
                            <span className="inline-block">
                              <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                          </span>
                        </a>
                      </h3>
                    </div>
                    <img
                      alt="Algolia Search article"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      src="/search-grid-pattern.png"
                    />
                  </div>
                </li>

                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                        2019
                      </p>
                      <h3>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Building a Headless Mobile App CMS From Scratch{" "}
                            <span className="inline-block">
                              <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                          </span>
                        </a>
                      </h3>
                    </div>
                    <img
                      alt="Mobile CMS article"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      src="/mobile-app-cms.png"
                    />
                  </div>
                </li>
              </ol>
            </section>

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Coded in{" "}
                <a
                  href="https://code.visualstudio.com"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visual Studio Code.
                </a>{" "}
                Built with{" "}
                <a
                  href="https://nextjs.org"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tailwind CSS
                </a>
                , deployed with{" "}
                <a
                  href="https://vercel.com"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel.
                </a>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
