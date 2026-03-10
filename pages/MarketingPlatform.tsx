import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';
import AdvantagesSection from '../components/AdvantagesSection';
import { Link } from 'react-router-dom';
import { LayoutTemplate, Printer, Store, Monitor, Settings, ChevronRight, ArrowUpRight } from 'lucide-react';

const MarketingPlatform: React.FC = () => {
  const heroImages = [
    "/images/card-byprice.jpg"
  ];

  const equipments = [
    {
      id: "impressoras",
      label: "Impressoras de Grande Formato",
      image: "https://images.unsplash.com/photo-1622480915761-417112014022?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "displays",
      label: "Displays e Menu Boards",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "totens",
      label: "Totens Interativos",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "players",
      label: "Players de Digital Signage",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const [activeEquipment, setActiveEquipment] = useState(equipments[0].id);
  const currentEquipment = equipments.find(e => e.id === activeEquipment) || equipments[0];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Quem pode contratar a plataforma de ofertas?",
      answer: <>Nossas soluções são voltadas para o mercado corporativo (B2B). Atendemos <Link to="/segmentos" className="text-[#1a2b5c] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">redes de varejo, supermercados, farmácias, franquias</Link> e empresas que demandam alta padronização e agilidade na comunicação visual e precificação de seus pontos de venda.</>
    },
    {
      question: "Qual é a duração mínima do contrato?",
      answer: <>Trabalhamos com contratos de locação e outsourcing customizados, geralmente com prazos a partir de 12 a 36 meses. Essa estrutura nos permite diluir o investimento em hardware (impressoras, displays, totens) e garantir previsibilidade financeira (OPEX) para o seu negócio. <Link to="/contato" className="text-[#1a2b5c] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-bold">Solicite uma cotação</Link>.</>
    },
    {
      question: "O software já vem com templates da minha marca?",
      answer: "Sim. Durante a fase de implantação (onboarding), nossa equipe de especialistas configura a plataforma com a identidade visual da sua empresa. Criamos templates padronizados para que sua equipe na ponta apenas insira os dados (como preço e descrição) e imprima ou publique nas telas, garantindo total conformidade com o seu brandbook."
    },
    {
      question: "Existe suporte técnico incluído para as impressoras e telas?",
      answer: <>Totalmente. Nosso modelo de outsourcing inclui hardware, software, insumos (para <Link to="/solucoes/impressao" className="text-[#1a2b5c] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">impressoras</Link>) e <Link to="/suporte" className="text-[#1a2b5c] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">suporte técnico integral com SLA rigoroso</Link>. Realizamos manutenções preventivas e corretivas, além de substituição de equipamentos em caso de falha, garantindo que sua operação de marketing nunca pare.</>
    },
    {
      question: "A empresa pode solicitar mais equipamentos durante o contrato?",
      answer: "Sim, nossa solução é altamente escalável. Caso sua rede expanda ou haja necessidade de modernizar novos pontos de venda, podemos realizar aditivos contratuais para incluir novos equipamentos (impressoras, totens ou displays) e licenças de software de forma ágil e sem burocracia."
    },
    {
      question: "Como posso solicitar um orçamento personalizado?",
      answer: <>Você pode <Link to="/contato" className="text-[#1a2b5c] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-bold">falar diretamente com nossos consultores de marketing através do botão de contato</Link>. Realizaremos um diagnóstico da sua operação atual para desenhar um projeto sob medida que reduza custos e aumente a eficiência da sua comunicação visual.</>
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      <Helmet>
        <title>ByPrice | Plataforma de Marketing PDV para Varejo | Pronto Impressoras</title>
        <meta name="description" content="Plataforma ByPrice para gestão de ofertas e cartazes de PDV no varejo. Automatize a impressão de preços e promoções nas suas lojas." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/solucoes/marketing" />
      </Helmet>
      {/* Hero */}
      <div className="relative bg-blue-950 py-20 text-white overflow-hidden">
        <HeroBackground images={heroImages} overlayClassName="bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4 block">Varejo & Comunicação Visual</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Plataforma de Marketing e Ofertas</h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto drop-shadow-md">
            Produção in-house de material promocional e gestão de sinalização digital para o ponto de venda (PDV).
          </p>
        </div>
      </div>

      {/* Intro Section (Image + Grid) */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b5c] leading-tight">
              Sua comunicação visual não pode esperar.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              O varejo exige velocidade. Esperar dias pela gráfica para imprimir cartazes de oferta significa perder vendas. Nossa plataforma oferece hardware e software para você criar e imprimir materiais de alta qualidade dentro da loja, com total autonomia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-50 p-4 rounded-xl flex items-center border border-slate-100">
                <Printer className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-sm">Impressão de Cartazes</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl flex items-center border border-slate-100">
                <LayoutTemplate className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-sm">Software de Criação</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl flex items-center border border-slate-100">
                <Monitor className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-sm">Digital Signage</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl flex items-center border border-slate-100">
                <Settings className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-sm">Gestão Centralizada</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2069&auto=format&fit=crop"
              alt="Impressão de material promocional no varejo"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </Section>

      {/* Como funciona */}
      <Section className="text-center bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-8 leading-tight">
            Como funciona a agilidade de <br className="hidden md:block" />
            comunicação no PDV?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            A dinâmica do ponto de venda requer respostas imediatas às mudanças do mercado. Depender de fornecedores externos para atualizar preços e promoções gera atrasos que impactam diretamente o faturamento. Com a nossa solução integrada, sua equipe ganha a capacidade de produzir e gerenciar toda a sinalização promocional internamente, assegurando que as campanhas entrem no ar exatamente quando necessário.
          </p>
        </div>
      </Section>

      {/* Possibilidades de Serviços Ofertados */}
      <Section bg="gray">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Possibilidades de Serviços Ofertados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
            <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
              <Printer className="w-16 h-16 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Impressão de Cartazes e Ofertas</h3>
            <p className="text-slate-600 text-sm">Impressoras de grande formato para banners e precificação.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
            <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
              <LayoutTemplate className="w-16 h-16 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Software de Criação</h3>
            <p className="text-slate-600 text-sm">Templates padronizados da sua marca. Sua equipe apenas muda o preço e imprime.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
            <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
              <Store className="w-16 h-16 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Digital Signage</h3>
            <p className="text-slate-600 text-sm">Gestão de telas e menu boards digitais integrada.</p>
          </div>
        </div>
      </Section>

      {/* ADVANTAGES SECTION */}
      <AdvantagesSection />

      {/* Equipamentos (Dark Navy) */}
      <section className="bg-[#1a2b5c] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: List */}
            <div>
              <span className="text-[#a3e635] font-bold tracking-widest text-xs uppercase mb-2 block">ALTA PERFORMANCE</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Equipamentos</h2>

              <div className="flex flex-col space-y-2">
                {equipments.map((item) => {
                  const isActive = activeEquipment === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveEquipment(item.id)}
                      className={`group flex items-center justify-between py-4 px-6 rounded-lg transition-all duration-300 outline-none ${isActive
                          ? 'bg-[#243b75]'
                          : 'border border-[#243b75] hover:bg-[#243b75]/50'
                        }`}
                    >
                      <span className={`text-lg font-bold ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {item.label}
                      </span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isActive
                          ? 'bg-[#a3e635]'
                          : 'bg-[#243b75] group-hover:bg-[#3a569c]'
                        }`}>
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#1a2b5c]' : 'text-slate-400 group-hover:text-white'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-12">
                <Link to="/contato" className="inline-flex items-center text-[#a3e635] font-bold hover:text-[#bef264] transition-colors tracking-wide uppercase text-sm group">
                  QUERO CONTRATAR <ArrowUpRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Image Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-4 shadow-2xl overflow-hidden relative z-10">
                <img
                  key={currentEquipment.image}
                  src={currentEquipment.image}
                  alt={currentEquipment.label}
                  className="w-full h-auto object-cover rounded-xl animate-in fade-in zoom-in duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a2b5c] rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              Perguntas Frequentes sobre a Plataforma de Marketing:
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors outline-none"
                  >
                    <span className="font-bold text-[#1a2b5c] text-sm md:text-base pr-4">{faq.question}</span>
                    <ChevronRight
                      className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 flex-shrink-0 ${activeFaq === index ? '-rotate-90' : 'rotate-90'
                        }`}
                    />
                  </button>

                  <div
                    className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-50 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#243b75] rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Precisa modernizar a comunicação visual da sua loja?
            </h2>
            <Link to="/contato" className="inline-block bg-white text-[#1a2b5c] font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition-colors text-sm">
              Falar com Consultor de Marketing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingPlatform;