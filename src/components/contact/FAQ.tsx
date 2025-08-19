"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide digital marketing and IT solutions including SEO, Google Ads, social media management, web development, mobile apps, and more.",
    },
    {
      question: "Do you work with businesses outside Bangalore?",
      answer:
        "Yes, we work with clients across India and globally. Our team handles both local and international projects.",
    },
    {
      question: "Can I schedule a face-to-face meeting?",
      answer:
        "Absolutely! Just give us a call or drop us a message, and we'll schedule a time that works for you.",
    },
    {
      question: "Is the first consultation free?",
      answer:
        "Yes, your first consultation is 100% free. We'll discuss your business goals, challenges, and how we can help.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-6 shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            💬 Have Questions? We've Got Answers
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-slate-50 transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 pr-4">
                    {index + 1}. {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-slate-500" />
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-slate-600 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
