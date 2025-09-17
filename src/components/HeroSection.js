"use client"

import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover"
        >
          <source src="https://asqhsitajckytscc.public.blob.vercel-storage.com/hero-video-final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-4 animate-fade-in">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-primary tracking-tight">
          Data-Driven Solutions,
          <br />
          Engineered for Impact.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-secondary">
          I transform complex data into functional, intelligent web applications that drive business growth and operational efficiency.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a href="#projects" className="px-8 py-3 bg-primary text-background font-semibold hover:bg-foreground transition-colors">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 text-primary font-semibold border border-border hover:bg-card transition-colors">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;