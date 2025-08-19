"use client";

import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import React from "react";

// const image = `data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000" fill-opacity="0.05"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h40V20H20z"/%3E%3C/g%3E%3C/svg%3E`;

export const OfficeLocation: React.FC = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-0 left-0 w-full h-full bg-repeat`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            📍 Our Office Location
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" rounded-3xl overflow-hidden"
        >
          <div className="flex justify-center">
            <div className="p-8 sm:p-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                {/* <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-6 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div> */}

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                  Digital Adflair – Head Office
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-3 mb-8"
              >
                <p className="text-lg text-slate-600">#123, XYZ Road,</p>
                <p className="text-lg text-slate-600">Near ABC Signal,</p>
                <p className="text-lg text-slate-600">
                  Bangalore – 560001, Karnataka, India
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                >
                  <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  📍 View on Google Maps
                </motion.button>

                <p className="text-slate-500 mt-4 text-sm">
                  We're located in the heart of Bangalore and easily accessible
                  by public and private transport.
                </p>
              </motion.div>
            </div>

            {/* <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 sm:p-12 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-dashed border-slate-300"
              >
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500 text-lg font-medium">
                    Interactive Map
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
                    Map integration would be here
                  </p>
                </div>
              </motion.div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
