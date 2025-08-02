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
];

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start min-h-screen bg-black text-white">
        <Intro />

        {/* Main Content Container */}
        <div className="max-w-6xl w-full mx-auto px-4 md:px-6 py-16 space-y-24">
          {/* About Me Section */}
          <section
            className="bg-neutral-900 rounded-2xl shadow-xl p-8 space-y-4"
            id="about"
          >
            <h2 className="text-4xl font-bold">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                About Me
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              I'm <strong className="text-white">Hemax Patel</strong>, a
              passionate full-stack developer and cloud computing enthusiast. I
              love building scalable web apps, solving real-world problems, and
              exploring modern technologies like Next.js, AWS, etc. I’ve worked
              on live projects, participated in tech communities, and
              continuously strive to improve my problem solving skills.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              Currently, I am pursuing my B.Tech in Computer Engineering and
              Engineering at <strong className="text-white">CHARUSAT</strong>. I
              am actively seeking internship opportunities to apply my skills
              and gain hands-on experience in the tech industry.
            </p>
          </section>

          {/* Skills Section */}
          <section className="bg-neutral-900 rounded-2xl shadow-xl p-8 space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                Skills
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-base">
              {[
                {
                  title: "Frontend",
                  items: "HTML, CSS, React, Next.js, Tailwind CSS",
                },
                {
                  title: "Backend",
                  items: "Node.js, Express.js,  Next.js",
                },
                { title: "Database", items: "SQL, MongoDB, PostgreSQL" },
                {
                  title: "Tools & Technologies",
                  items: "Git, GitHub, Postman, AWS, GCP",
                },
                {
                  title: "Languages",
                  items: "JavaScript, TypeScript, Python, C, C++, Java",
                },
                {
                  title: "Soft Skills",
                  items:
                    "Problem-Solving, Communication, Agile, Time Management, Teamwork",
                },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-800 bg-black p-5 shadow-sm hover:shadow-cyan-500/10 transition"
                >
                  <h3 className="font-semibold text-lg text-white mb-2">
                    {skill.title}
                  </h3>
                  <p>{skill.items}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="bg-neutral-900 rounded-2xl shadow-xl p-8 space-y-4">
            <h2 className="text-4xl font-bold">
              <a
                href="https://drive.google.com/drive/folders/1hShzFLcSMQ-GfqDUzD22C3ZT81BOIzmu?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                  Certifications
                </span>
              </a>
            </h2>
            <ul className="list-disc pl-6 text-base text-gray-300 space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Projects Section */}
        <div
          id="projects"
          className="my-20 w-full max-w-6xl px-4 md:px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Projects
            </span>
          </h2>
          <Projects />
        </div>

        {/* Optional: <Contact /> */}
      </div>
    </>
  );
}
