"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, Shield, Target, TrendingUp, Users, Gift } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: "10+ Years Industry Experience",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Transparent, Ethical Work",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Target,
      title: "Customized Strategies",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record Across Industries",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Users,
      title: "100+ Happy Clients and Growing",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Gift,
      title: "Free Digital Audit for New Clients",
      color: "from-red-500 to-pink-500",
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
      y: 30,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
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
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose Digital Adflair?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We are not just another agency. We are your digital growth partners.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 h-full">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                  ✔️ {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
