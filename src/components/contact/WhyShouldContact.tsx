import React from "react";
import { motion, Variants } from "motion/react";
import { Building, Rocket, Users, Code, Briefcase } from "lucide-react";

export const WhoShouldContact: React.FC = () => {
  const targetAudience = [
    {
      icon: Building,
      title: "Business Owners",
      description: "Looking to increase traffic, leads, or sales",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Want to launch with a strong digital presence",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Users,
      title: "Marketing Teams",
      description: "Needing expert support for SEO or ads",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Developers & Designers",
      description: "Who need backend marketing or tech support",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Briefcase,
      title: "Job Seekers & Interns",
      description: "Who want to work with a creative digital agency",
      color: "from-pink-500 to-rose-500",
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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            💼 Who Should Contact Us?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {targetAudience.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300 h-full">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            If you fall into any of the above, or even if you're just exploring
            your options, don't hesitate to reach out.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
