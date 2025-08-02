"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Img from "../public/me.png";

const titles = [
  "Full Stack Developer",
  "Cloud Enthusiast",
  // "Cloud & DevOps Enthusiast",
  "Problem Solver",
  // "Imaginary Astronaut",
];

export default function Intro() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === titles.length) return;

    if (subIndex === titles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
        setText(titles[index].substring(0, subIndex));
      },
      deleting ? 60 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="hero container w-full min-h-screen flex items-center justify-center px-8 py-8">
      <div className="w-full max-w-screen-xl flex flex-col xl:flex-row justify-center items-center md:px-24 px-12 gap-12">
        {/* Left Section */}
        <div className="left-flex flex-1 text-left z-10" data-aos="fade-right">
          <div className="title-hi mb-4">
            <h1 className="text-4xl md:text-5xl text-white">
              Hello! <span className="animate-wave">👋🏻</span>
            </h1>
          </div>
          <div className="title-heading mb-4">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              <span className="font-normal text-white">I'm</span> Hemax Patel
            </h1>
          </div>
          <div className="con mt-4">
            <span className="text sec-text text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              {text}
            </span>
            <span className="text-white">{blink ? "|" : " "}</span>
          </div>
          <div className="resume-btn mt-6">
            <a
              href="https://drive.google.com/drive/folders/1BN19cZinHWzRGpyarn03PJ4Pv9PYBBM0?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div
          className="right-flex flex-1 justify-center items-center flex z-10 rounded-full"
          data-aos="zoom-in"
        >
          <div className="hero-image -ml-12 ">
            <Image
              src={Img}
              alt="Hemax Patel"
              width={600}
              height={600}
              className="w-full max-w-md object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
