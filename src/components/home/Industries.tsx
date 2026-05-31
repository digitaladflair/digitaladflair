"use client";

import { cn } from "@/lib/utils";
import {
  Building2,
  GraduationCap,
  Heart,
  Home,
  Landmark,
  Radio,
  ShoppingCart,
  Truck,
  ArrowRight,
} from "lucide-react";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: Building2,
      name: "Fintech & Banking",
      description: "Secure digital payments, transaction monitoring systems, and automated wealth platforms.",
      iconClass: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/30",
      cardBorderHover: "hover:border-indigo-500/40 hover:shadow-indigo-500/5",
      gridClass: "stroke-indigo-500/10 dark:stroke-indigo-500/10 hover:fill-indigo-500/5",
    },
    {
      icon: ShoppingCart,
      name: "E-commerce & Retail",
      description: "High-conversion online storefronts, multi-vendor marketplaces, and POS sync tools.",
      iconClass: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-900/30",
      cardBorderHover: "hover:border-pink-500/40 hover:shadow-pink-500/5",
      gridClass: "stroke-pink-500/10 dark:stroke-pink-500/10 hover:fill-pink-500/5",
    },
    {
      icon: Heart,
      name: "Healthcare & Wellness",
      description: "Patient portal applications, HIPAA-compliant storage, and custom telemedicine platforms.",
      iconClass: "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900/30",
      cardBorderHover: "hover:border-red-500/40 hover:shadow-red-500/5",
      gridClass: "stroke-red-500/10 dark:stroke-red-500/10 hover:fill-red-500/5",
    },
    {
      icon: GraduationCap,
      name: "EdTech & Training",
      description: "Interactive learning portals, virtual classrooms, and enterprise training tools.",
      iconClass: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/30",
      cardBorderHover: "hover:border-blue-500/40 hover:shadow-blue-500/5",
      gridClass: "stroke-blue-500/10 dark:stroke-blue-500/10 hover:fill-blue-500/5",
    },
    {
      icon: Home,
      name: "Real Estate & Construction",
      description: "Property manager software, interactive mapping, and MLS-integrated MLS listings search.",
      iconClass: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/30",
      cardBorderHover: "hover:border-amber-500/40 hover:shadow-amber-500/5",
      gridClass: "stroke-amber-500/10 dark:stroke-amber-500/10 hover:fill-amber-500/5",
    },
    {
      icon: Truck,
      name: "Logistics & Transportation",
      description: "Supply chain tracking platforms, fleet dispatch management, and custom driver logs.",
      iconClass: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-900/30",
      cardBorderHover: "hover:border-orange-500/40 hover:shadow-orange-500/5",
      gridClass: "stroke-orange-500/10 dark:stroke-orange-500/10 hover:fill-orange-500/5",
    },
    {
      icon: Radio,
      name: "Media & Advertising",
      description: "Automated ad management, streaming services, and custom digital asset delivery.",
      iconClass: "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/30",
      cardBorderHover: "hover:border-purple-500/40 hover:shadow-purple-500/5",
      gridClass: "stroke-purple-500/10 dark:stroke-purple-500/10 hover:fill-purple-500/5",
    },
    {
      icon: Landmark,
      name: "Government & Public Sector",
      description: "Secure citizen administration portals, database networks, and public utilities management.",
      iconClass: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30",
      cardBorderHover: "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
      gridClass: "stroke-emerald-500/10 dark:stroke-emerald-500/10 hover:fill-emerald-500/5",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const cardWidth = 320 + 24; // Card width + gap
      const scrollAmount = direction === "left" 
        ? scrollLeft - cardWidth * 2 
        : scrollLeft + cardWidth * 2;
      
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="industries" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <InteractiveGridPattern
          width={40}
          height={40}
          className="text-zinc-300 dark:text-zinc-800 stroke-zinc-200/40 dark:stroke-zinc-800/40"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header flex row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <span>What We Focus On</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Industries We <span className="text-blue-600 dark:text-blue-400">Serve</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mt-4 leading-relaxed font-light">
              We work with clients across multiple industries, tailoring every solution to fit business-specific goals.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-3 shrink-0 self-end md:self-auto"
          >
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors shadow-sm cursor-pointer hover:border-blue-500/50 hover:text-blue-600"
              aria-label="Previous Slide"
            >
              <ArrowRight size={18} className="rotate-180" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors shadow-sm cursor-pointer hover:border-blue-500/50 hover:text-blue-600"
              aria-label="Next Slide"
            >
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Carousel sliding container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-none scroll-smooth snap-x snap-mandatory select-none"
        >
          {industries.map((industry, index) => (
            <div 
              key={index}
              className={cn(
                "min-w-[280px] sm:min-w-[320px] max-w-[320px] snap-start relative group overflow-hidden bg-white/60 dark:bg-zinc-900/60 hover:bg-white/90 dark:hover:bg-zinc-900/90 backdrop-blur-md rounded-2xl p-8 border border-zinc-200/80 dark:border-zinc-800 transition-all duration-300 flex flex-col justify-between h-[280px]",
                industry.cardBorderHover
              )}
            >
              {/* Interactive Grid Pattern */}
              <InteractiveGridPattern
                width={36}
                height={36}
                className="absolute inset-0 h-full w-full opacity-60 group-hover:opacity-100 transition-opacity z-0"
                squaresClassName={industry.gridClass}
              />

              <div className="relative z-10 pointer-events-none flex flex-col h-full justify-between">
                <div>
                  {/* Colorful Accent Icon container */}
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 border",
                    industry.iconClass
                  )}>
                    <industry.icon className="w-6 h-6 animate-pulse [animation-duration:3s]" />
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-3">
                    {industry.name}
                  </h3>

                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light">
                    {industry.description}
                  </p>
                </div>

                {/* Bottom arrow indicator */}
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm space-x-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
                  <span>Learn More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
