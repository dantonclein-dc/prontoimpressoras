import React, { useState } from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface EquipmentItem {
  id: string;
  label: string;
  image: string;
}

interface EquipmentShowcaseProps {
  title?: string;
  subtitle?: string;
  equipmentList: EquipmentItem[];
}

const EquipmentShowcase: React.FC<EquipmentShowcaseProps> = ({ 
  title = "Equipamentos", 
  subtitle = "ALTA PERFORMANCE", 
  equipmentList 
}) => {
  const [activeId, setActiveId] = useState(equipmentList[0]?.id);
  const activeItem = equipmentList.find(item => item.id === activeId) || equipmentList[0];

  if (!equipmentList || equipmentList.length === 0) return null;

  return (
    <section className="bg-blue-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
                <span className="text-lime-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                    {subtitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    {title}
                </h2>

                <div className="flex flex-col">
                    {equipmentList.map((item) => {
                        const isActive = activeId === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveId(item.id)}
                                className={`
                                    group flex items-center justify-between py-5 px-6 border-b border-white/10 text-left transition-all duration-300
                                    ${isActive ? 'bg-[#1a2b5c] border-l-4 border-l-lime-500 opacity-100' : 'border-l-4 border-l-transparent opacity-60 hover:opacity-100'}
                                `}
                            >
                                <span className="text-xl md:text-2xl font-bold text-white">
                                    {item.label}
                                </span>
                                <div className={`
                                    w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                                    ${isActive ? 'bg-lime-500 text-blue-950' : 'bg-white/10 text-white group-hover:bg-white/20'}
                                `}>
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="mt-12">
                     <Link 
                        to="/contato" 
                        className="inline-flex items-center text-lime-400 font-bold hover:text-lime-300 transition-colors text-sm uppercase tracking-widest"
                     >
                        Quero contratar <ArrowUpRight className="ml-2 w-5 h-5" />
                     </Link>
                </div>
            </div>

            {/* Right Column */}
            <div className="relative h-[500px] bg-white rounded-3xl p-8 flex items-center justify-center overflow-hidden shadow-2xl">
                 <img
                    key={activeItem.image} // Force re-render for animation
                    src={activeItem.image}
                    alt={activeItem.label}
                    className="max-w-full max-h-full object-contain animate-in fade-in zoom-in duration-500"
                 />
            </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentShowcase;
