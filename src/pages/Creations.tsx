
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryItem from '@/components/GalleryItem';
import { cn } from '@/lib/utils';

const Creations = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
  }, []);

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'bouquets', name: 'Bouquets' },
    { id: 'events', name: 'Événements' },
    { id: 'accessories', name: 'Accessoires' },
    { id: 'objects', name: 'Objets' },
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Bouquet Romantique',
      category: 'bouquets',
      description: 'Un bouquet romantique aux teintes roses et fuchsia',
      image: '/lovable-uploads/767c3964-7d01-41e1-8ccd-741fcb6f172d.png'
    },
    {
      id: 2,
      title: 'Stand Floral',
      category: 'events',
      description: 'Notre stand mobile décoré de bougainvilliers',
      image: '/lovable-uploads/587f519e-d9f0-4e2c-bf64-7434cb390a33.png'
    },
    {
      id: 3,
      title: 'Fleurs de Camille',
      category: 'bouquets',
      description: 'Des fleurs blanches délicates pour toutes occasions',
      image: '/lovable-uploads/e406d80d-9cd8-4bde-8c1a-e45095782950.png'
    },
    {
      id: 4,
      title: 'Taxi fleuri',
      category: 'events',
      description: 'Notre taxi rempli de fleurs prêtes à être livrées',
      image: '/lovable-uploads/30ba7656-f9f4-422f-83ed-6f5a87b368f4.png'
    },
    {
      id: 5,
      title: 'Dans les coulisses',
      category: 'objects',
      description: 'La préparation de nos compositions florales',
      image: '/lovable-uploads/e38430d2-d2ca-46d6-ac4d-6598ba1e8f53.png'
    },
    {
      id: 6,
      title: 'Bijoux floraux',
      category: 'accessories',
      description: 'Nos créations de bijoux avec fleurs séchées',
      image: '/lovable-uploads/1f951a6a-44af-43e2-af76-f75cfe912253.png'
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="page-container">
          <div className={cn(
            "transition-all duration-1000",
            isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <header className="text-center mb-12">
              <span className="handwritten text-xl">Notre portfolio</span>
              <h1 className="font-serif text-4xl md:text-5xl mt-2 mb-4">Nos créations</h1>
              <p className="max-w-2xl mx-auto text-deep-green/80">
                Découvrez nos créations florales uniques, conçues avec passion et sensibilité pour 
                raconter des histoires et créer des émotions.
              </p>
            </header>

            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "px-4 py-2 rounded-full font-handwritten transition-all duration-300",
                      selectedCategory === category.id
                        ? "bg-deep-green text-cream shadow-md"
                        : "bg-deep-green/10 text-deep-green hover:bg-deep-green/20"
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={cn(
                    "transition-all duration-700",
                    isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <GalleryItem
                    image={item.image}
                    title={item.title}
                    category={item.category === 'bouquets' ? 'Bouquets' : 
                              item.category === 'events' ? 'Événements' : 
                              item.category === 'accessories' ? 'Accessoires' : 'Objets'}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Creations;
