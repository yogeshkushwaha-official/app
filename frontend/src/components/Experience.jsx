import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Experience = () => {
  const { experience, education, certifications } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Professional journey combining hands-on experience with continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience & Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-blue-600" />
              Professional Experience
            </h3>
            
            {/* Experience Items */}
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-slate-200"></div>
                  
                  <div className="flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-lg font-semibold text-slate-800">
                          {exp.title}
                        </h4>
                        <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="text-blue-600 font-medium mb-2">{exp.company}</div>
                      
                      <div className="flex items-center text-slate-500 text-sm mb-4 space-x-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.description.map((item, index) => (
                          <li key={index} className="text-slate-600 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Education */}
              {education.map((edu) => (
                <div key={edu.id} className="relative">
                  <div className="flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-indigo-600" />
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-1">
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">
                        {edu.degree}
                      </h4>
                      <div className="text-indigo-600 font-medium mb-2">{edu.institution}</div>
                      
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-slate-500 text-sm mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.duration}
                        </div>
                      </div>
                      
                      <div className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-medium inline-block">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-purple-600" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-slate-800 flex-1">
                      {cert.title}
                    </h4>
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center ml-4">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  
                  <div className="text-purple-600 font-medium mb-2">{cert.issuer}</div>
                  
                  <div className="flex items-center text-slate-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            {/* View All Certificates */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                View All Certificates
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                See my complete certification journey and recent achievements on LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/yogeshkushwaha-offcial/recent-activity/all/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" />
                LinkedIn Certificates
              </a>
            </div>

            {/* Achievement Stats */}
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 text-center">
                Key Achievements
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">25%</div>
                  <div className="text-sm text-slate-600">Efficiency Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">8.5</div>
                  <div className="text-sm text-slate-600">Academic GPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;