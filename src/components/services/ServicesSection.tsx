"use client";

import { services } from "@/constants/services.const";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { Separator } from "../ui/separator";

const ServicesSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-30" />

      {/* Enhanced Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-rose-400/15 to-orange-400/15 rounded-full blur-3xl"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative container mx-auto px-6 py-20">
        {/* Enhanced Header */}
        <div className="w-full bg-[url('/blur-mesh.svg')] min-h-screen">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/50 rounded-full text-sm font-semibold text-blue-700 backdrop-blur-sm">
                ✨ Our Premium Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-semibold mb-8 leading-tight text-primary"
            >
              <span className="block mb-4">Transforming Ideas</span>
              <span>Into Digital Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              From innovative web solutions to comprehensive enterprise systems,
              we craft digital experiences that drive growth, engagement, and
              lasting success for your business.
            </motion.p>
          </div>
        </div>

        {/* Services List with Alternating Layout */}
        <div className="space-y-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard
                service={service}
                index={index}
                isReversed={index % 2 === 1}
              />
              <Separator className="mt-10" />
              {/* Subtle Separator */}
              {/* {index < services.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-24"
                />
              )} */}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-32"
        >
          <div className="bg-white/80 rounded-xl border border-gray-200 p-8 max-w-2xl mx-auto ">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's discuss how we can bring your vision to life with our
              expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl transition-all duration-300"
              >
                Get Started Today
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-200   transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
