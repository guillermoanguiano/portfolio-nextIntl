import { DiMeteorfull, DiMsqlServer } from "react-icons/di";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import gastosPassa from "../assets/gastosPassa.webp";
import supervizza from "../assets/supervizza.webp";

export const navItems = [
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
];

export const experience = [
    {
        company: "Fullstack Developer - Freelancer",
        period: "2023 - Present",
        description: [
            "Designed and optimized web applications using React, resulting in a significant increase in loading speed and overall performance. Enhanced user experiences by providing fast, responsive interfaces that engage and captivate users.",
            "Enhanced application performance by implementing Clean Architecture and MVC, ensuring a structured and maintainable code. Adhered to best practices with the best design patterns, resulting in organized, scalable code and optimal performance.",
            "Proficiency in JavaScript and TypeScript, mastering the creating of clean code."
        ],
    },
    {
        company: "Fullstack Developer - Grupo Calzzapato",
        period: "2024",
        description: [
            "Actively participated in various internal company projects, leading the development of key modules and proposing innovative solutions that optimized existing processes.",
            "Took the initiative in implementing continuous improvements, leveraging emerging technologies and optimizing application performance, resulting in noticeable reductions in load times and increased user productivity.",
            "Contributed to the implementation of clean architecture, which not only improved code maintainability but also significantly optimized response times between the API and the user interface. This reduced latency in key interactions, providing a smoother experience for end users and enabling better long-term scalability."
        ],
    },
];

export const projects = [
    {
        id: 1,
        title: "Refound System - Passa",
        description: "A system that allows accountants and employees to manage the refund process in Agricola Passa. The client wanted to use Meteor with React to develop the system.",
        img: gastosPassa,
        iconLists: [
            { icon: DiMeteorfull, name: "Meteor.js" },
            { icon: FaReact, name: "React" },
            { icon: FaBootstrap, name: "Bootstrap" },
            { icon: SiMongodb, name: "MongoDB" },
            { icon: DiMsqlServer, name: "SQL Server" }
        ],
        link: "#",
        createdAt: "2024",
    },
    {
        id: 2,
        title: "Supervizza - Calzzapato",
        description: "I created this project at my first job. It is a system that allows you to manage your employees and their schedules.",
        img: supervizza,
        iconLists: [
            { icon: DiMeteorfull, name: "Meteor.js" },
            { icon: FaReact, name: "React" },
            { icon: FaBootstrap, name: "Bootstrap" },
            { icon: SiMongodb, name: "MongoDB" }
        ],
        link: "#",
        createdAt: "2024",
    },
];
