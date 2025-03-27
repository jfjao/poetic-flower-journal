
import { FC, useEffect, useState } from 'react';
import ImageCarousel from '@/components/ImageCarousel';

const CarouselSection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Ajouter un léger délai pour s'assurer que le composant est monté
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="handwritten text-2xl">Notre univers</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">La vie en fleurs</h2>
          <div className="w-16 h-1 bg-rose-plum/50 mx-auto mt-4"></div>
        </div>
        
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ImageCarousel 
            images={[
              "/lovable-uploads/22a9ddfe-2fe8-4192-a0c8-492f6b284c08.png",
              "/lovable-uploads/46932650-7cf0-4e69-ac52-d6694966d6f3.png",
              "/lovable-uploads/e406d80d-9cd8-4bde-8c1a-e45095782950.png",
              "/lovable-uploads/e38430d2-d2ca-46d6-ac4d-6598ba1e8f53.png"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
