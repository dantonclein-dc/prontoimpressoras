import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';
import { Printer, Monitor, FileText, BarChart3, Shield, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", // Tech server
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Cybersecurity
    "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop" // Modern Office
  ];

  const solutions = [
    {
      id: "outsourcing-impressao",
      icon: <Printer className="w-12 h-12 text-white" />,
      title: "Outsourcing de Impressão",
      description: "Terceirização completa do parque de impressoras, multifuncionais e scanners.",
      details: [
        "Fornecimento de equipamentos de alta performance.",
        "Gestão proativa de suprimentos (toner).",
        "Manutenção preventiva e corretiva inclusa.",
        "SLA de atendimento agressivo.",
        "Software de bilhetagem para controle de custos."
      ],
      image: "https://picsum.photos/seed/copier/800/600"
    },
    {
      id: "locacao-ti",
      icon: <Monitor className="w-12 h-12 text-white" />,
      title: "Outsourcing de TI (HaaS)",
      description: "Hardware as a Service: Notebooks, Desktops e Servidores para sua equipe.",
      details: [
        "Eliminação do custo de imobilizado (Capex para Opex).",
        "Atualização tecnológica constante.",
        "Configuração personalizada por perfil de usuário.",
        "Substituição imediata em caso de falha.",
        "Gestão do ciclo de vida do ativo."
      ],
      image: "https://picsum.photos/seed/laptops/800/600"
    },
    {
      id: "ged",
      icon: <FileText className="w-12 h-12 text-white" />,
      title: "Gestão Eletrônica de Documentos (GED)",
      description: "Digitalização e fluxos de trabalho inteligentes para reduzir papel.",
      details: [
        "Captura e indexação automática de documentos.",
        "Armazenamento seguro em nuvem.",
        "Controle de versão e acesso.",
        "Assinatura digital integrada.",
        "Redução drástica de espaço físico de arquivo."
      ],
      image: "https://picsum.photos/seed/documents/800/600"
    }
  ];

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Soluções de Outsourcing de TI | Impressão, Computadores e GED | Pronto</title>
        <meta name="description" content="Conheça todas as soluções de outsourcing de TI da Pronto Impressoras: impressão, computadores (HaaS), automação de documentos (GED) e suporte técnico para empresas." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/solucoes" />
      </Helmet>
       <div className="relative bg-blue-950 py-24 text-white overflow-hidden">
        <HeroBackground images={heroImages} overlayClassName="bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossas Soluções</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Tecnologia de ponta e gestão especializada para sua empresa ganhar competitividade.
          </p>
        </div>
      </div>

      {solutions.map((sol, index) => (
        <Section key={sol.id} bg={index % 2 === 0 ? 'white' : 'gray'}>
          <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <div className="inline-flex items-center justify-center p-4 bg-blue-800 rounded-xl mb-6 shadow-lg">
                {sol.icon}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{sol.title}</h2>
              <p className="text-lg text-slate-600 mb-6">{sol.description}</p>
              
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4 uppercase tracking-wide text-sm">O que está incluído:</h3>
                <ul className="space-y-3">
                  {sol.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-2 w-2 mt-2 rounded-full bg-lime-500 mr-3"></div>
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/contato"
                  className="inline-flex items-center font-semibold text-blue-800 hover:text-blue-600 border-b-2 border-blue-800 hover:border-blue-600 pb-1 transition-all"
                >
                  Solicitar cotação para {sol.title} <BarChart3 className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={sol.image} 
                alt={sol.title} 
                className="rounded-xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Diferenciais da Nossa Operação</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
                <Wrench className="w-8 h-8 text-blue-900 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-blue-900">Suporte Preventivo</h3>
                <p className="text-slate-600">Não esperamos quebrar. Monitoramos os equipamentos 24/7 para agir antes da falha.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
                <Shield className="w-8 h-8 text-blue-900 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-blue-900">Segurança de Dados</h3>
                <p className="text-slate-600">Discos rígidos criptografados nas impressoras e limpeza segura de dados ao fim do contrato.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
                <BarChart3 className="w-8 h-8 text-blue-900 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-blue-900">Transparência</h3>
                <p className="text-slate-600">Relatórios mensais detalhados de consumo por centro de custo, usuário ou departamento.</p>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Solutions;