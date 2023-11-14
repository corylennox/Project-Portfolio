import { GithubMark, LinkedinMark } from "./assets/SocialIcons";
import {
  CodeBracketSquareIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

export const projects = [
  {
    id: 0,
    title: "iOS App",
    subtitle: "Swift, SpriteKit, UIKit, Firebase, Admob",
    description:
      "An addictive endless jumper game where players traverse falling platforms to see how far they can go. Available on the App Store, the game features simple tap-to-jump controls and endless gameplay, making it the perfect game to pass the time and challenge yourself.",
    link: "https://apps.apple.com/us/app/whiplash-tap-jumping-game/id1247181092",
    image: "./iosapp.png",
  },
  {
    id: 1,
    title: "Betting Exchange (Under Construction)",
    subtitle: "React + Redux, Node.js, PSQL, GSQL",
    description:
      " A betting exchange web application that allows users to bet against each other on the outcome of sporting events. It's built with React + Redux on the frontend, Node.js on the backend, and PostgreSQL as the database, and it's hosted on AWS using EC2.",
    link: "https://openbook.gg/",
    image: "./bettingexchange.png",
  },
  {
    id: 2,
    title: "MVC Dashboard Application",
    subtitle: "C#, HTML, JS, CSS + Bootstrap",
    description:
      "A simple dashboard application that displays critical information for the customer support team at SimpliVity. Here it's using dummy data, but the original code used Salesforce's REST API to pull live data.",
    link: "dashboard.html",
    image: "./dashboard.png",
  },
  {
    id: 3,
    title: "Example website",
    subtitle: "HTML, JS, CSS, JQuery",
    description:
      "An example website I made to showcase front-end UI design. It's a simple website that uses HTML, CSS, javascript and JQuery.",
    link: "travelwebsite.html",
    image: "./examplewebsite.png",
  },
];

export const skillCategories = [
  {
    title: "Core Programming",
    icon: <CodeBracketSquareIcon className="w-7 h-7 mr-1" />,
    skills: ["HTML", "C#", "C++", "Java", "Python"],
  },
  {
    title: "Front-end Development",
    icon: <ComputerDesktopIcon className="w-7 h-7 mr-1" />,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "CSS",
      "Redux",
      "JQuery",
      "Bootstrap",
      "Tailwind CSS",
      "HeadlessUI",
    ],
  },
  {
    title: "Back-end & Database Management",
    icon: <CircleStackIcon className="w-7 h-7 mr-1" />,
    skills: [
      "Node.js",
      "Apollo GraphQL",
      "SQL",
      "PostgreSQL",
      "Knex.js",
      "Firebase",
      "JSON",
    ],
  },
  {
    title: "Mobile Development",
    icon: <DevicePhoneMobileIcon className="w-7 h-7 mr-1" />,
    skills: ["Swift", "SpriteKit", "UIKit"],
  },
  {
    title: "Cloud & DevOps",
    icon: <CloudIcon className="w-7 h-7 mr-1" />,
    skills: ["AWS", "Docker", "EC2", "Amazon Linux", "Ubuntu"],
  },
  {
    title: "Project Management & Workflow",
    icon: <ClipboardDocumentListIcon className="w-7 h-7 mr-1" />,
    skills: [
      "Git",
      "Linux",
      "JIRA",
      "ServiceNow",
      "Slack",
      "Microsoft Teams",
      "Zoom",
    ],
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
