import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Interactive Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 transition-transform duration-700"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-primary bg-clip-text text-transparent animate-glow relative group">
            <span 
              className="inline-block transition-transform hover:scale-110 hover:rotate-1"
              style={{
                background: 'linear-gradient(90deg, #A855F7, #00D4FF, #A855F7)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'text-shimmer 3s ease-in-out infinite'
              }}
            >
              MIMIIK
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up">
            Full Stack Developer & ML Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Crafting innovative solutions with Python, React, FastAPI, Django, and Machine Learning
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {['Python', 'React + Vite', 'FastAPI', 'Django', 'Machine Learning'].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 gradient-glass border border-border rounded-full text-sm font-medium transition-bounce glow-hover magnetic-hover group cursor-pointer animate-bounce-in"
                style={{ animationDelay: `${0.1 * index + 0.4}s` }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  const deltaX = (mousePosition.x * window.innerWidth / 100 - centerX) * 0.1;
                  const deltaY = (mousePosition.y * window.innerHeight / 100 - centerY) * 0.1;
                  e.currentTarget.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
                }}
              >
                <span className="group-hover:animate-pulse">{tech}</span>
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="default" size="lg" className="group transition-smooth glow-hover">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="transition-smooth glow-hover">
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 gradient-card border border-border rounded-lg transition-smooth glow-hover"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;