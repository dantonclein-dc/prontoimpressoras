import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    {
      name: 'Quem Somos',
      path: '#',
      dropdown: [
        { name: 'Sobre a Pronto', path: '/quem-somos/sobre' },
        { name: 'Nossa Cultura', path: '/quem-somos/cultura' },
      ]
    },
    {
      name: 'Soluções',
      path: '/solucoes',
      dropdown: [
        { name: 'Outsourcing de Impressão', path: '/solucoes/impressao' },
        { name: 'Outsourcing de Computadores', path: '/solucoes/computadores' },
        { name: 'Outsourcing de Automação', path: '/solucoes/automacao' },
        { name: 'Plataforma de Marketing (By Price)', path: '/solucoes/marketing' },
        { name: 'Gestão de Fluxos (GED)', path: '/solucoes/fluxos' },
      ]
    },
    { name: 'Segmentos', path: '/segmentos' },
    { name: 'Suporte', path: '/suporte' },
    { name: 'Carreiras', path: '/carreiras' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-all duration-300" role="navigation" aria-label="Menu principal">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.jpg"
                alt="Pronto Impressoras - Ir para página inicial"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Center Navigation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <Link
                      to={link.path}
                      onClick={(e) => { if (link.path === '#') e.preventDefault(); }}
                      aria-haspopup="true"
                      className={`flex items-center text-sm font-medium transition-colors duration-200 cursor-pointer ${
                        link.path !== '#' && location.pathname.includes(link.path)
                          ? 'text-blue-900 font-bold'
                          : 'text-slate-600 hover:text-blue-900'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200 text-lime-600" />
                    </Link>
                    {/* Dropdown Menu */}
                    <div role="menu" className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-100 border-t-4 border-t-lime-500 rounded-b-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                      <div className="py-2">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            role="menuitem"
                            className={`block px-6 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-900 border-l-4 border-transparent hover:border-lime-500 transition-all ${
                              isActive(subItem.path) ? 'bg-blue-50 text-blue-900 font-bold border-l-lime-500' : ''
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-blue-900 font-bold'
                        : 'text-slate-600 hover:text-blue-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right CTA Section */}
          <div className="hidden md:flex items-center space-x-4">
             <Link
              to="/contato"
              className="text-xs lg:text-sm font-bold text-blue-900 border-2 border-blue-100 px-5 py-2.5 rounded-full hover:border-lime-500 hover:text-lime-700 transition-all whitespace-nowrap"
            >
              SEJA UM PARCEIRO
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-full shadow-lg shadow-blue-900/10 text-xs lg:text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              FALE COM UM ESPECIALISTA
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl overflow-y-auto pb-20 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
        style={{ maxHeight: isOpen ? '100vh' : '0' }}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu(link.name)}
                    aria-expanded={mobileSubmenuOpen === link.name}
                    className="flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-900"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 text-lime-600 transition-transform duration-200 ${mobileSubmenuOpen === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen === link.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-6 space-y-1 bg-slate-50 rounded-lg my-1 border-l-4 border-lime-500">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-3 rounded-md text-sm font-medium ${
                            isActive(subItem.path) ? 'text-blue-900 font-bold' : 'text-slate-500'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-blue-50 text-blue-900'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-900'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-6 space-y-3 px-3">
              <Link
                to="/contato"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 border-2 border-blue-100 rounded-full text-base font-bold text-blue-900 hover:bg-blue-50"
              >
                SEJA UM PARCEIRO
              </Link>
              <Link
                to="/contato"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-full shadow-md text-base font-bold text-white bg-blue-900"
              >
                <Phone className="w-4 h-4 mr-2" />
                FALE COM UM ESPECIALISTA
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
