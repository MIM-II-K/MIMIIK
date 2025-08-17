import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with ML-driven insights and predictive analytics for business intelligence.",
      tech: ["React", "FastAPI", "TensorFlow", "PostgreSQL"],
      category: "Machine Learning",
      status: "Featured"
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
              className="gradient-card border-border transition-smooth glow-hover animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-neon border-neon/50">
                    {project.status}
                  </Badge>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{project.category}</span>
                    <Button variant="ghost" size="sm" className="text-neon hover:text-neon">
                      Learn More →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg" className="transition-smooth glow-hover">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;