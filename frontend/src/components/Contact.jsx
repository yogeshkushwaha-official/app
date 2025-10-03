import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Google Form submission
      // Replace with your Google Form URL - instructions in comments below
      const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
      
      // Create form data for Google Forms
      const formDataToSubmit = new FormData();
      // Map your form fields to Google Form entry IDs (you'll need to inspect your Google Form to get these)
      // Example mappings - replace these with your actual entry IDs:
      formDataToSubmit.append('entry.NAME_ENTRY_ID', formData.name);
      formDataToSubmit.append('entry.EMAIL_ENTRY_ID', formData.email); 
      formDataToSubmit.append('entry.SUBJECT_ENTRY_ID', formData.subject);
      formDataToSubmit.append('entry.MESSAGE_ENTRY_ID', formData.message);
      
      // Submit to Google Form (note: this might be blocked by CORS in some browsers)
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Forms
        body: formDataToSubmit
      });
      
      // Show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }
  };

  // Alternative: Direct Google Form redirect (more reliable)
  const handleGoogleFormRedirect = () => {
    // Replace with your actual Google Form URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=sf_link';
    window.open(googleFormUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Let's discuss how data analytics can drive your business forward
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Email</div>
                  <div className="text-slate-600">{personal.contact.email}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Phone</div>
                  <div className="text-slate-600">{personal.contact.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Location</div>
                  <div className="text-slate-600">{personal.contact.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="font-semibold text-slate-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href={personal.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={personal.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Download Resume */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-3">Download Resume</h4>
              <p className="text-slate-600 text-sm mb-4">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your project or how I can help..."
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-slate-400 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;