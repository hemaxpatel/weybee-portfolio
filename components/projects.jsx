"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProjectCard from "@/components/projects/projectcard";
import projects from "@/components/projects/projects.js";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={cardVariants}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
