import { Intro } from "@/components";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import React from "react";

const certifications = [
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "Google Cloud Computing Foundations Certificate",
  "AWS Academy Graduate - AWS Academy Cloud Developing",
  "HackerRank Certified Software Engineer",
  "HackerRank Certified Frontend Developer",
  // "Postman API Fundamentals Student Expert",
  // "IBM Node.js & MongoDB: Developing Backend Database Applicatons",
  // "Meta Programming the JavaScript",
  //   ,
];

export default function Home() {
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-start overflow-hidden md:shadow-xl min-h-screen">
        <Intro />
        {/* Content Container */}
        <div
          className="relative z-10 max-w-6xl mx-auto px-8 pt-4 pb-4 space-y-24"
          id="about"
        >
          {/* About Me Section */}
          <section id="about-me" className="space-y-4">
            <h2 className="text-4xl font-bold text-cyan-400">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              I'm <strong>Hemax Patel</strong>, a passionate full-stack
              developer and cloud computing enthusiast. I love building scalable
              web apps, solving real-world problems, and exploring modern
              technologies like Next.js, AWS, etc. I’ve worked on live projects,
              participated in tech communities, and continuously strive to
              improve my problem solving skills.
            </p>
            {/* <p className="text-gray-300 text-lg leading-relaxed text-justify">
            My journey began as an intern working on a real-time event
            management system and has grown into a passion for developing robust
            solutions—from dashboards to alumni networks to cloud-native apps.
            Currently, I’m diving deeper into backend architecture and cloud.
          </p> */}
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="space-y-4">
            <h2 className="text-4xl font-bold text-blue-400">
              <a
                href="https://drive.google.com/drive/folders/1hShzFLcSMQ-GfqDUzD22C3ZT81BOIzmu?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Certifications
              </a>
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Projects */}
        <div
          id="projects"
          className="my-20 z-10 px-4 w-full max-w-6xl justify-center text-center"
        >
          <h2 className="inline-block p-4 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
            Projects
          </h2>
          <Projects />
        </div>
        <Contact />
      </div>
    </>
  );
}
