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
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Showcasing my latest projects and creative solutions
          </p>
        </div>
        
        {/* Project Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="relative group">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full ${categoryColors[project.category]}`}
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
