import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Ensure resume.pdf is in your public folder
    link.download = "MIMIIK-Resume.pdf";
    link.click();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 cursor-pointer" onClick={() => handleScroll("home")}>
          MIM II K
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium items-center">
          <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleScroll("home")}>Home</li>
          <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleScroll("projects")}>Projects</li>
          <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleScroll("skills")}>Skills</li>
          <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleScroll("about")}>About</li>
          <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleScroll("contact")}>Contact</li>
          <li>
            <Button size="sm" className="ml-2" onClick={handleDownloadResume}>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-300">
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleScroll("home")}>Home</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleScroll("projects")}>Projects</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleScroll("skills")}>Skills</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleScroll("about")}>About</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleScroll("contact")}>Contact</li>
            <li>
              <Button size="sm" className="w-full mt-2" onClick={handleDownloadResume}>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
