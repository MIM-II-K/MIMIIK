import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with ML-driven insights and predictive analytics for business intelligence.",
      tech: ["React", "FastAPI", "TensorFlow", "PostgreSQL"],
      category: "Machine Learning",
      status: "Featured",
      features: [
        "Real-time data processing with 99.9% uptime",
        "Machine learning predictions with 94% accuracy",
        "Interactive dashboards with 50+ chart types",
        "Multi-tenant architecture supporting 1000+ users"
      ]
    },
    {
      title: "E-Commerce API Platform",
      description: "High-performance microservices architecture with Django REST framework, handling 10k+ concurrent users.",
      tech: ["Django", "Redis", "Docker", "AWS"],
      category: "Backend",
      status: "Production"
    },
    {
      title: "Computer Vision Pipeline",
      description: "Object detection and classification system using deep learning for automated quality control in manufacturing.",
      tech: ["Python", "OpenCV", "PyTorch", "FastAPI"],
      category: "AI/ML",
      status: "Enterprise"
    },
    {
      title: "Real-time Chat Application",
      description: "Modern messaging platform with WebSocket connections, file sharing, and end-to-end encryption.",
      tech: ["React", "Vite", "WebSocket", "MongoDB"],
      category: "Full Stack",
      status: "Open Source"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions across web development, APIs, and machine learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="gradient-glass border-border transition-bounce glow-hover animate-bounce-in group interactive-card relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openProjectModal(project)}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 gradient-mesh opacity-30 animate-morph" />
              <div className="relative z-10">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-neon border-neon/50 pulse-glow">
                      {project.status}
                    </Badge>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 glow-hover" onClick={(e) => { e.stopPropagation(); }}>
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 glow-hover" onClick={(e) => { e.stopPropagation(); }}>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 glow-hover">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-neon transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="transition-bounce hover:bg-primary hover:text-primary-foreground hover:scale-110 animate-slide-in-left"
                          style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="opacity-60">
                          +{project.tech.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span className="animate-slide-in-left" style={{ animationDelay: `${index * 0.15}s` }}>
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                        <span className="text-neon hover:text-neon opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to explore
                        </span>
                        <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg" className="transition-bounce glow-hover group">
            <span className="mr-2">View All Projects</span>
            <div className="w-2 h-2 bg-neon rounded-full group-hover:animate-bounce" />
          </Button>
        </div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
};

export default Projects;