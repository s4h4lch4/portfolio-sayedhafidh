import React from 'react';
import { LinkedInIcon, GitHubIcon } from './icons';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  const { main } = portfolioData;
  return (
    <footer className="bg-white mt-16 border-t">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} {main.name}. All Rights Reserved.</p>
            <div className="flex items-center gap-x-4">
                <a href={main.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-teal-600 transition-colors">
                    <LinkedInIcon className="h-6 w-6" />
                </a>
                <a href={main.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-400 hover:text-teal-600 transition-colors">
                    <GitHubIcon className="h-6 w-6" />
                </a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
