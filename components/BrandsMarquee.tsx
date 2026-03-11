import React from 'react';

const brands = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg', alt: 'HP', height: 'h-8' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Zebra_Technologies_logo.svg', alt: 'Zebra', height: 'h-6' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Epson_logo.svg', alt: 'Epson', height: 'h-6' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Canon_Inc._logo.svg', alt: 'Canon', height: 'h-6' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Brother_logo.svg', alt: 'Brother', height: 'h-8' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg', alt: 'Samsung', height: 'h-5' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Ricoh_logo.svg', alt: 'Ricoh', height: 'h-6' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg', alt: 'Dell', height: 'h-8' },
];

const BrandSet: React.FC = () => (
  <div className="flex justify-around w-[50%] gap-16 px-8 items-center">
    {brands.map((brand) => (
      <img
        key={brand.alt}
        src={brand.src}
        alt={brand.alt}
        className={`${brand.height} w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
      />
    ))}
  </div>
);

const BrandsMarquee: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
          Tecnologia Certificada pelos Líderes Globais
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-[200%] animate-marquee-right">
          <BrandSet />
          <BrandSet />
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
