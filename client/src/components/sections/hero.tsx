export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 animate-pulse-soft">
              <div className="bg-white px-4 py-2 rounded-full">
                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Available for Opportunities
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            Hi, I'm <span className="gradient-text animate-pulse-soft">Marcelo</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-700 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Frontend Developer specializing in modern web technologies. 
            <br className="hidden md:block" />
            <span className="text-blue-600 font-medium">Creating engaging, responsive experiences</span> that bring ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <i className="fas fa-eye mr-3 text-lg group-hover:animate-pulse"></i>
              <span className="relative z-10">View My Work</span>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center px-10 py-5 border-3 border-blue-600 text-blue-600 font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 backdrop-blur-sm bg-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <i className="fas fa-envelope mr-3 text-lg relative z-10 group-hover:animate-pulse"></i>
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>
        </div>
        
        {/* Enhanced Social Links */}
        <div className="mt-16 flex justify-center space-x-8">
          <a 
            href="mailto:marcelo.reyran@gmail.com" 
            className="group p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <i className="fas fa-envelope text-2xl group-hover:animate-pulse"></i>
          </a>
          <a 
            href="#" 
            className="group p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <i className="fab fa-linkedin text-2xl group-hover:animate-pulse"></i>
          </a>
          <a 
            href="#" 
            className="group p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <i className="fab fa-github text-2xl group-hover:animate-pulse"></i>
          </a>
          <a 
            href="#" 
            className="group p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <i className="fab fa-twitter text-2xl group-hover:animate-pulse"></i>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-slate-400 text-xl"></i>
      </div>
    </section>
  );
}
