import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Brain, Stethoscope, ShieldCheck, UtensilsCrossed } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "AI Study Helper",
      type: "Full-Stack AI Web Application",
      description:
        "An AI-powered study assistant that answers exam-oriented questions in three modes — Explain, Example, and Summary — using Meta's LLaMA 3.1 model via Groq API.",
      features: [
        "Firebase email/password authentication",
        "Flask backend token verification",
        "Animated chat UI",
        "Secure API key management with .env",
      ],
      technologies: ["Python", "Flask", "Groq API (LLaMA 3.1)", "React.js", "Firebase Auth", "Tailwind CSS"],
      status: "In Development",
      featured: true,
      icon: Brain,
      githubUrl: "https://github.com/subashvelmurugan1408",
      demoUrl: "",
    },
    {
      title: "Skin Cancer Detection System",
      type: "Machine Learning / Healthcare AI",
      description:
        "An image classification model that detects skin cancer from image data using supervised learning techniques, demonstrating a real-world healthcare application of ML.",
      features: [
        "Binary image classification",
        "Feature extraction pipeline",
        "Real-world medical dataset",
        "Live Streamlit demo",
      ],
      technologies: ["Python", "Scikit-learn", "ML Classification", "Streamlit"],
      status: "Model Built — UI Live",
      featured: false,
      icon: Stethoscope,
      githubUrl: "https://github.com/subashvelmurugan1408",
      demoUrl: "https://cancerdetectormodel-weight-btxikrbynmpc5hbczuhthc.streamlit.app",
    },
    {
      title: "Authentication System with JWT",
      type: "Full-Stack Web Development / Security",
      description:
        "A complete user authentication system with login, registration, and protected routes using stateless JWT-based session management.",
      features: [
        "Token expiry handling",
        "Protected API endpoints",
        "Secure auth flow",
        "Login & registration",
      ],
      technologies: ["Node.js", "React.js", "JWT", "Express"],
      status: "Completed",
      featured: false,
      icon: ShieldCheck,
      githubUrl: "https://github.com/subashvelmurugan1408",
      demoUrl: "",
    },
    {
      title: "Food Ordering Web",
      type: "Full-Stack Web Application",
      description:
        "A modern food ordering platform where users can browse menus, add items to cart, and place orders through a clean, responsive web interface.",
      features: [
        "Browse food menu by category",
        "Add to cart and manage quantities",
        "Order placement flow",
        "Responsive mobile-first design",
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      status: "Live",
      featured: false,
      icon: UtensilsCrossed,
      githubUrl: "https://github.com/subashvelmurugan1408",
      demoUrl: "https://food-ordering-web-1.onrender.com",
    },
  ];

  const statusClasses = (status: string) => {
    if (status.toLowerCase().includes('completed')) return 'bg-green-100 text-green-800';
    if (status.toLowerCase().includes('development')) return 'bg-blue-100 text-blue-800';
    return 'bg-amber-100 text-amber-800';
  };

  return (
    <section id="portfolio" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Portfolio</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Featured projects showcasing my skills in AI, full-stack development, and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 group ${
                project.featured ? 'lg:col-span-2 border-primary/30' : ''
              }`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
                        {project.featured && (
                          <span className="px-2 py-1 text-xs rounded-full bg-primary text-white">Featured</span>
                        )}
                      </div>
                      <p className="text-sm text-text-secondary mt-1">{project.type}</p>
                      <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${statusClasses(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Key Features:</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </Button>
                  {project.demoUrl && (
                    <Button
                      className="flex items-center space-x-2 bg-primary hover:bg-primary-dark"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            More exciting projects coming soon! Stay tuned for updates.
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => window.open('https://github.com/subashvelmurugan1408', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
