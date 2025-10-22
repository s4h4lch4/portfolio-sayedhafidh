import React from 'react';
import type { MainData } from '../types';
import { MailIcon, PhoneIcon, LocationIcon, LinkedInIcon, GitHubIcon } from './icons';

interface HeaderProps {
  data: MainData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{data.name}</h1>
            <p className="mt-1 text-lg text-teal-600 font-medium">{data.title}</p>
          </div>
          <div className="mt-6 sm:mt-0 flex-shrink-0">
             <img src={`https://i.imgur.com/sbLLmt1.jpeg${data.name.replace(/\s/g, '')}`} alt="Sayed Hafidh" className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover shadow-lg border-4 border-white"/>
          </div>
        </div>
        <div className="mt-6 border-t border-slate-200 pt-6 flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-4 text-sm text-slate-600 items-center">
          <a href={`mailto:${data.email}`} className="flex items-center hover:text-teal-600 transition-colors">
            <MailIcon className="h-5 w-5 mr-2 text-slate-400" />
            <span>{data.email}</span>
          </a>
          <div className="flex items-center">
            <PhoneIcon className="h-5 w-5 mr-2 text-slate-400" />
            <span>{data.phone}</span>
          </div>
          <div className="flex items-center">
            <LocationIcon className="h-5 w-5 mr-2 text-slate-400" />
            <span>{data.location}</span>
          </div>
           <div className="flex items-center gap-x-4 sm:ml-auto">
             <a href={data.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-teal-600 transition-colors">
                <LinkedInIcon className="h-6 w-6" />
             </a>
             <a href={data.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-400 hover:text-teal-600 transition-colors">
                <GitHubIcon className="h-6 w-6" />
             </a>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
