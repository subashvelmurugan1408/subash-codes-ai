import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/subash-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Solving modern problems through 
              <span className="block text-primary-light">design and code</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              I'm Subash, a passionate Computer Science student focused on software development 
              and AI applications. Currently building innovative solutions at RVS Technical Campus.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('about')}
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                About Me
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://github.com/subashvelmurugan1408" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/subash-v" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:subashvelmurugan8@gmail.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg border-4 border-white/20">
                <img 
                  src={heroImage} 
                  alt="Subash V - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-light/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;