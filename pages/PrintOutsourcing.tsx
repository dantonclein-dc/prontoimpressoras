import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';
import { Link } from 'react-router-dom';
import { Printer, TrendingDown, Settings, ShieldCheck, ArrowRight, ChevronRight, ArrowUpRight, Search, Truck, BarChart3, AlertCircle, CheckCircle2, Plus, Copy, Receipt, Scan } from 'lucide-react';

const PrintOutsourcing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('economia');
  const [activeEquipmentTab, setActiveEquipmentTab] = useState('impressoras');
  
  // Estados para controlar a expansão dos cards individualmente
  const [isHGExpanded, setIsHGExpanded] = useState(false);
  const [isMPSExpanded, setIsMPSExpanded] = useState(false);

  const heroImages = [
    "https://images.unsplash.com/photo-1563923583196-85750059c277?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2070&auto=format&fit=crop"
  ];

  const benefits = [
    {
      id: 'economia',
      label: 'Economia',
      title: 'Redução de Custos Reais',
      description: 'Transforme custos fixos (Capex) em variáveis (Opex). Elimine gastos ocultos com estoques de toner, peças e chamados técnicos avulsos. Nossos clientes economizam em média 30%.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop'
    },
    {
      id: 'flexibilidade',
      label: 'Flexibilidade',
      title: 'Gestão Simplificada',
      description: 'Nos responsabilizamos por todo o serviço e pela gestão do hardware. Aumente ou reduza o parque conforme a demanda sazonal da sua empresa sem burocracia.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'seguranca',
      label: 'Segurança',
      title: 'Proteção de Dados e Acesso',
      description: 'Impressão segura com liberação via crachá ou PIN. Criptografia de disco rígido e protocolos de segurança alinhados à LGPD para proteger informações sensíveis.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee46a38569?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'tecnologia',
      label: 'Tecnologia',
      title: 'Parque Sempre Atualizado',
      description: 'Esqueça equipamentos obsoletos. Garantimos atualização tecnológica constante (refresh) para manter a alta performance da sua equipe e qualidade de impressão.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const equipments = [
    {
      id: 'impressoras',
      label: 'Impressoras',
      image: 'https://freepngimg.com/thumb/printer/5-2-printer-png-hd.png'
    },
    {
      id: 'multifuncionais',
      label: 'Multifuncionais',
      image: 'https://freepngimg.com/thumb/printer/6-2-printer-transparent.png'
    },
    {
      id: 'termicas',
      label: 'Impressoras térmicas',
      image: 'https://freepngimg.com/thumb/printer/8-2-printer-picture.png'
    },
    {
      id: 'scanners',
      label: 'Scanners',
      image: 'https://freepngimg.com/thumb/printer/1-2-printer-png.png'
    }
  ];

  const activeBenefit = benefits.find(b => b.id === activeTab) || benefits[0];

  return (
    <div className="flex flex-col bg-white">
      <Helmet>
        <title>Outsourcing de Impressão RJ | Aluguel de Impressoras para Empresas | Pronto</title>
        <meta name="description" content="Outsourcing de impressão corporativa no Rio de Janeiro. Impressoras e multifuncionais com toner, manutenção e suporte técnico inclusos. Reduza custos com MPS." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/solucoes/impressao" />
      </Helmet>
      {/* Hero */}
      <div className="relative bg-blue-950 py-20 text-white overflow-hidden">
        <HeroBackground images={heroImages} overlayClassName="bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4 block">Soluções Corporativas</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Outsourcing de Impressão (MPS)</h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto drop-shadow-md">
            Assumimos a gestão completa do seu parque de impressão. Reduza custos, elimine estoque de suprimentos e garanta alta disponibilidade.
          </p>
        </div>
      </div>

      {/* Intro Section (Image + Grid) */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b5c] leading-tight">
              Sua operação não pode parar por falta de impressão.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Em escritórios, indústrias e hospitais, uma impressora parada significa atraso em contratos, faturamento ou exames. Nosso modelo de outsourcing garante equipamentos de backup, suprimentos proativos e manutenção expressa.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-50 p-4 rounded-xl flex items-center border border-slate-100">
                <Printer className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-sm">Impressoras Corporativas</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl flex items-center border border-slate-100">
                <Copy className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-sm">Multifuncionais</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl flex items-center border border-slate-100">
                <Receipt className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-sm">Impressoras Térmicas</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl flex items-center border border-slate-100">
                <Scan className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-sm">Scanners Profissionais</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1622675235450-482a0d0d6195?q=80&w=2070&auto=format&fit=crop" 
              alt="Gestão de impressão profissional" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </Section>

      {/* Como funciona (High Contrast Dark Section) */}
      <section className="bg-blue-950 py-24 relative overflow-hidden text-white">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <span className="text-lime-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">METODOLOGIA PRONTO</span>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
               Como funciona nosso <br/> Outsourcing de Impressão?
             </h2>
             <p className="text-lg text-blue-100 leading-relaxed">
               Adotamos o modelo <strong>HaaS (Hardware as a Service)</strong>. Simplificamos sua operação de impressão gerenciando todo o ciclo de vida do documento com segurança total.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {/* Step 1 */}
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/50 border border-blue-700">
                   <Search className="w-8 h-8 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">1. Diagnóstico</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                   Mapeamos seu parque atual, identificamos gargalos de custo e desenhamos o projeto ideal de equipamentos.
                </p>
             </div>

             {/* Step 2 */}
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/50 border border-blue-700">
                   <Truck className="w-8 h-8 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2. Implantação</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                   Instalamos os equipamentos novos, configuramos softwares de gestão e treinamos sua equipe.
                </p>
             </div>

             {/* Step 3 */}
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/50 border border-blue-700">
                   <BarChart3 className="w-8 h-8 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3. Gestão Proativa</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                   Monitoramos suprimentos e alertas técnicos remotamente. O toner chega antes de acabar.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
            <Settings className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-slate-900">Manutenção Inclusa</h3>
            <p className="text-slate-600">
              Preventiva e corretiva. Peças e mão de obra 100% cobertas pelo contrato. SLA de atendimento rápido.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
            <ShieldCheck className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-slate-900">Gestão de Suprimentos</h3>
            <p className="text-slate-600">
              Monitoramento remoto de níveis de toner. O suprimento chega antes de acabar, sem você precisar pedir.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
            <TrendingDown className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-slate-900">Controle de Custos</h3>
            <p className="text-slate-600">
              Saiba quem imprime, o que imprime e quanto custa. Defina cotas e políticas de impressão (P&B/Cor).
            </p>
          </div>
        </div>
      </Section>

      {/* Vantagens de Terceirizar (Interactive Tabs with Images) */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-10">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">VANTAGENS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Vantagens de terceirizar</h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-5 border border-slate-300 rounded-lg overflow-hidden bg-white shadow-lg">
              {/* Left Column: Navigation */}
              <div className="lg:col-span-2 bg-slate-100 flex flex-col divide-y divide-slate-200 border-r border-slate-200">
                 {benefits.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                       <button
                          key={item.id}
                          onClick={() => setActiveTab(item.id)}
                          className={`
                             group flex items-center justify-between p-6 text-left transition-all duration-300
                             ${isActive ? 'bg-white' : 'hover:bg-slate-200/50'}
                          `}
                       >
                          <span className={`text-lg font-bold ${isActive ? 'text-blue-900' : 'text-slate-500'}`}>
                             {item.label}
                          </span>
                          <div className={`
                             w-8 h-8 rounded flex items-center justify-center transition-colors
                             ${isActive ? 'bg-blue-900 text-white' : 'bg-slate-300 text-slate-500'}
                          `}>
                             <ChevronRight className="w-5 h-5" />
                          </div>
                       </button>
                    );
                 })}
              </div>

              {/* Right Column: Content with Image */}
              <div className="lg:col-span-3 bg-white p-8 md:p-12 flex flex-col justify-center">
                 <div className="animate-fadeIn">
                    <div className="relative h-64 w-full rounded-xl overflow-hidden mb-8 shadow-md">
                       <img 
                          src={activeBenefit.image} 
                          alt={activeBenefit.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-60"></div>
                       <div className="absolute bottom-4 left-4">
                          <span className="bg-lime-500 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            {activeBenefit.label}
                          </span>
                       </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4">{activeBenefit.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                       {activeBenefit.description}
                    </p>
                    <Link to="/contato" className="inline-flex items-center font-bold text-blue-700 hover:text-blue-900 transition-colors group">
                       Falar com especialista 
                       <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Equipamentos (Dark Navy) */}
      <section className="bg-blue-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: List */}
              <div>
                 <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2 block">ALTA PERFORMANCE</span>
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Equipamentos</h2>

                 <div className="flex flex-col">
                    {equipments.map((item) => {
                       const isActive = activeEquipmentTab === item.id;
                       return (
                          <button
                             key={item.id}
                             onClick={() => setActiveEquipmentTab(item.id)}
                             className={`
                                group flex items-center justify-between py-6 border-b border-blue-800 transition-all duration-300 outline-none
                                ${isActive ? 'opacity-100 pl-4 border-l-4 border-l-lime-500 bg-blue-900/20' : 'opacity-60 hover:opacity-100 hover:pl-2'}
                             `}
                          >
                             <span className="text-2xl md:text-3xl font-bold text-white">{item.label}</span>
                             <div className={`
                                w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                                ${isActive ? 'bg-lime-500 text-blue-950' : 'bg-blue-900 text-blue-400 group-hover:bg-blue-800'}
                             `}>
                                <ChevronRight className="w-6 h-6" />
                             </div>
                          </button>
                       )
                    })}
                 </div>

                 <div className="mt-12">
                    <Link to="/contato" className="inline-flex items-center text-lime-400 font-bold hover:text-lime-300 transition-colors tracking-wide uppercase text-sm group">
                       Quero contratar <ArrowUpRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>

              {/* Right Column: Image Card */}
              <div className="relative">
                 {/* Decorative background blur */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

                 <div className="bg-white rounded-[2rem] p-8 md:p-12 h-[500px] flex items-center justify-center shadow-2xl overflow-hidden relative z-10">
                    {equipments.map((item) => (
                       <div 
                          key={item.id}
                          className={`absolute inset-0 flex items-center justify-center p-12 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) transform ${
                             activeEquipmentTab === item.id 
                                ? 'opacity-100 scale-100 translate-x-0' 
                                : 'opacity-0 scale-95 translate-x-12 pointer-events-none'
                          }`}
                       >
                          <img 
                             src={item.image} 
                             alt={item.label} 
                             className="max-w-full max-h-full object-contain drop-shadow-2xl"
                          />
                       </div>
                    ))}
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* HG360 & MPS Comparativo */}
      <section className="bg-blue-50 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Card HG360 */}
               <div className="border border-blue-900 bg-white flex flex-col shadow-sm min-h-[700px]">
                  <div className="p-8 md:p-12 flex-grow">
                     <h3 className="text-4xl md:text-5xl font-bold text-blue-950 mb-2">HG360</h3>
                     <h4 className="text-xl font-bold text-blue-900 mb-8">Gestão e Eficiência além da impressão</h4>
                     
                     <div className="text-slate-600 mb-8 space-y-4 leading-relaxed">
                        <p>
                           A proposta do HG360 é mostrar que existem caminhos acessíveis para controlar e reduzir custos, evitar desperdícios desnecessários e ter previsibilidade de consumo.
                        </p>
                        <p>
                           Promova o uso responsável dos recursos de impressão, discipline os usuários e simplifique a administração do ambiente de impressão.
                        </p>
                     </div>

                     {/* Items visible by default (Moved out of toggle as requested) */}
                     <div className="space-y-6 mt-8">
                        <div>
                           <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">Cotas de Impressão</h5>
                           <p className="text-slate-600 text-sm">Permita quem, como e onde pode imprimir. Atribuição de cotas, sendo elas Informativas ou Bloqueantes.</p>
                        </div>
                        <div>
                           <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">Relatórios</h5>
                           <p className="text-slate-600 text-sm">Agendamento para envio automático dos relatórios de centros de custos, usuários, auditoria de ações, contadores, entre outros.</p>
                        </div>
                        <div>
                           <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">Gestão Web</h5>
                           <p className="text-slate-600 text-sm">Gerenciamento total através de uma interface web com múltiplas visões: Relatórios, Usuários, impressoras, Centros de Custos.</p>
                        </div>
                     </div>

                     {/* HG360 Content Toggle */}
                     {isHGExpanded && (
                        <div className="space-y-6 mt-6 animate-fadeIn">
                            <div>
                               <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">Controle de Impressão</h5>
                               <p className="text-slate-600 text-sm">Controle o fluxo de impressões e cópias, através da atribuição de cotas, informativas ou bloqueantes, permitindo quantidades de cópias distintas para departamentos e usuários. Dessa forma, você garante que o orçamento seja sempre respeitado.</p>
                            </div>
                            <div>
                               <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">Cotas Pré-Pagas</h5>
                               <p className="text-slate-600 text-sm">Podem ser distribuídos ou vendidos cartões com crédito pré-pago e os usuários farão a recarga no sistema conforme sua necessidade. Essa pode ser uma ótima opção para terceirizados ou mesmo como um benefício adicional para sua equipe.</p>
                            </div>
                             <div>
                               <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">Segurança</h5>
                               <p className="text-slate-600 text-sm">É possível bloquear as funções nativas das multifuncionais e só liberá-las mediante autenticação do usuário. Dessa forma, sua empresa garante que apenas os usuários que tenham permissão para uso dos recursos de impressão possam utilizá-los.</p>
                            </div>
                            <div>
                               <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">Gestão Online</h5>
                               <p className="text-slate-600 text-sm">Gerenciamento total através de uma interface web, com múltiplas visões. Gerencie suas impressões com relatórios dinâmicos, defina políticas de impressão e cotas bloqueantes ou informativas. Crie e gerencie equipamentos e usuários de forma ágil.</p>
                            </div>
                             <div>
                               <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">Nuvem</h5>
                               <p className="text-slate-600 text-sm">Beneficie-se da estrutura de gerenciamento de impressão em nuvem, sem a necessidade de investimentos em infraestrutura. Nível superior de segurança e disponibilidade 24x7. Comece agora a obter os resultados sem instalações e implantações complicadas.</p>
                            </div>
                            <div>
                               <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">Economize</h5>
                               <p className="text-slate-600 text-sm">O resultado da gestão e dos controles implementados na solução de outsourcing de impressão, aliados aos elevados níveis de serviço e pequena incidência de falhas dos suprimentos originais, são os fatores para alcançar a economia que sua empresa busca.</p>
                            </div>
                        </div>
                     )}
                  </div>
                  {/* Footer Button - Only shows Carregar Mais */}
                  {!isHGExpanded && (
                    <div 
                        onClick={() => setIsHGExpanded(true)}
                        className="border-t border-blue-900 bg-blue-50/50 p-5 flex justify-between items-center cursor-pointer hover:bg-blue-100 transition-colors group mt-auto select-none"
                    >
                        <span className="text-blue-700 font-bold text-sm tracking-wider uppercase">
                            Carregar Mais
                        </span>
                        <Plus className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform" />
                    </div>
                  )}
               </div>

               {/* Card MPS */}
               <div className="border border-blue-900 bg-white flex flex-col shadow-sm min-h-[700px]">
                  <div className="p-8 md:p-12 flex-grow">
                     <h3 className="text-4xl md:text-5xl font-bold text-blue-950 mb-2">MPS</h3>
                     <h4 className="text-xl font-bold text-blue-900 mb-8">Serviço de Impressão Gerenciada</h4>
                     
                     <div className="text-slate-600 mb-8 space-y-4 leading-relaxed">
                        <p>
                           O MPS é uma ferramenta de gestão centralizada e inteligente do parque de impressoras, que faz monitoramento que permite mais agilidade na gestão do parque do cliente.
                        </p>
                        <p>
                           Dentro do sistema, temos a visualização do cenário operacional e de produção das empresas e dos seus contratos de indicadores de produção.
                        </p>
                     </div>

                     {/* List of features */}
                     <div className="flex flex-col gap-2 mb-6">
                        <h5 className="font-bold text-blue-950 text-sm uppercase">SUPRIMENTOS</h5>
                        <h5 className="font-bold text-blue-950 text-sm uppercase">CONTADORES E EVENTOS</h5>
                        <h5 className="font-bold text-blue-950 text-sm uppercase">ESTOQUES</h5>
                     </div>

                     {/* First paragraph moved out of toggle */}
                     <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        Em nosso outsourcing de impressão tudo é pensado para que você não precise se preocupar. Por meio do MPS Pronto, monitoramos remotamente os níveis de tinta das suas impressoras e, antes que ele acabe, novos cartuchos são enviados, sem a necessidade de fazer um pedido.
                     </p>

                     {/* MPS Content Toggle */}
                     {isMPSExpanded && (
                        <div className="space-y-6 animate-fadeIn">
                           <p className="text-slate-600 text-sm leading-relaxed">
                              O mesmo acontece quando existe atolamento de papel em alguma de suas máquinas. O MPS Pronto emite automaticamente um alerta ao nosso time de suporte e nós providenciamos o auxílio necessário. É a alta tecnologia utilizada em nossos produtos, sintonizada com nossa preocupação em oferecer um serviço rápido e efetivo, sem gerar preocupação no seu dia a dia. Afinal, se você está terceirizando a impressão em sua empresa, é porque precisa de facilidade.
                           </p>
                           <div>
                               <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">CONTROLE</h5>
                               <p className="text-slate-600 text-sm">Controle de impressões através de políticas de impressão corporativa. As regras são definidas por você e podem levar em consideração o título do arquivo, aplicativo de origem, total de páginas, cópias, custo da impressão, horário, qualidade, cor, frente e verso, tamanho do papel e do arquivo.</p>
                           </div>
                           <div>
                               <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">CONVERSÃO</h5>
                               <p className="text-slate-600 text-sm">Converta automaticamente os trabalhos de impressão enviados por seus usuários, baseado em regras customizáveis. Converta documentos coloridos automaticamente para preto e branco, impressões corridas em páginas frente e verso, reduzindo em até 50% seus custos com papel.</p>
                           </div>
                           <div>
                               <h5 className="font-bold text-blue-950 text-sm uppercase mb-1">MELHORIA CONTÍNUA</h5>
                               <p className="text-slate-600 text-sm">Faça análises e ajuste suas políticas rapidamente, com base em relatórios de utilização dos recursos de impressão contratados. Garanta que suas políticas de impressão estejam em melhoria constante e aproveite todo o poder que a tecnologia oferece para incrementar seu negócio.</p>
                           </div>
                        </div>
                     )}
                  </div>
                  {/* Footer Button - Only shows Carregar Mais */}
                  {!isMPSExpanded && (
                    <div 
                        onClick={() => setIsMPSExpanded(true)}
                        className="border-t border-blue-900 bg-blue-50/50 p-5 flex justify-between items-center cursor-pointer hover:bg-blue-100 transition-colors group mt-auto select-none"
                    >
                        <span className="text-blue-700 font-bold text-sm tracking-wider uppercase">
                            Carregar Mais
                        </span>
                        <Plus className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform" />
                    </div>
                  )}
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Solicite um Levantamento Gratuito</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Nossos consultores analisam seu parque atual e desenham um projeto de redução de custos sem compromisso.
        </p>
        <Link to="/contato" className="bg-blue-700 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-lg">
          Falar com Especialista em Impressão
        </Link>
      </Section>
    </div>
  );
};

export default PrintOutsourcing;