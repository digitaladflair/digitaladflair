'use client';

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Services Data
const services = [
  {
    icon: '🚀',
    title: 'Digital Marketing',
    points: [
      'SEO (Search Engine Optimization)',
      'Google & Meta Ads (PPC)',
      'Social Media Marketing',
      'Content Strategy & Blogging',
      'Email & WhatsApp Campaigns',
    ],
  },
  {
    icon: '💻',
    title: 'Website Development',
    points: [
      'Custom Websites',
      'E-Commerce Sites',
      'Business & Portfolio Websites',
      'Landing Pages & UI/UX Redesign',
    ],
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    points: [
      'Android & iOS Development',
      'React Native / Flutter Apps',
      'App Testing & Publishing',
    ],
  },
  {
    icon: '🌐',
    title: 'Web Applications',
    points: [
      'Custom Business Portals',
      'SaaS Platforms',
      'CRM & ERP Systems',
      'Admin Dashboards',
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    points: [
      'AWS, Azure, GCP Setup',
      'Cloud Migrations',
      'CI/CD Pipeline & Server Management',
    ],
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    points: [
      'Website & Campaign Analytics',
      'Business Intelligence Dashboards',
      'Performance Reports & Tracking',
    ],
  },
  {
    icon: '🧠',
    title: 'SAP & Enterprise IT',
    points: [
      'SAP Consulting & Implementation',
      'ERP Development & Integration',
      'Workflow Automation',
    ],
  },
];

function AnimatedServiceBox({ icon, title, points, delay }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: 'spring', bounce: 0.3, duration: 0.8, delay }}
      whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(124, 58, 237, 0.4)' }}
      className="relative bg-gradient-to-tr from-purple-50 to-indigo-50 rounded-3xl p-8 cursor-pointer select-none overflow-hidden"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-purple-300 rounded-full opacity-30 blur-xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-[-40px] left-[-40px] w-32 h-32 bg-indigo-300 rounded-full opacity-20 blur-2xl"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      />
      <motion.div
        whileHover={{ scale: 1.3, rotate: 15 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="text-6xl mb-6 text-purple-700"
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-4 text-purple-900">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}

const industries = [
  { icon: '🛒', label: 'E-commerce' },
  { icon: '🏘️', label: 'Real Estate' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🎓', label: 'Education' },
  { icon: '⚖️', label: 'Legal' },
  { icon: '🖥️', label: 'SaaS' },
  { icon: '💰', label: 'FinTech' },
  { icon: '✈️', label: 'Travel' },
  { icon: '🏨', label: 'Hospitality' },
  { icon: '🚗', label: 'Automotive' },
  { icon: '🏪', label: 'Local Businesses' },
];

function IndustriesSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-gray-900"
        >
          🎯 Industries We Serve
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {industries.map(({ icon, label }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.15, color: '#7c3aed' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center cursor-default select-none text-gray-700"
            >
              <div className="text-5xl mb-2">{icon}</div>
              <span className="text-lg font-semibold">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-white w-full">
      <Head>
        <title>All-in-One Digital Growth Services | SEO, Ads, Website Design & More</title>
        <meta name="description" content="Explore result-driven digital marketing, SEO, web design, and IT services. Achieve better rankings, more leads, and faster business growth with our experts." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.digitaladflair.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[600px] bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="/vectors/hero-pattern.svg"
          alt="Hero Vector Pattern"
          fill
          className="object-cover opacity-10 absolute top-0 left-0 -z-10"
          priority
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 max-w-4xl"
        >
          Complete Digital & IT Solutions Under One Roof
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-2xl max-w-3xl mb-10"
        >
          From marketing to development — everything your business needs to grow, delivered by experts.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white text-purple-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300"
        >
          👉 Let’s Talk
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Your Business, Our Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-center max-w-3xl mx-auto text-gray-700 mb-16"
        >
          At Digital Adflair, we blend creativity, strategy, and technology to deliver full-stack digital and IT services that drive growth.
          Whether you’re launching a new brand, scaling your business, or optimizing operations — we’re here to help.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map(({ icon, title, points }, idx) => (
            <AnimatedServiceBox
              key={idx}
              icon={icon}
              title={title}
              points={points}
              delay={idx * 0.2}
            />
          ))}
        </div>
      </section>

      <IndustriesSection />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          💬 Let’s Build Your Digital Advantage
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg max-w-2xl mx-auto mb-8"
        >
          We’re more than just a service provider — we’re your growth partner. Ready to transform your digital presence?
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-purple-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300"
        >
          👉 Get a Free Quote
        </motion.button>
      </section>
    </div>
  );
}