import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, MoveUpRight, Code2, BrainCircuit, Database, Layers3, ShieldCheck, UtensilsCrossed, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Contact from '@/components/Contact';
import portrait from '@/assets/subash-profile.jpg';

const projects = [
  {
    number: '01', title: 'AI Study Helper', category: 'FULL-STACK / ARTIFICIAL INTELLIGENCE', status: 'IN DEVELOPMENT',
    summary: 'A more intuitive way to turn difficult exam questions into understanding.',
    problem: 'Studying complex concepts often means switching between fragmented resources and generic answers.',
    approach: 'Built three focused response modes — Explain, Example, and Summary — around LLaMA 3.1 via Groq, with Firebase authentication and Flask token verification.',
    result: 'A focused study experience in active development, with an animated chat interface and protected access.',
    tools: ['React', 'Python', 'Flask', 'Groq API', 'Firebase'], icon: BrainCircuit,
    link: '',
  },
  {
    number: '02', title: 'Skin Cancer Detection', category: 'MACHINE LEARNING / HEALTHCARE', status: 'MODEL BUILT',
    summary: 'Exploring how machine learning can support earlier, more accessible screening.',
    problem: 'Medical image classification is a challenging space where data and careful model design matter.',
    approach: 'Trained a binary classification model on a real medical dataset with Python and Scikit-learn.',
    result: 'The model is built and a Streamlit demonstration is available; further interface and deployment work is planned.',
    tools: ['Python', 'Scikit-learn', 'Streamlit'], icon: Stethoscope,
    link: 'https://cancerdetectormodel-weight-btxikrbynmpc5hbczuhthc.streamlit.app',
  },
  {
    number: '03', title: 'Food Ordering Web', category: 'WEB APPLICATION / CLOUD DATA', status: 'LIVE',
    summary: 'A complete ordering journey, from browsing the menu to placing an order.',
    problem: 'An ordering flow needs to keep menus, quantities, and the path to checkout simple.',
    approach: 'Created a responsive web experience with HTML, CSS, JavaScript, Python, MySQL, and AWS RDS.',
    result: 'A live food ordering application with menu browsing, cart management, and order placement.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Python', 'MySQL', 'AWS RDS'], icon: UtensilsCrossed,
    link: 'https://food-ordering-web-1.onrender.com',
  },
  {
    number: '04', title: 'JWT Authentication', category: 'FULL-STACK / SECURITY', status: 'COMPLETED',
    summary: 'A secure foundation for signing in and protecting application routes.',
    problem: 'User accounts need a reliable flow for registration, login, protected pages, and expired sessions.',
    approach: 'Implemented token-based authentication with React and Node.js, including protected routes and token expiry.',
    result: 'A completed authentication system covering the core account lifecycle.',
    tools: ['React', 'Node.js', 'JWT'], icon: ShieldCheck,
    link: '',
  },
];

const tools = [
  { name: 'REACT', detail: 'Interfaces', icon: Layers3, className: 'tool-react' },
  { name: 'PYTHON', detail: 'Intelligence', icon: BrainCircuit, className: 'tool-python' },
  { name: 'FLASK', detail: 'Systems', icon: Code2, className: 'tool-flask' },
  { name: 'MYSQL', detail: 'Data', icon: Database, className: 'tool-mysql' },
];

const nav = [ ['ABOUT', '#about'], ['EXPERTISE', '#expertise'], ['WORK', '#portfolio'], ['CONTACT', '#contact'] ];

