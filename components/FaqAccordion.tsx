import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpen?: number | null;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items, defaultOpen = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4" role="region" aria-label="Perguntas frequentes">
      {items.map((faq, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
          <button
            id={`faq-q-${index}`}
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-a-${index}`}
            className="w-full flex justify-between items-center p-5 md:p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
          >
            <span className="font-bold text-slate-900 text-base md:text-lg pr-4">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            id={`faq-a-${index}`}
            role="region"
            aria-labelledby={`faq-q-${index}`}
            aria-hidden={openIndex !== index}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? 'max-h-[500px] opacity-100 border-t border-slate-200'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-5 md:p-6 text-slate-600 leading-relaxed text-sm md:text-base">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
