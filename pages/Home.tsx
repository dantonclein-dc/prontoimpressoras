import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';
import SchemaMarkup from '../components/SchemaMarkup';
import { ArrowRight, Printer, Monitor, FileText, Building2, Stethoscope, Factory, ShoppingCart, Globe, Clock, Award, ChevronRight, TrendingDown, ShieldCheck, ArrowUpRight } from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion';
import BrandsMarquee from '../components/BrandsMarquee';

const faqSchema = {
   "@context": "https://schema.org",
   "@type": "FAQPage",
   "mainEntity": [
      {
         "@type": "Question",
         "name": "O que é outsourcing de impressão?",
         "acceptedAnswer": {
            "@type": "Answer",
            "text": "Outsourcing de impressão é o modelo em que a empresa contrata a Pronto Impressoras para fornecer, instalar, manter e gerenciar todos os equipamentos de impressão, incluindo impressoras, multifuncionais, toner e suporte técnico, mediante um pagamento mensal fixo por página impressa ou por equipamento."
         }
      },
      {
         "@type": "Question",
         "name": "Quanto custa o outsourcing de impressão no Rio de Janeiro?",
         "acceptedAnswer": {
            "@type": "Answer",
            "text": "O custo varia conforme o volume de impressões, número de equipamentos e nível de serviço. A Pronto Impressoras oferece consultoria gratuita para avaliar o cenário atual da empresa e apresentar uma proposta personalizada. Entre em contato pelo (21) 99172-4810 ou solicite um orçamento pelo site."
         }
      },
      {
         "@type": "Question",
         "name": "O que é HaaS (Hardware as a Service)?",
         "acceptedAnswer": {
            "@type": "Answer",
            "text": "HaaS é o modelo onde computadores, notebooks e workstations são fornecidos como serviço mensal em vez de comprados. A empresa usa os equipamentos sem imobilizar capital, com atualização tecnológica garantida a cada 36 meses e suporte técnico incluído."
         }
      },
      {
         "@type": "Question",
         "name": "A Pronto Impressoras atende fora do Rio de Janeiro?",
         "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, a Pronto Impressoras atende empresas em todo o Brasil, com sede em Mesquita/RJ e estrutura para atendimento nacional."
         }
      }
   ]
};

