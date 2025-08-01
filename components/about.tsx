"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">Results-driven Software Engineer</span>{" "}
        with over 2 years of experience in building scalable, user-centric web
        applications using React.js, Next.js, and TypeScript, complemented by
        backend experience in NestJS. Adept at leading frontend architecture,
        implementing responsive UI/UX with Tailwind CSS, and optimizing
        performance in large-scale CRM and real-time communication platforms.
        Strong problem-solver with a track record of delivering high-quality,
        maintainable code in agile environments. Passionate about clean code,
        component reusability, and creating seamless user experiences through
        modern web technologies. After graduating with a degree in My core stack
        is{" "}
        <span className="font-medium">React, Next.js, Node.js, and MySQL</span>.
        I am also familiar with Backend Development with Nest Js.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        watching movies, reading books and playing with my cats. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">system design</span>. I'm
        currently building Financial Portfolio Management(ML Project).
      </p>
    </motion.section>
  );
}
