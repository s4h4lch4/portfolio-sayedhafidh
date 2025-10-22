import React from 'react';
import type { LeadershipItem } from '../types';
import Section from './Section';
import { HeartIcon } from './icons';

interface LeadershipProps {
  leadership: LeadershipItem[];
}

const Leadership: React.FC<LeadershipProps> = ({ leadership }) => {
  return (
    <Section title="Leadership & Community Involvement" icon={<HeartIcon className="h-5 w-5" />}>
      {leadership.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-102 hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
            <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
            <p className="text-sm text-slate-500 font-medium sm:text-right">{item.period}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
             <p className="text-md font-medium text-teal-600">{item.organization}</p>
             <p className="text-sm text-slate-500">{item.location}</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            {item.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};

export default Leadership;
