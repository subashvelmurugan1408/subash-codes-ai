import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Subash V</h3>
            <p className="text-white/80 max-w-md mx-auto">
              Computer Science Student & Aspiring Software Engineer
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
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
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60 flex items-center justify-center space-x-2">
              <span>© 2024 Subash V. Built with</span>
              <Heart size={16} className="text-red-400" />
              <span>and modern web technologies</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;