import React from 'react';
import type { CertificationItem } from '../types';
import Section from './Section';
import { BadgeCheckIcon } from './icons';

interface CertificationsProps {
  certifications: CertificationItem[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <Section title="Certifications" icon={<BadgeCheckIcon className="h-5 w-5" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-102 hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{cert.title}</h3>
                <p className="text-md text-teal-600">{cert.issuer}</p>
              </div>
              <p className="text-sm text-slate-500 font-medium flex-shrink-0 ml-4">{cert.period}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
