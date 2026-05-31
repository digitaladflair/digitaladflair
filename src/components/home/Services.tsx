"use client";

import { services } from "@/constants/services.const";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useId, useRef } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

// Helper to get custom colored container & bullet classes based on the constant iconColor string
const getColorClasses = (iconColor: string) => {
  if (iconColor.includes("blue")) {
    return {
      iconContainer:
        "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30",
      bullet: "text-blue-500 dark:text-blue-400",
      hoverBorder:
        "hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5",
    };
  }
  if (iconColor.includes("emerald")) {
    return {
      iconContainer:
        "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100/50 dark:border-emerald-900/30",
      bullet: "text-emerald-500 dark:text-emerald-400",
      hoverBorder:
        "hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5",
    };
  }
  if (iconColor.includes("indigo")) {
    return {
      iconContainer:
        "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30",
      bullet: "text-indigo-500 dark:text-indigo-400",
      hoverBorder:
        "hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5",
    };
  }
  if (iconColor.includes("amber")) {
    return {
      iconContainer:
        "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-100/50 dark:border-amber-900/30",
      bullet: "text-amber-500 dark:text-amber-400",
      hoverBorder:
        "hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5",
    };
  }
  if (iconColor.includes("violet")) {
    return {
      iconContainer:
        "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border border-violet-100/50 dark:border-violet-900/30",
      bullet: "text-violet-500 dark:text-violet-400",
      hoverBorder:
        "hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/5",
    };
  }
  // Default to red/rose
  return {
    iconContainer:
      "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-100/50 dark:border-red-900/30",
    bullet: "text-red-500 dark:text-red-400",
    hoverBorder:
      "hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/5",
  };
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* <SmoothCursor /> */}
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <span>Our Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">
            What We{" "}
            <span className="text-blue-600 dark:text-blue-400">Offer</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
            We offer a complete suite of IT & digital solutions that cover every
            stage of your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.iconColor);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }
                    : {
                        opacity: 0,
                        y: 30,
                        filter: "blur(10px)",
                      }
                }
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div
                  className={cn(
                    "relative overflow-hidden bg-white/60 dark:bg-zinc-900/60 hover:bg-white/90 dark:hover:bg-zinc-900/90 backdrop-blur-md rounded-2xl p-8 border border-zinc-200/80 dark:border-zinc-800 transition-all duration-300 h-full flex flex-col justify-between hover:shadow-xl",
                    colors.hoverBorder,
                  )}
                >
                  {/* Keep the grid component behind content */}
                  <Grid size={20} />

                  <div className="relative z-10 pointer-events-none flex flex-col h-full justify-between">
                    <div>
                      {/* Colorful Icon container */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border",
                            colors.iconContainer,
                          )}
                        >
                          <service.icon className="w-6 h-6 animate-pulse [animation-duration:3s]" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
                        {service.title}
                      </h3>

                      <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-xs sm:text-sm text-zinc-600 dark:text-zinc-400"
                          >
                            <span
                              className={cn(
                                "mr-2.5 text-base leading-none",
                                colors.bullet,
                              )}
                            >
                              &bull;
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};
