import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="flex md:pl-[12%] pt-16 pb-8 px-4 md:px-0 md:flex-row flex-col items-center w-full mx-auto">
        <div className=" grow md:w-96 flex flex-col md:items-start md:mb-0 items-center text-center md:text-left max-w-lg text-text dark:text-textDark">
          <h1 className="title-font md:text-4xl text-2xl xs:text-3xl mb-4 font-medium ">
            Welcome to my project portfolio.
            <br className="hidden" />
          </h1>
          <p className="mb-8 leading-relaxed text-sm md:text-base">
            I'm Cory, a current IT professional with a deep-seated passion for
            programming and creative problem solving. Over the years, I've
            cultivated a diverse set of skills in software development, both
            through self-teaching and formal education. Despite my current role,
            my aspiration is to transition into a programming position where I
            can fully utilize my extensive range of coding skills.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => {
                const element = document.getElementById("connect");
                window.scrollTo({
                  top: element.offsetTop,
                  behavior: "smooth",
                });
              }}
              className="inline-flex text-buttonTxt dark:text-buttonTxtDark bg-accent dark:bg-accentDark dark:hover:bg-accentHoverDark border-0 py-2 px-6 focus:outline-none hover:bg-accentHover rounded text-lg"
            >
              Connect With Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