const Index = () => {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo('.hero-portrait', { y: 32, opacity: 0, scale: 1.05 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' });
        gsap.fromTo('.hero-copy > *', { y: 36, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.13, duration: 0.8, delay: 0.15, ease: 'power3.out' });
        gsap.to('.hero-portrait', { yPercent: 17, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
        gsap.utils.toArray<HTMLElement>('.reveal').forEach((item) => {
          gsap.fromTo(item, { y: 55, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 88%', once: true } });
        });
        gsap.to('.skill-track', { xPercent: -10, ease: 'none', scrollTrigger: { trigger: '.skills-section', start: 'top bottom', end: 'bottom top', scrub: 1 } });
      });
      return () => mm.revert();
    }, root);
    return () => context.revert();
  }, []);

  return <div ref={root} className="site-shell">
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Subash V, back to top">SV<span className="brand-period">.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
      </nav>
      <a href="mailto:subashvelmurugan8@gmail.com" className="header-availability"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <ArrowUpRight size={15} /></a>
      <Button size="icon" variant="ghost" className="mobile-menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
    </header>
    {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label} <ArrowUpRight size={19} /></a>)}</nav>}

    <main>
      <section className="hero" id="home">
        <div className="hero-portrait"><img src={portrait} alt="Portrait of Subash V" /></div>
        <div className="hero-shade" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> PORTFOLIO / 2026 <span className="eyebrow-end">COIMBATORE, INDIA</span></div>
            <h1>SUBASH<br/><span className="hero-name-outline">V.</span></h1>
            <div className="hero-bottom-line">
              <p>Solving modern problems<br />through <em>design and code.</em></p>
              <a href="#portfolio" className="round-link" aria-label="Explore selected work"><ArrowDownRight size={27} /></a>
            </div>
          </div>
        </div>
        <div className="hero-index">SOFTWARE DEVELOPMENT <span>/</span> AI APPLICATIONS</div>
        <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="intro-section section-wrap" id="about">
        <div className="section-heading reveal"><span className="section-number">01 / INTRODUCTION</span><span className="section-rule" /></div>
        <div className="intro-grid">
          <div className="intro-aside reveal">DEVELOPER.<br/>BUILDER.<br/><span>CURIOUS MIND.</span></div>
          <div className="intro-main reveal"><h2>I BUILD FOR<br/><span className="accent-text">WHAT'S NEXT.</span></h2><p>I'm Subash V, a B.Tech Computer Science student at RVS Technical Campus, Coimbatore. I work across software development and AI — turning ideas into useful, considered digital experiences.</p><div className="intro-facts"><div><strong>2028</strong><span>EXPECTED GRADUATION</span></div><div><strong>04</strong><span>SELECTED PROJECTS</span></div></div></div>
        </div>
      </section>

      <section className="tools-section" id="expertise">
        <div className="section-wrap">
          <div className="section-heading reveal"><span className="section-number">02 / TOOLKIT</span><span className="section-rule" /></div>
          <div className="tools-head reveal"><h2>THE TOOLS<br/><span>BEHIND THE WORK.</span></h2><p>From intelligent applications to the foundations that make them work.</p></div>
          <div className="tool-grid">{tools.map((tool, index) => <div className={`tool-tile reveal ${tool.className}`} key={tool.name} tabIndex={0}><div className="tool-top"><span>0{index + 1} / 04</span><MoveUpRight size={19} /></div><div className="tool-cube"><div className="cube-face"><tool.icon strokeWidth={1.1} size={56} /></div><div className="cube-side" /><div className="cube-top" /></div><div className="tool-caption"><h3>{tool.name}</h3><span>{tool.detail}</span></div></div>)}</div>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-wrap">
          <div className="section-heading reveal"><span className="section-number">03 / CAPABILITIES</span><span className="section-rule" /></div>
          <div className="skills-title reveal"><h2>WHAT I DO<span className="accent-text">.</span></h2><p>A connected practice across code, intelligence, and experience.</p></div>
          <div className="skill-perspective"><div className="skill-track">
            {[['01','SOFTWARE DEVELOPMENT','Building reliable web experiences, from interface to infrastructure.'],['02','AI APPLICATIONS','Making machine learning useful in practical, human-centered tools.'],['03','INTERFACE DESIGN','Creating clear, responsive experiences that make complex tasks feel simple.'],['04','DATA & SYSTEMS','Connecting applications to the information that powers them.']].map(([num,title,description]) => <article className="skill-panel" key={num}><span>{num} / EXPERTISE</span><ArrowUpRight size={23} /><div><h3>{title}</h3><p>{description}</p></div></article>)}
          </div></div>
        </div>
      </section>

      <section className="portrait-section">
        <div className="portrait-panel"><img src={portrait} alt="Subash V in a suit" loading="lazy" /><div className="portrait-overlay" /><span className="portrait-outline" aria-hidden="true">SUBASH</span><div className="portrait-caption"><span>THE PERSON BEHIND THE PIXELS</span><p>Learning constantly.<br/>Building deliberately.</p></div></div>
      </section>

      <section className="work-section section-wrap" id="portfolio">
        <div className="section-heading reveal"><span className="section-number">04 / SELECTED WORK</span><span className="section-rule" /></div>
        <div className="work-intro reveal"><h2>SELECTED<br/><span className="accent-text">PROJECTS.</span></h2><p>Experiments, systems, and products built with purpose.</p></div>
        <div className="projects-list">{projects.map(project => <article className="project-row reveal" key={project.number}>
          <div className="project-visual"><div className="project-visual-grid"/><project.icon className="project-emblem" strokeWidth={0.85} /><span className="project-visual-number">{project.number}</span><span className="project-visual-label">{project.category}</span></div>
          <div className="project-content"><div className="project-meta"><span>{project.number} / {project.category}</span><span className="project-status">{project.status}</span></div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><div className="case-details"><div><span>THE CHALLENGE</span><p>{project.problem}</p></div><div><span>THE APPROACH</span><p>{project.approach}</p></div><div><span>THE OUTCOME</span><p>{project.result}</p></div></div><div className="project-footer"><div className="project-tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div><div className="project-actions">{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">LIVE DEMO <ArrowUpRight size={16} /></a>}<a href="https://github.com/subashvelmurugan1408" target="_blank" rel="noopener noreferrer">GITHUB <ArrowUpRight size={16} /></a></div></div></div>
        </article>)}</div>
        <a href="https://github.com/subashvelmurugan1408" target="_blank" rel="noopener noreferrer" className="all-work-link">MORE ON GITHUB <ArrowUpRight size={18} /></a>
      </section>

      <Contact />
    </main>
    <footer className="site-footer"><div className="section-wrap"><div className="footer-top"><a href="#home" className="footer-name">SUBASH V<span>.</span></a><a href="#home" className="back-top">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SUBASH V</span><div><a href="https://github.com/subashvelmurugan1408" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18}/></a><a href="https://linkedin.com/in/subash-v" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href="mailto:subashvelmurugan8@gmail.com" aria-label="Email"><Mail size={18}/></a></div><span>DESIGNED TO BUILD WHAT'S NEXT.</span></div></div></footer>
  </div>;
};
export default Index;
