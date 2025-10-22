import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';
import { portfolioData } from './data/portfolioData';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-700">
      <Header data={portfolioData.main} />
      <FloatingNav />
      <main className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <div id="about" className="pt-10 -mt-10"><About about={portfolioData.about} /></div>
        <div id="experience" className="pt-10 -mt-10"><Experience experiences={portfolioData.experiences} /></div>
        <div id="skills" className="pt-10 -mt-10"><Skills skills={portfolioData.skills} /></div>
        <div id="education" className="pt-10 -mt-10"><Education education={portfolioData.education} /></div>
        <div id="certifications" className="pt-10 -mt-10"><Certifications certifications={portfolioData.certifications} /></div>
        <div id="leadership" className="pt-10 -mt-10"><Leadership leadership={portfolioData.leadership} /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
