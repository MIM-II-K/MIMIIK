import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, Rocket, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Rocket, label: "Projects Completed", value: "50+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "30+" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Passionate developer with expertise in full-stack development and machine learning
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a versatile developer specializing in creating robust, scalable applications 
                using modern technologies. With expertise spanning from frontend React applications 
                to backend APIs and machine learning models, I bring comprehensive solutions to complex problems.
              </p>
              <p>
                My experience with FastAPI and Django enables me to build high-performance backend 
                services, while my machine learning skills help create intelligent, data-driven 
                applications that provide real business value.
              </p>
              <p>
                I'm passionate about clean code, user experience, and leveraging the latest 
                technologies to solve real-world challenges. Always learning, always improving.
              </p>
            </div>
            
            <Button variant="default" size="lg" className="group transition-smooth glow-hover">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          {/* Stats */}
          <div className="space-y-6">
            <div className="grid gap-4 animate-slide-up">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={stat.label} 
                    className="gradient-card border-border transition-smooth glow-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="p-3 gradient-primary rounded-lg">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-muted-foreground">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Tech Highlight */}
            <Card className="gradient-card border-border transition-smooth glow-hover animate-scale-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-neon">Current Focus</h3>
                <p className="text-muted-foreground">
                  Building AI-powered web applications with FastAPI backends, 
                  React frontends, and machine learning integration for intelligent automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;