"use client"

import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
            Let's Build Something Great
          </h2>
          <div className="w-16 h-px bg-neutral-900 dark:bg-neutral-100 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            We are currently available for new projects and consulting opportunities. If you have a challenge in mind, we'd love to hear about it.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="pc@castilloandco.net"
            className="group w-full sm:w-auto px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-light flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>Send us an Email</span>
          </a>
          
        </div>

        {/* Secondary Social Links */}
        
      </div>
    </section>
  );
};

export default ContactSection;