import { useScroll } from '@/hooks/use-scroll';

export default function BackToTop() {
  const { scrollY } = useScroll();
  const isVisible = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-50 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}
