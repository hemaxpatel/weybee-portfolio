// components/Social.jsx
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
];

export default function Social() {
  return (
    <div className="w-full h-full">
      <h2 className="inline-block justify-center text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
        Contact
      </h2>

      <div className="flex flex-wrap justify-center gap-12 mt-12">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white transition-transform transform hover:scale-110 ${link.hoverColor}`}
          >
            <span className="w-8 h-8 md:w-12 md:h-12 inline-block">
              <link.icon className="w-full h-full" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
