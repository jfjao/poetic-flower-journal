
import { FC, useEffect, useState } from 'react';
import Button from '@/components/Button';
import ImageLoader from '@/components/ImageLoader';

interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

const GallerySection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Ajouter un léger délai pour s'assurer que le composant est monté
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const galleryItems: GalleryItem[] = [
    {
      image: "/lovable-uploads/767c3964-7d01-41e1-8ccd-741fcb6f172d.png",
      title: "Bouquet Coloré",
      category: "Bouquets"
    },
    {
      image: "/lovable-uploads/4fc82421-b0fd-470d-b2a6-f7d8b0e70b61.png",
      title: "Composition Florale",
      category: "Événements"
    },
    {
      image: "/lovable-uploads/30ba7656-f9f4-422f-83ed-6f5a87b368f4.png",
      title: "Fleurs dans un Taxi",
      category: "Stand Mobile"
    },
    {
      image: "/lovable-uploads/1f951a6a-44af-43e2-af76-f75cfe912253.png",
      title: "Roses et Gomphrenas",
      category: "Bouquets"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto max-w-7xl px-4">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="handwritten text-3xl">Notre portfolio</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2">Créations récentes</h2>
          </div>
          <Button to="/creations" variant="outline" className="mt-4 md:mt-0">
            Voir toutes les créations
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index * 100) + 300}ms` }}
            >
              <ImageLoader 
                src={item.image} 
                alt={item.title}
                className="aspect-square rounded-md overflow-hidden mb-3 handdrawn-frame"
              />
              <div className="px-1">
                <span className="handwritten text-2xl text-deep-green/70">{item.category}</span>
                <h3 className="font-serif text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
