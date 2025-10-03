import React from 'react';
import { BarChart3, Database, Brain, Target } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const About = () => {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Data Visualization",
      description: "Creating compelling visual stories from complex datasets using Power BI and Tableau"
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: "SQL Analytics",
      description: "Expert in data extraction, transformation, and analysis using advanced SQL techniques"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI Integration",
      description: "Leveraging machine learning and AI tools to enhance data-driven decision making"
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Business Impact",
      description: "Translating data insights into actionable strategies that drive business growth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Passionate about transforming raw data into meaningful insights that drive strategic decisions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Turning Data into Strategic Advantages
            </h3>
            
            <div className="space-y-4 text-slate-600 mb-8">
              <p className="leading-relaxed">
                As a dedicated Data Analyst and AI Enthusiast, I specialize in extracting actionable insights 
                from complex datasets. With expertise in Python, SQL, Power BI, and Tableau, I've successfully 
                delivered projects that improved decision-making efficiency by up to 25%.
              </p>
              
              <p className="leading-relaxed">
                My recent experience with Microsoft and SAP through the AICTE internship program has strengthened 
                my understanding of real-world data challenges and AI implementation strategies. I'm passionate 
                about bridging the gap between technical analysis and business value.
              </p>
              
              <p className="leading-relaxed">
                Currently pursuing my Bachelor's in Computer Applications with an 8.50 GPA, I combine academic 
                rigor with practical experience to deliver comprehensive data solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-indigo-600 mb-2">3+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Certifications</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-slate-600">
              <div><span className="font-semibold">Email:</span> {personal.contact.email}</div>
              <div><span className="font-semibold">Location:</span> {personal.contact.location}</div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div>
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;