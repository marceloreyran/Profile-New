import Navigation from '@/components/navigation';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import Portfolio from '@/components/sections/portfolio';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';
import BackToTop from '@/components/back-to-top';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
