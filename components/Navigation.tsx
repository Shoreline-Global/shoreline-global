'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
  <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm sticky top-0 z-60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
        <Image
           src="/logo.png"
           alt="Shoreline Global"
           width={150}
           height={150}
           className="w-48 h-auto object-contain"
         />
         </Link>

        {/* Right-side container: desktop links on the right, mobile button still visible on small screens */}
        <div className="flex items-center space-x-6">
          {/* Desktop Navigation (moved into right-side container) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-slate-200 hover:text-sky-400 transition-colors font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/services" className="text-slate-200 hover:text-sky-400 transition-colors font-medium relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-slate-200 hover:text-sky-400 transition-colors font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-sky-600"
          >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sky-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/services"
              className="block text-slate-600 hover:text-sky-600 transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-slate-600 hover:text-sky-600 transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-slate-600 hover:text-sky-600 transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Get Started removed from mobile menu */}
          </div>
        </div>
      )}
    </header>
  );
}
