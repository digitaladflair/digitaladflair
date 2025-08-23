"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Plus, Minus } from "lucide-react";

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "Absolutely. We tailor solutions for all business sizes — whether you're just starting or scaling fast.",
    },
    {
      question: "Can I hire you for just one service like SEO or web design?",
      answer:
        "Yes. You can choose one or multiple services based on your needs.",
    },
    {
      question: "What's your typical turnaround time?",
      answer:
        "It depends on the project scope. Websites take 2–6 weeks, apps may take 1–3 months.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we provide maintenance, updates, and helpdesk support under various packages.",
    },
    {
      question: "How do I get started?",
      answer:
        'Simple. Just click "Get a Free Consultation" or contact us — we\'ll take care of the rest.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/70 backdrop-blur-lg rounded-2xl shadow-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-foreground tracking-tight pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {faq.answer}
                      </p>
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
