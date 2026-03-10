import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5521991724810';
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre as soluções de outsourcing da Pronto Impressoras.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.91 15.91 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.342 22.616c-.39 1.1-1.932 2.014-3.176 2.28-.852.18-1.964.324-5.71-1.226-4.796-1.984-7.882-6.846-8.12-7.166-.23-.32-1.886-2.514-1.886-4.794s1.196-3.404 1.62-3.868c.424-.464.924-.58 1.232-.58.308 0 .616.004.886.016.284.012.666-.108.942.718.286.852.966 2.938 1.052 3.152.086.214.144.464.028.748-.114.286-.172.464-.342.714-.17.252-.358.562-.51.754-.17.214-.348.446-.15.876.2.428.886 1.54 1.902 2.496 1.306 1.228 2.406 1.608 2.748 1.79.342.18.542.15.742-.092.2-.242.856-.998 1.084-1.342.228-.342.456-.286.77-.172.314.114 1.998.942 2.342 1.114.342.17.572.258.656.398.086.142.086.81-.304 1.912z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
