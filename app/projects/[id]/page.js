"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/components/index.js";
import Particles from "@/components/ui/particles";

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  const project = projects.find((p) => p.id.toString() === id);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  if (!project) return <div className="text-white p-8">Project not found</div>;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative pt-12 min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        color={"ffffff"}
        refresh
      />

      <div className="relative z-10 px-8 py-10 max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="inline-block text-4xl md:text-5xl font-bold text-transparent mb-2 bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
          {project.name}
        </h1>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          {project.tagline}
        </p>

        {/* Slideshow */}
        <div className="relative w-full mx-auto mb-10">
          <img
            src={project.images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] xl:h-[600px] object-cover rounded-xl shadow-lg border border-gray-700 cursor-pointer transition duration-300"
            onClick={() => setFullscreenImg(currentSlide)}
          />
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
          >
            &#8594;
          </button>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 text-justify mb-8 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.techStack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* GitHub Link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-md"
        >
          View on GitHub
        </a>

        {/* Back to Home */}
        <div className="mt-4">
          <button
            onClick={() => router.push("/#projects")}
            className="px-5 py-2 bg-transparent text-white rounded-lg font-medium shadow-md hover:border"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Fullscreen Image Modal with navigation */}
      {fullscreenImg !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
          onClick={() => setFullscreenImg(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[fullscreenImg]}
              alt="Fullscreen"
              className="w-auto h-auto max-w-[98vw] max-h-[95vh] object-contain rounded-xl shadow-2xl"
            />

            {/* Close Button - top-left & red */}
            <button
              onClick={() => setFullscreenImg(null)}
              className="absolute top-5 right-5 text-white text-4xl font-bold"
            >
              &times;
            </button>

            {/* Prev */}
            <button
              onClick={() =>
                setFullscreenImg(
                  (prev) =>
                    (prev - 1 + project.images.length) % project.images.length
                )
              }
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80"
            >
              &#8592;
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setFullscreenImg((prev) => (prev + 1) % project.images.length)
              }
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
