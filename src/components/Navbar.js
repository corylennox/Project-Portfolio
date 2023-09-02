import React from "react";
import { Listbox } from "@headlessui/react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
const themeIcons = {
  light: <SunIcon className="w-6 sm:w-8" />,
  dark: <MoonIcon className="w-6 sm:w-8" />,
  system: <ComputerDesktopIcon className="w-6 sm:w-8" />,
};

export default function Navbar(props) {
  return (
    <header
      id="navbar"
      className="bg-secondary dark:bg-secondaryDark sticky z-40 top-0"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-nowrap flex-row text-textDark dark:text-primaryDark items-center py-2 sm:px-4 px-2">
          <img
            src="./logo.png"
            alt="logo"
            className="w-14 h-14 cursor-pointer hidden sm:block"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <div className="text-proj-sm xs:text-base sm:text-xl md:text-2xl pb-[.18rem]">
            <span
              className="mr-1 xs:mr-2 font-semibold whitespace-nowrap sm:pl-4 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Cory Lennox
            </span>
          </div>
          <div className="mr-auto md:ml-4 md:py-1 md:pl-4 border-l border-textDark dark:border-primaryDark flex flex-nowrap text-proj-xxs xs:text-sm sm:text-lg md:text-xl font-normal">
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                window.scrollTo({
                  top: element.offsetTop - 40, // navBarHeight
                  behavior: "smooth",
                });
              }}
              className="sm:mx-2 mx-[.15rem] xs:mx-1 xs:ml-2 dark:hover:text-buttonTxtDark hover:text-gray-200"
            >
              Past Work
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("skills");
                window.scrollTo({
                  top: element.offsetTop - 40, // navBarHeight
                  behavior: "smooth",
                });
              }}
              className="sm:mx-2 mx-[.15rem] dark:hover:text-buttonTxtDark hover:text-gray-200"
            >
              Skills
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("connect");
                window.scrollTo({
                  top: element.offsetTop - 40, // navBarHeight
                  behavior: "smooth",
                });
              }}
              className="sm:mx-2 mx-[.15rem] dark:hover:text-buttonTxtDark hover:text-gray-200"
            >
              Connect With Me
            </button>
          </div>
          <div className="relative flex justify-end">
            <Listbox defaultValue={"test"}>
              <Listbox.Button
                className={props.theme === "system" ? "" : "text-themeIcon"}
              >
                {props.theme === "dark" ||
                (!("theme" in localStorage) &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches)
                  ? themeIcons.dark
                  : themeIcons.light}
              </Listbox.Button>

              <Listbox.Options className="absolute mt-12 right-0 z-50 rounded-lg bg-gray-500 py-1 text-sm font-semibold shadow-lg drop-shadow-lg ">
                <Listbox.Option
                  onClick={props.onLightModeClick}
                  className={`flex items-center px-2 py-[0.1rem] hover:cursor-pointer ${
                    props.theme === "light" ? "text-themeIcon" : ""
                  }`}
                >
                  {themeIcons.light}
                  <p className="pl-2">Light</p>
                </Listbox.Option>
                <Listbox.Option
                  onClick={props.onDarkModeClick}
                  className={`flex items-center px-2 py-[0.1rem] hover:cursor-pointer ${
                    props.theme === "dark" ? "text-themeIcon" : ""
                  }`}
                >
                  {themeIcons.dark}
                  <p className="pl-2">Dark</p>
                </Listbox.Option>
                <Listbox.Option
                  onClick={props.onSystemPreferenceClick}
                  className={`flex items-center px-2 py-[0.1rem] hover:cursor-pointer ${
                    props.theme === "system" ? "text-themeIcon" : ""
                  }`}
                >
                  {themeIcons.system}
                  <p className="pl-2">System</p>
                </Listbox.Option>
              </Listbox.Options>
            </Listbox>
          </div>
        </div>
      </div>
    </header>
  );
}
