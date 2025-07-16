"use client"

import React from 'react';
import Image from 'next/image'

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Packeze",
      role: "E-commerce Data Analyst (Part-Time)",
      period: "Dec 2024 - Present",
      logoUrl: "/logos/packeze-logo.png",
      companyUrl: "https://packeze.com",
      description: "Driving growth for an e-commerce startup by leveraging sales data, automating key reports, and building scalable data infrastructure from the ground up.",
      responsibilities: [
        "Engineered automated reporting solutions using Python and Power Automate to track weekly revenue and sales performance.",
        "Drove a 12% increase in company revenue by analyzing sales data and deploying a product recommendation engine.",
        "Launched a social media sentiment analysis program using NLP to guide marketing strategy.",
        "Architected a scalable e-commerce data infrastructure to improve data integrity and reduce report generation time."
      ]
    },
    {
      company: "VillageMD",
      role: "Healthcare Data Analyst",
      logoUrl: "/logos/village-logo.webp",
      companyUrl: "https://villagemd.com",
      period: "Oct 2023 - Present",
      description: "Specializing in transforming complex clinical and operational data into actionable strategies that improve patient outcomes and drive financial performance in a value-based care model.",
      responsibilities: [
        "Increased Medicare STAR ratings contract payouts by 15% by leading Value-Based Care (VBC) data analysis.",
        "Saved an estimated $1.2 million in FY24 by linking patient medication adherence initiatives to reduced hospital admissions.",
        "Developed and maintained the pharmacy department's data dictionary, creating a critical reference guide for leadership.",
        "Slashed manual data processing time by 5 hours daily by engineering automated data pipelines with Python and SQL."
      ]
    },
    {
      company: "VillageMD",
      role: "Supervisor, Clinical Pharmacy Operations",
      logoUrl: "/logos/village-logo.webp",
      companyUrl: "https://villagemd.com",
      period: "Apr 2020 - Oct 2023",
      description: "Led a team of pharmacy professionals, using data analytics to guide strategic decisions, optimize daily operations, and improve team efficiency.",
      responsibilities: [
        "Leveraged data analysis and reporting to guide strategic decisions for a team of six pharmacy professionals.",
        "Analyzed organizational trends and KPIs to drive data-driven improvements in clinical pharmacy processes.",
        "Developed a web-based workflow management tool that increased team efficiency by 30%.",
        "Maintained automated reporting systems to track performance metrics and identify areas for process optimization."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
            Career Journey
          </h2>
          <div className="w-16 h-px bg-neutral-900 dark:bg-neutral-100 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400">
            My professional experience in data, analytics, and development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-0 md:left-1/2 w-0.5 h-full bg-neutral-200 dark:bg-neutral-800" style={{ transform: 'translateX(-50%)' }}></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Dot on the timeline */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 rounded-full" 
                     style={{ transform: 'translateX(-50%)', top: '0.25rem' }}>
                </div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <div className={`p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800
                                  ${index % 2 === 0 ? 'text-left' : 'md:text-left'}`}>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-light text-neutral-900 dark:text-neutral-100">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-md text-neutral-600 dark:text-neutral-300 mb-4">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={exp.logoUrl}
                        alt={`${exp.company} logo`}
                        width={24}
                        height={24}
                        className="rounded-full bg-white" // bg-white ensures visibility on dark backgrounds
                      />
                      <a 
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md font-semibold text-neutral-600 dark:text-neutral-300 hover:underline"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                      {exp.description}
                    </p>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start">
                          <span className="w-1 h-1 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
