import React from 'react';
import type { EducationItem } from '../types';
import Section from './Section';
import { AcademicCapIcon } from './icons';

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Section title="Education" icon={<AcademicCapIcon className="h-5 w-5" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-102 hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{edu.institution}</h3>
                <p className="text-md text-teal-600">{edu.degree}</p>
                 <p className="text-sm text-slate-500 mt-1">{edu.details}</p>
              </div>
              <p className="text-sm text-slate-500 font-medium flex-shrink-0 ml-4">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
