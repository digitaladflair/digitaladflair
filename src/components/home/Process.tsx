"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Search, Target, Code, Rocket, HeartHandshake } from "lucide-react";

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Understand your goals, pain points, and expectations",
    },
    {
      icon: Target,
      title: "Strategize",
      description: "Create a tech roadmap tailored for your business",
    },
    {
      icon: Code,
      title: "Develop",
      description: "Design, build, and test solutions with agile precision",
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Go live with full training and documentation",
    },
    {
      icon: HeartHandshake,
      title: "Support",
      description: "Monitor, maintain, and scale your systems",
    },
  ];

  return (
    <section id="process" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            How We Work: Our{" "}
            <span className="text-primary">5-Step Process</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Every project comes with full transparency, timely updates, and zero
            jargon
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }
                    : {
                        opacity: 0,
                        y: 50,
                        filter: "blur(10px)",
                      }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  filter: { duration: 0.4 },
                }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center relative"
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-medium text-foreground mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
