"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[url('/blur-mesh.svg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <Sparkles size={16} />
              <span>Your Digital Growth Partner Starts Here</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 tracking-tighter leading-tight">
              <span className="block">Craft. Code.</span>
              <span className="block text-primary">Connect. Convert.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground font-light max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            From stunning websites to intelligent enterprise systems, from
            mobile apps to machine learning, Digital Adflair helps you harness
            the power of technology — the simple way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px hsl(var(--primary) / 0.4)",
                // background:
                //   "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))",
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer group px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl font-medium text-lg shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-border text-foreground rounded-2xl font-medium text-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-card/60 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground font-light">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground font-light">
                  Domains Covered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground font-light">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground font-light">
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
