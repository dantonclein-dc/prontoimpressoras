import React from 'react';

interface HeroBackgroundProps {
  images: string[];
  overlayClassName?: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  images, 
  overlayClassName = "bg-blue-950/90" 
}) => {
  // Use the first image from the array for a static background
  const image = images.length > 0 ? images[0] : null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt="Background Hero"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`}></div>
    </div>
  );
};

export default HeroBackground;