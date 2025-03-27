
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ImageLoader from '@/components/ImageLoader';
import { cn } from '@/lib/utils';

const Stand = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      date: "10 Juin 2023",
      time: "9h - 17h",
      location: "Marché de Behoririka",
      description: "Vente de bouquets frais et objets artisanaux"
    },
    {
      id: 2,
      date: "15 Juin 2023",
      time: "14h - 20h",
      location: "Place de l'Indépendance",
      description: "Stand éphémère et atelier de création florale"
    },
    {
      id: 3,
      date: "24-25 Juin 2023",
      time: "10h - 18h",
      location: "Festival des Arts",
      description: "Exposition et vente de créations florales"
    }
  ];

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
              <span className="handwritten text-xl">Notre stand mobile</span>
              <h1 className="font-serif text-4xl md:text-5xl mt-2 mb-4">Taxi Amore en ville</h1>
              <p className="max-w-2xl mx-auto text-deep-green/80">
                Notre stand mobile parcourt les rues d'Antananarivo pour apporter 
                poésie et fleurs fraîches partout où vous êtes.
              </p>
            </header>

            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 bg-deep-green/10 rounded-lg">
                <button
                  onClick={() => setActiveTab('about')}
                  className={cn(
                    "px-4 py-2 rounded-md font-handwritten transition-all duration-300",
                    activeTab === 'about'
                      ? "bg-deep-green text-cream shadow-sm"
                      : "bg-transparent text-deep-green hover:bg-deep-green/5"
                  )}
                >
                  Le concept
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={cn(
                    "px-4 py-2 rounded-md font-handwritten transition-all duration-300",
                    activeTab === 'events'
                      ? "bg-deep-green text-cream shadow-sm"
                      : "bg-transparent text-deep-green hover:bg-deep-green/5"
                  )}
                >
                  Événements
                </button>
                <button
                  onClick={() => setActiveTab('booking')}
                  className={cn(
                    "px-4 py-2 rounded-md font-handwritten transition-all duration-300",
                    activeTab === 'booking'
                      ? "bg-deep-green text-cream shadow-sm"
                      : "bg-transparent text-deep-green hover:bg-deep-green/5"
                  )}
                >
                  Réservation
                </button>
              </div>
            </div>

            <div className={cn(
              "transition-opacity duration-500",
              activeTab === 'about' ? "opacity-100" : "opacity-0 absolute -z-10 inset-0 pointer-events-none"
            )}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="paper-card p-8 handdrawn-frame">
                    <h2 className="font-serif text-2xl mb-4">Rihana, notre voiture vintage</h2>
                    <p className="mb-4 text-deep-green/80">
                      Notre stand mobile est installé dans Rihana, une voiture vintage pleine de charme 
                      qui abrite nos créations florales. Elle sillonne les rues d'Antananarivo, apportant 
                      couleurs et parfums à tous les quartiers de la ville.
                    </p>
                    <p className="mb-6 text-deep-green/80">
                      Transformée en atelier floral itinérant, Rihana est devenue un lieu de rencontres 
                      et d'échanges où la poésie et l'art floral se mêlent. Venez découvrir notre sélection 
                      de fleurs fraîches et créations artisanales.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-block bg-rose-plum/10 text-rose-plum px-3 py-1 rounded-full text-sm font-handwritten">fleurs fraîches</span>
                      <span className="inline-block bg-rose-plum/10 text-rose-plum px-3 py-1 rounded-full text-sm font-handwritten">compositions</span>
                      <span className="inline-block bg-rose-plum/10 text-rose-plum px-3 py-1 rounded-full text-sm font-handwritten">objets artisanaux</span>
                      <span className="inline-block bg-rose-plum/10 text-rose-plum px-3 py-1 rounded-full text-sm font-handwritten">carte cadeau</span>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 relative">
                  <div className="relative">
                    <div className="handdrawn-frame">
                      <ImageLoader 
                        src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80" 
                        alt="Rihana, notre stand mobile" 
                        className="aspect-square rounded-md overflow-hidden z-10"
                      />
                    </div>
                    
                    <div className="absolute -bottom-6 -right-6 p-3 paper-card animate-float z-20">
                      <span className="handwritten text-lg">Rihana</span>
                    </div>
                    
                    <div className="absolute -top-6 -left-6 z-0 w-full h-full bg-deep-green/10 rounded-md border border-deep-green/20"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn(
              "transition-opacity duration-500",
              activeTab === 'events' ? "opacity-100" : "opacity-0 absolute -z-10 inset-0 pointer-events-none"
            )}>
              <div className="max-w-3xl mx-auto">
                <h2 className="font-serif text-2xl mb-6 text-center">Prochaines apparitions</h2>
                
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="paper-card p-6 hover:shadow-md transition-all duration-300 handdrawn-frame">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-rose-plum rounded-full"></div>
                            <span className="font-handwritten text-lg">{event.date}</span>
                          </div>
                          <h3 className="font-serif text-xl mb-1">{event.location}</h3>
                          <p className="text-deep-green/70 text-sm">{event.time} • {event.description}</p>
                        </div>
                        <Button className="mt-4 md:mt-0" variant="outline" size="sm">
                          Ajouter au calendrier
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <p className="text-deep-green/80 mb-4">
                    Retrouvez-nous sur les réseaux sociaux pour suivre nos déplacements en temps réel !
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="https://www.instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-deep-green/10 rounded-full hover:bg-deep-green/20 transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-deep-green/10 rounded-full hover:bg-deep-green/20 transition-colors"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn(
              "transition-opacity duration-500",
              activeTab === 'booking' ? "opacity-100" : "opacity-0 absolute -z-10 inset-0 pointer-events-none"
            )}>
              <div className="max-w-3xl mx-auto">
                <h2 className="font-serif text-2xl mb-6 text-center">Réserver le stand</h2>
                
                <div className="paper-card p-8 handdrawn-frame">
                  <p className="text-deep-green/80 mb-6">
                    Vous souhaitez que Rihana soit présente à votre événement ? Complétez le formulaire 
                    ci-dessous et nous vous contacterons pour discuter des détails.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block font-serif text-sm mb-1">Nom</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-md border border-deep-green/30 bg-white/80 focus:outline-none focus:ring-2 focus:ring-deep-green/50"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-serif text-sm mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-md border border-deep-green/30 bg-white/80 focus:outline-none focus:ring-2 focus:ring-deep-green/50"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block font-serif text-sm mb-1">Date souhaitée</label>
                        <input
                          type="date"
                          id="date"
                          className="w-full px-4 py-3 rounded-md border border-deep-green/30 bg-white/80 focus:outline-none focus:ring-2 focus:ring-deep-green/50"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="type" className="block font-serif text-sm mb-1">Type d'événement</label>
                        <select
                          id="type"
                          className="w-full px-4 py-3 rounded-md border border-deep-green/30 bg-white/80 focus:outline-none focus:ring-2 focus:ring-deep-green/50"
                          required
                        >
                          <option value="">Sélectionnez</option>
                          <option value="wedding">Mariage</option>
                          <option value="corporate">Événement d'entreprise</option>
                          <option value="private">Fête privée</option>
                          <option value="market">Marché/Festival</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block font-serif text-sm mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-md border border-deep-green/30 bg-white/80 focus:outline-none focus:ring-2 focus:ring-deep-green/50"
                        placeholder="Parlez-nous de votre événement..."
                        required
                      ></textarea>
                    </div>
                    
                    <div className="text-center pt-2">
                      <Button type="submit" size="lg">
                        Envoyer ma demande
                      </Button>
                    </div>
                  </form>
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

export default Stand;
