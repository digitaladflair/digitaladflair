"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Code2,
  Monitor,
  Smartphone,
  Cloud,
  ShoppingBag,
  Brain,
} from "lucide-react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { CardStack } from "@/components/ui/card-stack";

// TECH LOGOS DICTIONARY (Custom optimized vector SVGs)
const TECH_ICONS: Record<string, React.ReactNode> = {
  HTML5: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#E34F26]" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm3.2 4.6l1.2 13 7.3 2.4 7.3-2.4 1.2-13H4.7zm11.2 4.7H9.2l-.2-2h6.9l-.2-2.2H6.5l.6 6.4h5.6l-.2 2.3-2.5.7-2.5-.7-.2-1.7H5.2l.3 3.8 6.5 1.8 6.5-1.8.8-8.5z"/>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#1572B6]" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm3.2 4.6l1.2 13 7.3 2.4 7.3-2.4 1.2-13H4.7zm11.2 4.7H9.2l-.2-2h6.9l-.2-2.2H6.5l.6 6.4h5.6l-.2 2.3-2.5.7-2.5-.7-.2-1.7H5.2l.3 3.8 6.5 1.8 6.5-1.8.8-8.5z"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#F7DF1E]" fill="currentColor">
      <path d="M0 0h24v24H0V0zm20 18.2c-.3-1-1.3-1.6-2.5-1.6-1.2 0-2 .6-2 1.5 0 .9.5 1.3 1.7 1.8 1.8.7 2.8 1.4 2.8 3.3 0 2.2-1.7 3.5-4.2 3.5-2.2 0-3.6-1-4.2-2.7h2.8c.3.9 1 1.3 1.7 1.3 1 0 1.5-.4 1.5-1.1 0-.7-.4-1.1-1.4-1.5-1.9-.8-3.1-1.6-3.1-3.5 0-2 1.6-3.3 3.8-3.3 2 0 3.3 1 3.9 2.8H20zm-8.8-5h2.8v10.5c0 2-1 3-3.2 3-2 0-3-1-3-2.7h2.8c0 .8.4 1.2 1 1.2.7 0 1-.3 1-1.2V13.2z"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#3178C6]" fill="currentColor">
      <path d="M0 0h24v24H0V0zm21.6 20.3c0 .8-.3 1.4-1 1.9s-1.5.7-2.6.7c-1.3 0-2.3-.4-3-1.1-.7-.8-1-2-1-3.6h2.7c0 .8.2 1.4.5 1.8s.8.5 1.5.5c.6 0 1-.1 1.3-.4s.4-.6.4-1c0-.4-.1-.7-.4-1s-.7-.5-1.4-.7c-1.2-.4-2-.8-2.6-1.3s-.8-1.3-.8-2.4c0-1.2.4-2.1 1.2-2.7S16 11 17.3 11c1.2 0 2.1.3 2.7 1s.9 1.7.9 3h-2.7c0-.7-.1-1.2-.4-1.5s-.6-.4-1.1-.4c-.5 0-.8.1-1 .3s-.3.4-.3.8c0 .3.1.5.3.7s.7.4 1.4.6c1.2.4 2 .8 2.6 1.4s.9 1.4.9 2.5zm-11.4.3h-2.8V13.6H4.6v-2.3h8v2.3H10.2v7z"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse rx="10" ry="4.5" transform="rotate(0 12 12)" cx="12" cy="12" />
      <ellipse rx="10" ry="4.5" transform="rotate(60 12 12)" cx="12" cy="12" />
      <ellipse rx="10" ry="4.5" transform="rotate(120 12 12)" cx="12" cy="12" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-zinc-900 dark:text-zinc-50" fill="currentColor">
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm5.662 17.724-4.86-6.662V18h-1.574V7.5h1.574l4.57 6.273V7.5h1.573V18c0-.074-.567-.09-1.283-.276z"/>
    </svg>
  ),
  TailwindCSS: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#38BDF8]" fill="currentColor">
      <path d="M12 6.002C12.002 6.002 6 12 0 12c6 0 6 5.998 12 5.998 0 0 6-5.998 12-5.998-6 0-6-5.996-12-6zm0-6C12.002 0.002 6 6 0 6c6 0 6 5.998 12 5.998 0 0 6-5.998 12-5.998-6 0-6-5.996-12-6z"/>
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#339933]" fill="currentColor">
      <path d="M12 0L1.7 5.9v12.2L12 24l10.3-5.9V5.9L12 0zm-1.5 19.3h-3v-6.5h3v6.5zm5.5-2.5c0 1.5-.8 2.5-2.5 2.5s-2.5-1-2.5-2.5v-3.5h3v3.5c0 .3.2.5.5.5s.5-.2.5-.5V12.8h3v4z"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#3776AB]" fill="currentColor">
      <path d="M11.9 0C5.3 0 5.4 5.7 5.4 5.7h2.3s-.1-2.2 2-2.2h4.5s2.2-.1 2.2 2V9h-6.7S7.5 9 7.5 11.2v4.5s-.1 2.2 2.2 2.2h1.5v-2.2c0-1.5.8-2.2 2.2-2.2H18s2.2 0 2.2-2.2v-4.5s0-5.7-6.5-5.7L11.9 0zm-2.2 2.2c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1zm6.7 13.5c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#2496ED]" fill="currentColor">
      <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.902c0-.102-.084-.186-.186-.186h-2.119c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm-2.95 0h2.118c.103 0 .187-.083.187-.185V8.902c0-.102-.084-.186-.187-.186h-2.118c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm-2.935 0h2.119c.102 0 .185-.083.185-.185V8.902c0-.102-.083-.186-.185-.186H8.098c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm-2.964 0h2.119c.102 0 .185-.083.185-.185V8.902c0-.102-.083-.186-.185-.186H5.134c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm2.964-2.95h2.119c.102 0 .185-.083.185-.185V5.952c0-.103-.083-.186-.185-.186H8.098c-.103 0-.186.083-.186.186v1.99c0 .102.083.185.186.185zm-2.964 0h2.119c.102 0 .185-.083.185-.185V5.952c0-.103-.083-.186-.185-.186H5.134c-.103 0-.186.083-.186.186v1.99c0 .102.083.185.186.185zm5.914 0h2.119c.102 0 .186-.083.186-.185V5.952c0-.103-.084-.186-.186-.186h-2.119c-.103 0-.186.083-.186.186v1.99c0 .102.083.185.186.185zm-8.878 5.9h2.119c.102 0 .185-.083.185-.185v-1.99c0-.103-.083-.186-.185-.186H2.17c-.103 0-.186.083-.186.186v1.99c0 .102.083.185.186.185zm12.155.021a8.125 8.125 0 0 0 .502-3.056c0-2.684-1.854-4.862-4.137-4.862a4.4 4.4 0 0 0-.256.008c-.288.026-.407.241-.334.484.553 1.83.616 3.864-.171 5.344-.127.24-.047.502.221.502H14.28z"/>
    </svg>
  ),
  WordPress: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#21759B]" fill="currentColor">
      <path d="M12.158 12.786l-2.698 7.84c1.785.522 3.658.525 5.44-.002l-2.742-7.838zm-4.32-.988c.84 0 1.428-.86 1.428-1.57 0-.61-.395-1.184-.815-1.78-.395-.562-.816-1.16-.816-1.737 0-.585.45-.96.96-.96.345 0 .615.15.825.405l-.015.03c-.27.3-.435.75-.435 1.155 0 .69.57 1.395 1.17 2.19.45.6 1.05 1.41 1.05 2.505 0 1.05-.66 2.37-1.635 3.3l-1.738-4.943zm8.974.004c.975-.93 1.634-2.25 1.634-3.3 0-1.095-.6-1.905-1.05-2.505-.6-.795-1.17-1.5-1.17-2.19 0-.405.165-.855.435-1.155L16.65 3c-.51-.255-.78-.405-1.125-.405-.51 0-.96.375-.96.96 0 .577.42 1.175.815 1.737.42.596.815 1.17.815 1.78 0 .71-.588 1.57-1.428 1.57L13.03 3.67c3.96-1.5 8.44.383 10.15 4.22 1.71 3.837-.1 8.35-4.04 10.038l-2.327-6.14zm-14.88 4.31A11.87 11.87 0 0 1 .407 10.74l3.15.023 2.38 6.945-3.51-1.597z"/>
    </svg>
  ),
  Shopify: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#96BF48]" fill="currentColor">
      <path d="M19.5 7.15c-.4-.5-1-.7-1.6-.7h-.7V4.3c0-1-.8-1.8-1.8-1.8H8.6c-1 0-1.8.8-1.8 1.8v2.15H6.1c-.6 0-1.2.2-1.6.7L2.15 11c-.3.4-.5.9-.5 1.4v7c0 1.2.98 2.1 2.15 2.1h16.4c1.2 0 2.1-.9 2.1-2.1v-7c0-.5-.2-1-.5-1.4L19.5 7.15zM8.6 4.3h6.8v2.15H8.6V4.3zm6.65 14.65c-.75 0-1.35-.6-1.35-1.35s.6-1.35 1.35-1.35S16.6 16.85 16.6 17.6s-.6 1.35-1.35 1.35z"/>
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#10A37F]" fill="currentColor">
      <path d="M21.3 11.2a4.4 4.4 0 0 0-2.3-3.6 4.5 4.5 0 0 0-5.7-1.1c-.6.3-1.1.8-1.5 1.3a4.5 4.5 0 0 0-5.7-1.1c-.9.5-1.7 1.3-2.2 2.2a4.5 4.5 0 0 0-1.9 5.6A4.5 4.5 0 0 0 4 20.1a4.5 4.5 0 0 0 5.7 1.1c.6-.3 1.1-.8 1.5-1.3a4.5 4.5 0 0 0 5.7 1.1c.9-.5 1.7-1.3 2.2-2.2a4.5 4.5 0 0 0 1.9-5.6c.1-1.1-.2-2.2-.7-3zm-9.3 8.3a2.3 2.3 0 0 1-2.3-2.3v-.8l3.1-1.8 2.3 1.3V18c.1.9-.6 1.5-1.5 1.5zm-5-3.3a2.3 2.3 0 0 1-1.1-3l.7-.4 3.1 1.8V17c-.5.8-1.5 1.1-2.4.6zM6 10.9a2.3 2.3 0 0 1 1.2-3l.7.4V12L4.8 13.8c-.8-.5-1.1-1.5-.6-2.4zm8.3-4.6a2.3 2.3 0 0 1 2.3 2.3v.8l-3.1 1.8-2.3-1.3V6.8c-.1-.9.6-1.5 1.5-1.5zm5 3.3a2.3 2.3 0 0 1 1.1 3l-.7.4-3.1-1.8V9.1c.5-.8 1.5-1.1 2.4-.6zm.7 5.8a2.3 2.3 0 0 1-1.2 3l-.7-.4V14l3.1-1.8c.8.5 1.1 1.5.6 2.4z"/>
    </svg>
  ),
  Vue: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#4FC08D]" fill="currentColor">
      <path d="M24 1.3L12 22.2.1 1.3h4.6L12 14.8 19.3 1.3zM18 1.3L12 11.6 6 1.3H1.8L12 18.9 22.2 1.3z"/>
    </svg>
  ),
  Angular: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#DD0031]" fill="currentColor">
      <path d="M12 0L1.4 3.8l1.6 14L12 24l9-6.2 1.6-14zM12 3.6l6.8 11.9h-2.3L12 7.7l-4.5 7.8H5.2z"/>
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#02569B]" fill="currentColor">
      <path d="M14.3 0L0 14.3 4.8 19 24 0zM14.3 9.5L4.8 19l4.7 4.7L24 9.5z"/>
    </svg>
  ),
  Kotlin: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#7F52FF]" fill="currentColor">
      <path d="M24 24H0V0h24L12 12z"/>
    </svg>
  ),
  Swift: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#F05138]" fill="currentColor">
      <path d="M24 16.4c-2.3-2.5-5.9-4.8-10.1-5.7 4.1-.7 8.3 1.2 10.1 2.3 0 0-4-6.4-10-8 2.2-.2 4.4.5 6 .9C13 4 5 7.4 2 13c3.4-3.5 8.1-4.8 12-.4-5.2-.2-9.7 2.6-11.4 4.8 2.4-2.5 5.8-3.7 9.4-2.2-6.5.6-10 5.4-10 5.4s4.4-4 10-4.3c-4 .8-6.8 3.5-7.8 5.3 4.2-2.7 9.8-3.8 14.5-2.2 0 0-2.3-1.6-4.7-1.4 3 .2 5.8 2 8 3.4z"/>
    </svg>
  ),
  Laravel: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#FF2D20]" fill="currentColor">
      <path d="M5.4 0L1.8 1.8v18.4L5.4 22V0zm13.2 0l-3.6 1.8v18.4l3.6 1.8V0zM12 3.6L8.4 5.4v13.2l3.6 1.8V3.6z"/>
    </svg>
  ),
  Kubernetes: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#326CE5]" fill="currentColor">
      <path d="M12 0L2.1 4.1l2.4 12L12 24l7.5-7.9 2.4-12zM12 5.1c3.8 0 6.9 3.1 6.9 6.9s-3.1 6.9-6.9 6.9-6.9-3.1-6.9-6.9 3.1-6.9 6.9-6.9z"/>
    </svg>
  ),
};

