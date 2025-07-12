import React from 'react';
import Image from 'next/image';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content (no changes) */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
                About Me
              </h2>
              <div className="w-16 h-px bg-neutral-900 dark:bg-neutral-100"></div>
            </div>
            
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              As a Data Scientist with deep expertise in full-stack web development, I architect and build comprehensive data-driven solutions. My proficiency lies in translating complex business problems into robust machine learning models and intuitive web applications, managing the entire lifecycle from data ingestion to final deployment.
            </p>
            
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
  I specialize in creating predictive models and interactive data visualizations that empower organizations to make smarter, data-informed decisions. Whether you are a small business needing your first data dashboard or a large enterprise looking to deploy a scalable ML pipeline, I have the expertise to deliver robust and reliable solutions.
</p>

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
          </div>

          {/* Image Area */}
          <div className="relative flex items-center justify-center">
             <div className="relative w-full max-w-sm">
                <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 relative p-8 rounded-full overflow-hidden">
                    <Image
                        src="/headshot.jpeg"
                        alt="A professional headshot"
                        layout="fill"
                        objectFit="revert-layer"
                        // 1. ADD `object-top` to the className
                        className="z-10 object-top"
                    />
                </div>
                {/* 2. Adjusted decorative borders to match the smaller frame */}
                <div className="absolute -bottom-2 -right-2 w-48 h-48 border border-neutral-900 dark:border-neutral-100"></div>
                <div className="absolute -top-2 -left-2 w-24 h-24 border border-neutral-900 dark:border-neutral-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;