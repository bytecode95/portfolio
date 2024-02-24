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
    title: "Software Engineering Trainee Program",
    location: "Colombo, SL",
    description:
      "I joined as a student trainee for 6 months in ACPT Academy and started learning full stack web development.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Software Engineer",
    location: "Colombo, SL",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MySQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
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
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  "Machine Learning"
] as const;
