import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, MessageCircle, Users } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Debate Mate - AI Chatbot",
      description: "An intelligent chatbot designed to help students improve their debate skills and expand their knowledge base through interactive conversations and structured practice sessions.",
      features: [
        "Natural Language Processing",
        "Educational Content Generation", 
        "Interactive Debate Sessions",
        "Progress Tracking"
      ],
      technologies: ["AI/ML", "Natural Language Processing", "Chatbot Framework"],
      status: "Completed",
      icon: MessageCircle
    },
    {
      title: "Student Portal System",
      description: "A comprehensive web application for managing student information, academic records, and educational resources with a modern, user-friendly interface.",
      features: [
        "User Authentication",
        "Academic Management",
        "Resource Library",
        "Progress Analytics"
      ],
      technologies: ["React", "Database Management", "Web Development"],
      status: "In Development", 
      icon: Users
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Portfolio</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Featured projects showcasing my skills in software development and AI applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 group">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Github size={16} />
                    <span>View Code</span>
                  </Button>
                  <Button className="flex items-center space-x-2 bg-primary hover:bg-primary-dark">
                    <ExternalLink size={16} />
                    <span>Learn More</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            More exciting projects coming soon! Stay tuned for updates.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;