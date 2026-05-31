"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { TextAnimate } from "@/components/ui/text-animate";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[85vh] flex items-center justify-center">
      {/* Premium Ambient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <DotPattern
          width={24}
          height={24}
          cx={1}
          cy={1}
          cr={1.2}
          glow={true}
          className="[mask-image:radial-gradient(450px_circle_at_center,white,transparent)] opacity-50 text-blue-500/20"
        />
        {/* Ambient Blue Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none -z-20" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Minimalist Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Your Digital Growth Partner Starts Here
            </span>
          </motion.div>

          {/* Centered Modern Animated Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 max-w-5xl mx-auto mb-8 leading-[1.08] text-center">
            <TextAnimate
              by="word"
              animation="blurInUp"
              as="span"
              className="inline"
              delay={0}
              duration={0.4}
            >
              The best
            </TextAnimate>{" "}
            <TextAnimate
              by="word"
              animation="blurInUp"
              as="span"
              className="inline text-blue-600 dark:text-blue-400"
              delay={0.15}
              duration={0.5}
            >
              development & marketing
            </TextAnimate>{" "}
            <TextAnimate
              by="word"
              animation="blurInUp"
              as="span"
              className="inline"
              delay={0.35}
              duration={0.4}
            >
              agency in the world.
            </TextAnimate>
          </h1>

          {/* Elegant Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            From stunning websites to intelligent enterprise systems, from
            mobile apps to machine learning, Digital Adflair helps you harness
            the power of technology — the simple way.
          </motion.p>

          {/* Modern CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer w-full sm:w-auto px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-xl font-medium text-base transition-colors shadow-md shadow-zinc-950/10 flex items-center justify-center space-x-2"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight
                size={18}
                className="text-zinc-400 dark:text-zinc-500"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer w-full sm:w-auto px-8 py-3.5 border border-zinc-200 dark:border-zinc-800 bg-white hover:bg-zinc-50 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/80 rounded-xl font-medium text-base transition-colors shadow-sm"
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Sleek Inline Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-16 sm:mt-24 flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-8 text-sm text-zinc-500 dark:text-zinc-400 font-medium"
          >
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-base">
                20+
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 text-xs tracking-tight uppercase">
                Projects Delivered
              </span>
            </div>
            <span className="hidden sm:inline text-zinc-200 dark:text-zinc-800">
              |
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-base">
                10+
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 text-xs tracking-tight uppercase">
                Domains Covered
              </span>
            </div>
            <span className="hidden sm:inline text-zinc-200 dark:text-zinc-800">
              |
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-base">
                98%
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 text-xs tracking-tight uppercase">
                Client Satisfaction
              </span>
            </div>
            <span className="hidden sm:inline text-zinc-200 dark:text-zinc-800">
              |
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-base">
                24/7
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 text-xs tracking-tight uppercase">
                Support Available
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
