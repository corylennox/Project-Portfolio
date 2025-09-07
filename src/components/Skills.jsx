import { CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skillCategories } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className=" px-5 py-5 mx-auto">
        <div className="text-center mb-6 text-secondary dark:text-textDark">
          <CpuChipIcon className="w-10 inline-block mb-1" />
          <h1 className="md:text-4xl text-3xl font-medium title-font">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-2 md:w-1/2 w-full">
              <h3 className="text-lg font-bold mb-3 mt-1 text-text dark:text-textDark inline-flex items-center">
                {category.icon}
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-offPrimary dark:bg-offPrimaryDark rounded-full px-4 py-1 flex items-center text-text dark:text-textDark"
                  >
                    <span className="font-medium text-xs xs:text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
