import React, { useState, useEffect } from 'react';
import { BriefcaseIcon, AcademicCapIcon, SparklesIcon, HeartIcon, BadgeCheckIcon } from './icons';

const sections = [
  { id: 'experience', title: 'Experience', icon: <BriefcaseIcon className="h-5 w-5" /> },
  { id: 'skills', title: 'Skills', icon: <SparklesIcon className="h-5 w-5" /> },
  { id: 'education', title: 'Education', icon: <AcademicCapIcon className="h-5 w-5" /> },
  { id: 'certifications', title: 'Certs', icon: <BadgeCheckIcon className="h-5 w-5" /> },
  { id: 'leadership', title: 'Leadership', icon: <HeartIcon className="h-5 w-5" /> },
];

const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      
      if (pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      let currentSection = '';
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.offsetTop - 100;
          if (pageYOffset >= elementTop) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed top-1/2 -translate-y-1/2 right-4 z-50">
      <ul className="flex flex-col items-center gap-2 bg-white/50 backdrop-blur-md p-2 rounded-full border border-slate-200 shadow-lg">
        {sections.map(section => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`group relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${activeSection === section.id ? 'bg-teal-500 text-white' : 'bg-transparent text-slate-500 hover:bg-slate-100'}`}
              aria-label={`Go to ${section.title} section`}
            >
              {section.icon}
              <span className="absolute right-full mr-3 px-3 py-1 bg-slate-800 text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {section.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FloatingNav;
