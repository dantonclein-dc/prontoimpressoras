import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';

const advantages = [
  {
    id: 'gestao',
    label: 'Gestão',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    badge: 'GESTÃO',
    title: 'Gestão Simplificada',
    description: 'Libere tempo e recursos da empresa para focar em suas atividades principais, enquanto nos responsabilizamos por todo o serviço e pela gestão do hardware.',
    bgColor: 'bg-white',
    linkIcon: ArrowRight
  },
  {
    id: 'economia',
    label: 'Economia',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    badge: 'ECONOMIA',
    title: 'Redução de Custos Reais',
    description: 'Transforme custos fixos (Capex) em variáveis (Opex). Elimine gastos ocultos com estoques de toner, peças e chamados técnicos avulsos. Nossos clientes economizam em média 30%.',
    bgColor: 'bg-white',
    linkIcon: ArrowRight
  },
  {
    id: 'flexibilidade',
    label: 'Flexibilidade',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    badge: 'FLEXIBILIDADE',
    title: 'Crescimento Escalável',
    description: 'Sua empresa cresceu ou reduziu? Ajuste a quantidade e o tipo de equipamentos conforme a demanda do seu negócio, sem burocracia e com agilidade.',
    bgColor: 'bg-white',
    linkIcon: ArrowRight
  },
  {
    id: 'seguranca',
    label: 'Segurança',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    badge: 'SEGURANÇA',
    title: 'Proteção de Dados',
    description: 'Garanta a proteção dos seus dados com discos criptografados, impressão segura via crachá/PIN e conformidade com a LGPD em todo o fluxo documental.',
    bgColor: 'bg-white',
    linkIcon: ArrowRight
  },
  {
    id: 'tecnologia',
    label: 'Tecnologia',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    badge: 'TECNOLOGIA',
    title: 'Equipamentos de Ponta',
    description: 'Mantenha seu parque tecnológico sempre atualizado com equipamentos de última geração, garantindo alta performance e eficiência para seus colaboradores.',
    bgColor: 'bg-blue-50',
    linkIcon: ArrowRight
  }
];

const AdvantagesSection: React.FC = () => {
  const [activeId, setActiveId] = useState('economia');

  const activeAdvantage = advantages.find(adv => adv.id === activeId) || advantages[0];
  const LinkIcon = activeAdvantage.linkIcon;

  return (
    <section className="py-24 bg-[#f0f5fa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">
            VANTAGENS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] leading-tight">
            Vantagens de terceirizar
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white min-h-[600px]">
          {/* Left Column: List */}
          <div className="w-full lg:w-[35%] flex flex-col border-r border-slate-200">
            {advantages.map((adv) => {
              const isActive = activeId === adv.id;
              return (
                <button
                  key={adv.id}
                  onClick={() => setActiveId(adv.id)}
                  className={`
                    group flex items-center justify-between py-5 px-6 text-left transition-all duration-300 outline-none border-b border-slate-200 last:border-b-0 flex-1
                    ${isActive ? adv.bgColor : 'bg-slate-50 hover:bg-slate-100'}
                  `}
                >
                  <span className={`text-base md:text-lg font-bold transition-colors ${isActive ? 'text-[#1e3a8a]' : 'text-slate-500 group-hover:text-slate-700'}`}>
                    {adv.label}
                  </span>
                  
                  <div className={`
                    w-8 h-8 rounded flex items-center justify-center transition-all duration-300
                    ${isActive ? 'bg-[#1e3a8a] text-white' : 'bg-slate-200 text-slate-400 group-hover:bg-slate-300'}
                  `}>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Content */}
          <div className={`w-full lg:w-[65%] p-8 md:p-12 flex flex-col justify-start transition-all duration-500 ${activeAdvantage.bgColor}`}>
            <div className="max-w-xl w-full">
              <div className="mb-8 relative">
                <img 
                  src={activeAdvantage.image} 
                  alt={activeAdvantage.title} 
                  className="w-full h-64 object-cover rounded-xl shadow-sm"
                />
                {activeAdvantage.badge && (
                  <div className="absolute bottom-4 left-4 bg-lime-400 text-[#1e3a8a] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {activeAdvantage.badge}
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4">
                {activeAdvantage.title}
              </h3>
              
              <p className="text-slate-600 text-base leading-relaxed mb-8 min-h-[80px]">
                {activeAdvantage.description}
              </p>

              <Link 
                to="/contato" 
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group text-sm"
              >
                Falar com especialista
                <LinkIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
