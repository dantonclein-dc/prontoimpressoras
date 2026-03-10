import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';
import { Link } from 'react-router-dom';
import { FileText, Search, Lock, Share2, ChevronRight, ArrowUpRight, ArrowRight, Database, FileSignature, Printer, LayoutTemplate, Store } from 'lucide-react';

const WorkflowManagement: React.FC = () => {
  const heroImages = [
    "/images/card-ged.jpg"
  ];

  const [activeAdvantage, setActiveAdvantage] = useState('economia');
  const advantages = [
    { id: 'gestao', label: 'Gestão', title: 'Controle Total da Informação', description: 'Centralize todos os documentos da sua empresa em uma única plataforma. Tenha visibilidade completa sobre quem acessou, modificou ou aprovou cada arquivo, com relatórios detalhados de auditoria.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop' },
    { id: 'economia', label: 'Economia', title: 'Redução de Custos Reais', description: 'Transforme custos fixos com armazenamento físico em eficiência digital. Elimine gastos ocultos com espaço de arquivo, perda de documentos e tempo de busca. Nossos clientes economizam em média 30% em custos operacionais.', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop' },
    { id: 'flexibilidade', label: 'Flexibilidade', title: 'Acesso em Qualquer Lugar', description: 'Acesse seus documentos de forma segura através de qualquer dispositivo com internet. Facilite o trabalho remoto e a colaboração entre equipes distribuídas sem perder o controle da informação.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop' },
    { id: 'seguranca', label: 'Segurança', title: 'Proteção e Conformidade', description: 'Garanta a segurança dos seus dados com criptografia de ponta a ponta, controle de acesso granular e backups automáticos. Esteja em total conformidade com a LGPD e outras regulamentações do setor.', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop' },
    { id: 'tecnologia', label: 'Tecnologia', title: 'Inovação Contínua', description: 'Utilize o que há de mais moderno em inteligência artificial e OCR para extração automática de dados. Nossa plataforma evolui constantemente para oferecer as melhores ferramentas de gestão documental.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop' }
  ];
  const currentAdvantage = advantages.find(a => a.id === activeAdvantage) || advantages[0];

  const [activeEquipment, setActiveEquipment] = useState('scanners');
  const equipments = [
    { id: 'scanners', label: 'Scanners de Alta Produção', image: 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2076&auto=format&fit=crop' },
    { id: 'multifuncionais', label: 'Multifuncionais Inteligentes', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop' },
    { id: 'software', label: 'Software GED em Nuvem', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
    { id: 'mobile', label: 'Soluções de Captura Mobile', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop' }
  ];
  const currentEquipment = equipments.find(e => e.id === activeEquipment) || equipments[0];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Como a digitalização garante a validade jurídica dos documentos?",
      answer: "Utilizamos processos de digitalização com certificação digital no padrão ICP-Brasil, garantindo que o documento digital tenha a mesma validade legal do documento físico original, conforme a legislação vigente."
    },
    {
      question: "O sistema GED é seguro contra acessos não autorizados?",
      answer: "Sim. Nossa plataforma possui controle rigoroso de acesso baseado em perfis e permissões, criptografia de ponta a ponta, trilhas de auditoria (logs de acesso e edição) e backups automatizados em nuvem de alta segurança."
    },
    {
      question: "Como funciona a busca de documentos no sistema?",
      answer: "O sistema utiliza tecnologia OCR (Reconhecimento Óptico de Caracteres) que torna o texto das imagens pesquisável. Você pode localizar qualquer documento instantaneamente digitando palavras-chave, datas, nomes ou números de contrato."
    },
    {
      question: "É possível integrar o GED com nosso ERP atual?",
      answer: "Sim, nossa solução possui APIs abertas e integrações nativas com os principais sistemas de gestão (ERPs), CRMs e sistemas de RH do mercado, permitindo um fluxo de informações contínuo entre as plataformas."
    },
    {
      question: "Qual o tempo médio de implantação do sistema?",
      answer: <>O tempo de implantação varia conforme o volume de documentos legados a serem digitalizados e a complexidade dos fluxos de trabalho (workflows). Projetos iniciais podem ser configurados e disponibilizados em poucas semanas. <Link to="/contato" className="text-[#1a2b5c] hover:text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-bold">Fale com um consultor</Link> para uma estimativa precisa.</>
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      <Helmet>
        <title>Gestão de Fluxos e GED | Automação Documental Corporativa | Pronto Impressoras</title>
        <meta name="description" content="Automatize fluxos de aprovação e gestão eletrônica de documentos corporativos. Reduza papel, ganhe rastreabilidade e eficiência operacional." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/solucoes/fluxos" />
      </Helmet>
      {/* Hero */}
      <div className="relative bg-blue-950 py-20 text-white overflow-hidden">
        <HeroBackground images={heroImages} overlayClassName="bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4 block">GED & Digitalização</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gestão de Fluxos de Trabalho</h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto drop-shadow-md">
            Elimine o papel, automatize processos e garanta conformidade legal com nossas soluções de GED (Gestão Eletrônica de Documentos).
          </p>
        </div>
      </div>

      {/* Content */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute top-0 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2071&auto=format&fit=crop"
              alt="Tablet com documentos"
              className="rounded-2xl shadow-xl w-full relative z-10"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Do arquivo físico para a inteligência digital.</h2>
            <p className="text-lg text-slate-600">
              Armazenar papel é caro e inseguro. Nossa solução de workflow captura o documento na origem (scanner ou e-mail), extrai os dados via OCR e inicia o processo de aprovação automaticamente.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <Search className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900">Indexação Inteligente</h3>
                <p className="text-sm text-slate-600">Encontre qualquer contrato em segundos por palavra-chave.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <Lock className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900">Segurança Jurídica</h3>
                <p className="text-sm text-slate-600">Controle de versão, trilha de auditoria e assinatura digital.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <Share2 className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900">Workflow Automático</h3>
                <p className="text-sm text-slate-600">Aprovação de pagamentos e contratos sem trâmite físico.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <FileText className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900">Captura Descentralizada</h3>
                <p className="text-sm text-slate-600">Digitalize via celular, multifuncional ou scanner dedicado.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Text Block */}
      <Section className="text-center bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-8 leading-tight">
            Como funciona a agilidade na <br className="hidden md:block" />
            gestão de documentos?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            A dinâmica corporativa requer respostas imediatas e acesso rápido à informação. Depender de arquivos físicos e processos manuais gera atrasos que impactam diretamente a produtividade e o faturamento. Com a nossa solução integrada de GED, sua equipe ganha a capacidade de digitalizar, indexar e gerenciar todos os documentos internamente, assegurando que a informação esteja disponível exatamente quando necessário, com total segurança e rastreabilidade.
          </p>
        </div>
      </Section>

      {/* Possibilidades de Serviços Ofertados */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Possibilidades de Serviços Ofertados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
              <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                <Printer className="w-16 h-16 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digitalização de Acervos</h3>
              <p className="text-slate-600 text-sm">Conversão de arquivos físicos para o formato digital com indexação inteligente e OCR para busca rápida.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
              <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                <LayoutTemplate className="w-16 h-16 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Software GED em Nuvem</h3>
              <p className="text-slate-600 text-sm">Plataforma centralizada para armazenamento, controle de versão e gestão de permissões de acesso aos documentos.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
              <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                <Store className="w-16 h-16 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Assinatura Digital e Workflow</h3>
              <p className="text-slate-600 text-sm">Automação de fluxos de aprovação e integração com certificados digitais para validade jurídica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens da gestão eletrônica */}
      <section className="py-24 bg-[#f0f5fa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">
              VANTAGENS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] leading-tight">
              Vantagens da gestão eletrônica
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white min-h-[600px]">
            {/* Left Column: List */}
            <div className="w-full lg:w-[35%] flex flex-col border-r border-slate-200">
              {advantages.map((adv) => {
                const isActive = activeAdvantage === adv.id;
                return (
                  <button
                    key={adv.id}
                    onClick={() => setActiveAdvantage(adv.id)}
                    className={`
                      group flex items-center justify-between py-5 px-6 text-left transition-all duration-300 outline-none border-b border-slate-200 last:border-b-0 flex-1
                      ${isActive ? 'bg-white' : 'bg-slate-50 hover:bg-slate-100'}
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
            <div className="w-full lg:w-[65%] p-8 md:p-12 flex flex-col justify-start transition-all duration-500 bg-white">
              <div className="max-w-xl w-full animate-in fade-in zoom-in duration-500" key={currentAdvantage.id}>
                <div className="mb-8 relative">
                  <img
                    src={currentAdvantage.image}
                    alt={currentAdvantage.title}
                    className="w-full h-64 object-cover rounded-xl shadow-sm"
                  />
                  <div className="absolute bottom-4 left-4 bg-lime-400 text-[#1e3a8a] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {currentAdvantage.label}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4">
                  {currentAdvantage.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed mb-8 min-h-[80px]">
                  {currentAdvantage.description}
                </p>

                <Link
                  to="/contato"
                  className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group text-sm"
                >
                  Falar com especialista
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos (Dark Navy) */}
      <section className="bg-[#1a2b5c] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: List */}
            <div>
              <span className="text-[#a3e635] font-bold tracking-widest text-xs uppercase mb-2 block">ALTA PERFORMANCE</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Equipamentos e Softwares</h2>

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
              Perguntas Frequentes sobre Gestão Eletrônica de Documentos:
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
              Precisa modernizar a gestão de documentos da sua empresa?
            </h2>
            <Link to="/contato" className="inline-block bg-white text-[#1a2b5c] font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition-colors text-sm">
              Falar com Consultor de GED
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkflowManagement;