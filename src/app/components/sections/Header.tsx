import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-medium text-lg tracking-tight hover:opacity-70 transition-opacity duration-200 text-slate-900"
          >
            Reta Getachew
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm relative group transition-colors duration-200 text-slate-600"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E07A5F] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm relative group transition-colors duration-200 text-slate-600"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E07A5F] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('perspective')}
              className="text-sm relative group transition-colors duration-200 text-slate-600"
            >
              Perspective
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E07A5F] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('connect')}
              className="text-sm relative group transition-colors duration-200 text-slate-600"
            >
              Connect
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E07A5F] group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
