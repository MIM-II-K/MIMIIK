import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download, Eye } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";
import heroBg from "@/assets/hero-bg.jpg";

interface MousePosition {
  x: number;
  y: number;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
  color: string;
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  const techStack = useMemo(() => [
    { name: 'Python', color: 'from-blue-500 to-yellow-400' },
    { name: 'React + Vite', color: 'from-cyan-400 to-blue-600' },
    { name: 'FastAPI', color: 'from-green-400 to-emerald-600' },
    { name: 'Django', color: 'from-green-600 to-green-800' },
    { name: 'Machine Learning', color: 'from-purple-500 to-pink-600' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
    { name: 'Node.js', color: 'from-green-500 to-green-700' }
  ], []);

  const socialLinks: SocialLink[] = useMemo(() => [
    { 
      icon: Github, 
      href: "https://github.com/MIM-II-K", 
      label: "GitHub",
      color: "hover:bg-gray-800 hover:text-white"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/ennzaen", 
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white"
    },
    { 
      icon: Mail, 
      href: "mailto:your.ennzaen@gmail.com", 
      label: "Email",
      color: "hover:bg-red-500 hover:text-white"
    }
  ], []);

  // Optimized mouse move handler with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setMousePosition({ x, y });
  }, []);

  // Auto-cycling tech stack
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    const visibilityTimer = setTimeout(() => setIsVisible(true), 300);
    
    // Throttled mouse move handler
    let rafId: number;
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleMouseMove(e);
        rafId = 0;
      });
    };
    
    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    
    return () => {
      clearTimeout(timer);
      clearTimeout(visibilityTimer);
      window.removeEventListener('mousemove', throttledMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [handleMouseMove]);

  const scrollToProjects = useCallback(() => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const downloadResume = useCallback(() => {
  const link = document.createElement('a');
  link.href = '/resume.pdf'; // public path
  link.download = 'MIMIIK-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}, []);


  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Enhanced Interactive Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transition-transform duration-700 ease-out will-change-transform"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 0) scale(1.1)`,
          filter: 'blur(1px)'
        }}
      />
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Title with Enhanced Animation */}
          <div className="mb-6 relative">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-slow relative">
              MIM II K
            </h1>
            <div className="absolute inset-0 text-6xl md:text-8xl font-black text-white opacity-10 blur-sm">
              MIM II K
            </div>
          </div>
          
          {/* Enhanced Subtitle */}
          <div className="mb-6">
            <p className="text-2xl md:text-3xl font-semibold text-white mb-2 animate-slide-up">
              Full Stack Developer & ML Engineer
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-expand"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Passionate about crafting innovative solutions that bridge the gap between 
            <span className="text-blue-400 font-semibold"> cutting-edge technology</span> and 
            <span className="text-purple-400 font-semibold"> real-world impact</span>
          </p>
          
          {/* Enhanced Tech Stack with Auto-cycling Highlight */}
          <div className="mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">Technologies I Use</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`
                    px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 cursor-pointer
                    border border-gray-700 backdrop-blur-sm relative overflow-hidden group
                    ${index === currentTechIndex 
                      ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105 border-transparent` 
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white hover:scale-105'
                    }
                  `}
                  style={{ 
                    animationDelay: `${0.1 * index + 0.4}s`,
                    transform: index === currentTechIndex ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  <span className="relative z-10">{tech.name}</span>
                  {index === currentTechIndex && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={downloadResume}
              variant="outline" 
              size="lg" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl 
                  transition-all duration-300 transform hover:scale-110 hover:rotate-3
                  ${color} group shadow-lg hover:shadow-xl
                `}
                aria-label={label}
              >
                <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Animated Particles System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute rounded-full opacity-20 animate-float
              ${i % 3 === 0 ? 'w-2 h-2 bg-blue-400' : 
                i % 3 === 1 ? 'w-1.5 h-1.5 bg-purple-400' : 'w-1 h-1 bg-pink-400'}
            `}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      {isVisible && [...Array(5)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-10 animate-pulse"
          style={{
            width: `${50 + Math.random() * 100}px`,
            height: `${50 + Math.random() * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? 'rgba(59, 130, 246, 0.3)' : 
              i % 3 === 1 ? 'rgba(147, 51, 234, 0.3)' : 'rgba(236, 72, 153, 0.3)'
            } 0%, transparent 70%)`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`
          }}
        />
      ))}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;