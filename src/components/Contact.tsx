import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Let's discuss how we can work together on your next project
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-6">Let's Connect</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, innovative projects, 
              or just having a conversation about technology and software development. 
              Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Email</p>
                  <a 
                    href="mailto:subashvelmurugan8@gmail.com"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    subashvelmurugan8@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/subash-v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    Subash V
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">GitHub</p>
                  <a 
                    href="https://github.com/subashvelmurugan1408"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    subashvelmurugan1408
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Location</p>
                  <p className="text-text-secondary">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;