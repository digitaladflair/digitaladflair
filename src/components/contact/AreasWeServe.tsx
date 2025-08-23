"use client";
import React from "react";
import { motion, Variants } from "motion/react";
import { Globe, MapPin } from "lucide-react";

export const AreasWeServe: React.FC = () => {
  const areas = [
    "Chennai",
    "Hyderabad",
    "Coimbatore",
    "Delhi",
    "Mumbai",
    "Pune",
    "Dubai",
    "Canada",
    "UK",
    "USA",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-6 shadow-lg">
            <Globe className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Areas We Serve
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Even though we are based in Bangalore, we work with clients across:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
              }}
              className="group"
            >
              <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-slate-100 hover:border-blue-200 transition-all duration-300 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />
                <span className="font-medium text-slate-700 group-hover:text-slate-800 transition-colors duration-300">
                  {area}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            Our remote team structure allows us to serve you wherever you are,
            with the same care and professionalism.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
