"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiHackerrank, SiLeetcode, SiGooglecloud } from "react-icons/si";

const socialLinks = [
  {
    icon: MdEmail,
    url: "mailto:hemax.work@gmail.com",
    label: "Email",
    hoverColor: "hover:text-red-500",
  },
  {
    icon: FaGithub,
    url: "https://github.com/hemaxpatel",
    label: "GitHub",
    hoverColor: "hover:text-gray-300",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/hemax-patel",
    label: "LinkedIn",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/hemax_patel",
    label: "Instagram",
    hoverColor: "hover:text-pink-400",
  },
  {
    icon: SiHackerrank,
    url: "https://www.hackerrank.com/hemaxpatel",
    label: "HackerRank",
    hoverColor: "hover:text-green-500",
  },
  {
    icon: SiLeetcode,
    url: "https://leetcode.com/hemaxpatel",
    label: "LeetCode",
    hoverColor: "hover:text-yellow-400",
  },
  {
    icon: SiGooglecloud,
    url: "https://www.cloudskillsboost.google/public_profiles/444b90fd-6496-431d-bf77-99290f5912ee",
    label: "Google Cloud",
    hoverColor: "hover:text-blue-400",
  },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative bg-black text-white py-8 px-4 overflow-hidden"
    >
      {/* Content above vortex */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold leading-snug">
          Have a project in mind? <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Let's build something together!
          </span>
        </h2>

        {/* Small Social Icons Row */}
        <div className="flex justify-center gap-4 flex-wrap pt-2">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white text-xs ${link.hoverColor}`}
            >
              <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400 pt-2">© 2025 Hemax Patel</p>
        {/* <p className="text-sm text-gray-400 pt-2">Made with ❤️ by Hemax</p> */}
      </div>
    </footer>
  );
};

export default Footer;
