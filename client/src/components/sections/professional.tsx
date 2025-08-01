export default function Professional() {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/assets/Marcelo_Reyna_Rangel_CV.pdf';
    link.download = 'Marcelo_Reyna_Rangel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const professionalHighlights = [
    {
      icon: "fas fa-code",
      title: "Frontend Development",
      description: "Specialized in modern web technologies with focus on user experience and responsive design"
    },
    {
      icon: "fas fa-database",
      title: "System Administration", 
      description: "Experience in hardware and software support, monitoring, and database management"
    },
    {
      icon: "fas fa-users",
      title: "Team Collaboration",
      description: "Strong communication skills and experience working in dynamic team environments"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Continuous Learning",
      description: "Autodidact with Master's degree in Software Engineering and commitment to staying current"
    }
  ];

  const certifications = [
    "Master's Degree in Software Engineering",
    "Software Technology Engineer",
    "Frontend Development Specialization",
    "Database Management"
  ];

  return (
    <section id="professional" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Profile
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Dedicated professional with expertise in frontend development and system administration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Highlights */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <i className="fas fa-star text-blue-600 mr-2"></i>
              Key Strengths
            </h3>
            <div className="space-y-6">
              {professionalHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className={`${highlight.icon} text-blue-600`}></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">{highlight.title}</h4>
                    <p className="text-slate-600 text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & CV Download */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <i className="fas fa-certificate text-blue-600 mr-2"></i>
              Qualifications
            </h3>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-slate-800 mb-4">Education & Certifications</h4>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <i className="fas fa-check-circle text-emerald-500 mr-3"></i>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>


          </div>
        </div>

        {/* Professional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-slate-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-slate-600">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}