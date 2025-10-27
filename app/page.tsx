'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, slideInLeft } from '@/lib/animations';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
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
    <div ref={containerRef} className="min-h-screen relative">
      {/* Seamless Background Gradient - Top to Bottom Journey */}
      <div className="fixed inset-0 bg-gradient-to-b from-sky-50 via-sky-40 via-50% to-sky-50 -z-10"></div>

      <Navigation />

      {/* Continuous Vertical Supply Chain Path - fills as you scroll */}
      <div className="fixed left-8 lg:left-12 top-0 bottom-0 w-1 hidden lg:block z-40 pointer-events-none">
        {/* Background track */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-sky-200 via-sky-200 to-sky-200 opacity-30"></div>
        {/* Animated fill */}
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-sky-500 via-sky-500 to-sky-600 shadow-lg origin-top"
          style={{ height: pathHeight }}
        ></motion.div>
      </div>

      {/* CHECKPOINT: ORIGIN - Journey Starts Here */}
      <section className="relative min-h-screen flex items-center">
        {/* Origin Checkpoint Marker */}
        <div className="absolute left-8 lg:left-12 top-32 -translate-x-1/2 hidden lg:flex flex-col items-center z-50">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 border-4 border-white shadow-xl flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          </motion.div>
          <div className="mt-2 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            ORIGIN
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-32 lg:pr-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="mb-6" variants={fadeInUp}>
              <span className="inline-block bg-white/80 backdrop-blur text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                📍 Pickup Point
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6"
              variants={fadeInUp}
            >
              Your Supply Chain Journey
              <span className="bg-gradient-to-r from-sky-600 via-blue-500 to-blue-600 bg-clip-text text-transparent block mt-2">Starts Here</span>
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
                  className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-sky-700 hover:to-sky-600 transition-all shadow-lg hover:shadow-xl font-medium text-lg inline-block"
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
                  className="border-2 border-sky-400 bg-white/50 backdrop-blur text-slate-700 px-8 py-4 rounded-lg hover:border-sky-600 hover:text-sky-600 hover:bg-white/80 transition-all font-medium text-lg inline-block"
                >
                  View Our Services →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRANSIT CHECKPOINTS - Services as Journey Stages */}
      <section id="services" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-32 lg:pr-8">
          <motion.div
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="inline-block bg-white/80 backdrop-blur text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
              🚚 In Transit
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Route Checkpoints</h2>
            <p className="text-lg text-slate-600">Your shipment passes through these critical stages</p>
          </motion.div>

          {/* Vertical Flow of Service Checkpoints */}
          <div className="space-y-12">
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
                <div className="absolute left-8 lg:left-12 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-50">
                  <motion.div
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 border-4 border-white shadow-lg flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                  >
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </motion.div>
                </div>

                <motion.div
                  className="bg-white/70 backdrop-blur p-8 rounded-xl shadow-lg border-l-4 border-sky-500 hover:shadow-2xl hover:bg-white/90 transition-all duration-300 ml-0 lg:ml-28"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-sky-100 to-sky-100 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1, transition: { duration: 0.6 } }}
                    >
                      <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                        <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full">CHECKPOINT {index + 1}</span>
                      </div>
                      <p className="text-slate-600 text-lg">
                        {service.description}
                      </p>
                    </div>
                    <motion.div
                      className="text-sky-500"
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
      <section className="relative py-32 overflow-hidden">
        {/* Tracking Checkpoint Marker */}
        <div className="absolute left-8 lg:left-12 top-32 -translate-x-1/2 hidden lg:flex flex-col items-center z-50">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-yellow-500 border-4 border-white shadow-xl flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </motion.div>
          <div className="mt-2 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            TRACKING
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 relative">
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block bg-white/80 backdrop-blur text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
              📊 Performance Metrics
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Real-Time Tracking Data</h2>
            <p className="text-lg text-slate-600">Monitor your supply chain performance</p>
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
                className="bg-white/70 backdrop-blur rounded-xl p-6 border border-sky-200 shadow-lg hover:shadow-xl hover:bg-white/90"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-sky-600 to-sky-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-sm uppercase tracking-wide font-semibold">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* QUALITY CHECK CHECKPOINT - Why Choose Us */}
      <section id="about" className="py-32 overflow-hidden relative">
        {/* Quality Check Marker */}
        <div className="absolute left-8 lg:left-12 top-32 -translate-x-1/2 hidden lg:flex flex-col items-center z-50">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 border-4 border-white shadow-xl flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
          </motion.div>
          <div className="mt-2 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            QUALITY CHECK
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-32 lg:pr-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <span className="inline-block bg-white/80 backdrop-blur text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
              ✓ Quality Assurance
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Shoreline Global?
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-3xl">
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
                  className="flex items-start group bg-white/70 backdrop-blur p-5 rounded-lg border-l-4 border-sky-500 shadow-md hover:shadow-xl hover:bg-white/90"
                  variants={staggerItem}
                  whileHover={{ x: 10, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center mr-3 flex-shrink-0"
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
                  <span className="text-slate-700 group-hover:text-sky-600 transition-colors font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* CHECKPOINT: DESTINATION - Journey Complete */}
      <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
        {/* Destination Checkpoint Marker */}
        <div className="absolute left-8 lg:left-12 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-50">
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 border-4 border-white shadow-2xl flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </motion.div>
          <div className="mt-2 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            DESTINATION
          </div>
        </div>

        {/* Success celebration animation */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-sky-400 rounded-full"
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
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-24 text-center relative"
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
            <span className="inline-block bg-white/90 backdrop-blur text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              🎯 Final Stop
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Delivered Successfully!
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Ready to start your own supply chain journey?<br/>
            Let&apos;s build the perfect route for your business.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-10 py-5 rounded-lg hover:from-sky-600 hover:to-sky-700 transition-all shadow-2xl hover:shadow-sky-500/50 font-bold text-xl inline-flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
              Start Your Journey
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.75 2L18 12l-4.25 10h-3.5L6 12l4.25-10z"/>
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="mt-12 text-slate-500 text-sm font-medium"
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
