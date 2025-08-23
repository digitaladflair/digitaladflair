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
} from "lucide-react";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

export const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const industries = [
    {
      icon: Building2,
      name: "Fintech & Banking",
      bg: "bg-gradient-to-br from-indigo-100 to-indigo-200",
      iconColor: "text-indigo-600",
    },
    {
      icon: ShoppingCart,
      name: "E-commerce & Retail",
      bg: "bg-gradient-to-br from-pink-100 to-pink-200",
      iconColor: "text-pink-500",
    },
    {
      icon: Heart,
      name: "Healthcare & Wellness",
      bg: "bg-gradient-to-br from-red-100 to-red-200",
      iconColor: "text-red-500",
    },
    {
      icon: GraduationCap,
      name: "EdTech & Training",
      bg: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconColor: "text-blue-500",
    },
    {
      icon: Home,
      name: "Real Estate & Construction",
      bg: "bg-gradient-to-br from-amber-100 to-amber-200",
      iconColor: "text-amber-500",
    },
    {
      icon: Truck,
      name: "Logistics & Transportation",
      bg: "bg-gradient-to-br from-orange-100 to-orange-200",
      iconColor: "text-orange-500",
    },
    {
      icon: Radio,
      name: "Media & Advertising",
      bg: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconColor: "text-purple-500",
    },

    {
      icon: Landmark,
      name: "Government & Public Sector",
      bg: "bg-gradient-to-br from-green-100 to-green-200",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section id="industries" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            🌍 Industries We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            We work with clients across multiple industries, tailoring every
            solution to fit business-specific goals
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <Feature
              key={index}
              title={industry.name}
              icon={
                <industry.icon className={cn("size-7", industry.iconColor)} />
              }
              index={index}
              iconBgColor={industry.bg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  icon,
  iconBgColor,
  index,
}: {
  title: string;
  description?: string;
  icon: React.ReactNode;
  index: number;
  iconBgColor?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className={cn(
          "mb-4 relative z-10 px-5 sm:px-10 text-neutral-600 dark:text-neutral-400"
        )}
      >
        <div
          className={`size-14 bg-gradient-to-br ${iconBgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center `}
        >
          {icon}
        </div>
      </div>
      <div className="text-base sm:text-lg font-bold mb-2 relative z-10 px-5 sm:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
    </div>
  );
};
