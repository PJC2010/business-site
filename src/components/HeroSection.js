"use client"

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Hero Section Content */}
      <div className="relative min-h-screen flex items-center justify-center pt-16"> {/* Added pt-16 for spacing below fixed header */}
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
            Data Science & Application Development
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">
            Pete Castillo
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          I design, build, and deploy custom data solutions that streamline operations, reveal key insights, and drive measurable results for businesses of all sizes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/#services" className="group px-8 py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 rounded-none text-neutral-900 dark:text-neutral-100 font-light flex items-center gap-2 transition-all duration-300">
              <span>Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="/#contact" className="px-8 py-3 bg-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-none font-light transition-colors duration-300">
              Contact Me
            </Link>
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

export default HeroSection;