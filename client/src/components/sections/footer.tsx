export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    'Web Development',
    'Frontend Development',
    'UI/UX Design',
    'Mobile App Development',
    'Technical Consulting',
    'Code Review & Optimization',
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 64;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/Montdev_1754062174083.PNG" 
                alt="MontDev Logo" 
                className="h-8 w-8 object-contain mr-3"
              />
              <h3 className="text-2xl font-bold gradient-text">MONTDEV</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Frontend Developer passionate about creating exceptional digital experiences 
              through modern web technologies and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:marcelo.reyran@gmail.com" className="text-slate-300 hover:text-white transition-colors duration-300">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            &copy; {currentYear} Marcelo Rey. All rights reserved. 
            Made with <span className="text-red-500">❤</span> in Monterrey, México
          </p>
        </div>
      </div>
    </footer>
  );
}
