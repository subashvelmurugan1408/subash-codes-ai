import { Card } from '@/components/ui/card';
import { Code2, Brain, Smartphone, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Creating robust and scalable software solutions using modern programming languages and frameworks.",
      features: ["Web Applications", "Clean Code Practices", "Version Control", "Testing"]
    },
    {
      icon: Brain,
      title: "AI-Based Applications",
      description: "Developing intelligent applications that leverage machine learning and artificial intelligence.",
      features: ["Chatbot Development", "ML Integration", "Data Analysis", "Automation"]
    },
    {
      icon: Smartphone,
      title: "User Interface Design",
      description: "Crafting intuitive and responsive user interfaces that provide excellent user experiences.",
      features: ["Responsive Design", "Modern UI/UX", "Accessibility", "Performance"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Designing and implementing efficient database systems for optimal data management.",
      features: ["Database Design", "Query Optimization", "Data Modeling", "Security"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Services</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive development services focused on modern solutions and innovative approaches
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 w-full">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;