export const COMPANY = {
  phone: '5521991724810',
  phoneFormatted: '(21) 99172-4810',
  email: 'contato@prontoimpressoras.com.br',
  domain: 'https://prontoimpressoras.com.br',
  address: {
    label: 'Matriz : Mesquita /RJ',
    street: 'Rua Professora Rakel Rechuem, 48',
    neighborhood: 'Vila Emil',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/prontoimpressoras',
    facebook: 'https://www.facebook.com/prontoimpressoras',
    instagram: 'https://www.instagram.com/prontoimpressoras',
  },
  whatsappUrl: (message: string) =>
    `https://wa.me/5521991724810?text=${encodeURIComponent(message)}`,
};
