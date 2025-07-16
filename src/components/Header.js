"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#about", text: "About" },
    { href: "/#projects", text: "Work" },
    { href: "/#experience", text: "Experience" },
    { href: "/#services", text: "Services" },
    { href: "/#contact", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - links to homepage */}
          <Link href="/" className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            PC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.text} href={link.href} className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm">
                {link.text}
              </a>
            ))}
            <a href="/login" className="px-4 py-2 bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 text-sm">
              Client Portal
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
        <div className="sm:hidden bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
               <a key={link.text} href={link.href} className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm">
                {link.text}
              </a>
            ))}
             <a href="/login" className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm">
              Client Portal
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;