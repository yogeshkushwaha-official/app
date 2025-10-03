import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const categories = ['all', 'Power BI', 'SQL', 'Tableau', 'Python'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Showcasing data-driven solutions that deliver measurable business impact
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 capitalize ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors duration-200"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View
                    </a>
                    <a
                      href={project.link}
                      className="flex items-center gap-2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors duration-200"
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </a>
                  </div>
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {project.title}
                  </h3>
                  <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {showAll ? 'Show Less' : `View All ${filteredProjects.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;