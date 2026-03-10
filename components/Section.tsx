import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'gray' | 'navy';
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', bg = 'white', id }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    navy: 'bg-slate-900 text-white',
  };

  return (
    <section id={id} className={`py-16 lg:py-24 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;