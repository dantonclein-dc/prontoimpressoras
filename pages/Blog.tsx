import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1499750310159-52f0f83ad497?q=80&w=2056&auto=format&fit=crop", // Reading
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop", // Digital
  ];

  const posts = [
    {
      id: 1,
      title: "Outsourcing de Impressão: Vale a pena para pequenas empresas?",
      excerpt: "Análise comparativa entre comprar impressoras ou contratar um serviço de outsourcing, focando em TCO (Custo Total de Propriedade).",
      date: "12 Mar 2024",
      author: "Equipe Pronto",
      category: "Gestão",
      image: "https://picsum.photos/seed/blog1/600/400"
    },
    {
      id: 2,
      title: "Como reduzir o desperdício de papel em 40% no escritório",
      excerpt: "Estratégias de bilhetagem, impressão segura e conscientização que impactam diretamente no orçamento mensal.",
      date: "05 Mar 2024",
      author: "Consultoria Técnica",
      category: "Sustentabilidade",
      image: "https://picsum.photos/seed/blog2/600/400"
    },
    {
      id: 3,
      title: "Aluguel de Notebooks vs Compra: O que é melhor para o fluxo de caixa?",
      excerpt: "Entenda as vantagens fiscais e operacionais de migrar seu parque de TI para o modelo HaaS (Hardware as a Service).",
      date: "28 Fev 2024",
      author: "Gestão Financeira",
      category: "Financeiro",
      image: "https://picsum.photos/seed/blog3/600/400"
    },
    {
      id: 4,
      title: "Segurança da Informação em Impressoras Multifuncionais",
      excerpt: "Suas impressoras podem ser uma porta de entrada para ataques. Saiba como proteger dados sensíveis.",
      date: "15 Fev 2024",
      author: "TI & Segurança",
      category: "Segurança",
      image: "https://picsum.photos/seed/blog4/600/400"
    },
    {
      id: 5,
      title: "As vantagens das impressoras térmicas na logística industrial",
      excerpt: "Por que investir em equipamentos específicos para etiquetas e códigos de barras aumenta a produtividade.",
      date: "02 Fev 2024",
      author: "Equipe Pronto",
      category: "Indústria",
      image: "https://picsum.photos/seed/blog5/600/400"
    }
  ];

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Blog | Artigos sobre Outsourcing de TI e Gestão de Impressão | Pronto</title>
        <meta name="description" content="Artigos, dicas e novidades sobre outsourcing de impressão, HaaS, GED e gestão de TI para empresas. Conteúdo especializado pela equipe da Pronto Impressoras." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/blog" />
      </Helmet>
      <div className="relative bg-blue-950 py-24 text-white overflow-hidden">
        <HeroBackground images={heroImages} overlayClassName="bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Conteúdo estratégico sobre gestão de ativos, redução de custos e tecnologia corporativa.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all hover:border-blue-200 flex flex-col h-full group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-800 uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-slate-500 mb-3 space-x-4">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                  <Link to="#">{post.title}</Link>
                </h2>
                <p className="text-slate-600 text-sm mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                   <span className="text-xs text-slate-500 flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                   <Link to="#" className="text-blue-800 text-sm font-semibold flex items-center hover:text-lime-600 transition-colors">
                     Ler mais <ArrowRight className="ml-1 w-3 h-3" />
                   </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="navy" className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Receba nossos materiais exclusivos</h2>
        <p className="text-slate-300 mb-6">Inscreva-se para receber estudos de caso e dicas de gestão de TI.</p>
        <form className="max-w-md mx-auto flex gap-2">
          <input 
            type="email" 
            placeholder="Seu e-mail corporativo" 
            className="flex-1 px-4 py-3 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <button className="bg-lime-500 text-blue-950 px-6 py-3 rounded-md font-bold hover:bg-lime-400 transition-colors">
            Assinar
          </button>
        </form>
      </Section>
    </div>
  );
};

export default Blog;