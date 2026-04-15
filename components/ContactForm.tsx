'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={staggerItem}>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-500 mb-2">
            Full Name *
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-white/30 outline-none transition-all text-white placeholder-zinc-500 shadow-inner"
            placeholder="John Doe"
            whileFocus={{ scale: 1.01 }}
            animate={{
              borderColor: focusedField === 'name' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'
            }}
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-500 mb-2">
            Email Address *
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-white/30 outline-none transition-all text-white placeholder-zinc-500 shadow-inner"
            placeholder="john@company.com"
            whileFocus={{ scale: 1.01 }}
            animate={{
              borderColor: focusedField === 'email' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'
            }}
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <label htmlFor="company" className="block text-sm font-medium text-zinc-500 mb-2">
            Company Name
          </label>
          <motion.input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onFocus={() => setFocusedField('company')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-white/30 outline-none transition-all text-white placeholder-zinc-500 shadow-inner"
            placeholder="Acme Corporation"
            whileFocus={{ scale: 1.01 }}
            animate={{
              borderColor: focusedField === 'company' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'
            }}
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-500 mb-2">
            Phone Number
          </label>
          <motion.input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-white/30 outline-none transition-all text-white placeholder-zinc-500 shadow-inner"
            placeholder="+1 (555) 123-4567"
            whileFocus={{ scale: 1.01 }}
            animate={{
              borderColor: focusedField === 'phone' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'
            }}
          />
        </motion.div>
      </div>

      <motion.div variants={staggerItem}>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-500 mb-2">
          Message *
        </label>
        <motion.textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          rows={6}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-white/30 outline-none transition-all resize-none text-white placeholder-zinc-500 shadow-inner"
          placeholder="Tell us about your operational needs..."
          whileFocus={{ scale: 1.005 }}
          animate={{
            borderColor: focusedField === 'message' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'
          }}
        />
      </motion.div>

      <motion.div variants={staggerItem}>
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          className="w-full md:w-auto bg-white text-black px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-all font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] flex justify-center items-center"
          whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <AnimatePresence mode="wait">
            {status === 'loading' ? (
              <motion.span
                key="loading"
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </motion.span>
            ) : (
              <motion.span
                key="send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Send Message
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            className="bg-zinc-900 border border-zinc-300 text-zinc-500 px-4 py-3 rounded-lg flex items-center"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.svg
              className="w-5 h-5 mr-2 flex-shrink-0 text-zinc-900"
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </motion.svg>
            <span className="text-sm font-light">Thank you for your message! We&apos;ll get back to you shortly.</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            className="bg-zinc-900 border border-red-900/50 text-red-200 px-4 py-3 rounded-lg flex items-center"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.svg
              className="w-5 h-5 mr-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </motion.svg>
            <span className="text-sm font-light">Something went wrong. Please try again.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
