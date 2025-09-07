import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { projects } from "../data";
import React, { useState } from "react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const hasTouchSupport = "ontouchstart" in window;

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  function eventHandler(index) {
    if (hasTouchSupport) handleMouseEnter(index);
  }

  return (
    <section
      id="projects"
      className="text-secondary dark:text-textDark body-font"
    >
      <div className=" text-center">
        <div className="flex flex-col w-full mb-6">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-1 " />
          <h1 className="md:text-4xl text-3xl font-medium title-fon">
            My Work
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 p-2 justify-center justify-items-center mx-auto max-w-4xl">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-[240px] xs:w-[345px] sm:w-[300px] md:w-[350px] md2:w-[26rem] aspect-[4/3] relative items-center"
            >
              <img
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center z-10 rounded-lg shadow-2xl"
                src={project.image}
              />
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => eventHandler(index)}
                className={`${
                  activeIndex === index
                    ? "opacity-100 bg-projectsHover/[0.8]"
                    : "opacity-0"
                } absolute inset-0 duration-500 transition-opacity z-20 rounded-lg text-textDark w-full h-full p-2 xs:p-4 md2:p-6 flex flex-col text-proj-xxs xs:text-proj-xs sm:text-proj-sm md:text-proj-md md2:text-proj-md2`}
              >
                <h2 className="tracking-widest title-font text-accent dark:text-accentDark xs:mb-[.5rem]">
                  {project.subtitle}
                </h2>
                <h1 className="title-font font-medium xs:mb-[.5rem]">
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
                <button
                  className="absolute bottom-2 md2:bottom-4 left-[4.4rem] xs:left-[7rem] sm:left-[5.5rem] md:left-[7.05rem] md2:left-[8.55rem] cursor-pointer justify-center mx-auto inline-flex text-buttonTxt bg-accent dark:text-buttonTxtDark dark:bg-accentDark dark:hover:bg-accentHoverDark border-0 py-[.3rem] px-[.8rem] md2:py-[.5rem] md2:px-[1rem] focus:outline-none hover:bg-accentHover rounded xxs:text-sm xs:text-lg sm:text-base md:text-lg md2:text-xl"
                  onClick={() => {
                    if (activeIndex === index)
                      window.open(project.link, "_blank");
                  }}
                >
                  Visit website
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