const Home: React.FC = () => {
   const [activeSegment, setActiveSegment] = useState('corporativo');

   // Image simulating the dark architectural/office environment from the screenshot
   const heroImages = [
      "/images/hero-office.jpg",
   ];

   const segmentsData = [
      {
         id: 'corporativo',
         label: 'Corporativo',
         description: 'Escritórios, advocacia e administrativo.',
         image: "/images/seg-corporativo.jpg"
      },
      {
         id: 'saude',
         label: 'Saúde',
         description: 'Hospitais, clínicas e laboratórios.',
         image: "/images/seg-saude.jpg"
      },
      {
         id: 'educacao',
         label: 'Educação',
         description: 'Escolas e universidades.',
         image: "/images/seg-educacao.jpg"
      },
      {
         id: 'industria',
         label: 'Indústria',
         description: 'Chão de fábrica e logística.',
         image: "/images/seg-industria.jpg"
      },
      {
         id: 'varejo',
         label: 'Varejo',
         description: 'Lojas, franquias e supermercados.',
         image: "/images/seg-varejo.jpg"
      }
   ];

   const faqs: { question: string; answer: React.ReactNode }[] = [
      {
         question: "O que é a Pronto Impressoras?",
         answer: <>A Pronto é uma plataforma Tech as a Service (TaaS), especialista em outsourcing corporativo desde 2010. Com atuação e sede administrativa no Rio de Janeiro, nosso foco é prover tecnologia como serviço de forma integrada, eliminando a complexidade da gestão de ativos e permitindo que as empresas foquem em seu core business. Oferecemos um portfólio completo que inclui <Link to="/solucoes/impressao" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">outsourcing de impressão</Link>, <Link to="/solucoes/computadores" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">locação de notebooks e desktops</Link>, <Link to="/solucoes/automacao" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">automação comercial</Link> e <Link to="/solucoes/fluxos" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">gestão eletrônica de documentos (GED)</Link>.</>
      },
      {
         question: "Qual a trajetória da Pronto Impressoras?",
         answer: <>Iniciamos nossa operação no Rio de Janeiro focados em <Link to="/solucoes/impressao" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">outsourcing de impressão</Link> e, desde 2010, expandimos para uma gestão completa de TI. Hoje, somos referência nacional, atendendo mais de 400 clientes corporativos em 26 estados, sempre pautados pela inovação, ética e compromisso com <Link to="/suporte" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">níveis de serviço (SLA)</Link> rigorosos.</>
      },
      {
         question: "Qual é o segmento de atuação da Pronto?",
         answer: <>Atuamos exclusivamente no mercado B2B (Business to Business), atendendo empresas de médio e grande porte. Nossas soluções são customizadas para verticais como <Link to="/segmentos" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">Saúde (Hospitais e Clínicas)</Link>, <Link to="/segmentos" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">Indústria</Link>, <Link to="/segmentos" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">Varejo</Link>, <Link to="/segmentos" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">Educação</Link> e <Link to="/segmentos" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">Setor Corporativo/Administrativo</Link>.</>
      },
      {
         question: "Quais tecnologias e fabricantes parceiros a Pronto trabalha?",
         answer: <>Trabalhamos apenas com equipamentos de linha profissional dos líderes globais de mercado. Para <Link to="/solucoes/impressao" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">impressão</Link>, utilizamos HP, Samsung, Brother e Ricoh. Em <Link to="/solucoes/computadores" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">computadores</Link>, somos parceiros Dell e Lenovo. Para <Link to="/solucoes/automacao" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">automação e térmica</Link>, utilizamos Zebra e Honeywell.</>
      },
      {
         question: "A Pronto oferece soluções para o setor de saúde?",
         answer: <>Sim, possuímos um <Link to="/segmentos" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">vertical especializado em Saúde</Link>. Oferecemos impressoras de pulseiras para triagem, equipamentos para impressão de exames de alta resolução (DICOM) e computadores para estações médicas, tudo com <Link to="/suporte" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">suporte 24/7</Link> conforme a criticidade do ambiente hospitalar.</>
      },
      {
         question: "Como posso contratar os serviços da Pronto?",
         answer: <>O processo é consultivo. <Link to="/contato" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-bold">Entre em contato através do nosso formulário</Link> ou telefone. Um de nossos especialistas fará um levantamento do seu parque atual e desenhará um projeto de redução de custos e atualização tecnológica. Após a aprovação, cuidamos de toda a implantação e treinamento.</>
      }
   ];


   const activeContent = segmentsData.find(s => s.id === activeSegment)!;

   return (
      <div className="flex flex-col bg-white">
         <Helmet>
            <title>Pronto Impressoras | Outsourcing de Impressão e TI no Rio de Janeiro</title>
            <meta name="description" content="Especialistas em outsourcing de impressão, computadores e automação de documentos para empresas no RJ e Brasil. Desde 2010. Reduza custos com tecnologia como serviço." />
            <link rel="canonical" href="https://prontoimpressoras.com.br/" />
         </Helmet>
         <SchemaMarkup schema={faqSchema} />

         {/* Hero Section - Matching Reference Image 1 (Dark Architectural) */}
         <div className="relative w-full h-[600px] lg:h-[700px] flex flex-col justify-center bg-zinc-900 text-white overflow-hidden">
            <HeroBackground images={heroImages} overlayClassName="bg-black/70" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
               <div className="max-w-4xl">
                  {/* Badge */}
                  <div className="inline-block py-1.5 px-4 rounded-full border border-lime-500/50 bg-white/5 backdrop-blur-sm mb-8">
                     <span className="text-lime-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                        Outsourcing B2B
                     </span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                     Eficiência que <br />
                     <span className="text-lime-400">escala seu negócio.</span>
                  </h1>

                  {/* Paragraph with Green Vertical Border */}
                  <div className="border-l-4 border-lime-500 pl-6 mb-10 max-w-2xl">
                     <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed">
                        Transforme custos fixos de impressão e TI em despesas variáveis inteligentes. Tecnologia como serviço para empresas que buscam alta performance.
                     </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-5">
                     <Link to="/contato" className="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded text-sm uppercase tracking-wide transition-all duration-300 shadow-lg shadow-blue-900/50 transform hover:-translate-y-1">
                        Falar com Consultor <ArrowRight className="w-4 h-4 ml-2" />
                     </Link>
                     <Link to="/quem-somos/sobre" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-white text-white font-bold rounded text-sm uppercase tracking-wide hover:bg-white/10 transition-all">
                        Conhecer a Pronto
                     </Link>
                  </div>
               </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="relative z-20 w-full bg-black/80 border-t border-white/10 backdrop-blur-md">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b md:border-b-0 border-white/10">
                     <div className="py-4 md:py-6 px-4 flex items-center gap-3 justify-center md:justify-start">
                        <Printer className="w-5 h-5 text-lime-400 shrink-0" />
                        <span className="text-sm font-bold text-slate-200">+12.000 Ativos Gerenciados</span>
                     </div>
                     <div className="py-4 md:py-6 px-4 flex items-center gap-3 justify-center md:justify-start">
                        <Globe className="w-5 h-5 text-lime-400 shrink-0" />
                        <span className="text-sm font-bold text-slate-200">Atendimento Nacional</span>
                     </div>
                     <div className="py-4 md:py-6 px-4 flex items-center gap-3 justify-center md:justify-start">
                        <Clock className="w-5 h-5 text-lime-400 shrink-0" />
                        <span className="text-sm font-bold text-slate-200">SLA Crítico de 4 Horas</span>
                     </div>
                     <div className="py-4 md:py-6 px-4 flex items-center gap-3 justify-center md:justify-start">
                        <Award className="w-5 h-5 text-lime-400 shrink-0" />
                        <span className="text-sm font-bold text-slate-200">Certificação ISO 27001</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Solutions Section - Matching Reference Image 2 (Tecnologia como serviço) */}
         <Section className="py-24 bg-slate-50">
            <div className="mb-12">
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Tecnologia como <span className="text-blue-600">serviço</span> <br className="hidden md:block" />
                  para sua empresa
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
               {/* Card 1: Print */}
               <Link to="/solucoes/impressao" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden bg-slate-200">
                     <img loading="lazy" src="/images/card-impressao.jpg" alt="Outsourcing de Impressão" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     <div className="absolute inset-x-0 bottom-0 bg-blue-900/90 backdrop-blur-sm py-2 px-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-xs font-bold uppercase tracking-wider">Impressão</p>
                     </div>
                  </div>
                  <div className="p-6 flex items-center justify-between flex-grow border-t border-slate-100">
                     <h3 className="text-base font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">Outsourcing de<br />Impressão</h3>
                     <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                     </div>
                  </div>
               </Link>

               {/* Card 2: Computers */}
               <Link to="/solucoes/computadores" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden bg-slate-200">
                     <img loading="lazy" src="/images/card-computadores.jpg" alt="Outsourcing de Computadores" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     <div className="absolute inset-x-0 bottom-0 bg-blue-900/90 backdrop-blur-sm py-2 px-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-xs font-bold uppercase tracking-wider">HaaS</p>
                     </div>
                  </div>
                  <div className="p-6 flex items-center justify-between flex-grow border-t border-slate-100">
                     <h3 className="text-base font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">Outsourcing de<br />Computadores</h3>
                     <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                     </div>
                  </div>
               </Link>

               {/* Card 3: Automation */}
               <Link to="/solucoes/automacao" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden bg-slate-200">
                     <img loading="lazy" src="/images/card-automacao.jpg" alt="Outsourcing de Automação" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     <div className="absolute inset-x-0 bottom-0 bg-blue-900/90 backdrop-blur-sm py-2 px-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-xs font-bold uppercase tracking-wider">Indústria & Varejo</p>
                     </div>
                  </div>
                  <div className="p-6 flex items-center justify-between flex-grow border-t border-slate-100">
                     <h3 className="text-base font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">Outsourcing de<br />Automação</h3>
                     <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                     </div>
                  </div>
               </Link>

               {/* Card 4: Marketing/ByPrice */}
               <Link to="/solucoes/marketing" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden bg-slate-200">
                     <img loading="lazy" src="/images/card-byprice.jpg" alt="ByPrice" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     <div className="absolute inset-x-0 bottom-0 bg-blue-900/90 backdrop-blur-sm py-2 px-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-xs font-bold uppercase tracking-wider">Marketing PDV</p>
                     </div>
                  </div>
                  <div className="p-6 flex items-center justify-between flex-grow border-t border-slate-100">
                     <h3 className="text-base font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">ByPrice<br />(Ofertas & Cartazes)</h3>
                     <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                     </div>
                  </div>
               </Link>

               {/* Card 5: GED */}
               <Link to="/solucoes/fluxos" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden bg-slate-200">
                     <img loading="lazy" src="/images/card-ged.jpg" alt="Gestão Eletrônica de Documentos" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     <div className="absolute inset-x-0 bottom-0 bg-blue-900/90 backdrop-blur-sm py-2 px-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-xs font-bold uppercase tracking-wider">Digitalização</p>
                     </div>
                  </div>
                  <div className="p-6 flex items-center justify-between flex-grow border-t border-slate-100">
                     <h3 className="text-base font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">Gestão Eletrônica<br />(GED)</h3>
                     <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                     </div>
                  </div>
               </Link>
            </div>
         </Section>

         {/* STATS SECTION - Matching specific reference with Frame Borders */}
         <section className="relative py-32 bg-slate-200 overflow-hidden">
            {/* Top Right Corner Decoration - L Shape */}
            <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none hidden md:block">
               {/* Horizontal Top-Right Green */}
               <div className="absolute top-12 right-12 w-64 h-3 bg-gradient-to-l from-lime-500 to-lime-400 rounded-full shadow-lg"></div>
               {/* Vertical Top-Right Blue */}
               <div className="absolute top-12 right-12 w-3 h-64 bg-gradient-to-b from-blue-900 to-blue-800 rounded-full shadow-lg"></div>
            </div>

            {/* Bottom Left Corner Decoration - L Shape Inverted */}
            <div className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none hidden md:block">
               {/* Horizontal Bottom-Left Blue Gradient */}
               <div className="absolute bottom-12 left-12 w-64 h-3 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full shadow-lg"></div>
               {/* Vertical Bottom-Left Green */}
               <div className="absolute bottom-12 left-12 w-3 h-64 bg-gradient-to-t from-blue-900 to-lime-500 rounded-full shadow-lg"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-20">
                  <span className="text-slate-500 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase block mb-3">SOMOS REFERÊNCIA</span>
                  <h2 className="text-4xl md:text-6xl font-bold text-blue-950 relative inline-block leading-tight">
                     nos mercados de <br className="md:hidden" />
                     <span className="relative inline-block ml-2 md:ml-0">
                        atuação
                        {/* Hand-drawn style underline */}
                        <svg className="absolute w-[110%] h-4 -bottom-2 -left-[5%] text-lime-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                           <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                        </svg>
                     </span>
                  </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto text-center">
                  {/* Stat 1 */}
                  <div className="flex flex-col items-center group">
                     <div className="text-7xl md:text-8xl font-bold text-blue-950 mb-2 flex items-start leading-none tracking-tighter">
                        14<span className="text-lime-500 text-5xl mt-2">+</span>
                     </div>
                     <div className="text-xl font-bold text-blue-900 mb-2">Anos</div>
                     <p className="text-slate-500 text-sm max-w-[180px] leading-relaxed mx-auto">experiência e solidez de mercado</p>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col items-center group">
                     <div className="text-7xl md:text-8xl font-bold text-blue-950 mb-2 leading-none tracking-tighter">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-950 to-lime-600">26</span>
                     </div>
                     <div className="text-xl font-bold text-blue-900 mb-2">Estados</div>
                     <p className="text-slate-500 text-sm max-w-[180px] leading-relaxed mx-auto">cobertura em todo território brasileiro</p>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex flex-col items-center group">
                     <div className="text-7xl md:text-8xl font-bold text-blue-950 mb-2 flex items-start leading-none tracking-tighter">
                        <span className="text-lime-500 text-5xl mt-3 mr-1">+</span>400
                     </div>
                     <div className="text-xl font-bold text-blue-900 mb-2">Empresas</div>
                     <p className="text-slate-500 text-sm max-w-[180px] leading-relaxed mx-auto">confiam em nossos serviços</p>
                  </div>
               </div>
            </div>
         </section>

         {/* NEW SECTION - QUEM SOMOS / GESTÃO ESTRATÉGICA */}
         <Section className="bg-slate-50 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               {/* Left Content */}
               <div>
                  <span className="text-lime-600 font-bold tracking-widest text-xs uppercase mb-2 block">QUEM SOMOS</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6 leading-tight">
                     Gestão estratégica de ativos <br />
                     para operações complexas.
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                     A <strong>Pronto</strong> não aluga apenas máquinas. Nós assumimos a responsabilidade pela continuidade da sua operação de documentos e TI.
                     Eliminamos o "Capex" (investimento em ativos) e a dor de cabeça da manutenção, entregando disponibilidade garantida em contrato (SLA) e previsibilidade financeira.
                  </p>

                  {/* Feature Cards */}
                  <div className="space-y-4">
                     <div className="flex items-start bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-blue-50 p-3 rounded-lg mr-4 shrink-0">
                           <TrendingDown className="w-6 h-6 text-blue-900" />
                        </div>
                        <div>
                           <h4 className="font-bold text-blue-950 text-lg mb-1">Redução de TCO comprovada</h4>
                           <p className="text-slate-600 text-sm">Reduzimos em média 30% do custo total de propriedade.</p>
                        </div>
                     </div>

                     <div className="flex items-start bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-blue-50 p-3 rounded-lg mr-4 shrink-0">
                           <ShieldCheck className="w-6 h-6 text-blue-900" />
                        </div>
                        <div>
                           <h4 className="font-bold text-blue-950 text-lg mb-1">Segurança da Informação</h4>
                           <p className="text-slate-600 text-sm">Discos criptografados e impressão segura com crachá.</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Image */}
               <div className="relative group">
                  <img
                     loading="lazy"
                     src="/images/quem-somos.jpg"
                     alt="Equipe colaborativa em reunião estratégica"
                     className="rounded-2xl shadow-2xl w-full object-cover h-[500px] lg:h-[600px] transform group-hover:scale-[1.01] transition-transform duration-500"
                  />
                  {/* Floating Badge */}
                  <div className="absolute bottom-8 left-0 bg-blue-900 p-8 rounded-r-xl shadow-xl max-w-[280px]">
                     <div className="text-5xl font-bold text-white mb-1 flex items-start">
                        14<span className="text-lime-400 text-3xl mt-1">+</span>
                     </div>
                     <div className="text-xs font-bold text-blue-200 uppercase tracking-widest">Anos de Excelência</div>
                  </div>
               </div>
            </div>
         </Section>

         {/* NEW BLUE BANNER CTA - MATCHING REFERENCE */}
         <section className="bg-blue-900 py-24 rounded-b-[60px] md:rounded-b-[80px] relative z-10">
            <div className="max-w-5xl mx-auto px-4 text-center">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
                  Conte com a Pronto para as mais <br className="hidden md:block" />
                  completas soluções de tecnologia
               </h2>
               <Link
                  to="/solucoes"
                  className="inline-flex items-center bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-lime-400 hover:text-blue-950 transition-all transform hover:-translate-y-1 shadow-xl text-sm tracking-widest uppercase"
               >
                  Ver Soluções <ArrowUpRight className="ml-2 w-5 h-5" />
               </Link>
            </div>
         </section>

         {/* INTERACTIVE SEGMENTS SECTION - REPLACING THE PREVIOUS GRID */}
         <section className="bg-blue-950 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               {/* Top Content Row */}
               <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
                  <div>
                     <span className="text-lime-500 font-bold uppercase tracking-widest text-xs mb-2 block">SEGMENTOS</span>
                     <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Para sua empresa</h2>
                  </div>
                  <div className="max-w-xl text-blue-200 text-lg leading-relaxed">
                     A terceirização da gestão de impressão e de equipamentos de tecnologia da Pronto Impressoras é uma ótima alternativa para as empresas reduzirem custos e aumentarem a eficiência.
                  </div>
               </div>

               {/* Interactive Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                  {/* Left Column: List */}
                  <div className="flex flex-col space-y-4">
                     {segmentsData.map((seg) => {
                        const isActive = activeSegment === seg.id;
                        return (
                           <Link
                              key={seg.id}
                              to={`/segmentos#${seg.id}`}
                              onMouseEnter={() => setActiveSegment(seg.id)}
                              onClick={(e) => {
                                 if (!isActive) {
                                    e.preventDefault();
                                    setActiveSegment(seg.id);
                                 }
                              }}
                              className={`
                                  group relative cursor-pointer transition-all duration-300 rounded-xl overflow-hidden block
                                  ${isActive ? 'bg-blue-900 shadow-lg py-8 px-8' : 'hover:bg-blue-900/30 py-6 px-4 border-b border-blue-800/30'}
                              `}
                           >
                              <div className="flex justify-between items-center relative z-10">
                                 <div className="flex flex-col">
                                    <h3 className={`text-2xl font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-200'}`}>
                                       {seg.label}
                                    </h3>
                                    <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                                       <p className="text-blue-200 text-sm">{seg.description}</p>
                                    </div>
                                 </div>

                                 {/* Arrow Button */}
                                 <div className={`
                                      flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                                      ${isActive ? 'bg-lime-500 rotate-0' : 'bg-blue-900/50 group-hover:bg-blue-800 -rotate-45'}
                                  `}>
                                    <ArrowRight className={`w-5 h-5 transition-colors ${isActive ? 'text-blue-950' : 'text-blue-400'}`} />
                                 </div>
                              </div>

                              {/* Left Accent Border for Active State */}
                              {isActive && (
                                 <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-lime-500"></div>
                              )}
                           </Link>
                        );
                     })}
                  </div>

                  {/* Right Column: Image Preview */}
                  <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-blue-900">
                     {segmentsData.map((seg) => (
                        <div
                           key={seg.id}
                           className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeSegment === seg.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                           <img
                              src={seg.image}
                              alt={seg.label}
                              className="w-full h-full object-cover"
                           />
                           {/* Gradient Overlay */}
                           <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent"></div>
                        </div>
                     ))}

                     {/* Badge Label */}
                     <div className="absolute bottom-8 left-8 z-20">
                        <div className="bg-lime-500 text-blue-950 font-bold px-6 py-3 rounded-full uppercase tracking-wider text-sm shadow-lg inline-block">
                           {activeContent.label}
                        </div>
                     </div>
                  </div>
               </div>

               {/* CTA */}
               <div className="mt-20 flex justify-center">
                  <Link
                     to="/contato"
                     className="inline-flex items-center gap-3 bg-white text-blue-950 px-10 py-4 rounded-full font-bold hover:bg-lime-400 transition-colors shadow-lg transform hover:-translate-y-1"
                  >
                     Solicitar cotação para {activeContent.label}
                     <ChevronRight className="w-5 h-5" />
                  </Link>
               </div>
            </div>
         </section>

         <BrandsMarquee />

         {/* FAQ SECTION */}
         <section className="bg-blue-900 py-24">
            <div className="max-w-4xl mx-auto px-4">
               <h2 className="text-3xl font-bold text-white text-center mb-12">Perguntas Frequentes sobre a Pronto:</h2>
               <FaqAccordion items={faqs} />
            </div>
         </section>

         {/* CTA Bottom */}
         <Section className="text-center py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Sua empresa pronta para o próximo nível?</h2>
               <p className="text-xl text-slate-600 mb-10">
                  Agende uma consultoria gratuita e descubra quanto sua empresa pode economizar.
               </p>
               <Link to="/contato" className="inline-block bg-blue-900 text-white font-bold py-4 px-12 rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Solicitar Orçamento
               </Link>
            </div>
         </Section>
      </div>
   );
};

export default Home;