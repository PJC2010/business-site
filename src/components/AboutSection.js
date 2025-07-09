import React from 'react';
import Image from 'next/image'; // 1. Import the Next.js Image component
import { LineChart, Code, Database } from 'lucide-react';

const AboutSection = () => {
  const services = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Data Science & Analytics",
      description: "Transforming raw data into actionable insights through statistical analysis, machine learning, and predictive modeling."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Building responsive web applications and interactive dashboards using modern frameworks and technologies."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Creating efficient data pipelines, ETL processes, and database architectures for scalable solutions."
    }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
                About Me
              </h2>
              <div className="w-16 h-px bg-neutral-900 dark:bg-neutral-100"></div>
            </div>
            
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I'm a data analyst transitioning into data science, with extensive experience in web development. 
              My unique blend of analytical and development skills allows me to create comprehensive data-driven solutions 
              from analysis to deployment.
            </p>
            
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Currently focusing on machine learning applications and interactive data visualizations, 
              I bridge the gap between complex data analysis and user-friendly web applications. 
              My approach combines statistical rigor with practical implementation to deliver 
              impactful solutions.
            </p>

            {/* Skills Section */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Technical Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "R", "SQL", "JavaScript",
                  "React", "Node.js", "Machine Learning",
                  "Data Visualization", "Statistical Analysis",
                  "ETL", "AWS", "Git"
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-neutral-200 dark:border-neutral-700">
              <div>
                <div className="text-2xl font-light text-neutral-900 dark:text-neutral-100">5+</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-light text-neutral-900 dark:text-neutral-100">50+</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-light text-neutral-900 dark:text-neutral-100">3</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Domains Mastered</div>
              </div>
            </div>
          </div>

          {/* Image Area */}
          <div className="relative">
            <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 relative">
              
              <Image
                src="/689A29BE-F31A-4032-BA10-6DFE3A055048.jpeg" // This path is relative to the `public` folder
                alt="A professional headshot"
                layout="fill"
                
                className="z-10 object-position-top" // Make sure image is on top
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 border border-neutral-900 dark:border-neutral-100 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 border border-neutral-900 dark:border-neutral-100 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors duration-300"
            >
              <div className="text-neutral-900 dark:text-neutral-100 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-light text-neutral-900 dark:text-neutral-100 mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;