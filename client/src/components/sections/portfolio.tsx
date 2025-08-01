import { useState } from 'react';
import type { Project } from '@shared/schema';

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with React, featuring responsive design, shopping cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Cross-platform mobile application for task management with real-time synchronization and offline capabilities.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React Native", "Firebase", "Redux"],
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "3",
    title: "Banking App UI Design",
    description: "Complete UI/UX design for a modern banking application, focusing on user experience and accessibility.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Figma", "Adobe XD", "Prototyping"],
    category: "ui",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "4",
    title: "Analytics Dashboard",
    description: "Interactive dashboard for data visualization with real-time charts, filters, and export functionality.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Vue.js", "D3.js", "Express"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "5",
    title: "Corporate Website",
    description: "Professional corporate website with CMS integration, SEO optimization, and performance monitoring.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Next.js", "Strapi", "Tailwind"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "6",
    title: "Social Media App",
    description: "Feature-rich social media application with real-time messaging, media sharing, and social interactions.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Flutter", "Dart", "Socket.io"],
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#"
  }
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'ui', label: 'UI/UX Design' },
];

const categoryColors = {
  web: 'bg-blue-100 text-blue-700',
  mobile: 'bg-emerald-100 text-emerald-700',
  ui: 'bg-purple-100 text-purple-700',
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-400 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-full shadow-lg">
              My Work
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">Portfolio</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-xl text-slate-700 mt-8 max-w-3xl mx-auto font-light leading-relaxed">
            Showcasing my latest projects and creative solutions
          </p>
        </div>
        
        {/* Enhanced Project Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-purple-500/25'
                  : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white border border-white/50'
              }`}
              style={{animationDelay: `${index * 100}ms`}}
            >
              <span className="relative z-10">{filter.label}</span>
              {activeFilter === filter.id && (
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden card-hover border border-white/50 animate-fade-in-up"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="flex space-x-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        className="group/btn p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <i className="fas fa-external-link-alt text-white text-lg group-hover/btn:animate-pulse"></i>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        className="group/btn p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <i className="fab fa-github text-white text-lg group-hover/btn:animate-pulse"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${categoryColors[project.category]} border border-white/30`}>
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 gradient-text group-hover:scale-105 transition-transform duration-300">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-2xl hover:from-purple-100 hover:to-blue-100 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-sm"
                      style={{animationDelay: `${techIndex * 50}ms`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <i className="fas fa-plus mr-2"></i>
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}
