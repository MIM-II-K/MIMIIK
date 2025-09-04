import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, Rocket, Users } from "lucide-react";
import { useCallback } from "react";

const About = () => {
  const stats = [
    { icon: Rocket, label: "Projects Completed", value: "13+" },
    { icon: Award, label: "Years Experience", value: "2+" },
    { icon: Users, label: "Happy Clients", value: "20+" }
  ];

  const downloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "MIMIIK-Resume.pdf";
    link.click();
  }, []);

  const highlights = [
    "full-stack development",
    "machine learning",
    "FastAPI",
    "Django",
    "ML"
  ];

  const descriptionTexts = [
    "I'm a versatile developer specializing in creating robust, scalable applications using modern technologies. From frontend React applications to backend APIs and ML models, I deliver comprehensive solutions to complex problems.",
    "My experience with FastAPI and Django enables me to build high-performance backend services, while my ML skills create intelligent, data-driven applications that provide real business value.",
    "I’m passionate about clean code, user experience, and leveraging the latest technologies to solve real-world challenges. Always learning, always improving."
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Description Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold gradient-primary bg-clip-text text-transparent animate-gradient-x">
                About Me
              </h2>
              <p className="text-xl text-gray-300">
                Passionate developer with expertise in{" "}
                <span className="text-blue-400 font-semibold">full-stack development</span> and{" "}
                <span className="text-purple-400 font-semibold">machine learning</span>
              </p>
            </div>

            <div className="space-y-4">
              {descriptionTexts.map((text, idx) => (
                <p
                  key={idx}
                  className="relative p-5 rounded-xl bg-gray-900/40 border-l-4 border-gradient-to-b from-blue-500 to-purple-500 text-gray-300 shadow-lg hover:scale-105 transform transition-transform duration-300"
                >
                  {text.split(new RegExp(`(${highlights.join("|")})`, "g")).map((part, i) =>
                    highlights.includes(part) ? (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold"
                      >
                        {part}
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>
              ))}
            </div>

            <Button
              variant="default"
              size="lg"
              className="group mt-6 transition-all glow-hover shadow-lg hover:scale-105"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Stats Section */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={stat.label}
                    className="gradient-card border-border transition-all glow-hover animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="p-3 gradient-primary rounded-lg">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-gray-400">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="gradient-card border-border transition-all glow-hover animate-scale-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-neon">Current Focus</h3>
                <p className="text-gray-300">
                  Building AI-powered web applications with FastAPI backends, React frontends, and machine learning integration for intelligent automation.
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
