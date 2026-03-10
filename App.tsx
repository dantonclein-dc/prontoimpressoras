import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Segments from './pages/Segments';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AboutPronto from './pages/AboutPronto';
import OurCulture from './pages/OurCulture';
import PrintOutsourcing from './pages/PrintOutsourcing';
import ComputerOutsourcing from './pages/ComputerOutsourcing';
import AutomationOutsourcing from './pages/AutomationOutsourcing';
import MarketingPlatform from './pages/MarketingPlatform';
import WorkflowManagement from './pages/WorkflowManagement';
import Support from './pages/Support';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';

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
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
