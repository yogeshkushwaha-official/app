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
              Certifications & Achievements
            </h3>
            
            {/* Masterclasses */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                Masterclasses (WsCube Tech)
              </h4>
              <div className="space-y-4">
                {certifications.masterclasses.map((cert) => (
                  <div key={cert.id} className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-slate-800 text-sm">{cert.title}</h5>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{cert.date}</span>
                    </div>
                    <p className="text-slate-600 text-xs mb-1">Key Topics: {cert.topic}</p>
                    <p className="text-slate-500 text-xs">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Forage Job Simulations */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Forage Job Simulations
              </h4>
              <div className="space-y-4">
                {certifications.forageSimulations.map((cert) => (
                  <div key={cert.id} className="bg-green-50 border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-slate-800 text-sm">{cert.title}</h5>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{cert.date}</span>
                    </div>
                    <p className="text-slate-600 text-xs mb-1">Provider: {cert.provider}</p>
                    <p className="text-slate-600 text-xs">Key Tasks: {cert.tasks}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                Internships
              </h4>
              <div className="space-y-4">
                {certifications.internships.map((cert) => (
                  <div key={cert.id} className="bg-purple-50 border border-purple-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <h5 className="font-semibold text-slate-800 text-sm mb-2">{cert.title}</h5>
                    <p className="text-slate-600 text-xs mb-1">Provider: {cert.provider}</p>
                    {cert.duration && <p className="text-slate-600 text-xs mb-1">Duration: {cert.duration}</p>}
                    {cert.affiliation && <p className="text-slate-500 text-xs">{cert.affiliation}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Other Certificates */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                Other Certificates
              </h4>
              <div className="space-y-4">
                {certifications.otherCertificates.map((cert) => (
                  <div key={cert.id} className="bg-orange-50 border border-orange-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-slate-800 text-sm">{cert.title}</h5>
                      {cert.date && <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">{cert.date}</span>}
                    </div>
                    <p className="text-slate-600 text-xs mb-1">Provider: {cert.provider}</p>
                    {cert.duration && <p className="text-slate-600 text-xs mb-1">Duration: {cert.duration}</p>}
                    <p className="text-slate-500 text-xs">{cert.type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
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