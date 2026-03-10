import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white px-4 text-center">
      <Helmet>
        <title>Página não encontrada | Pronto Impressoras</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="text-8xl font-bold text-blue-900 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Página não encontrada</h2>
      <p className="text-slate-600 mb-8 max-w-md">
        A página que você procura não existe ou foi movida. Volte para a página inicial ou entre em contato conosco.
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="px-8 py-3 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-colors"
        >
          Voltar ao Início
        </Link>
        <Link
          to="/contato"
          className="px-8 py-3 border-2 border-blue-900 text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors"
        >
          Fale Conosco
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
