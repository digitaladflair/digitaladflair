"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";

export const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91-7030567706",
      href: "tel:+917030567706",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@digitaladflair.com",
      href: "mailto:hello@digitaladflair.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Click to Chat Now",
      href: "#",
      color: "from-green-600 to-green-400",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Monday to Saturday, 9:30 AM – 6:30 PM",
      href: null,
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, India",
      href: "#",
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
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Talk to Our Experts
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We love hearing from you! Whether you have a question, want a quote,
            or need expert advice — we're here to help.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-b-4 transition-all hover:border-b-primary duration-300 h-full overflow-hidden">
                <div className="flex items-center mb-4 gap-4">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="size-5 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800">
                    {item.title}
                  </h3>
                </div>

                {item.href ? (
                  <a
                    href={item.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-300 block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-600">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-8">
            👉 Prefer a callback? Fill out the form below and we'll contact you
            within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
