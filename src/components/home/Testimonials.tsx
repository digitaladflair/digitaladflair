import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      name: "Rakesh M.",
      title: "COO, Logistics Firm",
      content:
        "Digital Adflair transformed our business. From web redesign to ERP integration, everything was smooth and professional.",
      rating: 5,
    },
    {
      name: "Divya S.",
      title: "Founder, D2C Brand",
      content:
        "Our SEO leads increased by 4X in 3 months. Their digital marketing team knows their game.",
      rating: 5,
    },
    {
      name: "Arun V.",
      title: "CEO, Startup Founder",
      content:
        "We didn't just get an app — we got a product that users love. Great job!",
      rating: 5,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            💬 What Our Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Don&apos;t just take our word for it — hear from our satisfied
            clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 30,
                      filter: "blur(10px)",
                    }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                filter: { duration: 0.4 },
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-card/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 h-full relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-card-foreground font-light mb-6 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground tracking-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
