import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, X } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  status: string;
  demoUrl?: string;
  githubUrl?: string;
  features?: string[];
  images?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images =
    project.images && project.images.length > 0
      ? project.images
      : ["https://via.placeholder.com/800x600?text=No+Preview+Available"];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto gradient-glass border-border">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl mb-2 gradient-primary bg-clip-text text-transparent">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {project.description}
              </DialogDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-8 mt-6">
          {/* Demo/Images Section */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="aspect-video bg-secondary rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={images[currentImageIndex]}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {/* Overlay Play Button */}
                {project.demoUrl && (
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="glow-hover"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Live Demo
                    </Button>
                  </div>
                )}
              </div>

              {/* Image Navigation */}
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-neon shadow-neon"
                        : "bg-muted hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.demoUrl && (
                <Button
                  variant="default"
                  className="flex-1 glow-hover"
                  onClick={() => window.open(project.demoUrl, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  className="flex-1 glow-hover"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </Button>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            {/* Status & Category */}
            <div className="flex gap-3">
              <Badge variant="secondary" className="text-neon border-neon/50">
                {project.status}
              </Badge>
              <Badge variant="outline">{project.category}</Badge>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                {(project.features || [
                  "Responsive design across all devices",
                  "Real-time data synchronization",
                  "Advanced security implementation",
                  "Optimized performance and loading",
                  "Comprehensive testing coverage",
                ]).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-neon rounded-full mt-2 flex-shrink-0 animate-pulse" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="gradient-card p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-neon">98%</div>
                <div className="text-sm text-muted-foreground">
                  Performance Score
                </div>
              </div>
              <div className="gradient-card p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-neon">5.0</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
