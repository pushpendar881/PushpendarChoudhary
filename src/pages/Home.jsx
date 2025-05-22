import avatar from "../assets/OIP.jpg"; 
import intern from "../assets/certificate.jpg";
import nvidia from "../assets/Screenshot 2024-12-22 212105.png";
import crewai from "../assets/Screenshot 2025-05-22 182315.png";
import { useState, useEffect } from "react";
import { Code, Award, Mail, ExternalLink, BookOpen, Globe, Cpu } from "lucide-react";
import Footer from "./Footer"; // Maintaining your Footer component
import ContactSection from "../components/ContactSession"; // Maintaining your Contact component
import SkillsSection from "../components/SkillsSection"; // Maintaining your Skills component
import MultiCardGrid from "../components/Card"; 

const Home = () => {
  const roles = ["Developer", "Engineer", "AI Enthusiast", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Typing effect - enhanced version of your interval
  useEffect(() => {
    const tick = () => {
      const fullText = roles[roleIndex % roles.length];
      
      setText(current => {
        if (isDeleting) {
          return fullText.substring(0, current.length - 1);
        } else {
          return fullText.substring(0, current.length + 1);
        }
      });
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex(current => (current + 1) % roles.length);
      }
    };
    
    const ticker = setTimeout(tick, isDeleting ? delta / 2 : delta);
    return () => clearTimeout(ticker);
  }, [text, delta, isDeleting, roleIndex, roles]);

  // Intersection observer for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sectionElements = document.querySelectorAll('section[id]');
    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Navigation handler
  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
    setIsNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Fixed Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-sm fixed w-full z-50 top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={avatar} 
                alt="Pushpendar Choudhary" 
                className="w-10 h-10 rounded-full ring-2 ring-indigo-400"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Pushpendar Choudhary
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <ul className="flex space-x-8">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'certificates', label: 'Certificates' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => handleNavClick(item.id)}
                      className={`${activeSection === item.id ? 'text-indigo-400 font-medium' : 'text-gray-300 hover:text-white'}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="text-white"
              >
                {isNavOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isNavOpen && (
            <div className="md:hidden mt-4 bg-slate-800 rounded-lg p-4">
              <ul className="space-y-3">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'certificates', label: 'Certificates' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left py-2 px-4 rounded-lg ${
                        activeSection === item.id 
                          ? 'bg-indigo-500/20 text-indigo-400' 
                          : 'hover:bg-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="pt-20 pb-24 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-start max-w-3xl animate-fadeIn">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hi, I'm Pushpendar Choudhary
              </h1>
              <h2 className="text-3xl md:text-5xl font-semibold text-indigo-400 mb-6 h-16">
                I'm a <span className="inline-block min-w-40">{text}</span>
                <span className="animate-pulse">|</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                A passionate engineering student specializing in Artificial Intelligence and Machine Learning, 
                building innovative solutions with cutting-edge technologies.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => handleNavClick('projects')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  See My Work
                </button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-slate-800/50">
          <div className="container mx-auto">
            <div className="animate-slideUp">
              <h2 className="text-4xl font-bold mb-16 text-center">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
              </h2>
              
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-20 blur-lg"></div>
                  <img
                    src={avatar}
                    alt="Pushpendar Choudhary"
                    className="w-64 h-64 rounded-full object-cover border-4 border-indigo-400 relative z-10"
                  />
                </div>
                
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-indigo-300">Pushpendar Choudhary</h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Third-year AI & Data Science student at VESIT Mumbai with a passion for building real-world solutions using Machine Learning, Deep Learning, and Generative AI. Skilled in Python, Java, C, and DSA, with hands-on experience in full-stack development and model deployment.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                  🚀 Actively exploring SDE, AI/ML, and Data Science internships to contribute, learn, and grow with like-minded innovators.
                  </p>
                  
                  <div className="flex gap-6 mt-8">
                    <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors" aria-label="GitHub">
                      <Code size={24} />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                      <Globe size={24} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pushpendarchoudhary106@gmail.com" className="text-gray-300 hover:text-indigo-400 transition-colors" aria-label="Email">
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="animate-slideUp">
              <h2 className="text-4xl font-bold mb-16 text-center">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group bg-slate-800/70 rounded-xl overflow-hidden shadow-lg shadow-indigo-900/20 border border-slate-700 transform transition-transform hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={intern}
                      alt="ML/DL Internship Certificate"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="text-indigo-400" size={20} />
                      <h3 className="text-xl font-bold">ML/DL Internship at Intrnforte</h3>
                    </div>
                    <p className="text-gray-300">
                      Gained hands-on experience in Machine Learning and Deep Learning, working on cutting-edge projects 
                      and applying theoretical knowledge to real-world problems.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <a
                        href="https://drive.google.com/file/d/1BzsQZC9FMv_5UK-8_OskUgeYb0_HCDMY/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-slate-800/70 rounded-xl overflow-hidden shadow-lg shadow-indigo-900/20 border border-slate-700 transform transition-transform hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={nvidia}
                      alt="NVIDIA Deep Learning Certification"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="text-indigo-400" size={20} />
                      <h3 className="text-xl font-bold">NVIDIA Deep Learning Certification</h3>
                    </div>
                    <p className="text-gray-300">
                      Completed NVIDIA's Deep Learning Institute (DLI) program, focusing on advanced techniques 
                      in deep learning and AI, including neural networks and computer vision.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <a
                        href="https://drive.google.com/file/d/1w8VHVR1gwMd0E8frEAtx8PFQxfmL4yA9/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="group bg-slate-800/70 rounded-xl overflow-hidden shadow-lg shadow-indigo-900/20 border border-slate-700 transform transition-transform hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={crewai}
                      alt="NVIDIA Deep Learning Certification"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="text-indigo-400" size={20} />
                      <h3 className="text-xl font-bold">Crew AI</h3>
                    </div>
                    <p className="text-gray-300">
                    Successfully completed the <em>Initial Course on CrewAI</em>, gaining foundational skills in designing and building multi-agent systems. This certification represents a key milestone in mastering collaborative AI-driven technologies.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <a
                        href="https://drive.google.com/file/d/1uYksrzDqrA3Xx9xBTEWMgfFm1AQP751W/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section (Using your imported component) */}
        <section id="skills" className="py-24 px-6 bg-slate-800/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">My Skills</span>
            </h2>
            <SkillsSection />
          </div>
        </section>

        {/* Projects Section (Using your imported component) */}
        <section id="projects" className="py-24 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <MultiCardGrid />
          </div>
        </section>

        {/* Contact Section (Using your imported component) */}
        <section id="contact" className="py-24 px-6 bg-slate-800/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Get In Touch</span>
            </h2>
            <ContactSection />
          </div>
        </section>
      </main>

      {/* Footer (Using your imported component) */}
      <Footer />

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;