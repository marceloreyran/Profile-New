export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Professional developer workspace" 
          className="w-full h-full object-cover opacity-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Marcelo</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto font-light">
            Frontend Developer specializing in modern web technologies. 
            I create engaging, responsive experiences that bring ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-eye mr-2"></i>
              View My Work
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="mt-12 flex justify-center space-x-6">
          <a 
            href="mailto:marcelo.reyran@gmail.com" 
            className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
          >
            <i className="fas fa-envelope text-2xl"></i>
          </a>
          <a 
            href="#" 
            className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a 
            href="#" 
            className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a 
            href="#" 
            className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
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
