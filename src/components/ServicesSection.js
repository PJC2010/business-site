import React from 'react';
import { 
  Layout, 
  Share2, 
  Video, 
  Zap, 
  TrendingUp, 
  Lightbulb,
  Globe,
  Monitor,
  Smartphone,
  Sparkles
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Web Design & Development",
      description: "Custom, high-performing websites designed to convert visitors into loyal customers.",
      features: [
        "Responsive Landing Pages",
        "E-commerce Solutions",
        "SEO Optimization",
        "Professional Portfolios"
      ],
      primaryService: true
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Strategy",
      description: "Data-driven strategies to grow your presence and engage your community across all platforms.",
      features: [
        "Content Planning & Scheduling",
        "Audience Growth Tactics",
        "Platform-Specific Optimization",
        "Engagement Strategies"
      ],
      primaryService: true
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Content Creation & Branding",
      description: "Visual storytelling that resonates with your audience and builds a memorable brand identity.",
      features: [
        "Short-form Video Editing",
        "Brand Identity Design",
        "Creative Direction",
        "Digital Asset Creation"
      ],
      primaryService: true
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & Business Automation",
      description: "Streamline your workflows and save time with intelligent automation and AI-powered tools.",
      features: [
        "Automated Customer Replies",
        "Workflow Optimization",
        "AI Tool Integration",
        "Task Automation"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics & Growth Tracking",
      description: "Clear insights into your performance to help you make informed decisions for scaling.",
      features: [
        "Social Performance Metrics",
        "Conversion Rate Tracking",
        "Audience Insights",
        "Growth Forecasting"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Digital Business Consulting",
      description: "Strategic guidance to help you navigate the digital landscape and scale your influence.",
      features: [
        "Monetization Strategies",
        "Brand Positioning",
        "Product Launch Support",
        "Digital Workflow Audits"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
            Digital Growth Services
          </h2>
          <div className="w-16 h-px bg-neutral-900 dark:bg-neutral-100 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Tailored solutions for small businesses, creators, and digital entrepreneurs looking to scale their impact.
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
            Ready to take your digital presence to the next level?
          </p>
          <button className="px-8 py-3 border border-neutral-300 dark:border-neutral-700 
                           hover:border-neutral-900 dark:hover:border-neutral-100 
                           text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
            Book a Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;