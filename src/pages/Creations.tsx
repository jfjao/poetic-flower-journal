
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
      description: 'Un bouquet romantique aux teintes pastel',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Décoration de Mariage',
      category: 'events',
      description: 'Installation florale pour une cérémonie en plein air',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Couronne Florale',
      category: 'accessories',
      description: 'Couronne délicate pour mariée ou occasion spéciale',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Arrangement de Table',
      category: 'events',
      description: 'Centre de table pour dîner ou réception',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Bouquet Sauvage',
      category: 'bouquets',
      description: 'Composition aux allures champêtres',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Bougie Florale',
      category: 'objects',
      description: 'Bougie artisanale avec inclusion de fleurs séchées',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80'
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
