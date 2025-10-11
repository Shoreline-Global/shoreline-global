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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 overflow-hidden">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            variants={fadeInUp}
          >
            Global Supply Chain
            <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Excellence</span>
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            Streamline your supply chain operations with cutting-edge inventory management
            and logistics solutions. We connect businesses worldwide with reliable,
            efficient supply chain services.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-medium text-lg inline-block"
              >
                Request a Quote
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-lg inline-block"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600">End-to-end supply chain solutions tailored to your business</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-slate-50 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-200 h-full">
                  <motion.div
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                  >
                    <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-slate-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
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
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Choose Shoreline Global?
              </h2>
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
                    className="flex items-start"
                    variants={staggerItem}
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  >
                    <motion.svg
                      className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                    <span className="text-slate-700">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="text-center text-slate-400 relative z-10">
                [Image placeholder: Supply chain visualization or team photo]
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Get in touch with our team today for a free consultation
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-2xl font-medium text-lg inline-block"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
