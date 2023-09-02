import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className=" px-5 py-5 mx-auto">
        <div className="text-center mb-6 text-secondary dark:text-textDark">
          <CpuChipIcon className="w-10 inline-block mb-1" />
          <h1 className="md:text-4xl text-3xl font-medium title-font">
            Skills &amp; Technologies
          </h1>
          {/*<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Having honed my skills and gained valuable experience over time, I
            am well-versed in various technologies and tools used in the field
            of software development. My repertoire includes:
  </p>*/}
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div key={skill.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-offPrimary dark:bg-offPrimaryDark rounded-md flex p-4 h-full items-center text-text dark:text-textDark">
                <CheckBadgeIcon className="  w-6 h-6 flex-shrink-0 mr-4 text-accent" />
                <span className="font-medium text-xs xs:text-base">
                  {skill.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
