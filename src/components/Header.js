"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#about", text: "About" },
    { href: "/#projects", text: "Work" },
    { href: "/#services", text: "Services" },
    { href: "/blog", text: "Blog" },
    { href: "/#contact", text: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-background/80 backdrop-blur-sm"></div>
      <nav className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 border-b border-border">
            <Link href="/" className="text-xl font-bold text-primary">
              PC
            </Link>
            <div className="hidden sm:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.text} href={link.href} className="text-secondary hover:text-primary text-sm transition-colors">
                  {link.text}
                </a>
              ))}
              <a href="/login" className="px-4 py-2 bg-primary text-background text-sm font-semibold hover:bg-foreground transition-colors">
                Client Portal
              </a>
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-secondary hover:text-primary"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                 <a key={link.text} href={link.href} className="block px-3 py-2 text-secondary hover:text-primary rounded-md">
                  {link.text}
                </a>
              ))}
               <a href="/login" className="block px-3 py-2 text-secondary hover:text-primary rounded-md">
                Client Portal
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;