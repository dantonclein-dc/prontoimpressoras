import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-slate-300 border-t border-blue-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Pronto Impressoras - Outsourcing de Impressão e TI"
                className="h-12 w-auto object-contain bg-white p-1 rounded-md"
                loading="lazy"
              />
            </div>
            <p className="text-sm leading-relaxed text-blue-100/70">
              Especialistas em outsourcing de impressão e gestão de infraestrutura de TI. Entregamos eficiência, redução de custos e tecnologia de ponta para empresas no Rio de Janeiro e em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/prontoimpressoras" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Pronto Impressoras" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-200 hover:bg-lime-500 hover:text-blue-950 transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/prontoimpressoras" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Pronto Impressoras" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-200 hover:bg-lime-500 hover:text-blue-950 transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/prontoimpressoras" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Pronto Impressoras" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-200 hover:bg-lime-500 hover:text-blue-950 transition-all"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-lime-500/30 pb-2 w-fit">Navegação</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/quem-somos/sobre" className="hover:text-lime-400 transition-colors flex items-center gap-2">Quem Somos</Link></li>
              <li><Link to="/solucoes" className="hover:text-lime-400 transition-colors flex items-center gap-2">Nossas Soluções</Link></li>
              <li><Link to="/segmentos" className="hover:text-lime-400 transition-colors flex items-center gap-2">Segmentos Atendidos</Link></li>
              <li><Link to="/blog" className="hover:text-lime-400 transition-colors flex items-center gap-2">Blog & Insights</Link></li>
              <li><Link to="/carreiras" className="hover:text-lime-400 transition-colors flex items-center gap-2">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-lime-500/30 pb-2 w-fit">Serviços</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/solucoes/impressao" className="hover:text-lime-400 transition-colors">Outsourcing de Impressão</Link></li>
              <li><Link to="/solucoes/computadores" className="hover:text-lime-400 transition-colors">Outsourcing de Computadores</Link></li>
              <li><Link to="/solucoes/fluxos" className="hover:text-lime-400 transition-colors">Gestão Eletrônica (GED)</Link></li>
              <li><Link to="/suporte" className="hover:text-lime-400 transition-colors">Manutenção e Suporte</Link></li>
              <li><Link to="/contato" className="hover:text-lime-400 transition-colors">Projetos Especiais</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-lime-500/30 pb-2 w-fit">Fale Conosco</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-lime-500 shrink-0 mt-0.5" />
                <span>Matriz : Mesquita /RJ<br />Rua Professora Rakel Rechuem, 48 - Vila Emil</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-lime-500 shrink-0" />
                <a href="tel:+5521991724810" className="font-semibold text-white hover:text-lime-400 transition-colors">(21) 99172-4810</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-lime-500 shrink-0" />
                <a href="mailto:contato@prontoimpressoras.com.br" className="hover:text-lime-400 transition-colors">contato@prontoimpressoras.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300/60">
          <p>&copy; {new Date().getFullYear()} Pronto Impressoras e Tecnologia. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span className="hover:text-white cursor-default">Termos de Uso</span>
             <span className="hover:text-white cursor-default">Política de Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
