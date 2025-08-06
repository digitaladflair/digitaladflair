"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <footer
      id="contact"
      ref={ref}
      className="bg-gradient-to-br from-foreground via-foreground/90 to-primary text-primary-foreground"
    >
      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Ready to Transform Your{" "}
              <span className="text-primary">Business?</span>
            </h2>
            <p className="text-xl font-light text-primary-foreground/80 mb-12 leading-relaxed">
              Whether you're looking to build from scratch, upgrade your
              systems, or grow your digital reach, Digital Adflair is your go-to
              tech partner.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px hsl(var(--primary) / 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl font-medium text-lg shadow-2xl flex items-center space-x-2"
                style={{
                  background:
                    "linear-gradient(145deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))",
                  boxShadow:
                    "8px 8px 16px rgba(0, 0, 0, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.1)",
                }}
              >
                <Phone size={20} />
                <span>Schedule a Call</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary text-primary rounded-2xl font-medium text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Contact Us</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-primary-foreground/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DA</span>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Digital Adflair
                </span>
              </div>
              <p className="text-primary-foreground/70 font-light leading-relaxed">
                Complete IT & Digital Solutions. We build, scale, and secure
                your digital ecosystem with end-to-end solutions under one
                trusted roof.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-medium mb-4 tracking-tight text-primary-foreground">
                Services
              </h3>
              <ul className="space-y-2 text-primary-foreground/70 font-light">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    AI & Automation
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-medium mb-4 tracking-tight text-primary-foreground">
                Industries
              </h3>
              <ul className="space-y-2 text-primary-foreground/70 font-light">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Fintech
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Real Estate
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-medium mb-4 tracking-tight text-primary-foreground">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-primary-foreground/70">
                  <Phone size={16} />
                  <span className="font-light">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-primary-foreground/70">
                  <Mail size={16} />
                  <span className="font-light">hello@digitaladflair.com</span>
                </div>
                <div className="flex items-start space-x-3 text-primary-foreground/70">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span className="font-light">Mumbai, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <TextHoverEffect text="ADFLAIR" />
      </div>
    </footer>
  );
};
