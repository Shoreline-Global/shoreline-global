'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from '@/lib/animations';

export default function Home() {
  const services = [
    {
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      title: "Inventory Management",
      description: "Real-time inventory tracking and optimization across multiple warehouses and locations."
    },
    {
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Global Logistics",
      description: "Seamless international shipping and freight forwarding with end-to-end visibility."
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Supply Chain Analytics",
      description: "Data-driven insights to optimize costs, improve efficiency, and forecast demand."
    }
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Global Clients" },
    { value: "50+", label: "Countries Served" },
    { value: "99.9%", label: "On-Time Delivery" }
  ];

  const features = [
    "Advanced technology for real-time tracking and reporting",
    "24/7 customer support with dedicated account managers",
    "Scalable solutions that grow with your business",
    "Competitive pricing with transparent cost structures"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Chain Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 overflow-hidden relative">
        {/* Chain Link Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 L25 50 M75 50 L100 50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate-900"/>
            <ellipse cx="35" cy="50" rx="10" ry="15" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate-900"/>
            <ellipse cx="65" cy="50" rx="10" ry="15" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate-900"/>
          </svg>
        </div>

        <motion.div
          className="text-center max-w-4xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            variants={fadeInUp}
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="h-0.5 w-16 bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500"></div>
              <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.75 2L18 12l-4.25 10h-3.5L6 12l4.25-10z"/>
              </svg>
            </motion.div>
            <motion.div
              className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              B
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            variants={fadeInUp}
          >
            Connecting Point A to B
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent block mt-2"> Through Every Link</span>
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            Your trusted partner in global supply chain logistics. We create seamless connections
            from origin to destination, ensuring every link in your supply chain operates flawlessly.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl font-medium text-lg inline-block"
              >
                Start Your Journey →
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="border-2 border-orange-300 text-slate-700 px-8 py-4 rounded-lg hover:border-orange-600 hover:text-orange-600 hover:bg-orange-50 transition-all font-medium text-lg inline-block"
              >
                Explore Our Network →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section - Supply Chain Flow */}
      <section id="services" className="bg-slate-50 py-20 overflow-hidden relative">
        {/* Dotted pathway background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M10 50 L90 50" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" className="text-orange-500"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Supply Chain Journey</h2>
            <p className="text-lg text-slate-600">Three connected stages from origin to destination</p>
          </motion.div>

          {/* Connected Node Layout */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 md:gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative group"
                >
                  {/* Arrow between nodes (hidden on mobile) */}
                  {index < services.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 -translate-y-1/2 z-20"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    >
                      <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.75 2L18 12l-4.25 10h-3.5L6 12l4.25-10z"/>
                      </svg>
                    </motion.div>
                  )}

                  <motion.div
                    className="bg-white p-8 rounded-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-500 h-full relative"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    {/* Node Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
                      {index + 1}
                    </div>

                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300"
                      whileHover={{ rotate: 360, scale: 1.1, transition: { duration: 0.6 } }}
                    >
                      <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </motion.div>

                    <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-center">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Network Metrics */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 py-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        {/* Connection nodes pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="20" cy="50" r="2" fill="#f97316" />
            <circle cx="50" cy="50" r="2" fill="#f59e0b" />
            <circle cx="80" cy="50" r="2" fill="#10b981" />
            <line x1="20" y1="50" x2="50" y2="50" stroke="#f97316" strokeWidth="0.3" />
            <line x1="50" y1="50" x2="80" y2="50" stroke="#10b981" strokeWidth="0.3" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="grid md:grid-cols-4 gap-8 text-center text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }}
                className="relative"
              >
                {/* Connecting dots */}
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500"></div>
                )}

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-300">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section - Flow from left to right */}
      <section id="about" className="py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                <h2 className="text-4xl font-bold text-slate-900">
                  Why Choose Shoreline Global?
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                With over 15 years of experience in global supply chain management,
                we deliver comprehensive solutions that drive efficiency and growth.
              </p>
              <motion.ul
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start group"
                    variants={staggerItem}
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.5 } }}
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <span className="text-slate-700 group-hover:text-orange-600 transition-colors">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden group border-2 border-orange-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              whileHover={{ scale: 1.02, borderColor: '#f97316', transition: { duration: 0.3 } }}
            >
              {/* Animated supply chain path */}
              <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 50 Q25 30, 50 50 T100 50" stroke="#f97316" strokeWidth="2" fill="none" />
                  <circle cx="25" cy="40" r="3" fill="#f97316" />
                  <circle cx="50" cy="50" r="3" fill="#f59e0b" />
                  <circle cx="75" cy="40" r="3" fill="#10b981" />
                </svg>
              </motion.div>
              <div className="text-center text-slate-400 relative z-10">
                [Supply chain network visualization]
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Final Destination */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        {/* Animated delivery path */}
        <div className="absolute inset-0 opacity-10">
          <motion.svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <path
              d="M10 50 L30 50 L40 30 L60 70 L70 50 L90 50"
              stroke="#f97316"
              strokeWidth="0.3"
              fill="none"
              strokeDasharray="2,2"
            />
          </motion.svg>
        </div>

        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="h-0.5 w-16 bg-gradient-to-r from-transparent to-orange-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
            <motion.div
              className="h-0.5 w-16 bg-gradient-to-l from-transparent to-orange-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Let&apos;s connect and build the most efficient path for your business
          </p>
          <motion.div
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg hover:shadow-2xl font-medium text-lg inline-flex items-center gap-2"
            >
              Start the Journey
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.75 2L18 12l-4.25 10h-3.5L6 12l4.25-10z"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
