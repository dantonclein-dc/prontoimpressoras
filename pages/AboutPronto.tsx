import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, ChevronDown, Zap, TrendingUp, Sliders } from 'lucide-react';

const AboutPronto: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroImages = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop", // Meeting
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop", // Office
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "O que é a Pronto Impressoras?",
      answer: <>A Pronto é uma parceira estratégica em tecnologia, especializada em <Link to="/solucoes/impressao" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">outsourcing de impressão</Link> e TI. Atuando desde 2010 no Rio de Janeiro, nosso foco é simplificar a gestão de ativos para que nossos clientes foquem em seu core business.</>
    },
    {
      question: "Como funciona o contrato de outsourcing?",
      answer: <>O contrato consolida hardware, software, suprimentos e manutenção em uma mensalidade fixa. Eliminamos o custo de aquisição (Capex) e transformamos em despesa operacional (Opex) previsível. <Link to="/contato" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-bold">Fale com um especialista</Link> para entender a viabilidade para o seu negócio.</>
    },
    {
      question: "Qual a área de cobertura de atendimento?",
      answer: <>Atendemos em todo o território nacional através de nossa rede de parceiros homologados e técnicos próprios, garantindo <Link to="/suporte" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">SLA unificado</Link> para todas as suas filiais.</>
    },
    {
      question: "Quais fabricantes a Pronto trabalha?",
      answer: <>Trabalhamos com os líderes mundiais: HP, Samsung, Brother, Ricoh, Zebra (para térmica), Dell e Lenovo (para <Link to="/solucoes/computadores" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors font-medium">computadores</Link>), garantindo sempre equipamentos de alta performance.</>
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      <Helmet>
        <title>Quem Somos | Pronto Impressoras desde 2010 | Rio de Janeiro</title>
        <meta name="description" content="Conheça a Pronto Impressoras, empresa B2B fundada em 2010, referência em outsourcing de impressão e TI no Rio de Janeiro e em todo o Brasil." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/quem-somos/sobre" />
      </Helmet>
      {/* Header */}
      <div className="relative bg-blue-950 py-24 text-white overflow-hidden">
        <HeroBackground images={heroImages} overlayClassName="bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-lime-400 font-bold uppercase tracking-widest text-sm mb-4 block">Quem Somos</span>
          <h1 className="text-4xl font-bold text-white mb-4">Parceiros na sua Transformação Digital</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Mais que fornecedores de equipamentos, somos gestores de eficiência operacional.
          </p>
        </div>
      </div>

      {/* Tech as a Service Intro (Text Block) - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 w-full md:w-1/2">Tech as a Service</h2>
            <div className="w-full md:w-1/2">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-left md:text-right border-l-4 md:border-l-0 md:border-r-4 border-lime-500 pl-4 md:pl-0 md:pr-4">
                Somos pioneiros e líderes em qualidade de tecnologia desde 2010 no Rio de Janeiro e focamos em soluções que minimizem custos, gerem ganhos e oportunidades. Provemos tecnologia como serviço (TaaS) de forma integrada e intuitiva para tornar a inovação acessível e evoluir os negócios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Moving Image Section */}
      <div className="relative w-full h-[400px] overflow-hidden bg-blue-950">
        <div
          className="absolute inset-0 w-[120%] h-full bg-cover bg-center will-change-transform animate-pan-horizontal"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop")'
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply z-10"></div>
      </div>

      {/* Origin Header & History Content - GRAY BACKGROUND */}
      <section className="pt-20 pb-0 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Origin Header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase block mb-3">ORIGEM</span>
            <h3 className="text-3xl md:text-5xl font-bold text-blue-950">Onde tudo começou</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="prose prose-lg text-slate-600">
              <p className="lead text-xl text-blue-900 font-medium">
                A <strong>Pronto Impressoras</strong> nasceu no Rio de Janeiro em 2010, da necessidade do mercado corporativo de eliminar ineficiências relacionadas à gestão de documentos e infraestrutura de TI.
              </p>
              <p>
                Entendemos que impressoras paradas, computadores obsoletos e falta de controle sobre impressões drenam recursos valiosos das organizações. Nossa missão é assumir essa responsabilidade, permitindo que nossos clientes foquem exclusivamente em seu crescimento.
              </p>
              <p>
                Com atuação desde 2010, operamos com um modelo consultivo. Não empurramos caixas; desenhamos projetos personalizados que equilibram performance, qualidade e custo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" className="rounded-lg shadow-md w-full h-full object-cover" alt="Reunião estratégica" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" className="rounded-lg shadow-md w-full h-full object-cover mt-8" alt="Gestão corporativa" />
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-blue-500 group">
              <Target className="w-10 h-10 text-blue-800 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Missão</h3>
              <p className="text-slate-600">
                Prover soluções de tecnologia como serviço que garantam continuidade operacional, redução de custos e inovação.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-blue-500 group">
              <Eye className="w-10 h-10 text-blue-800 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visão</h3>
              <p className="text-slate-600">
                Ser referência nacional em outsourcing B2B, reconhecida pela excelência no suporte técnico e transparência contratual.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-blue-500 group">
              <Award className="w-10 h-10 text-blue-800 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Valores</h3>
              <p className="text-slate-600">
                Comprometimento com o resultado do cliente, agilidade, ética nas relações comerciais e sustentabilidade.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-blue-950 rounded-2xl p-12 text-center text-white mb-20 relative z-10">
            <h2 className="text-3xl font-bold mb-12">Números que comprovam nossa solidez</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="text-5xl font-bold text-lime-400 mb-2">2010</div>
                <p className="text-blue-100 font-medium">Ano de Fundação</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-lime-400 mb-2">26</div>
                <p className="text-blue-100 font-medium">Estados Atendidos</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-lime-400 mb-2">+400</div>
                <p className="text-blue-100 font-medium">Clientes Corporativos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOCAÇÃO SECTION (Arc Gradient) */}
      <section className="relative bg-blue-950 pt-24 pb-48 overflow-hidden">
        {/* Background Arc */}
        <div className="absolute -bottom-[20%] left-1/2 transform -translate-x-1/2 w-[150%] aspect-square rounded-[50%] bg-gradient-to-b from-blue-600 via-cyan-500 to-lime-400 opacity-90 blur-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-white text-2xl md:text-3xl uppercase tracking-[0.2em] mb-12 block font-light">VOCAÇÃO</span>

          <div className="mt-20">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
              PRONTO
            </h2>
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Entregamos tecnologia como serviço (TaaS) por meio do outsourcing de equipamentos e sistemas, com uma abordagem integrada e simples. Com excelência operacional, tornamos a gestão mais eficiente para centenas de empresas no Rio de Janeiro e em todo o Brasil. Somos o parceiro certo para acelerar resultados e sustentar o crescimento dos negócios.
            </p>
          </div>
        </div>
      </section>

      {/* PURPOSE SECTION (Cards) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">NOSSO PROPÓSITO É</span>
            <h3 className="text-3xl md:text-5xl font-bold text-blue-950 max-w-3xl mx-auto leading-tight">
              Impulsionar a evolução das pessoas e das empresas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card Otimizar */}
            <div className="border border-blue-200 rounded-2xl p-10 text-center hover:shadow-xl transition-shadow group bg-white">
              <div className="flex justify-center mb-6">
                <Zap className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-blue-600 font-bold text-2xl mb-4">Otimizar</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Descomplicamos a gestão de tecnologia para que sua empresa foque no que realmente importa. Otimizamos processos, facilitamos a operação e racionalizamos recursos com inteligência. Automatizamos rotinas, reduzimos falhas e entregamos eficiência real no dia a dia, garantindo mais controle, previsibilidade e agilidade para o negócio.
              </p>
            </div>

            {/* Card Avançar */}
            <div className="border border-purple-200 rounded-2xl p-10 text-center hover:shadow-xl transition-shadow group bg-white">
              <div className="flex justify-center mb-6">
                <TrendingUp className="w-12 h-12 text-purple-500 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-purple-600 font-bold text-2xl mb-4">Avançar</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Desenvolvemos soluções que impulsionam a evolução das empresas. Ajudamos nossos clientes a avançar com segurança, transformar operações em resultados concretos e crescer de forma sustentável. Usamos tecnologia de maneira estratégica para gerar inovação contínua, performance operacional e vantagem competitiva.
              </p>
            </div>

            {/* Card Customizar */}
            <div className="border border-lime-200 rounded-2xl p-10 text-center hover:shadow-xl transition-shadow group bg-white">
              <div className="flex justify-center mb-6">
                <Sliders className="w-12 h-12 text-lime-600 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-lime-600 font-bold text-2xl mb-4">Customizar</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Atuamos com foco total na qualidade do serviço. Profissionalizamos a gestão, aprofundamos a eficiência operacional e entregamos soluções sob medida para cada realidade. Nosso compromisso é diferenciar sua empresa no mercado por meio de atendimento próximo, soluções customizadas e excelência em cada etapa da operação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS MARQUEE SECTION */}
      <section className="py-16 bg-white border-t border-slate-100 overflow-hidden relative">


        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tecnologia Certificada pelos Líderes Globais</p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-[200%] animate-marquee-right hover:pause">
            {/* First Set */}
            <div className="flex justify-around w-[50%] gap-16 px-8 items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" alt="HP" className="h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Zebra_Technologies_logo.svg" alt="Zebra" className="h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Epson_logo.svg" alt="Epson" className="h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Canon_Inc._logo.svg" alt="Canon" className="h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Brother_logo.svg" alt="Brother" className="h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg" alt="Samsung" className="h-6 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Ricoh_logo.svg" alt="Ricoh" className="h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" alt="Dell" className="h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
            {/* Second Set (Duplicate) */}
            <div className="flex justify-around w-[50%] gap-16 px-8 items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" alt="HP" className="h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Zebra_Technologies_logo.svg" alt="Zebra" className="h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Epson_logo.svg" alt="Epson" className="h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Canon_Inc._logo.svg" alt="Canon" className="h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Brother_logo.svg" alt="Brother" className="h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg" alt="Samsung" className="h-6 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Ricoh_logo.svg" alt="Ricoh" className="h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" alt="Dell" className="h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-6 pt-0 text-slate-600 border-t border-slate-200 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section bg="navy" className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Pronto para otimizar sua estrutura?</h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Nossos consultores estão preparados para realizar um levantamento gratuito da sua estrutura atual.
        </p>
        <Link
          to="/contato"
          className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition-colors shadow-lg"
        >
          Agendar Reunião
        </Link>
      </Section>
    </div>
  );
};

export default AboutPronto;