import "./tailwind.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Connect from "./components/Connect.jsx";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme === "dark") {
      return "dark";
    } else if (localStorage.theme === "light") {
      return "light";
    } else {
      return "system";
    }
  });

  useEffect(() => {
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleLightModeClick() {
    localStorage.setItem("theme", "light");
    setTheme("light");
  }

  function handleDarkModeClick() {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  }

  function handleSystemPreferenceClick() {
    localStorage.removeItem("theme");
    setTheme("system");
  }

  return (
    <div className="bg-primary dark:bg-primaryDark">
      <Navbar
        onLightModeClick={handleLightModeClick}
        onDarkModeClick={handleDarkModeClick}
        onSystemPreferenceClick={handleSystemPreferenceClick}
        theme={theme}
      />
      <main className="w-full max-w-6xl mx-auto">
        <About />
        <Projects />
        <Skills />
        <Connect />
      </main>
    </div>
  );
}
