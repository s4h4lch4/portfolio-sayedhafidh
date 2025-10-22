import React from 'react';
import { DownloadIcon } from './icons';

interface AboutProps {
  about: string;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section>
       <h2 className="text-2xl font-bold text-slate-800 tracking-tight mb-4">About Me</h2>
       <p className="text-base leading-relaxed text-slate-600 mb-6">{about}</p>
       <a href="/sayed-hafidh-cv.pdf" download className="inline-flex items-center gap-2 bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
        <DownloadIcon className="h-5 w-5" />
        Download CV
       </a>
    </section>
  );
};

export default About;
