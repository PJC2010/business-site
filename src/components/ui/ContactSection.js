import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
            Let's Work Together
          </h2>
          <div className="w-16 h-px bg-neutral-900 dark:bg-neutral-100 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Have a project in mind? Let's discuss how we can transform your data into actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-neutral-900 dark:text-neutral-100 mt-1" />
                <div>
                  <h3 className="text-lg font-light text-neutral-900 dark:text-neutral-100 mb-1">
                    Email
                  </h3>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-neutral-900 dark:text-neutral-100 mt-1" />
                <div>
                  <h3 className="text-lg font-light text-neutral-900 dark:text-neutral-100 mb-1">
                    Location
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Your City, Country
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-light text-neutral-900 dark:text-neutral-100">
                Connect
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                </a>
                <a 
                  href="https://github.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                >
                  <Github className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                </a>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-light text-neutral-900 dark:text-neutral-100 mb-2">
                Current Availability
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Open for freelance projects and consulting opportunities. 
                Typical response time: 24-48 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 
                           focus:border-neutral-900 dark:focus:border-neutral-100 outline-none transition-colors
                           text-neutral-900 dark:text-neutral-100"
                />
              </div>
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 
                           focus:border-neutral-900 dark:focus:border-neutral-100 outline-none transition-colors
                           text-neutral-900 dark:text-neutral-100"
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="subject"
                className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 
                         focus:border-neutral-900 dark:focus:border-neutral-100 outline-none transition-colors
                         text-neutral-900 dark:text-neutral-100"
              />
            </div>

            <div>
              <label 
                htmlFor="message"
                className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 
                         focus:border-neutral-900 dark:focus:border-neutral-100 outline-none transition-colors
                         text-neutral-900 dark:text-neutral-100"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="group w-full p-4 border border-neutral-300 dark:border-neutral-700 
                       hover:border-neutral-900 dark:hover:border-neutral-100 
                       text-neutral-900 dark:text-neutral-100 
                       transition-colors duration-300 
                       flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;