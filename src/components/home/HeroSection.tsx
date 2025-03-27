
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Button';
import ImageLoader from '@/components/ImageLoader';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const daisyRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
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

  return (
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
                  src="/lovable-uploads/d1c5b3aa-8057-4d47-8588-43a00af8d744.png"
                  alt="Taxi Amore - Bouquet sur le tableau de bord d'un taxi" 
                  className="aspect-[1/1] rounded-md overflow-hidden relative z-10"
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
  );
};

export default HeroSection;
