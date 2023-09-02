import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { connectLinks } from "../data";

export default function Connect() {
  return (
    <section id="connect">
      <div className=" px-5 pt-5 pb-20 text-center text-secondary dark:text-textDark">
        <UserGroupIcon className="w-10 inline-block mb-2" />
        <h1 className="md:text-4xl text-3xl font-medium title-font mb-5 ">
          Connect With Me
        </h1>
        <div className="flex max-w-5xl mx-auto ">
          {connectLinks.map((connectLink, index) => {
            return (
              <div
                className="mx-auto flex justify-center items-center dark:text-textDark"
                key={index}
              >
                <a
                  href={connectLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {connectLink.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
