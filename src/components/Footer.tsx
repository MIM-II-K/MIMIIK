import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ennzaen@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              MIM II K
            </h3>
            <p className="text-sm text-muted-foreground">
              © {currentYear} MIM II K. All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
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
        
        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            Crafting digital experiences with passion and precision.{" "}
            <span className="text-neon">Always learning, always building.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;