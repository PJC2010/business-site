import React from 'react';
import { 
  LineChart, 
  Code, 
  Database, 
  Microscope, 
  Globe, 
  BarChart3,
  Brain,
  TabletSmartphone,
  GitBranch
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Data Analysis & Visualization",
      description: "Transform your raw data into compelling visual stories and actionable insights.",
      features: [
        "Statistical Analysis & Reporting",
        "Interactive Dashboards",
        "Custom Data Visualizations",
        "Business Intelligence Solutions"
      ],
      primaryService: true
    },
    // In your services array within ServicesSection.js
{
  icon: <Brain className="w-8 h-8" />,
  title: "Machine Learning Solutions",
  // UPDATED DESCRIPTION
  description: "From automating routine tasks to uncovering predictive insights, I build and deploy scalable machine learning models that boost efficiency and create a competitive advantage.",
  features: [
    "Predictive Modeling (Churn, Sales Forecasting)", // Make it specific
    "Process Automation & Optimization", // Appeals to large orgs
    "Natural Language Processing (NLP)",
    "Custom AI Tool Development" // Appeals to small businesses
  ]
},
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Application Development",
      description: "Custom web applications that bring your data solutions to life.",
      features: [
        "Full-Stack Development",
        "React Applications",
        "API Development",
        "Database Integration"
      ],
      primaryService: true
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure.",
      features: [
        "ETL Pipeline Development",
        "Database Design",
        "Data Warehousing",
        "Cloud Integration"
      ]
    },
    {
      icon: <TabletSmartphone className="w-8 h-8" />,
      title: "Interactive Dashboards",
      description: "Real-time data monitoring and reporting solutions.",
      features: [
        "Custom KPI Dashboards",
        "Real-time Analytics",
        "Mobile-Responsive Design",
        "User-Friendly Interface"
      ]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Consulting & Training",
      description: "Expert guidance and knowledge transfer.",
      features: [
        "Technical Consultation",
        "Team Training",
        "Best Practices Implementation",
        "Process Optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
            Services Offered
          </h2>
          <div className="w-16 h-px bg-neutral-900 dark:bg-neutral-100 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Comprehensive data science and web development solutions tailored to your needs
          </p>
        </div>

        {/* Primary Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.filter(s => s.primaryService).map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 
                         hover:border-neutral-900 dark:hover:border-neutral-100 transition-all duration-300"
            >
              <div className="text-neutral-900 dark:text-neutral-100 mb-6 
                            group-hover:transform group-hover:translate-y-1 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center">
                    <span className="w-1 h-1 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Secondary Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.filter(s => !s.primaryService).map((service, index) => (
            <div 
              key={index}
              className="p-6 border-l border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 
                         dark:hover:border-neutral-100 transition-colors duration-300"
            >
              <div className="text-neutral-900 dark:text-neutral-100 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-light text-neutral-900 dark:text-neutral-100 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center">
                    <span className="w-1 h-1 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Looking for a custom solution? Let's discuss your specific needs.
          </p>
          <button className="px-8 py-3 border border-neutral-300 dark:border-neutral-700 
                           hover:border-neutral-900 dark:hover:border-neutral-100 
                           text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;