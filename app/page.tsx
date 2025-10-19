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
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Continuous Vertical Supply Chain Path */}
      <div className="fixed left-8 top-20 bottom-0 w-1 hidden lg:block z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-amber-500 to-emerald-500 opacity-20"></div>
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-orange-500 via-amber-500 to-emerald-500"
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        ></motion.div>
      </div>

      {/* CHECKPOINT: ORIGIN - Journey Starts Here */}
      <section className="relative">
        {/* Origin Checkpoint Marker */}
        <div className="absolute left-8 top-20 hidden lg:flex flex-col items-center z-10">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-4 border-white shadow-xl flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </motion.div>
          <div className="mt-2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            ORIGIN
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="mb-6" variants={fadeInUp}>
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                📍 Pickup Point
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
              variants={fadeInUp}
            >
              Your Supply Chain Journey
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent block mt-2">Starts Here</span>
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl"
              variants={fadeInUp}
            >
              From origin to destination, we manage every link in your supply chain.
              Track your journey through our integrated logistics network.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
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
                  Begin Journey →
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
                  View Route Map →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRANSIT CHECKPOINTS - Services as Journey Stages */}
      <section id="services" className="bg-slate-50 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="inline-block bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚚 In Transit
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Route Checkpoints</h2>
            <p className="text-lg text-slate-600">Your shipment passes through these critical stages</p>
          </motion.div>

          {/* Vertical Flow of Service Checkpoints */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerItem}
              >
                {/* Checkpoint Marker on Path */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-10">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 border-4 border-white shadow-lg flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                  >
                    <span className="text-white font-bold">{index + 1}</span>
                  </motion.div>
                </div>

                <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-amber-500 hover:shadow-2xl transition-all duration-300 ml-0 lg:ml-24"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1, transition: { duration: 0.6 } }}
                    >
                      <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">CHECKPOINT {index + 1}</span>
                      </div>
                      <p className="text-slate-600 text-lg">
                        {service.description}
                      </p>
                    </div>
                    <motion.div
                      className="text-amber-500"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4l-8 8h6v8h4v-8h6z"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKING CHECKPOINT - Performance Metrics */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 py-20 overflow-hidden relative">
        {/* Tracking Checkpoint Marker */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-10">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 border-4 border-white shadow-xl flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </motion.div>
          <div className="mt-2 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            TRACKING
          </div>
        </div>

        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative">
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📊 Performance Metrics
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">Real-Time Tracking Data</h2>
            <p className="text-lg text-slate-300">Monitor your supply chain performance</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* QUALITY CHECK CHECKPOINT - Why Choose Us */}
      <section id="about" className="py-20 overflow-hidden bg-white relative">
        {/* Quality Check Marker */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-10">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 border-4 border-white shadow-xl flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </motion.div>
          <div className="mt-2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            QUALITY CHECK
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✓ Quality Assurance
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Choose Shoreline Global?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl">
              With over 15 years of experience in global supply chain management,
              we deliver comprehensive solutions that drive efficiency and growth.
            </p>
            <motion.ul
              className="grid md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start group bg-slate-50 p-4 rounded-lg border-l-4 border-emerald-500"
                  variants={staggerItem}
                  whileHover={{ x: 10, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mr-3 flex-shrink-0"
                    whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.5 } }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="text-slate-700 group-hover:text-emerald-600 transition-colors font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* CHECKPOINT: DESTINATION - Journey Complete */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 py-20 relative overflow-hidden">
        {/* Destination Checkpoint Marker */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-10">
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 border-4 border-white shadow-2xl flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(16, 185, 129, 0.7)",
                "0 0 0 20px rgba(16, 185, 129, 0)",
              ]
            }}
            // @ts-ignore
            style={{ transition: { duration: 2, repeat: Infinity } }}
          >
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </motion.div>
          <div className="mt-2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            DESTINATION
          </div>
        </div>

        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />

        {/* Success celebration animation */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-emerald-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -60],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎯 Final Stop
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Delivered Successfully!
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Ready to start your own supply chain journey?<br/>
            Let&apos;s build the perfect route for your business.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-5 rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all shadow-2xl hover:shadow-emerald-500/50 font-bold text-lg inline-flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Start Your Journey
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.75 2L18 12l-4.25 10h-3.5L6 12l4.25-10z"/>
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="mt-12 text-emerald-200 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p>✓ Journey Complete • Package Delivered • Customer Satisfied</p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
