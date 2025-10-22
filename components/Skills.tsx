import React from 'react';
import type { SkillCategory } from '../types';
import Section from './Section';
import { SparklesIcon } from './icons';

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section title="Skills & Languages" icon={<SparklesIcon className="h-5 w-5" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-102 hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h3 className="text-md font-semibold text-slate-900 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-teal-200 hover:text-teal-900 transition-colors duration-200 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
