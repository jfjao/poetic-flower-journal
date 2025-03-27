
import { FC } from 'react';
import Button from '@/components/Button';

const CTASection: FC = () => {
  return (
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
  );
};

export default CTASection;
