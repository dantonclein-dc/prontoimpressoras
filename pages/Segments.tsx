import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroBackground from '../components/HeroBackground';
import { Building2, Stethoscope, GraduationCap, Factory, ShoppingCart, ArrowRight, CheckCircle2, Layers, Monitor, Printer, FileText, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type Solution = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type SegmentData = {
  id: string;
  label: string;
  icon: React.ElementType;
  image: string;
  context: string;
  solutions: Solution[];
  integration: string;
  benefits: string[];
  advantages: string[];
};

const Segments: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState('corporativo');
  const location = useLocation();

  const segmentsData: SegmentData[] = [
    {
      id: 'corporativo',
      label: 'Corporativo & Escritórios',
      icon: Building2,
      image: "/images/seg-corporativo.jpg",
      context: "Escritórios de advocacia, contabilidade e sedes administrativas lidam com alto volume de informações sensíveis. O desafio é garantir a segurança dos dados (LGPD), reduzir custos operacionais e aumentar a produtividade das equipes, eliminando gargalos tecnológicos.",
      solutions: [
        { icon: Printer, title: "Outsourcing de Impressão", description: "Impressão segura com retenção na nuvem, bilhetagem por departamento e controle rigoroso de custos." },
        { icon: Monitor, title: "Outsourcing de TI", description: "Locação de notebooks de alta performance e desktops padronizados, garantindo mobilidade e segurança." },
        { icon: FileText, title: "Gestão de Documentos (GED)", description: "Digitalização de contratos, assinaturas eletrônicas e fluxos de aprovação automatizados." }
      ],
      integration: "Ao integrar Impressão, TI e GED, sua empresa cria um ecossistema onde um contrato nasce digitalmente, tramita com segurança, é assinado eletronicamente e, se necessário, impresso com controle total de acesso e custos.",
      benefits: [
        "Redução de até 30% nos custos operacionais de TI e impressão.",
        "Conformidade total com a LGPD no manuseio de documentos.",
        "Fim do tempo perdido com falhas de equipamentos."
      ],
      advantages: [
        "Custos previsíveis com fatura única mensal.",
        "Suporte proativo com SLA rigoroso (zero downtime).",
        "Foco 100% no core business da sua empresa."
      ]
    },
    {
      id: 'saude',
      label: 'Saúde & Hospitais',
      icon: Stethoscope,
      image: "/images/seg-saude.jpg",
      context: "Hospitais, clínicas e laboratórios operam em ambientes críticos de 24/7. A tecnologia não pode falhar. A gestão eficiente de prontuários, exames e pulseiras de identificação é vital para a segurança do paciente e a agilidade do atendimento.",
      solutions: [
        { icon: Printer, title: "Impressão Especializada", description: "Impressoras térmicas para pulseiras/etiquetas e equipamentos rápidos para prescrições e exames." },
        { icon: Monitor, title: "Infraestrutura de TI", description: "Workstations para prontuários eletrônicos e dispositivos móveis para o corpo clínico." },
        { icon: FileText, title: "Digitalização de Prontuários", description: "Conversão de arquivos físicos (SAME) para o formato digital com validade legal e busca instantânea." }
      ],
      integration: "A união de nossos serviços garante uma jornada do paciente sem interrupções: desde a emissão rápida da pulseira na recepção, passando pelo acesso imediato ao prontuário digital no consultório, até a impressão de receitas sem falhas.",
      benefits: [
        "Atendimento ao paciente mais ágil e seguro.",
        "Eliminação de arquivos físicos e liberação de espaço nobre.",
        "Disponibilidade 24/7 dos equipamentos críticos."
      ],
      advantages: [
        "Equipamentos de backup on-site para áreas críticas.",
        "Atendimento técnico especializado em ambientes hospitalares.",
        "Conformidade com normas da ANS e Ministério da Saúde."
      ]
    },
    {
      id: 'educacao',
      label: 'Educação',
      icon: GraduationCap,
      image: "/images/seg-educacao.jpg",
      context: "Escolas e universidades enfrentam picos sazonais de impressão (provas, apostilas) e precisam gerenciar o acesso de milhares de alunos e professores à tecnologia, tudo isso com orçamentos controlados e necessidade de modernização constante.",
      solutions: [
        { icon: Printer, title: "Impressão de Alto Volume", description: "Equipamentos de produção para provas e liberação de impressão via crachá para alunos e professores." },
        { icon: Monitor, title: "TI para Educação", description: "Montagem de laboratórios de informática, notebooks para professores e telas interativas." },
        { icon: FileText, title: "Secretaria Digital", description: "Digitalização de acervos acadêmicos e automação do fluxo de matrículas e diplomas." }
      ],
      integration: "Transformamos o campus em um ambiente inteligente: o aluno usa o mesmo crachá para acessar o laboratório de TI e liberar suas impressões, enquanto a secretaria gerencia toda a documentação de forma 100% digital e integrada.",
      benefits: [
        "Controle absoluto do desperdício de papel e cotas de impressão.",
        "Laboratórios sempre atualizados sem necessidade de compra de equipamentos.",
        "Agilidade na emissão de documentos acadêmicos."
      ],
      advantages: [
        "Possibilidade de repasse de custos de impressão (bilhetagem para alunos).",
        "Suporte reforçado durante períodos de provas e matrículas.",
        "Renovação tecnológica programada."
      ]
    },
    {
      id: 'industria',
      label: 'Indústria & Logística',
      icon: Factory,
      image: "/images/seg-industria.jpg",
      context: "O chão de fábrica e os centros de distribuição são ambientes hostis para a tecnologia, mas exigem operação ininterrupta. Uma impressora de etiquetas parada ou um terminal de expedição inoperante significa prejuízo imediato na cadeia de suprimentos.",
      solutions: [
        { icon: Printer, title: "Impressão Industrial", description: "Impressoras robustas de código de barras, etiquetas térmicas e documentos de expedição (DANFE)." },
        { icon: Monitor, title: "TI Robusta", description: "Terminais de apontamento de produção, tablets industriais e infraestrutura de rede resiliente." },
        { icon: FileText, title: "Gestão de XML e Notas", description: "Captura e arquivamento automático de notas fiscais, canhotos e documentos de transporte." }
      ],
      integration: "Nossa solução ponta a ponta garante que o produto seja bipado no terminal de TI, a etiqueta seja impressa instantaneamente na linha de produção e o canhoto de entrega seja digitalizado e arquivado automaticamente no sistema.",
      benefits: [
        "Zero paradas na linha de produção por falha de TI.",
        "Rastreabilidade completa de documentos logísticos.",
        "Redução de erros na expedição e faturamento."
      ],
      advantages: [
        "Equipamentos projetados para poeira, calor e uso intenso.",
        "Manutenção preventiva rigorosa para evitar quebras.",
        "SLA de substituição imediata de equipamentos críticos."
      ]
    },
    {
      id: 'varejo',
      label: 'Varejo & Franquias',
      icon: ShoppingCart,
      image: "/images/seg-varejo.jpg",
      context: "Redes varejistas possuem operações descentralizadas. O grande desafio é padronizar a tecnologia em dezoito, cinquenta ou centenas de lojas, garantindo que o PDV nunca pare e que a comunicação visual e administrativa seja eficiente.",
      solutions: [
        { icon: Printer, title: "Impressão para PDV e Backoffice", description: "Impressoras de cupom fiscal, multifuncionais para retaguarda e impressão de cartazes de ofertas." },
        { icon: Monitor, title: "TI Padronizada", description: "Computadores para PDV, notebooks para gerentes e infraestrutura de rede Wi-Fi padronizada." },
        { icon: FileText, title: "RH e Contratos Centralizados", description: "Digitalização de dossiês de funcionários e contratos de locação, acessíveis pela matriz." }
      ],
      integration: "Oferecemos o modelo 'Loja in a Box': entregamos toda a infraestrutura de TI e impressão configurada e padronizada para novas filiais, enquanto a matriz controla todos os documentos e custos de forma centralizada.",
      benefits: [
        "Abertura de novas lojas de forma muito mais rápida (Plug & Play).",
        "Padronização tecnológica em toda a rede.",
        "Redução drástica do overhead de TI para gerenciar filiais."
      ],
      advantages: [
        "Ponto único de contato (SPOC) para suporte de todas as lojas.",
        "Faturamento simplificado e centralizado.",
        "Logística reversa e substituição de equipamentos em todo o território."
      ]
    }
  ];

  const activeContent = segmentsData.find(s => s.id === activeSegment)!;

  useEffect(() => {
    if (location.hash) {
      const key = location.hash.replace('#', '');
      if (segmentsData.some(s => s.id === key)) {
        setActiveSegment(key);
        setTimeout(() => {
          const el = document.getElementById('portfolio-section');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <Helmet>
        <title>Segmentos Atendidos | Saúde, Indústria, Varejo e mais | Pronto Impressoras</title>
        <meta name="description" content="A Pronto Impressoras atende empresas de diversos segmentos: Saúde, Educação, Indústria, Varejo e Corporativo. Soluções personalizadas de outsourcing de TI para cada setor." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/segmentos" />
      </Helmet>
      {/* Hero */}
      <div className="relative bg-[#0a192f] py-24 text-white overflow-hidden">
        <HeroBackground images={[activeContent.image]} overlayClassName="bg-[#0a192f]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-lime-400 font-bold uppercase tracking-widest text-sm mb-4 block">PORTFÓLIO DE SERVIÇOS POR SETOR</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Soluções Estratégicas<br />para o seu Segmento</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Entendemos as dores específicas do seu negócio. Descubra como nossa infraestrutura de TI, Impressão e Gestão de Documentos pode transformar sua operação.
          </p>
        </div>
      </div>

      {/* Segment Selector (Tabs) */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar py-4 gap-2 md:justify-center">
            {segmentsData.map((seg) => {
              const Icon = seg.icon;
              const isActive = activeSegment === seg.id;
              return (
                <button
                  key={seg.id}
                  onClick={() => setActiveSegment(seg.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300
                    ${isActive
                      ? 'bg-[#1a2b5c] text-white shadow-md transform scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
                  `}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-lime-400' : ''}`} />
                  {seg.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section id="portfolio-section" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Context & Intro */}
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#1a2b5c] rounded-2xl flex items-center justify-center shadow-lg">
                <activeContent.icon className="w-8 h-8 text-lime-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2b5c]">
                {activeContent.label}
              </h2>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-lime-500"></div>
              <h3 className="text-xl font-bold text-[#1a2b5c] mb-4">O Cenário e o Desafio</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {activeContent.context}
              </p>
            </div>
          </div>

          {/* Solutions Portfolio */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1a2b5c] mb-8 text-center">Portfólio de Soluções Aplicadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activeContent.solutions.map((sol, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-slate-100 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1a2b5c] transition-colors duration-300">
                    <sol.icon className="w-8 h-8 text-[#1a2b5c] group-hover:text-lime-400 transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a2b5c] mb-4">{sol.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{sol.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Power of Integration */}
          <div className="mb-16 bg-gradient-to-br from-[#1a2b5c] to-[#0a192f] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <Layers className="w-64 h-64" />
            </div>
            <div className="relative z-10 md:w-2/3">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-lime-400" />
                <h3 className="text-2xl md:text-3xl font-bold">A Força da Integração</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {activeContent.integration}
              </p>
            </div>
          </div>

          {/* Benefits & Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Benefits */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold text-[#1a2b5c] mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center text-lime-600">
                  <CheckCircle2 className="w-6 h-6" />
                </span>
                Benefícios Diretos
              </h3>
              <ul className="space-y-4">
                {activeContent.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-lime-500 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advantages */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold text-[#1a2b5c] mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <ArrowRight className="w-6 h-6" />
                </span>
                Vantagens Competitivas
              </h3>
              <ul className="space-y-4">
                {activeContent.advantages.map((advantage, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1a2b5c] mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 font-medium">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Persuasive CTA */}
          <div className="bg-lime-500 rounded-3xl p-10 md:p-16 text-center shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2b5c] mb-6">
              Pronto para transformar a operação do setor {activeContent.label.split(' ')[0]}?
            </h2>
            <p className="text-xl text-[#1a2b5c]/80 mb-10 max-w-3xl mx-auto font-medium">
              Pare de perder tempo e dinheiro com gestão de equipamentos e documentos. Deixe a tecnologia com a Pronto Impressoras e foque no crescimento do seu negócio.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-3 bg-[#1a2b5c] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#0a192f] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Falar com um Especialista em {activeContent.label.split(' ')[0]}
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Segments;