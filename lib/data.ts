import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerce1Img from "@/public/images/ecommerce1.png";
import ecommerce2Img from "@/public/images/ecommerce2.png";
import weatherappImg from "@/public/images/weatherapp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation",
    location: "Colombo, SL",
    description:
      "I graduated in Bsc Engineering . After Graduation started self studying in java programming while working.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Software Engineer",
    location: "Colombo, SL",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind & Backend Development with Express Js",
    icon: React.createElement(FaReact),
    date: "2023 Jan to 2023-June",
  },
  {
    title: "Full Stack Engineer",
    location: "Colombo, SL",
    description:
      "Led the development of a healthcare recruitment platform with advanced candidate search, job management, and client dashboards. Built scalable UI with React, Next.js, TypeScript, and Tailwind CSS, and handled backend integrations with Express.js and PHP. Delivered a complete automated platform with blog system, CRM, and SEO optimization.",
    icon: React.createElement(FaReact),
    date: "2023 June to 2024 November",
  },
  {
    title: "Software Engineer – SA Venture",
    location: "Colombo, SL",
    description:
      "Contributing to the design and development of scalable web applications and admin portals. Involved in UI/UX discussions, code reviews, and feature implementation using React, Next.js, TypeScript, and Tailwind CSS. Collaborating closely with cross-functional teams to deliver robust solutions with API integrations and state management best practices.",
    icon: React.createElement(FaReact),
    date: "2024 November to present",
  }
] as const;

export const projectsData = [
  {
    title: "E-commerce app development",
    description:
      "Designed responsive frontend UI. Integrated user authentication & authorization login/logout functionality.",
    tags: ["React", "MUI", "MySQL"],
    imageUrl: ecommerce1Img,
  },
  {
    title: "Admin dashboard",
    description:
      "Developed responsive  frontend offering real-time insights into order details and product statistics",
    tags: ["React", "TypeScript", "MySQL", "Tailwind"],
    imageUrl: ecommerce2Img,
  },
  {
    title: "Real time weather app",
    description:
      "A public web app for displaying current weather conditions. It shows Show a 5-day weather forecast, Search for weather information by city name.",
    tags: ["React", "Tailwind", "Framer"],
    imageUrl: weatherappImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Socket.io",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Nest Js",
  "Python",
  "Framer Motion",
  "Machine Learning"
] as const;
