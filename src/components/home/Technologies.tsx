"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const techCategories = [
    {
      title: "Programming & Frameworks",
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
    },
    {
      title: "Frontend",
      techs: ["React", "Angular", "Vue.js", "TailwindCSS", "Bootstrap"],
    },
    {
      title: "Mobile",
      techs: ["Flutter", "React Native", "Kotlin", "Swift"],
    },
    {
      title: "Cloud & DevOps",
      techs: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions",
      ],
    },
    {
      title: "CMS & E-commerce",
      techs: ["WordPress", "WooCommerce", "Shopify", "Magento"],
    },
    {
      title: "Analytics & AI/ML",
      techs: [
        "Power BI",
        "Tableau",
        "Looker",
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "ChatGPT API",
      ],
    },
  ];

  return (
    <section
      id="technologies"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            Technologies We <span className="text-primary">Use</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            We don&apos;t just follow trends — we use the right stack for the
            job
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
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
                duration: 0.6,
                delay: index * 0.1,
                filter: { duration: 0.4 },
              }}
              className="bg-card/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-border"
            >
              <h3 className="text-xl font-medium text-foreground mb-6 tracking-tight">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + techIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-primary/10 to-primary/20 text-primary rounded-lg text-sm font-medium hover:from-primary/20 hover:to-primary/30 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
