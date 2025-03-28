
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageLoader from '@/components/ImageLoader';
import { cn } from '@/lib/utils';

const About = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
  }, []);

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
              <span className="handwritten text-xl">Notre histoire</span>
              <h1 className="font-serif text-4xl md:text-5xl mt-2 mb-4">À propos</h1>
              <p className="max-w-2xl mx-auto text-deep-green/80">
                Découvrez l'histoire et la philosophie de Taxi Amore, 
                un atelier floral poétique né d'une passion pour la beauté éphémère des fleurs.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="order-2 lg:order-1">
                <span className="handwritten text-xl">Notre voyage</span>
                <h2 className="font-serif text-3xl mb-6">L'histoire de Taxi Amore</h2>
                
                <div className="space-y-4 text-deep-green/90">
                  <p>
                    Taxi Amore est né d'un rêve de liberté et d'une passion pour les fleurs. 
                    Notre fondatrice, amoureuse de botanique et de poésie, a imaginé un atelier 
                    floral itinérant qui pourrait apporter beauté et émotions dans les rues d'Antananarivo.
                  </p>
                  
                  <p>
                    Inspiré par les carnets de voyage et l'art du collage, Taxi Amore mêle traditions 
                    florales malgaches et influences d'ailleurs pour créer des compositions uniques 
                    qui racontent des histoires.
                  </p>
                  
                  <p>
                    Chaque création est pensée comme une page de carnet intime, un fragment de poésie 
                    visuelle qui invite au voyage et à l'émotion.
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="relative">
                  <div className="handdrawn-frame">
                    <ImageLoader 
                      src="/lovable-uploads/20729cb9-3048-4a07-9268-bb8fa7fafb61.png" 
                      alt="Artisanes de Taxi Amore" 
                      className="aspect-[4/3] rounded-md overflow-hidden z-10"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 p-3 paper-card animate-float z-20">
                    <span className="handwritten text-lg">Carnet de voyage</span>
                  </div>
                  
                  <div className="absolute -top-6 -left-6 z-0 w-full h-full bg-rose-plum/10 rounded-md border border-rose-plum/20"></div>
                </div>
              </div>
            </div>

            <div className="bg-deep-green/5 py-16 px-8 md:px-16 rounded-lg handdrawn-frame mb-16">
              <div className="text-center mb-8">
                <span className="handwritten text-xl">Notre philosophie</span>
                <h2 className="font-serif text-3xl mt-2 mb-4">Driven by love</h2>
                <div className="w-16 h-1 bg-rose-plum/50 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Poésie florale",
                    description: "Chaque composition est pensée comme un poème visuel, une expression artistique qui évoque émotions et souvenirs."
                  },
                  {
                    title: "Éphémère beauté",
                    description: "Nous célébrons le caractère transitoire des fleurs, rappel de la beauté de l'instant présent et de l'impermanence."
                  },
                  {
                    title: "Connexion humaine",
                    description: "Les fleurs sont un langage universel qui relie les êtres. Nous créons des ponts émotionnels à travers nos créations."
                  }
                ].map((value, index) => (
                  <div key={index} className="paper-card p-6 text-center">
                    <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                    <p className="text-deep-green/80">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="handdrawn-frame aspect-square">
                    <ImageLoader 
                      src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80" 
                      alt="Nos fleurs" 
                      className="rounded-md overflow-hidden"
                    />
                  </div>
                  <div className="handdrawn-frame aspect-square mt-8">
                    <ImageLoader 
                      src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80" 
                      alt="Notre processus de création" 
                      className="rounded-md overflow-hidden"
                    />
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 p-3 paper-card animate-float z-20">
                  <span className="handwritten text-lg">Fait avec amour</span>
                </div>
              </div>
              
              <div>
                <span className="handwritten text-xl">Notre démarche</span>
                <h2 className="font-serif text-3xl mb-6">Heartmade</h2>
                
                <div className="space-y-4 text-deep-green/90">
                  <p>
                    Chez Taxi Amore, chaque création est faite à la main avec soin et attention. 
                    Nous sélectionnons des fleurs locales et de saison pour composer des bouquets 
                    qui respectent le rythme de la nature.
                  </p>
                  
                  <p>
                    Notre approche est artisanale et sensible, privilégiant la qualité à la quantité. 
                    Nous accordons une importance particulière aux détails, aux textures et aux parfums 
                    pour créer une expérience sensorielle complète.
                  </p>
                  
                  <p>
                    Au-delà des fleurs, nous intégrons des éléments naturels et recyclés dans nos 
                    créations, dans une démarche respectueuse de l'environnement et consciente de 
                    l'impact de notre art.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
