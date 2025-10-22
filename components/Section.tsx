
import React from 'react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section>
      <div className="flex items-center mb-6">
        <div className="bg-teal-500 text-white rounded-full p-2 mr-4">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h2>
      </div>
      <div className="space-y-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
