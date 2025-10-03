import React from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
      
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-indigo-500/20"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
            {personal.title}
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {personal.tagline}
          </p>
          
          <p className="text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed">
            {personal.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <ArrowDown className="h-4 w-4" />
            </button>
            
            <a 
              href="#contact" 
              className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200 flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 transition-colors duration-200"
            >
              <ExternalLink className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-800 transition-colors duration-200"
            >
              <ExternalLink className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;