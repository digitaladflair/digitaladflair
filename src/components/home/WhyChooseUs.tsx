"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Users,
  Layers,
  BarChart3,
  LineChart,
  Coins,
  Target,
  ArrowRight,
  Sparkle,
} from "lucide-react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const features = [
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Digital marketing is constantly evolving, and success requires expertise across multiple channels. Our team consists of specialists with hands-on experience in:",
      bullets: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Performance Marketing & Paid Advertising",
        "Content Marketing",
        "Website Design & Development",
        "Lead Generation",
        "Email Marketing",
      ],
      footer:
        "We continuously adapt to changing market trends, platform updates, and consumer behavior to ensure our clients stay ahead of the competition.",
      color: "amber",
      iconContainerClass:
        "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/30",
      bulletClass: "text-amber-500 dark:text-amber-400",
      cardBorderHover: "hover:border-amber-500/40 hover:shadow-amber-500/5",
      gridClass:
        "stroke-amber-500/10 dark:stroke-amber-500/10 hover:fill-amber-500/5",
    },
    {
      icon: Layers,
      title: "Custom Marketing Plans",
      description:
        "No two businesses face the same challenges or opportunities. Instead of applying a one-size-fits-all approach, we develop tailored marketing strategies based on:",
      bullets: [
        "Business objectives",
        "Industry landscape",
        "Customer behavior",
        "Competitive positioning",
        "Growth targets",
        "Budget considerations",
      ],
      footer:
        "This enables us to build campaigns that align with your business goals and deliver meaningful results.",
      color: "purple",
      iconContainerClass:
        "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/30",
      bulletClass: "text-purple-500 dark:text-purple-400",
      cardBorderHover: "hover:border-purple-500/40 hover:shadow-purple-500/5",
      gridClass:
        "stroke-purple-500/10 dark:stroke-purple-500/10 hover:fill-purple-500/5",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decision Making",
      description:
        "Successful marketing is built on data, not assumptions. Every strategy we implement is supported by performance insights, analytics, and measurable outcomes. We continuously monitor:",
      bullets: [
        "Website traffic and engagement",
        "Lead generation performance",
        "Conversion rates",
        "Search visibility and keyword rankings",
        "Customer behavior patterns",
        "Campaign effectiveness",
      ],
      footer:
        "By leveraging real-time data, we optimize campaigns to maximize performance and return on investment.",
      color: "emerald",
      iconContainerClass:
        "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30",
      bulletClass: "text-emerald-500 dark:text-emerald-400",
      cardBorderHover: "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
      gridClass:
        "stroke-emerald-500/10 dark:stroke-emerald-500/10 hover:fill-emerald-500/5",
    },
    {
      icon: LineChart,
      title: "Transparent Reporting",
      description:
        "We believe clients should have complete visibility into their marketing performance. Our reporting framework provides clear insights into:",
      bullets: [
        "Campaign progress",
        "Traffic growth",
        "Lead acquisition",
        "Advertising performance",
        "Conversion metrics",
        "Return on investment (ROI)",
      ],
      footer:
        "We eliminate unnecessary complexity and present performance data in a clear, actionable format.",
      color: "sky",
      iconContainerClass:
        "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-900/30",
      bulletClass: "text-sky-500 dark:text-sky-400",
      cardBorderHover: "hover:border-sky-500/40 hover:shadow-sky-500/5",
      gridClass:
        "stroke-sky-500/10 dark:stroke-sky-500/10 hover:fill-sky-500/5",
    },
    {
      icon: Coins,
      title: "Affordable Marketing Solutions",
      description:
        "Effective digital marketing should be accessible to businesses at every stage of growth. Digital Adflair offers flexible engagement models designed for:",
      bullets: [
        "Startups",
        "Small Businesses",
        "Growing Companies",
        "Established Enterprises",
      ],
      footer:
        "Whether you're looking to build brand awareness, generate leads, or scale customer acquisition, our solutions are designed to deliver value while maintaining cost efficiency.",
      color: "rose",
      iconContainerClass:
        "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900/30",
      bulletClass: "text-rose-500 dark:text-rose-400",
      cardBorderHover: "hover:border-rose-500/40 hover:shadow-rose-500/5",
      gridClass:
        "stroke-rose-500/10 dark:stroke-rose-500/10 hover:fill-rose-500/5",
    },
    {
      icon: Target,
      title: "Measurable Growth Focus",
      description:
        "Businesses don't need more marketing activities — they need measurable growth. We combine strategy, creativity, and performance marketing to deliver real business impact.",
      bullets: [
        "Qualified lead generation",
        "Sustainable digital presence",
        "Revenue-aligned campaigns",
        "Long-term brand authority",
      ],
      footer:
        "Our focus is simple—deliver marketing that creates real business impact.",
      color: "indigo",
      iconContainerClass:
        "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/30",
      bulletClass: "text-indigo-500 dark:text-indigo-400",
      cardBorderHover: "hover:border-indigo-500/40 hover:shadow-indigo-500/5",
      gridClass:
        "stroke-indigo-500/10 dark:stroke-indigo-500/10 hover:fill-indigo-500/5",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <span>Why Digital Adflair</span>
          </div>

          <h2 className="text-4xl md:text-5xl  text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">
            Why We Are{" "}
            <span className="text-blue-600 dark:text-blue-400">Different</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-5xl mx-auto leading-relaxed font-light">
            Businesses don&apos;t need more marketing activities. They need
            measurable growth. At Digital Adflair, we combine strategy,
            creativity, and performance marketing to help businesses strengthen
            their digital presence, generate qualified leads, and achieve
            sustainable growth. Our focus is simple—deliver marketing that
            creates real business impact.
          </p>
        </motion.div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`relative overflow-hidden bg-white/60 dark:bg-zinc-900/60 hover:bg-white/90 dark:hover:bg-zinc-900/90 backdrop-blur-md rounded-2xl p-8 border border-zinc-200/80 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between ${feature.cardBorderHover}`}
              >
                {/* Interactive Grid Pattern */}
                <InteractiveGridPattern
                  width={36}
                  height={36}
                  className="absolute inset-0 h-full w-full opacity-60 group-hover:opacity-100 transition-opacity z-0"
                  squaresClassName={feature.gridClass}
                />

                <div className="relative z-10 pointer-events-none flex flex-col h-full justify-between">
                  <div>
                    {/* Colorful Icon container */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 border ${feature.iconContainerClass}`}
                    >
                      <feature.icon className="w-6 h-6 animate-pulse [animation-duration:3s]" />
                    </div>

                    <h3 className="text-2xl font-semibold  text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light mb-4">
                      {feature.description}
                    </p>

                    {/* Bullet List */}
                    <ul className="space-y-2 mb-6">
                      {feature.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 "
                        >
                          <span
                            className={`mr-2.5 text-base leading-none ${feature.bulletClass}`}
                          >
                            •
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-zinc-400 dark:text-zinc-500 text-xs leading-relaxed font-light border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
                    {feature.footer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-blue-50/50 dark:bg-blue-950/10 border border-blue-100 dark:border-blue-900/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-left"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl  text-zinc-900 dark:text-zinc-50 mb-3 tracking-tight">
              Ready to grow your business with us?
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Let&apos;s build a marketing strategy that delivers real,
              measurable results for your business — starting today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0 z-10">
            <button className="cursor-pointer w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl  text-sm transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 active:scale-98">
              <span>Get Free Strategy Call</span>
              <ArrowRight size={16} />
            </button>
            <button className="cursor-pointer w-full sm:w-auto px-6 py-3 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 rounded-xl  text-sm transition-all flex items-center justify-center active:scale-98">
              View Our Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
