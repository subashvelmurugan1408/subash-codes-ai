import { Card } from '@/components/ui/card';
import { GraduationCap, Code, Brain, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">About Me</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code and AI
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-6">My Journey</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              I'm Subash, pursuing a Bachelor of Computer Science and Engineering at RVS Technical Campus, 
              Coimbatore. My goal is to become a skilled software engineer and contribute to innovative 
              projects in AI and software development.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              With a strong foundation in programming and a keen interest in artificial intelligence, 
              I'm constantly learning new technologies and applying them to solve real-world problems. 
              My focus is on creating impactful solutions that make a difference.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">2028</div>
                <div className="text-text-secondary">Expected Graduation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1+</div>
                <div className="text-text-secondary">AI Projects</div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card className="p-6 shadow-card hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Education</h4>
                  <p className="text-text-secondary">Bachelor of Computer Science and Engineering</p>
                  <p className="text-text-secondary">RVS Technical Campus, Coimbatore</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Development Focus</h4>
                  <p className="text-text-secondary">Software development with modern frameworks and technologies</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">AI Applications</h4>
                  <p className="text-text-secondary">Exploring artificial intelligence and machine learning solutions</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;