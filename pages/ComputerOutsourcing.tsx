import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';
import AdvantagesSection from '../components/AdvantagesSection';
import EquipmentShowcase from '../components/EquipmentShowcase';
import { Link } from 'react-router-dom';
import { Monitor, Cpu, RefreshCw, Headphones, ChevronDown } from 'lucide-react';

const computerEquipment = [
  {
    id: 'notebooks',
    label: 'Notebooks',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'computadores',
    label: 'Computadores',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'monitores',
    label: 'Monitores',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'minipcs',
    label: "Mini pc's",
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2070&auto=format&fit=crop'
  }
];

const ComputerOutsourcing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Quem pode contratar o serviço de locação de notebooks e computadores?",
      answer: <>Empresas de médio e grande porte, localizadas no Rio de Janeiro e em todo o Brasil, que buscam simplificar as operações de T.I. para focar nas estratégias e resultados. Não atendemos órgãos públicos ou licitações governamentais. <Link to="/segmentos" className="text-[#1a1642] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">Veja os segmentos que atendemos</Link>.</>
    },
    {
      question: "Qual é a duração mínima para alugar os equipamentos?",
      answer: <>Nossos contratos de locação (HaaS) geralmente possuem prazos de 24 a 36 meses, garantindo a atualização tecnológica e diluição dos custos ao longo do tempo. <Link to="/contato" className="text-[#1a1642] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-bold">Solicite uma cotação</Link>.</>
    },
    {
      question: "Os notebooks e computadores são entregues configurados?",
      answer: "Sim, todos os equipamentos são entregues com a imagem padrão da sua empresa, incluindo sistema operacional, aplicativos básicos e políticas de segurança pré-configuradas."
    },
    {
      question: "Existe suporte técnico incluído na locação dos notebooks e computadores?",
      answer: <>Sim, oferecemos <Link to="/suporte" className="text-[#1a1642] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">suporte técnico completo, com SLA rigoroso</Link>, manutenção preventiva e corretiva, além de equipamentos de backup para garantir a continuidade da sua operação.</>
    },
    {
      question: "A empresa pode solicitar upgrades durante a locação?",
      answer: "Sim, nosso modelo HaaS permite flexibilidade para adicionar novos equipamentos ou realizar upgrades de hardware conforme o crescimento e as necessidades da sua empresa."
    },
    {
      question: "Como posso solicitar um orçamento personalizado?",
      answer: <>Basta <Link to="/contato" className="text-[#1a1642] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-bold">entrar em contato com nossos especialistas através do formulário no site</Link> ou telefone. Faremos um levantamento das suas necessidades e apresentaremos a melhor solução de HaaS para o seu negócio.</>
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const heroImages = [
    "/images/card-computadores.jpg"
  ];

  return (
    <div className="flex flex-col bg-white">
      <Helmet>
        <title>Outsourcing de Computadores RJ | HaaS para Empresas | Pronto Impressoras</title>
        <meta name="description" content="Hardware as a Service no Rio de Janeiro. Notebooks, desktops e workstations como serviço mensal com suporte técnico e atualização tecnológica a cada 36 meses." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/solucoes/computadores" />
      </Helmet>
      {/* Hero */}
      <div className="relative bg-blue-950 py-20 text-white overflow-hidden">
        <HeroBackground images={heroImages} overlayClassName="bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4 block">HaaS - Hardware as a Service</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Outsourcing de Computadores</h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto drop-shadow-md">
            Mantenha seu parque tecnológico sempre atualizado sem descapitalizar a empresa. Notebooks, Desktops e Workstations como serviço.
          </p>
        </div>
      </div>

      {/* Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1932&auto=format&fit=crop"
              alt="Setup de trabalho moderno"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Capex vs Opex: A conta fecha.</h2>
            <p className="text-lg text-slate-600">
              A compra de computadores imobiliza capital e gera custos de manutenção e descarte. Com o aluguel (HaaS), você transforma esse custo variável em uma despesa mensal previsível e dedutível de IR.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-700">
                <RefreshCw className="w-5 h-5 text-blue-600 mr-3" />
                Atualização tecnológica a cada 36 meses.
              </li>
              <li className="flex items-center text-slate-700">
                <Headphones className="w-5 h-5 text-blue-600 mr-3" />
                Suporte ilimitado e máquina backup.
              </li>
              <li className="flex items-center text-slate-700">
                <Cpu className="w-5 h-5 text-blue-600 mr-3" />
                Configurações personalizadas (Engenharia, Design, Admin).
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Como funciona */}
      <Section className="text-center bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-8 leading-tight">
            Como funciona o outsourcing <br className="hidden md:block" />
            de TI (HaaS) da Pronto?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            <strong>HaaS – Hardware as a Service</strong> é a modalidade inteligente de infraestrutura. Nós fornecemos todo o parque de computadores (Notebooks, Desktops e Workstations) como serviço. Sua empresa paga uma mensalidade fixa e nós garantimos a disponibilidade total: se quebrar, trocamos; se ficar obsoleto, atualizamos. É o fim da dor de cabeça com T.I.
          </p>
        </div>
      </Section>

      {/* Types of Equipment */}
      <Section bg="gray">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Equipamentos Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
            <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
              <Monitor className="w-16 h-16 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Notebooks Corporativos</h3>
            <p className="text-slate-600 text-sm">Linhas Pro da Dell, Lenovo e HP. Foco em durabilidade e bateria.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
            <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
              <Cpu className="w-16 h-16 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Desktops & Workstations</h3>
            <p className="text-slate-600 text-sm">Alta performance para renderização, CAD e processamento de dados.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
            <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
              <RefreshCw className="w-16 h-16 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Servidores Locais</h3>
            <p className="text-slate-600 text-sm">Infraestrutura on-premise gerenciada para aplicações críticas.</p>
          </div>
        </div>
      </Section>

      {/* ADVANTAGES SECTION */}
      <AdvantagesSection />

      {/* EQUIPMENT SHOWCASE */}
      <EquipmentShowcase equipmentList={computerEquipment} />

      {/* FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1642] rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-10 leading-tight">
              Perguntas Frequentes sobre Locação de Notebooks e<br className="hidden md:block" /> Computadores:
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
        <div className="bg-blue-900 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Precisa renovar o parque de máquinas?</h2>
          <Link to="/contato" className="bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-colors shadow-lg inline-block">
            Solicitar Orçamento HaaS
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default ComputerOutsourcing;