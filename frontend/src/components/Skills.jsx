import React from 'react';
import { Code, Database, BarChart, Brain } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Programming Languages",
      skills: skills.programming,
      color: "blue"
    },
    {
      icon: <BarChart className="h-8 w-8 text-green-600" />,
      title: "Data Analysis & Visualization",
      skills: skills.dataAnalysis,
      color: "green"
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Data Processing",
      skills: skills.dataProcessing,
      color: "purple"
    },
    {
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: "Soft Skills",
      skills: skills.soft,
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      green: "bg-green-50 text-green-700 border-green-200",
      purple: "bg-purple-50 text-purple-700 border-purple-200",
      indigo: "bg-indigo-50 text-indigo-700 border-indigo-200"
    };
    return colorMap[color] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and AI implementation
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-slate-50 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "Python", level: 85 },
              { skill: "SQL", level: 90 },
              { skill: "Power BI", level: 88 },
              { skill: "Tableau", level: 82 }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-slate-700">{item.skill}</span>
                  <span className="text-sm text-slate-500">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;