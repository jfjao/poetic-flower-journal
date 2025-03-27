
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Button';
import ImageLoader from '@/components/ImageLoader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import ImageCarousel from '@/components/ImageCarousel';

const Index = () => {
  const daisyRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up-element').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.fade-up-element').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Parallax effect for flower petals
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!daisyRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const petals = daisyRef.current.querySelectorAll('.petal');
      petals.forEach((petal, i) => {
        const factor = (i % 5) * 0.8;
        const moveX = (x - 0.5) * factor * 10;
        const moveY = (y - 0.5) * factor * 10;
        (petal as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px) rotate(${i * 45}deg)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const galleryItems = [
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            <div ref={daisyRef} className="absolute top-10 right-[5%] w-40 h-40">
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "petal absolute top-1/2 left-1/2 w-20 h-2 bg-rose-plum/70 rounded-full origin-left transition-transform duration-700 ease-out",
                  )}
                  style={{ transform: `rotate(${i * 45}deg)` }}
                ></div>
              ))}
              <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-deep-green rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            <div className="absolute bottom-20 left-[8%] w-60 h-60 border-2 border-deep-green/30 rounded-full"></div>
            <div className="absolute top-40 left-[15%] w-20 h-20 border border-rose-plum/30 rounded-full"></div>
          </div>
          
          <div className="container mx-auto max-w-7xl z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
              <div className={cn(
                "order-2 lg:order-1 transition-all duration-1000",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}>
                <div className="mb-6 flex flex-col items-start">
                  <span className="handwritten text-lg mb-2 animate-fade-in">heartmade</span>
                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
                    <span className="block">Taxi Amore</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl text-rose-plum block mt-2">
                      Atelier floral poétique
                    </span>
                  </h1>
                </div>
                
                <p className="text-lg mb-8 max-w-xl">
                  <span className="scribble-underline">Driven by love</span>, nous créons des compositions florales uniques 
                  qui racontent des histoires et célèbrent la beauté éphémère.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button to="/creations" size="lg">
                    Commander un bouquet
                  </Button>
                  <Button to="/about" variant="outline" size="lg">
                    Découvrir notre univers
                  </Button>
                </div>
              </div>
              
              <div className={cn(
                "order-1 lg:order-2 relative lg:mr-[-100px] lg:ml-[50px] transition-all duration-1000",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}>
                <div className="relative">
                  <div className="handdrawn-frame p-1">
                    <ImageLoader 
                      src="/lovable-uploads/587f519e-d9f0-4e2c-bf64-7434cb390a33.png"
                      alt="Taxi Amore - Stand floral" 
                      className="aspect-[3/4] rounded-md overflow-hidden relative z-10"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 p-3 paper-card animate-float z-20">
                    <span className="handwritten text-lg">Fleurs & Poésie</span>
                  </div>
                  
                  <div className="absolute -top-6 -left-6 z-0 w-full h-full bg-rose-plum/10 rounded-md border border-rose-plum/20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 relative bg-deep-green/5">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16 fade-up-element opacity-0">
              <span className="handwritten text-xl">Nos services</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2">L'expérience Taxi Amore</h2>
              <div className="w-16 h-1 bg-rose-plum/50 mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Bouquets Personnalisés",
                  description: "Créations florales uniques adaptées à votre personnalité et à chaque occasion spéciale.",
                  image: "/lovable-uploads/e406d80d-9cd8-4bde-8c1a-e45095782950.png"
                },
                {
                  title: "Stand Mobile",
                  description: "Notre atelier itinérant se déplace à travers Antananarivo pour vous proposer des fleurs fraîches.",
                  image: "/lovable-uploads/587f519e-d9f0-4e2c-bf64-7434cb390a33.png"
                },
                {
                  title: "Événements",
                  description: "Nous sublimez vos événements avec des installations florales poétiques et sur-mesure.",
                  image: "/lovable-uploads/e38430d2-d2ca-46d6-ac4d-6598ba1e8f53.png"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="paper-card p-6 fade-up-element opacity-0" 
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6 aspect-[4/3] overflow-hidden rounded-md handdrawn-frame">
                    <ImageLoader 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
                  <p className="text-deep-green/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Preview */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 fade-up-element opacity-0">
              <div>
                <span className="handwritten text-xl">Notre portfolio</span>
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
                  className="fade-up-element opacity-0" 
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <ImageLoader 
                    src={item.image} 
                    alt={item.title}
                    className="aspect-square rounded-md overflow-hidden mb-3 handdrawn-frame"
                  />
                  <div className="px-1">
                    <span className="handwritten text-sm text-deep-green/70">{item.category}</span>
                    <h3 className="font-serif text-lg">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Image Carousel */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12 fade-up-element opacity-0">
              <span className="handwritten text-xl">Notre univers</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2">La vie en fleurs</h2>
              <div className="w-16 h-1 bg-rose-plum/50 mx-auto mt-4"></div>
            </div>
            
            <div className="fade-up-element opacity-0">
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
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-deep-green/5 -z-10"></div>
          <div className="absolute inset-0 bg-paper-texture bg-cover bg-center opacity-10 -z-10"></div>
          
          <div className="container mx-auto max-w-3xl px-4 text-center fade-up-element opacity-0">
            <span className="handwritten text-xl">Contactez-nous</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">Commandez votre bouquet personnalisé</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Laissez-nous créer une composition florale unique qui reflète votre personnalité et vos émotions.
              Chaque création est réalisée avec amour et attention aux détails.
            </p>
            <Button to="/contact" size="lg">
              Prendre rendez-vous
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
