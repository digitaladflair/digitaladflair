"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const CardStack = ({
  children,
  offset = 12,
  scaleFactor = 0.04,
  className,
}: {
  children: React.ReactNode[];
  offset?: number;
  scaleFactor?: number;
  className?: string;
}) => {
  const [order, setOrder] = useState<number[]>(children.map((_, i) => i));

  const handleNext = () => {
    setOrder((prev) => {
      const next = [...prev];
      next.push(next.shift()!); // send top card to back
      return next;
    });
  };

  const handlePrev = () => {
    setOrder((prev) => {
      const next = [...prev];
      next.unshift(next.pop()!); // pull back card to top
      return next;
    });
  };

  return (
    <div className={cn("flex flex-col items-center w-full h-full", className)}>
      {/* Cards stack container */}
      <div className="relative w-full flex-1">
        {order.map((childIndex, stackPosition) => {
          const child = children[childIndex];
          const isTopCard = stackPosition === 0;

          return (
            <motion.div
              key={childIndex}
              className="absolute inset-0 w-full h-full"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: stackPosition * -offset,
                scale: 1 - stackPosition * scaleFactor,
                zIndex: children.length - stackPosition,
                opacity: stackPosition > 2 ? 0 : 1, // Only render top 3 layers for clean UI
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
            >
              <div
                className={cn(
                  "w-full h-full transition-all duration-300",
                  !isTopCard && "pointer-events-none select-none opacity-60 dark:opacity-40"
                )}
              >
                {child}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Manual Navigation Controls */}
      <div className="mt-6 flex items-center justify-center gap-5 relative z-20 shrink-0">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer z-30"
          aria-label="Previous Card"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          {children.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                order[0] === idx
                  ? "w-8 bg-blue-600 dark:bg-blue-500"
                  : "w-2 bg-zinc-300 dark:bg-zinc-700"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer z-30"
          aria-label="Next Card"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};


