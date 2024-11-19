"use client"

import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const HeroWithNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              YN
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-8">
              <a href="#work" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm">
                Work
              </a>
              <a href="#about" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm">
                About
              </a>
              <a href="#services" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm">
                Services
              </a>
              <a href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#work" className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm">
                Work
              </a>
              <a href="#about" className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm">
                About
              </a>
              <a href="#services" className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm">
                Services
              </a>
              <a href="#contact" className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Decorative lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 w-px h-32 bg-neutral-200 dark:bg-neutral-800 transform -rotate-45" />
          <div className="absolute right-1/4 bottom-1/4 w-px h-32 bg-neutral-200 dark:bg-neutral-800 transform -rotate-45" />
          <div className="absolute left-1/3 bottom-1/3 w-32 h-px bg-neutral-200 dark:bg-neutral-800" />
          <div className="absolute right-1/3 top-1/3 w-32 h-px bg-neutral-200 dark:bg-neutral-800" />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Web Development & Design
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">
            Your Name
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Creating minimal and functional digital experiences through thoughtful design and development.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-8 py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 rounded-none text-neutral-900 dark:text-neutral-100 font-light flex items-center gap-2 transition-all duration-300">
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-3 bg-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-none font-light transition-colors duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-8 left-8 text-xs text-neutral-400 dark:text-neutral-500 tracking-wider">
          Est. 2024
        </div>
      </div>
    </div>
  );
};

export default HeroWithNav;