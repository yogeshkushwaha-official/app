import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;

  // Direct Google Form redirect
  const handleGoogleFormRedirect = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd-naM76KImBFFg5Hxv3itYbAmg1WaA4-Dzs1keimi0HvUd5g/viewform?usp=header';
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

          {/* Google Form Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Send Message via Google Form
            </h3>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Ready to Connect?
                </h4>
                <p className="text-slate-600 leading-relaxed max-w-md mx-auto">
                  Click below to open my contact form where you can share details about your project, 
                  ask questions about data analytics, or just say hello!
                </p>
              </div>
              
              <button
                onClick={handleGoogleFormRedirect}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                <span>Open Contact Form</span>
                <ExternalLink className="h-4 w-4" />
              </button>
              
              <div className="mt-6 text-sm text-slate-500">
                <p>✨ Secure Google Form • Quick Response • Mobile Friendly</p>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-8 p-6 bg-slate-50 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-4">Prefer Direct Contact?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-slate-600">Email me directly at:</span>
                  <a href={`mailto:${personal.contact.email}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    {personal.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  <span className="text-slate-600">Connect on LinkedIn:</span>
                  <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;