// Fallback Tech Tag Icon renderer
const TechIcon = ({ name }: { name: string }) => {
  const cleanName = name.replace("5", "").replace("3", "").trim();
  const icon = TECH_ICONS[name] || TECH_ICONS[cleanName];
  if (icon) {
    return <span className="mr-1.5 flex items-center justify-center shrink-0">{icon}</span>;
  }
  return (
    <span className="mr-1.5 flex items-center justify-center shrink-0 text-zinc-400 dark:text-zinc-500">
      <Code2 size={12} />
    </span>
  );
};

interface TechCategory {
  title: string;
  icon: React.ComponentType<any>;
  summary: string;
  techs: string[];
  iconContainerClass: string;
  cardBorderHover: string;
  gridClass: string;
  tagClass: string;
}

const TechCard = ({ category }: { category: TechCategory }) => {
  return (
    <div
      className={`w-full h-full relative overflow-hidden bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-zinc-200/80 dark:border-zinc-800 shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-stretch md:items-center transition-colors duration-300 ${category.cardBorderHover}`}
    >
      {/* Interactive Grid Pattern */}
      <InteractiveGridPattern
        width={36}
        height={36}
        className="absolute inset-0 h-full w-full opacity-60 group-hover:opacity-100 transition-opacity z-0"
        squaresClassName={category.gridClass}
      />

      {/* Left Side: Summary & Description */}
      <div className="relative z-10 pointer-events-none md:w-[52%] flex flex-col justify-center">
        {/* Colorful Icon Container */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 border ${category.iconContainerClass}`}
        >
          <category.icon className="w-6 h-6 animate-pulse [animation-duration:3s]" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-2 md:mb-4">
          {category.title}
        </h3>

        <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-light">
          {category.summary}
        </p>
      </div>

      {/* Right Side: Technology Tags with custom icons */}
      <div className="relative z-10 pointer-events-none md:w-[48%] flex flex-wrap gap-2 md:gap-2.5 md:justify-end items-center">
        {category.techs.map((tech, techIndex) => (
          <span
            key={techIndex}
            className={`inline-flex items-center px-3 py-1.5 border rounded-xl text-2xs sm:text-xs md:text-sm font-semibold tracking-wide transition-all duration-200 cursor-default pointer-events-auto ${category.tagClass}`}
          >
            <TechIcon name={tech} />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const techCategories: TechCategory[] = [
  {
    title: "Programming & Frameworks",
    icon: Code2,
    summary:
      "We build the core engine of your software using secure, scalable, and high-performance backend programming languages and frameworks.",
    techs: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "PHP",
      "Python",
      "Java",
      ".NET",
      "Node.js",
      "Laravel",
      "Django",
      "Spring Boot",
    ],
    iconContainerClass:
      "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/30",
    cardBorderHover: "hover:border-amber-500/40 hover:shadow-amber-500/5",
    gridClass:
      "stroke-amber-500/10 dark:stroke-amber-500/10 hover:fill-amber-500/5",
    tagClass:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20",
  },
  {
    title: "Frontend",
    icon: Monitor,
    summary:
      "Stunning, responsive user interfaces built with modern JavaScript frameworks for lightning-fast loads and intuitive user experiences.",
    techs: [
      "React",
      "Next.js",
      "Angular",
      "Vue",
      "TailwindCSS",
      "Bootstrap",
    ],
    iconContainerClass:
      "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/30",
    cardBorderHover: "hover:border-blue-500/40 hover:shadow-blue-500/5",
    gridClass:
      "stroke-blue-500/10 dark:stroke-blue-500/10 hover:fill-blue-500/5",
    tagClass:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 hover:bg-blue-500/20",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    summary:
      "Native and cross-platform mobile apps for Android and iOS, optimized for smooth performance and native-feel interactions.",
    techs: ["Flutter", "React Native", "Kotlin", "Swift", "iOS", "Android"],
    iconContainerClass:
      "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30",
    cardBorderHover: "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
    gridClass:
      "stroke-emerald-500/10 dark:stroke-emerald-500/10 hover:fill-emerald-500/5",
    tagClass:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    summary:
      "Scalable cloud infrastructures, automated deployment pipelines, and secure continuous integration setups.",
    techs: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
    ],
    iconContainerClass:
      "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/30",
    cardBorderHover: "hover:border-indigo-500/40 hover:shadow-indigo-500/5",
    gridClass:
      "stroke-indigo-500/10 dark:stroke-indigo-500/10 hover:fill-indigo-500/5",
    tagClass:
      "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20",
  },
  {
    title: "CMS & E-commerce",
    icon: ShoppingBag,
    summary:
      "Robust online stores and content management systems designed for high sales conversion, easy editing, and fast checkout.",
    techs: ["WordPress", "WooCommerce", "Shopify", "Magento"],
    iconContainerClass:
      "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900/30",
    cardBorderHover: "hover:border-rose-500/40 hover:shadow-rose-500/5",
    gridClass:
      "stroke-rose-500/10 dark:stroke-rose-500/10 hover:fill-rose-500/5",
    tagClass:
      "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20 hover:bg-rose-500/20",
  },
  {
    title: "Analytics & AI/ML",
    icon: Brain,
    summary:
      "Intelligent analytics dashboards and AI integrations using LLMs and machine learning pipelines to automate workflows.",
    techs: [
      "Power BI",
      "Tableau",
      "Looker",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "ChatGPT API",
    ],
    iconContainerClass:
      "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/30",
    cardBorderHover: "hover:border-purple-500/40 hover:shadow-purple-500/5",
    gridClass:
      "stroke-purple-500/10 dark:stroke-purple-500/10 hover:fill-purple-500/5",
    tagClass:
      "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 hover:bg-purple-500/20",
  },
];

export const Technologies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="technologies"
      ref={containerRef}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background w-full"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Stack Overview</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
            Technologies We <span className="text-blue-600 dark:text-blue-400">Use</span>
          </h2>
          <p className="text-sm md:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            We don&apos;t just follow trends — we use the right stack for the job.
          </p>
        </motion.div>

        {/* Card Stack list container */}
        <div className="w-full max-w-5xl h-[640px] xs:h-[580px] sm:h-[520px] md:h-[440px] lg:h-[400px] xl:h-[360px]">
          <CardStack className="h-full">
            {techCategories.map((category, index) => (
              <TechCard key={index} category={category} />
            ))}
          </CardStack>
        </div>
      </div>
    </section>
  );
};





