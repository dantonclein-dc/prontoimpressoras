import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const heroImages = [
     "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.querySelector('#name') as HTMLInputElement).value;
    const company = (form.querySelector('#company') as HTMLInputElement).value;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const phone = (form.querySelector('#phone') as HTMLInputElement).value;
    const interest = (form.querySelector('#interest') as HTMLSelectElement).value;
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value;

    const whatsappMessage = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento.\n\n` +
      `*Nome:* ${name}\n` +
      `*Empresa:* ${company}\n` +
      `*E-mail:* ${email}\n` +
      `*Telefone:* ${phone}\n` +
      `*Interesse:* ${interest}\n` +
      `*Mensagem:* ${message || 'Não informada'}`
    );

    window.open(`https://wa.me/5521991724810?text=${whatsappMessage}`, '_blank');
    setFormStatus('success');
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Contato | Solicite Orçamento de Outsourcing | Pronto Impressoras</title>
        <meta name="description" content="Entre em contato com a Pronto Impressoras. Solicite orçamento para outsourcing de impressão, computadores ou suporte de TI. (21) 99172-4810 | contato@prontoimpressoras.com.br" />
        <link rel="canonical" href="https://prontoimpressoras.com.br/contato" />
      </Helmet>
      <div className="relative bg-blue-950 py-20 text-white border-b-4 border-lime-500 overflow-hidden">
        <HeroBackground images={heroImages} overlayClassName="bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Fale com um Especialista</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Preencha o formulário para receber um estudo de viabilidade ou cotação personalizada para sua empresa.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Canais de Atendimento</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4 border border-blue-100">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Comercial e Vendas</h3>
                  <a href="tel:+5521991724810" className="text-slate-600 hover:text-blue-700 transition-colors">(21) 99172-4810</a>
                  <p className="text-slate-500 text-sm">Seg a Sex, das 09:00h às 17:00h</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4 border border-blue-100">
                  <Mail className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">E-mail</h3>
                  <a href="mailto:contato@prontoimpressoras.com.br" className="text-slate-600 hover:text-blue-700 transition-colors">contato@prontoimpressoras.com.br</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4 border border-blue-100">
                  <MapPin className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Matriz : Mesquita /RJ</h3>
                  <p className="text-slate-600">
                    Rua Professora Rakel Rechuem, 48<br />
                    Vila Emil
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-slate-50 p-6 rounded-lg border border-slate-200">
               <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                 <Clock className="w-4 h-4 mr-2 text-lime-600" /> Atendimento Técnico
               </h3>
               <p className="text-slate-600 text-sm">
                 Para abertura de chamados técnicos, utilize nosso portal do cliente ou entre em contato pelo telefone exclusivo informado em seu contrato. Nosso SLA de atendimento começa a contar a partir da abertura do ticket.
               </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 relative overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-lime-500"></div>

            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-lime-100 text-lime-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-600">
                  Sua solicitação foi encaminhada via WhatsApp. Um de nossos consultores dará continuidade ao atendimento.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-blue-900 font-semibold hover:underline"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Solicitar Contato</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
                    <input type="text" id="company" name="company" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail Corporativo</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1">Interesse Principal</label>
                  <select id="interest" name="interest" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option>Outsourcing de Impressão</option>
                    <option>Locação de Notebooks/Computadores</option>
                    <option>Gestão de Documentos (GED)</option>
                    <option>Projeto Especial / Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem (Opcional)</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Descreva brevemente sua necessidade atual..."></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-900 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-800 transition-colors shadow-sm">
                  Enviar via WhatsApp
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
