"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  CheckCircle,
  Users,
  Award,
  DollarSign,
  MessageCircle,
  Globe,
} from "lucide-react";

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Globe,
      title: "All-in-One IT & Digital Services",
      description: "Complete technology solutions under one roof",
    },
    {
      icon: Users,
      title: "Experts Across 10+ Domains",
      description: "Specialized knowledge in diverse technology areas",
    },
    {
      icon: Award,
      title: "Enterprise-Grade Quality for All Sizes",
      description: "High-quality solutions regardless of business size",
    },
    {
      icon: DollarSign,
      title: "Pay-as-You-Grow Support Models",
      description: "Flexible pricing that scales with your business",
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "Clear updates and timely delivery guaranteed",
    },
    {
      icon: CheckCircle,
      title: "Real-World Solutions",
      description: "Practical solutions designed for actual business needs",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            Why Choose <span className="text-primary">Digital Adflair?</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Choosing the right IT partner can make or break your business
            success. We don&apos;t just build technology — we build solutions
            that drive growth, simplify operations, and accelerate innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-card/70 backdrop-blur-lg rounded-2xl p-8 border border-border hover:border-b-4 hover:border-primary transition-all duration-300 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground tracking-tight">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Whether you&apos;re a startup, a mid-sized company, or an enterprise
            — we adapt to your needs, your goals, and your budget.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
