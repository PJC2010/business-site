"use client"

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Medication Refill Protocol Tool",
      description: "Developed a web application to streamline the VillageMD medication refill protocol. This tool empowers administrative staff to efficiently and accurately approve or deny routine refills by automating the protocol's strict decision-making criteria, reducing processing time and ensuring compliance.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      liveUrl: "https://pjc2010.github.io/VillageRefillProtocolAppV1/", // <-- IMPORTANT: REPLACE
      codeUrl: "https://github.com/PJC2010/VillageRefillProtocolAppV1.git" // <-- IMPORTANT: REPLACE
    },
    {
      title: "Customer Churn Prediction",
      description: "A placeholder project. I developed a machine learning model to predict customer churn, enabling proactive retention strategies and reducing attrition by 15%.",
      tags: ["Python", "Scikit-learn", "Pandas"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Sales Analysis Dashboard",
      description: "Another placeholder project. I designed and built an interactive sales dashboard in Tableau to track key performance indicators and provide actionable insights for the executive team.",
      tags: ["Tableau", "SQL"],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
            My Work
          </h2>
          <div className="w-16 h-px bg-neutral-900 dark:bg-neutral-100 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400">
            A selection of projects that demonstrate my skills in data science and web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 
                         transition-all duration-300 flex flex-col"
            >
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs border border-neutral-300 dark:border-neutral-700 
                               text-neutral-500 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-neutral-200 dark:border-neutral-800 p-4">
                <div className="flex justify-end space-x-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.codeUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                    aria-label="View Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;