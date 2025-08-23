"use client";
import React from "react";
import { motion, Variants } from "motion/react";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export const SocialMedia: React.FC = () => {
  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      color: "from-blue-600 to-blue-500",
      emoji: "🔵",
    },
    {
      icon: Instagram,
      name: "Instagram",
      color: "from-pink-500 to-purple-500",
      emoji: "🟣",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      color: "from-blue-700 to-blue-600",
      emoji: "🟢",
    },
    {
      icon: Youtube,
      name: "YouTube",
      color: "from-red-600 to-red-500",
      emoji: "🔴",
    },
    {
      icon: Twitter,
      name: "Twitter",
      color: "from-blue-400 to-blue-500",
      emoji: "🟡",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h40V20H20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Follow Us on Social Media
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Stay connected with us for updates, tips, and success stories:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href="#"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -10,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div
                className={`bg-gradient-to-r ${social.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-3 min-w-[140px]`}
              >
                <social.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="text-center">
                  {/* <span className="text-2xl mb-1 block">{social.emoji}</span> */}
                  <span className="text-white font-semibold">
                    {social.name}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            ✨ Let's Start Something Amazing
          </h3>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            At Digital Adflair, we believe communication is the first step
            toward digital success. Whether you're ready to start a project or
            just want some advice, we're here and ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Call Us Now
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              WhatsApp Us
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Free Consultation
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            Final Note
          </h3>
          <p className="text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto">
            You're just one message away from transforming your online presence.
            Reach out to Digital Adflair — your trusted team for digital
            marketing, website development, and IT services.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
