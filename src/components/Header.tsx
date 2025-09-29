import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-surface/95 backdrop-blur-sm shadow-card' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-text-primary">
            Subash V
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary-dark"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;