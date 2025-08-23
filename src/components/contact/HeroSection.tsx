"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden bg-[url('/blur-mesh.svg')]">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600  to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Contact Us – Digital Adflair
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 mb-8"
          >
            Let's Grow Your Business Together
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
            Looking for a digital marketing expert you can trust? At Digital
            Adflair, we don't just offer services — we offer results. Whether
            you're a small business owner, a growing startup, or an established
            company, our team is here to support your digital journey.
          </p>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-12">
            We specialize in SEO, PPC, Social Media, Website Development, and IT
            Solutions — and it all starts with a simple conversation. Reach out
            today. Let's build something great together!
          </p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-blue-600 to-sky-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
