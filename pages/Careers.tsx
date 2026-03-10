import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import { Briefcase, GraduationCap, Users, Rocket, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const jobs = [
    {
      id: 1,
      title: "Técnico de Campo (Impressoras)",
      location: "Rio de Janeiro - RJ",
      type: "Presencial",
      description: "Responsável pela manutenção preventiva e corretiva de equipamentos de impressão em clientes corporativos."
    },
    {
      id: 2,
      title: "Analista de Suporte N2",
      location: "Híbrido / Rio de Janeiro",
      type: "Híbrido",
      description: "Atendimento remoto a usuários, gestão de servidores de impressão e troubleshooting de redes."
    },
    {
      id: 3,
      title: "Consultor Comercial B2B (Hunter)",
      location: "Rio de Janeiro - RJ",
      type: "Presencial",
      description: "Prospecção de novos clientes corporativos, elaboração de projetos de outsourcing e negociação."
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      <Helmet>
        <title>Carreiras | Trabalhe na Pronto Impressoras | Vagas em TI no RJ</title>
        <meta name="description" content="Faça parte da equipe Pronto Impressoras. Vagas em tecnologia, suporte técnico e comercial no Rio de Janeiro. Junte-se a uma empresa referência em outsourcing desde 2010." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/carreiras" />
      </Helmet>
      {/* Hero */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Equipe corporativa feliz" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4">Trabalhe Conosco</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl mb-6">
            Construa sua carreira em uma empresa que cresce 30% ao ano.
          </h1>
          <p className="text-xl text-slate-200 max-w-xl mb-8">
            Somos apaixonados por tecnologia e obsessivos por eficiência. Se você busca meritocracia e desafios, seu lugar é na Pronto.
          </p>
          <a href="#vagas" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors w-fit">
            Ver Vagas Abertas
          </a>
        </div>
      </div>

      {/* Why Join Us */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Por que ser um Pronter?</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Oferecemos um ambiente desafiador, onde a autonomia e a responsabilidade caminham juntas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <Rocket className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Crescimento Acelerado</h3>
            <p className="text-sm text-slate-600">Plano de carreira estruturado e oportunidades reais de liderança.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Pronto Academy</h3>
            <p className="text-sm text-slate-600">Plataforma de treinamentos técnicos e comportamentais contínuos.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <Users className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Ambiente Colaborativo</h3>
            <p className="text-sm text-slate-600">Cultura de portas abertas. Aqui, toda ideia fundamentada é ouvida.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <Briefcase className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Benefícios Competitivos</h3>
            <p className="text-sm text-slate-600">Saúde, Odonto, VR/VA compatível com o mercado e bônus por performance.</p>
          </div>
        </div>
      </Section>

      {/* Open Positions */}
      <Section bg="gray" id="vagas">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Vagas Disponíveis</h2>
            <p className="text-slate-600">Junte-se ao time que está transformando o outsourcing no Brasil.</p>
          </div>
          <a href="#" className="text-blue-700 font-bold hover:underline mt-4 md:mt-0">Ver todas no LinkedIn &rarr;</a>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="flex-1">
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                 <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                   <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</span>
                   <span className="px-2 py-1 bg-slate-100 rounded text-xs font-semibold uppercase">{job.type}</span>
                 </div>
                 <p className="text-slate-600">{job.description}</p>
               </div>
               <div>
                 <Link to="/contato" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                   Candidatar-se <ArrowRight className="w-4 h-4 ml-2" />
                 </Link>
               </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Talent Pool CTA */}
      <Section className="text-center">
         <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-12 text-white shadow-xl">
           <h2 className="text-3xl font-bold mb-4">Não encontrou sua vaga?</h2>
           <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
             Estamos sempre em busca de talentos. Cadastre seu currículo em nosso Banco de Talentos e entraremos em contato quando surgir uma oportunidade alinhada ao seu perfil.
           </p>
           <Link to="/contato" className="bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-colors">
             Enviar Currículo
           </Link>
         </div>
      </Section>
    </div>
  );
};

export default Careers;