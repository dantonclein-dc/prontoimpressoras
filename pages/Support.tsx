import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';
import { LifeBuoy, Download, MonitorPlay, Clock, Phone, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop", // Support team
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop", // Helpdesk
  ];

  return (
    <div className="flex flex-col bg-white">
      <Helmet>
        <title>Suporte Técnico para Impressoras e TI | SLA Garantido | Pronto Impressoras</title>
        <meta name="description" content="Suporte técnico especializado para impressoras, computadores e infraestrutura de TI. SLA crítico de 4 horas. Atendimento em todo o Brasil." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/suporte" />
      </Helmet>
      {/* Hero */}
      <div className="relative bg-blue-950 py-20 text-white overflow-hidden">
        <HeroBackground images={heroImages} overlayClassName="bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-lime-400 font-bold tracking-wider text-sm uppercase mb-4 block">Central de Ajuda</span>
          <h1 className="text-4xl font-bold mb-4">Suporte Técnico</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Acesso rápido a drivers, abertura de chamados e suporte remoto para garantir a continuidade da sua operação.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <Section className="-mt-12 pt-0 pb-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center hover:border-blue-500 transition-all group">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
              <LifeBuoy className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Abrir Chamado</h3>
            <p className="text-slate-600 mb-6 text-sm">
              Solicite reparo técnico ou suprimentos através do nosso portal do cliente.
            </p>
            <a href="#" className="inline-block w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
              Acessar Portal
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center hover:border-blue-500 transition-all group">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
              <Download className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Drivers e Manuais</h3>
            <p className="text-slate-600 mb-6 text-sm">
              Baixe os softwares mais recentes para as impressoras e equipamentos contratados.
            </p>
            <a href="#" className="inline-block w-full py-3 px-4 border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors">
              Buscar Downloads
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center hover:border-blue-500 transition-all group">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
              <MonitorPlay className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Suporte Remoto</h3>
            <p className="text-slate-600 mb-6 text-sm">
              Permita que um de nossos analistas acesse seu computador para configurações rápidas.
            </p>
            <div className="flex gap-2">
               <a href="#" className="flex-1 py-3 px-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">
                 TeamViewer
               </a>
               <a href="#" className="flex-1 py-3 px-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">
                 AnyDesk
               </a>
            </div>
          </div>
        </div>
      </Section>

      {/* SLA Info */}
      <Section bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div>
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Nosso Compromisso (SLA)</h2>
             <p className="text-lg text-slate-600 mb-6">
               Entendemos que tempo é dinheiro. Por isso, nossos contratos possuem Acordos de Nível de Serviço (SLA) rigorosos e transparentes.
             </p>
             <ul className="space-y-4">
               <li className="flex items-start">
                 <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                 <div>
                   <h3 className="font-bold text-slate-900">Atendimento Crítico: até 4 horas</h3>
                   <p className="text-sm text-slate-600">Para equipamentos parados em setores vitais (faturamento, expedição).</p>
                 </div>
               </li>
               <li className="flex items-start">
                 <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                 <div>
                   <h3 className="font-bold text-slate-900">Solução Definitiva</h3>
                   <p className="text-sm text-slate-600">Se não resolvermos no local, instalamos um equipamento de backup imediatamente.</p>
                 </div>
               </li>
               <li className="flex items-start">
                 <Phone className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                 <div>
                   <h3 className="font-bold text-slate-900">NOC Proativo</h3>
                   <p className="text-sm text-slate-600">Monitoramos alertas de erro antes que o usuário perceba a falha.</p>
                 </div>
               </li>
             </ul>
           </div>
           <div>
             <img 
               src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
               alt="Equipe de suporte técnico" 
               className="rounded-2xl shadow-xl w-full"
             />
           </div>
        </div>
      </Section>

      {/* FAQ / Instructions */}
      <Section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center"><FileText className="w-4 h-4 mr-2 text-blue-500"/> Como solicitar toner?</h3>
            <p className="text-slate-600">Nossos sistemas monitoram o nível automaticamente e enviam antes de acabar. Caso precise de um extra, <Link to="/contato" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">abra um chamado no portal</Link>.</p>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center"><FileText className="w-4 h-4 mr-2 text-blue-500"/> O que fazer se a impressora travar?</h3>
            <p className="text-slate-600">Verifique se há papel atolado nas portas laterais. Se o erro persistir, anote o código do erro no painel e <Link to="/contato" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">contate o suporte</Link>.</p>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center"><FileText className="w-4 h-4 mr-2 text-blue-500"/> Como instalar em um novo computador?</h3>
            <p className="text-slate-600">Baixe o instalador na seção de Drivers acima. Se sua empresa possui restrição de administrador, solicite ao <Link to="/suporte" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">suporte remoto</Link>.</p>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center"><FileText className="w-4 h-4 mr-2 text-blue-500"/> Qual o horário de atendimento?</h3>
            <p className="text-slate-600">Padrão: Seg a Sex, 09:00h às 17:00h. Contratos Premium possuem cobertura 24/7. <Link to="/contato" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-bold">Fale conosco</Link>.</p>
          </div>
        </div>
      </Section>

      <Section bg="navy" className="text-center">
         <h2 className="text-2xl font-bold mb-4 text-white">Ainda precisa de ajuda?</h2>
         <p className="text-slate-300 mb-8">Entre em contato direto com nossa central de operações.</p>
         <Link to="/contato" className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-colors">
            Falar com Atendente
         </Link>
      </Section>
    </div>
  );
};

export default Support;