import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { Heart, Users, Leaf, ShieldCheck, Zap, Lightbulb, Quote, ArrowRight } from 'lucide-react';

const OurCulture: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <Helmet>
        <title>Nossa Cultura | Valores e Missão da Pronto Impressoras</title>
        <meta name="description" content="Conheça os valores, missão e cultura organizacional da Pronto Impressoras. Uma empresa comprometida com inovação, ética e excelência em serviços de TI desde 2010." />
        <link rel="canonical" href="https://prontoimpressoras.com.br/quem-somos/cultura" />
      </Helmet>
      {/* Hero */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Equipe colaborativa trabalhando"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-300 font-bold tracking-wider text-sm uppercase mb-4">Nossa Cultura</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mb-6">
            Pessoas, Processos e Tecnologia. Nessa ordem.
          </h1>
          <p className="text-xl text-slate-200 max-w-xl">
            A tecnologia é o meio, mas a excelência no serviço é feita por pessoas. Conheça o DNA da Pronto.
          </p>
        </div>
      </div>

      {/* The Pronto Way */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">O Jeito Pronto de Ser</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Não acreditamos em fornecedores distantes. Nossa cultura é pautada na proximidade, na transparência radical e na resolução proativa de problemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg shadow-blue-900/5 border-t-4 border-blue-600">
            <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Confiança e Ética</h3>
            <p className="text-slate-600">
              Cumprimos o que prometemos. Contratos transparentes, sem letras miúdas e SLA real. Acreditamos que relações de longo prazo são construídas com integridade.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg shadow-blue-900/5 border-t-4 border-green-500">
            <Zap className="w-12 h-12 text-green-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Agilidade Resolutiva</h3>
            <p className="text-slate-600">
              Entendemos que uma impressora parada ou um PC travado custa dinheiro. Nossa equipe é treinada para resolver, não para burocratizar o suporte.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg shadow-blue-900/5 border-t-4 border-purple-500">
            <Lightbulb className="w-12 h-12 text-purple-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Inovação Prática</h3>
            <p className="text-slate-600">
              Não vendemos tecnologia por modismo. Sugerimos inovações que tragam ROI real e mensurável para a operação do cliente.
            </p>
          </div>
        </div>
      </Section>

      {/* Horizontal Moving Image Section - Team Integration */}
      <div className="relative w-full h-[450px] overflow-hidden bg-blue-950">
        <div
          className="absolute inset-0 w-[120%] h-full bg-cover bg-center will-change-transform animate-pan-horizontal-culture"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop")'
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply z-10"></div>

        {/* Optional Overlay Text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight">
              Sinergia que gera resultados
            </h2>
          </div>
        </div>
      </div>

      {/* Team & Expertise */}
      <Section bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Treinamento técnico da equipe"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <div className="text-sm font-bold text-slate-900">Capacitação Contínua</div>
              <div className="text-xs text-slate-500">Treinamentos mensais com fabricantes</div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-2">
              <Users className="w-6 h-6 text-blue-700" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Nossa Equipe</h2>
            <p className="text-lg text-slate-600">
              Por trás de cada máquina alugada, existe um time de especialistas. Investimos pesado na qualificação técnica e humana dos nossos colaboradores.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <span className="text-slate-700">Técnicos certificados pelos principais fabricantes (HP, Brother, Samsung, Ricoh).</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <span className="text-slate-700">Equipe de consultoria comercial focada em diagnóstico, não em comissão.</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <span className="text-slate-700">Ambiente de trabalho diverso, inclusivo e estimulante.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Vem ser Pronto Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Left */}
          <div className="space-y-6 order-1">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Nossa Cultura</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Vem ser Pronto</h2>
            <div className="prose prose-lg text-slate-600 space-y-4 text-justify">
              <p>
                Uns dizem que o nosso crescimento vem da solidez operacional. Outros, de um inconformismo que nos impede de aceitar o mediano. Na Pronto, preferimos acreditar que essas duas forças se completam e formam nossa identidade.
              </p>
              <p>
                Somos inquietos. Ao invés de encararmos as metas batidas como um convite ao conforto, fazemos delas o trampolim para o próximo nível de eficiência. Cada contrato renovado reforça nossa capacidade de entrega.
              </p>
              <p>
                Foi assim quando evoluímos da simples locação para a inteligência do outsourcing. Desapegamos da venda de caixas para focarmos no desenvolvimento de uma plataforma de tecnologia como serviço.
              </p>
              <p>
                A evolução é a nossa essência e o que nos estimula a ampliar o portfólio e mudar o posicionamento no mercado. É o nosso compromisso com a melhoria contínua dos processos e das pessoas que fazem parte do time.
              </p>
              <p className="font-bold text-blue-900 mt-4 block">
                É a nossa capacidade de evoluir e simplificar o futuro. Você vem junto?
              </p>
            </div>
          </div>
          {/* Image Right with Vertical Parallax */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2">
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop"
              alt="Equipe Pronto reunida"
              className="absolute inset-0 w-full h-[120%] object-cover will-change-transform animate-pan-vertical-slow"
            />
          </div>
        </div>
      </Section>

      {/* Orgulho em Fazer Parte (Testimonials) */}
      <Section bg="gray">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 block">DEPOIMENTOS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Orgulho em fazer parte</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Margarida */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative hover:shadow-lg transition-shadow">
            <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
            <p className="text-slate-600 mb-8 italic relative z-10 leading-relaxed">
              "Trabalhar na Pronto me traz segurança e motivação. Princípios que acredito serem fundamentais são vividos aqui diariamente: ética, transparência e respeito. Em 10 anos, vi a empresa crescer sem perder a essência humana. Tenho orgulho de cuidar da saúde financeira de um negócio tão sólido."
            </p>
            <div className="mt-auto flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Margarida" className="w-14 h-14 rounded-full object-cover border-2 border-slate-100" />
              <div>
                <h4 className="font-bold text-blue-900 text-sm">Margarida</h4>
                <p className="text-xs text-lime-600 font-semibold">Setor Financeiro</p>
                <p className="text-xs text-slate-400">10 anos de casa</p>
              </div>
            </div>
          </div>

          {/* Pedro Henrique */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-lime-500 flex flex-col relative transform md:-translate-y-4 hover:shadow-xl transition-all">
            <Quote className="w-10 h-10 text-lime-100 absolute top-6 right-6" />
            <p className="text-slate-600 mb-8 italic relative z-10 leading-relaxed">
              "A evolução é a palavra que resume minha trajetória. Comecei como técnico e hoje lidero a operação. Nesses 10 anos, tive a oportunidade de participar de grandes projetos e aprender novas tecnologias. A Pronto oferece o ambiente ideal para quem quer se especializar e superar desafios técnicos."
            </p>
            <div className="mt-auto flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" alt="Pedro Henrique" className="w-14 h-14 rounded-full object-cover border-2 border-lime-100" />
              <div>
                <h4 className="font-bold text-blue-900 text-sm">Pedro Henrique</h4>
                <p className="text-xs text-lime-600 font-semibold">Supervisor Técnico</p>
                <p className="text-xs text-slate-400">10 anos de casa</p>
              </div>
            </div>
          </div>

          {/* Danton Clein */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative hover:shadow-lg transition-shadow">
            <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
            <p className="text-slate-600 mb-8 italic relative z-10 leading-relaxed">
              "O sucesso em vendas aqui é resultado de esforço pessoal somado a um produto em que confiamos. A capacidade da Pronto de se adaptar ao mercado facilita meu trabalho. Em 3 anos, encontrei o equilíbrio entre agressividade comercial e entrega de valor real ao cliente."
            </p>
            <div className="mt-auto flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" alt="Danton Clein" className="w-14 h-14 rounded-full object-cover border-2 border-slate-100" />
              <div>
                <h4 className="font-bold text-blue-900 text-sm">Danton Clein</h4>
                <p className="text-xs text-lime-600 font-semibold">Setor Comercial</p>
                <p className="text-xs text-slate-400">3 anos de casa</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ESG / Sustainability */}
      <Section>
        <div className="bg-green-900 rounded-[2.5rem] overflow-hidden text-white relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-800/50 skew-x-12 transform translate-x-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-20 relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-green-300 font-bold mb-4 uppercase tracking-wider text-sm">
                <Leaf className="w-5 h-5" />
                <span>Sustentabilidade (ESG)</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Compromisso com o Futuro</h2>
              <p className="text-green-100 text-lg mb-8 leading-relaxed">
                No modelo de Outsourcing, a responsabilidade ambiental é nossa. Garantimos o ciclo de vida sustentável de todos os ativos.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="bg-green-500 rounded-full p-2">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">Logística Reversa</div>
                    <div className="text-sm text-green-200">Coleta e destinação correta de toners e peças.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="bg-green-500 rounded-full p-2">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">Eficiência Energética</div>
                    <div className="text-sm text-green-200">Equipamentos modernos que consomem menos energia.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop"
                alt="Natureza e tecnologia"
                className="absolute inset-0 w-full h-[120%] object-cover will-change-transform animate-pan-vertical-esg"
                style={{ top: '-10%' }}
              />
              <div className="absolute inset-0 bg-green-900/20"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Join Us CTA */}
      <Section className="py-20">
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900 shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-lime-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

          <div className="relative z-10 px-6 py-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Quer fazer parte da nossa cultura?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Estamos sempre em busca de talentos que compartilham nossos valores de transparência, agilidade e inovação.
            </p>
            <Link
              to="/carreiras"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-lime-500 text-blue-950 text-lg font-bold rounded-full hover:bg-lime-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(132,204,22,0.4)] group"
            >
              Ver Vagas e Trabalhar Conosco
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default OurCulture;