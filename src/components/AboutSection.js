import React from 'react';
import { Layout, Share2, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
                About Us
              </h2>
              <div className="w-16 h-px bg-neutral-900 dark:bg-neutral-100"></div>
            </div>
            
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We are a creative agency dedicated to helping small businesses and content creators thrive in the digital age. Our mission is to bridge the gap between creative vision and technical execution, providing the tools and strategies needed to build a lasting online presence.
            </p>
            
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Whether you're looking to launch a high-converting website, grow your social media audience, or automate your business workflows, we provide tailored solutions that deliver real results. We believe in the power of visual storytelling combined with data-driven growth strategies to help you reach your full potential.
            </p>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Core Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Web Design", "Social Media Strategy", "Content Creation",
                  "Brand Identity", "SEO", "UI/UX Design", "Business Automation",
                  "AI Tooling", "Digital Marketing", "Video Editing",
                  "Analytics", "Growth Hacking"
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm border border-neutral-300 dark:border-neutral-700 
                             text-neutral-600 dark:text-neutral-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;