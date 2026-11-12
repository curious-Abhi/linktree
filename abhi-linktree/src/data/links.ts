import type { IconType } from "react-icons";
import { FaYoutube, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGeeksforgeeks, SiLeetcode, SiCodeforces, SiHackerrank } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";

export type LinkItem = {
  label: string;
  href: string;
  icon: IconType;
  /** brand colour used for the hover glow */
  color: string;
  hint?: string;
};

export const profile = {
  name: "Curious Abhi",
  handle: "@curious_abhi",
  image: "/mypic.png", // put your photo at public/mypic.png
  roles: [
    "Computer Science Engineer",
    "Problem Solver",
    "Full-Stack Developer",
    "Content Creator",
  ],
};

export const portfolio: LinkItem = {
  label: "My Portfolio",
  hint: "Projects, skills and experience",
  href: "https://beautiful-lily-99f642.netlify.app/",
  icon: AiOutlineGlobal,
  color: "#7C5CFF",
};

export const socials: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/curious-Abhi", icon: FaGithub, color: "#F0F6FC" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kumarabhi01/", icon: FaLinkedin, color: "#0A8CFF" },
  { label: "YouTube", href: "https://www.youtube.com/@curiousabhi550", icon: FaYoutube, color: "#FF3B3B" },
  { label: "Twitter", href: "https://x.com/Curious_Abhi01", icon: FaXTwitter, color: "#FFFFFF" },
  { label: "Instagram", href: "https://www.instagram.com/curious_abhi.1/", icon: FaInstagram, color: "#F0508C" },
];

export const coding: LinkItem[] = [
  { label: "GeeksforGeeks", hint: "Articles and practice", href: "https://www.geeksforgeeks.org/user/abhishekwbdk/", icon: SiGeeksforgeeks, color: "#2F8D46" },
  { label: "LeetCode", hint: "Daily problem solving", href: "https://leetcode.com/u/abhishekk67781/", icon: SiLeetcode, color: "#FFA116" },
  { label: "Codeforces", hint: "Competitive programming", href: "https://codeforces.com/profile/curiousabhi", icon: SiCodeforces, color: "#3B9BFF" },
  { label: "HackerRank", hint: "Skill certifications", href: "https://www.hackerrank.com/profile/abhishekk67781", icon: SiHackerrank, color: "#2EC866" },
];
