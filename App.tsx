import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const Home = React.lazy(() => import('./pages/Home'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Segments = React.lazy(() => import('./pages/Segments'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));
const AboutPronto = React.lazy(() => import('./pages/AboutPronto'));
const OurCulture = React.lazy(() => import('./pages/OurCulture'));
const PrintOutsourcing = React.lazy(() => import('./pages/PrintOutsourcing'));
const ComputerOutsourcing = React.lazy(() => import('./pages/ComputerOutsourcing'));
const AutomationOutsourcing = React.lazy(() => import('./pages/AutomationOutsourcing'));
const MarketingPlatform = React.lazy(() => import('./pages/MarketingPlatform'));
const WorkflowManagement = React.lazy(() => import('./pages/WorkflowManagement'));
const Support = React.lazy(() => import('./pages/Support'));
const Careers = React.lazy(() => import('./pages/Careers'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-slate-800">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="w-8 h-8 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos/sobre" element={<AboutPronto />} />
            <Route path="/quem-somos/cultura" element={<OurCulture />} />

            {/* Solutions Routes */}
            <Route path="/solucoes" element={<Solutions />} />
            <Route path="/solucoes/impressao" element={<PrintOutsourcing />} />
            <Route path="/solucoes/computadores" element={<ComputerOutsourcing />} />
            <Route path="/solucoes/automacao" element={<AutomationOutsourcing />} />
            <Route path="/solucoes/marketing" element={<MarketingPlatform />} />
            <Route path="/solucoes/fluxos" element={<WorkflowManagement />} />

            <Route path="/segmentos" element={<Segments />} />
            <Route path="/suporte" element={<Support />} />
            <Route path="/carreiras" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contact />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
