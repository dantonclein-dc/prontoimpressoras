import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';
import AdvantagesSection from '../components/AdvantagesSection';
import EquipmentShowcase from '../components/EquipmentShowcase';
import { Link } from 'react-router-dom';
import { ScanBarcode, Printer, Package, Wifi, ChevronDown } from 'lucide-react';

const automationEquipment = [
  {
    id: 'coletores',
    label: 'Coletores de Dados',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'impressoras_termicas',
    label: 'Impressoras Térmicas',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'tablets',
    label: 'Tablets Robustos',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'scanners',
    label: 'Scanners / Leitores',
    image: 'https://images.unsplash.com/photo-1574607407408-1e681c46041d?q=80&w=2070&auto=format&fit=crop'
  }
];

const AutomationOutsourcing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Quem pode contratar o serviço de outsourcing de automação?",
      answer: <>Empresas de <Link to="/segmentos" className="text-[#1a1642] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">varejo, logística, indústrias</Link> e centros de distribuição que dependem de coletores de dados, impressoras térmicas e tablets robustos para suas operações críticas.</>
    },
    {
      question: "Qual é a duração mínima para alugar os equipamentos de automação?",
      answer: <>Nossos contratos de locação (HaaS) geralmente possuem prazos de 24 a 36 meses, garantindo a atualização tecnológica e diluição dos custos ao longo do tempo. <Link to="/contato" className="text-[#1a1642] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-bold">Solicite uma cotação</Link>.</>
    },
    {
      question: "Os equipamentos já vêm configurados com nosso sistema (WMS/ERP)?",
      answer: "Sim, realizamos a homologação técnica e entregamos os equipamentos pré-configurados e integrados ao seu sistema, prontos para uso na operação."
    },
    {
      question: "Existe suporte técnico incluído na locação dos coletores e impressoras?",
      answer: <>Sim, oferecemos <Link to="/suporte" className="text-[#1a1642] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">suporte técnico completo, com SLA rigoroso</Link>, manutenção expressa e equipamentos de backup (spare parts) no local para garantir que sua operação não pare.</>
    },
    {
      question: "A empresa pode solicitar mais equipamentos durante a locação?",
      answer: "Sim, nosso modelo permite flexibilidade para adicionar novos equipamentos conforme o crescimento da sua operação ou picos de demanda (sazonalidade)."
    },
    {
      question: "Como posso solicitar um orçamento personalizado?",
      answer: <>Basta <Link to="/contato" className="text-[#1a1642] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-bold">entrar em contato com nossos especialistas através do formulário no site</Link> ou telefone. Faremos um levantamento das suas necessidades e apresentaremos a melhor solução.</>
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const heroImages = [
    "/images/card-automacao.jpg"
  ];

  return (
    <div className="flex flex-col bg-white">
      <Helmet>
        <title>Automação de Documentos e GED | Digitalização Corporativa | Pronto Impressoras</title>
        <meta name="description" content="Gestão eletrônica de documentos (GED) e automação de processos documentais para empresas. Digitalização, fluxos de aprovação e arquivamento inteligente." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/solucoes/automacao" />
      </Helmet>
      {/* Hero */}
      <div className="relative bg-blue-950 py-20 text-white overflow-hidden">
        <HeroBackground images={heroImages} overlayClassName="bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4 block">Varejo & Indústria</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Outsourcing de Automação</h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto drop-shadow-md">
            Coletores de dados, impressoras térmicas e tablets robustos. Infraestrutura crítica para CD, Loja e Chão de Fábrica.
          </p>
        </div>
      </div>

      {/* Content */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Sua operação não pode parar por hardware.</h2>
            <p className="text-lg text-slate-600">
              No varejo e na logística, um equipamento parado significa fila no caixa ou atraso na expedição. Nosso modelo de outsourcing garante equipamentos de backup (spare parts) no local e manutenção expressa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                <ScanBarcode className="w-8 h-8 text-blue-600 mr-3" />
                <span className="font-bold text-slate-800">Coletores de Dados</span>
              </div>
              <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                <Printer className="w-8 h-8 text-blue-600 mr-3" />
                <span className="font-bold text-slate-800">Impressoras Térmicas</span>
              </div>
              <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                <Package className="w-8 h-8 text-blue-600 mr-3" />
                <span className="font-bold text-slate-800">Etiquetadoras</span>
              </div>
              <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                <Wifi className="w-8 h-8 text-blue-600 mr-3" />
                <span className="font-bold text-slate-800">Infra de Rede Wi-Fi</span>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
              alt="Warehouse automation"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </Section>

      {/* Como funciona */}
      <Section className="text-center bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b5c] mb-6 leading-tight">
            Como funciona o outsourcing <br className="hidden md:block" />
            de Automação da Pronto?
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-3xl mx-auto">
            <strong>Hardware as a Service (HaaS) para Automação</strong> é a solução definitiva para operações críticas. Nós fornecemos todo o parque de coletores, impressoras térmicas e tablets robustos como serviço. Sua empresa paga uma mensalidade fixa e nós garantimos a disponibilidade total: se quebrar, trocamos; se ficar obsoleto, atualizamos. É o fim da dor de cabeça com hardware parado no seu CD ou loja.
          </p>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1a2b5c]">Benefícios para a Operação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Alta Disponibilidade</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Equipamentos robustos (IP65/IP67) preparados para quedas, poeira e umidade.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Gestão de MDM</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Gerenciamento remoto de dispositivos móveis. Atualização de software e bloqueio remoto.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Homologação Técnica</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Ajudamos a escolher o hardware compatível com seu WMS ou ERP (SAP, Totvs, Oracle).</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ADVANTAGES SECTION */}
      <AdvantagesSection />

      {/* EQUIPMENT SHOWCASE */}
      <EquipmentShowcase equipmentList={automationEquipment} />

      {/* FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1642] rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-10 leading-tight">
              Perguntas Frequentes sobre Locação de<br className="hidden md:block" /> Equipamentos de Automação:
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-[#1a1642] text-base md:text-lg pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#1a1642] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 bg-white ${openFaq === index ? 'max-h-96 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="p-5 text-slate-600 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section className="text-center">
        <div className="bg-blue-900 rounded-3xl p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Precisa renovar seus equipamentos de automação?</h2>
          <Link to="/contato" className="bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-colors shadow-lg inline-block">
            Falar com Consultor de Automação
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default AutomationOutsourcing;