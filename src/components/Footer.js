"use client"

import React from 'react';
import { ArrowUp, Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-light text-neutral-900 dark:text-neutral-100">
              Pete Castillo
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Data Scientist | Web Developer
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:your.email@example.com"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                'Data Analysis',
                'Machine Learning',
                'Web Development',
                'Data Engineering',
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-4">
              Get in Touch
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Available for freelance projects and full-time opportunities
              </p>
              <a
                href="mailto:your.email@example.com"
                className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 block transition-colors"
              >
                your.email@example.com
              </a>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Based in Your Location
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {currentYear} Your Name. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-2 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;