import { GithubMark, LinkedinMark } from "./assets/SocialIcons";

export const projects = [
  {
    id: 0,
    title: "iOS App",
    subtitle: "Swift, SpriteKit, UIKit, Firebase, Admob",
    description:
      "Whiplash is an addictive endless jumper game where players traverse falling platforms to see how far they can go. Available on the App Store, the game features simple tap-to-jump controls and endless gameplay, making it the perfect game to pass the time and challenge yourself.",
    link: "https://apps.apple.com/us/app/whiplash-tap-jumping-game/id1247181092",
    image: "./iosapp.png",
  },
  {
    id: 1,
    title: "Betting Exchange (Under Construction)",
    subtitle: "React + Redux, Node.js, PSQL, GSQL",
    description:
      " This is a betting exchange web application that allows users to bet against each other on the outcome of sporting events. It's built with React + Redux on the frontend, Node.js on the backend, and PostgreSQL as the database, and it's hosted on AWS using EC2.",
    link: "https://openbook.gg/",
    image: "./bettingexchange.png",
  },
  {
    id: 2,
    title: "MVC Dashboard Application",
    subtitle: "C#, HTML, JS, CSS + Bootstrap",
    description:
      "This was my summer internship project at Simplivity in 2015. It's a simple dashboard application that displays critical information for the customer support team. Here it's using dummy data, but the original code used Salesforce's REST API to pull live data.",
    link: "dashboard.html",
    image: "./dashboard.png",
  },
  {
    id: 3,
    title: "Example website",
    subtitle: "HTML, JS, CSS, JQuery",
    description:
      "This is an example website I made to showcase front-end UI design. It's a simple website that uses HTML, JS, CSS, and originally JQuery.",
    link: "travelwebsite.html",
    image: "./examplewebsite.png",
  },
];

export const skills = [
  {
    id: 0,
    skill:
      "Proficient in front-end web technologies, including HTML, JavaScript, and CSS for building interactive web interfaces.",
  },
  {
    id: 1,
    skill:
      "Experienced in designing and developing web applications with React + Redux.",
  },
  {
    id: 2,
    skill:
      "Familiarity with Apollo GraphQL for efficient data fetching and state management.",
  },
  {
    id: 3,
    skill: "Capable of implementing server-side logic using Node.js.",
  },
  {
    id: 4,
    skill: "Experience in data management and querying with PostgreSQL.",
  },
  {
    id: 5,
    skill: "Familiar with using Firebase for analytics and user tracking.",
  },
  {
    id: 6,
    skill: "Experience with managing cloud-based resources on AWS.",
  },
  {
    id: 7,
    skill:
      "Experience in RESTful API integration, for integrating third-party services.",
  },
  {
    id: 8,
    skill: "Proficiency in Swift programming for iOS app development.",
  },
  {
    id: 9,
    skill:
      "Proficient in UIKit for crafting intuitive user interfaces in iOS applications.",
  },
  {
    id: 10,
    skill:
      "Experienced in utilizing SpriteKit for immersive game development on iOS.",
  },
  {
    id: 11,
    skill: "Experienced in C# and C++ programming.",
  },
  {
    id: 12,
    skill:
      "Experience in using version control systems, particularly Git, for collaborative codebase management.",
  },
  {
    id: 13,
    skill: "Strong problem-solving capabilities and debugging skills.",
  },
];

export const connectLinks = [
  {
    icon: <GithubMark classname="w-10 h-10" />,
    link: "https://github.com/corylennox",
  },
  {
    icon: <LinkedinMark classname="w-24 h-24" />,
    link: "https://www.linkedin.com/in/cory-lennox-797187ba/",
  },
];
