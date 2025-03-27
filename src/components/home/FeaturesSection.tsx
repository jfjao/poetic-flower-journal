
import { FC } from 'react';
import ImageLoader from '@/components/ImageLoader';

const FeaturesSection: FC = () => {
  return (
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
  );
};

export default FeaturesSection;
