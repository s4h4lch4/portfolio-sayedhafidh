import React from 'react';
import type { ExperienceItem } from '../types';
import Section from './Section';
import { BriefcaseIcon } from './icons';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <Section title="Experience" icon={<BriefcaseIcon className="h-5 w-5" />}>
      <div className="relative border-l-2 border-teal-200 ml-4 sm:ml-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-8 sm:ml-10">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-teal-100 rounded-full -left-4 ring-8 ring-white">
              <BriefcaseIcon className="w-5 h-5 text-teal-600" />
            </span>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                    <h3 className="text-lg font-semibold text-slate-900">{exp.role}</h3>
                    <p className="text-sm text-slate-500 font-medium sm:text-right">{exp.period}</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                    <p className="text-md font-medium text-teal-600">{exp.company}</p>
                    <p className="text-sm text-slate-500">{exp.location}</p>
                </div>

                {exp.description.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                    {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                    </ul>
                )}

                {exp.projects && exp.projects.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                    <h4 className="text-md font-semibold text-slate-700 mb-3">Key Projects:</h4>
                    <div className="space-y-4">
                        {exp.projects.map((project, i) => (
                        <div key={i}>
                            <p className="font-semibold text-slate-800 text-sm">{project.title} <span className="font-normal text-slate-500">- {project.industry}</span></p>
                            <ul className="list-disc list-inside space-y-1 mt-1 text-slate-600 pl-4 text-sm">
                                {project.description.map((desc, j) => (
                                <li key={j}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                        ))}
                    </div>
                    </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
