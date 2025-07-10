"use client"

import React, { useState } from 'react';
// 1. Import the Phone icon from lucide-react
import { Mail, MapPin, Send, Linkedin, Github, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok && !data.error) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error?.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    }
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
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-neutral-900 dark:text-neutral-100 mt-1" />
                <div>
                  <h3 className="text-lg font-light text-neutral-900 dark:text-neutral-100 mb-1">
                    Email
                  </h3>
                  <a 
                    href="mailto:castillop92@gmail.com" 
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    castillop92@gmail.com
                  </a>
                </div>
              </div>

              {/* 2. Add the new Phone section here */}
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-neutral-900 dark:text-neutral-100 mt-1" />
                <div>
                  <h3 className="text-lg font-light text-neutral-900 dark:text-neutral-100 mb-1">
                    Phone
                  </h3>
                  <a 
                    href="tel:+18326201850" 
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    (832) 620-1850
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
                    Houston, TX, USA
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
                  href="https://www.linkedin.com/in/petecastillo92/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                </a>
                <a 
                  href="https://github.com/PJC2010" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                >
                  <Github className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100 outline-none transition-colors text-neutral-900 dark:text-neutral-100" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100 outline-none transition-colors text-neutral-900 dark:text-neutral-100" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100 outline-none transition-colors text-neutral-900 dark:text-neutral-100" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100 outline-none transition-colors text-neutral-900 dark:text-neutral-100"></textarea>
            </div>
            <button type="submit" disabled={submissionStatus === 'submitting'} className="group w-full p-4 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
              <span>
                {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </span>
              {submissionStatus !== 'submitting' && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
            {submissionStatus === 'success' && <p className="text-green-600 text-center mt-4">Message sent successfully!</p>}
            {submissionStatus === 'error' && <p className="text-red-600 text-center mt-4">An error occurred. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;