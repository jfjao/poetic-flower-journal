
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
    alert('Merci pour votre message ! Nous reviendrons vers vous très bientôt.');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
              <span className="handwritten text-xl">Contactez-nous</span>
              <h1 className="font-serif text-4xl md:text-5xl mt-2 mb-4">Parlons fleurs</h1>
              <p className="max-w-2xl mx-auto text-deep-green/80">
                Envie d'un bouquet personnalisé ? D'une collaboration ? 
                Ou simplement curieux de notre univers ? Écrivez-nous !
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 lg:order-1 order-2">
                <div className="paper-card p-8 handdrawn-frame">
                  <h2 className="font-serif text-2xl mb-6">Envoyez-nous un message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block font-serif text-sm mb-1">Nom</label>
                        <input
                          type="text"
                          id="name"
                          value={formState.name}
                          onChange={handleChange}
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
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-deep-green/30 bg-white/80 focus:outline-none focus:ring-2 focus:ring-deep-green/50"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block font-serif text-sm mb-1">Sujet</label>
                      <select
                        id="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-deep-green/30 bg-white/80 focus:outline-none focus:ring-2 focus:ring-deep-green/50"
                        required
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="order">Commander un bouquet</option>
                        <option value="event">Événement / Mariage</option>
                        <option value="workshop">Ateliers / Cours</option>
                        <option value="collab">Collaboration</option>
                        <option value="other">Autre demande</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block font-serif text-sm mb-1">Message</label>
                      <textarea
                        id="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-deep-green/30 bg-white/80 focus:outline-none focus:ring-2 focus:ring-deep-green/50"
                        placeholder="Partagez-nous votre demande..."
                        required
                      ></textarea>
                    </div>
                    
                    <div className="text-center pt-2">
                      <Button type="submit" size="lg">
                        Envoyer mon message
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="lg:col-span-2 lg:order-2 order-1">
                <div className="sticky top-32">
                  <div className="paper-card p-8 handdrawn-frame mb-8">
                    <h2 className="font-serif text-2xl mb-4">Nous trouver</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-serif text-lg">Adresse</h3>
                        <address className="not-italic text-deep-green/80">
                          <p>Antananarivo, Madagascar</p>
                          <p className="italic text-sm mt-1">(Notre stand mobile se déplace dans toute la ville)</p>
                        </address>
                      </div>
                      
                      <div>
                        <h3 className="font-serif text-lg">Contact</h3>
                        <p className="text-deep-green/80">Email: contact@taxiamore.com</p>
                        <p className="text-deep-green/80">Téléphone: +261 00 00 00 00</p>
                      </div>
                      
                      <div>
                        <h3 className="font-serif text-lg">Horaires</h3>
                        <p className="text-deep-green/80">Mardi - Samedi: 9h - 18h</p>
                        <p className="text-deep-green/80">Dimanche - Lundi: Fermé</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="paper-card p-8 handdrawn-frame">
                    <h2 className="font-serif text-2xl mb-4">Suivez-nous</h2>
                    
                    <p className="text-deep-green/80 mb-4">
                      Retrouvez nos créations et suivez notre quotidien sur les réseaux sociaux.
                    </p>
                    
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-deep-green/10 rounded-full hover:bg-deep-green/20 transition-colors"
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
                        className="flex items-center p-3 bg-deep-green/10 rounded-full hover:bg-deep-green/20 transition-colors"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a 
                        href="https://www.pinterest.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-deep-green/10 rounded-full hover:bg-deep-green/20 transition-colors"
                      >
                        <span className="sr-only">Pinterest</span>
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
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

export default Contact;
