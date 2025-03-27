
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-deep-green/10 pt-12 pb-8 border-t border-deep-green/20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-deep-green/20" style={{ 
        clipPath: "path('M0,0 C100,10 200,0 300,5 C400,10 500,0 600,5 C700,10 800,0 900,5 C1000,10 1100,0 1200,5 C1300,10 1400,0 1500,5 C1600,10 1700,0 1800,5 C1900,10 2000,0 2100,5 C2200,10 2300,0 2400,5')"
      }}></div>
      
      <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] opacity-5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4 6 6 0 0 0 6 6 6 6 0 0 0 6-6 4 4 0 0 0-4-4 4 4 0 0 0-4 4 6 6 0 0 0 6 6 6 6 0 0 0 6-6 4 4 0 0 0-4-4 4 4 0 0 0-4 4 6 6 0 0 0 6 6 6 6 0 0 0 6-6 4 4 0 0 0-4-4h0" />
          <path d="M12 17v5" />
        </svg>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <svg 
                className="w-6 h-6 stroke-deep-green flower-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2a4 4 0 0 0-4 4 6 6 0 0 0 6 6 6 6 0 0 0 6-6 4 4 0 0 0-4-4 4 4 0 0 0-4 4 6 6 0 0 0 6 6 6 6 0 0 0 6-6 4 4 0 0 0-4-4 4 4 0 0 0-4 4 6 6 0 0 0 6 6 6 6 0 0 0 6-6 4 4 0 0 0-4-4h0" />
                <path d="M12 17v5" />
              </svg>
              <div className="flex flex-col">
                <span className="handwritten text-xs leading-none">heartmade</span>
                <span className="font-serif font-medium text-lg tracking-wide leading-none">Taxi Amore</span>
              </div>
            </div>
            <p className="text-deep-green/80 text-sm max-w-xs">
              Atelier floral itinérant à Antananarivo, créations florales et poétiques pour tous vos moments.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-deep-green/80 hover:text-rose-plum transition-colors"
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
                className="text-deep-green/80 hover:text-rose-plum transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a 
                href="mailto:contact@taxiamore.com" 
                className="text-deep-green/80 hover:text-rose-plum transition-colors"
              >
                <span className="sr-only">Email</span>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-serif text-lg mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-deep-green/80 hover:text-rose-plum transition-colors text-sm">Accueil</Link></li>
                <li><Link to="/creations" className="text-deep-green/80 hover:text-rose-plum transition-colors text-sm">Nos créations</Link></li>
                <li><Link to="/stand" className="text-deep-green/80 hover:text-rose-plum transition-colors text-sm">Le stand</Link></li>
                <li><Link to="/about" className="text-deep-green/80 hover:text-rose-plum transition-colors text-sm">À propos</Link></li>
                <li><Link to="/contact" className="text-deep-green/80 hover:text-rose-plum transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-deep-green/80 hover:text-rose-plum transition-colors text-sm">Bouquets personnalisés</a></li>
                <li><a href="#" className="text-deep-green/80 hover:text-rose-plum transition-colors text-sm">Événements</a></li>
                <li><a href="#" className="text-deep-green/80 hover:text-rose-plum transition-colors text-sm">Ateliers</a></li>
                <li><a href="#" className="text-deep-green/80 hover:text-rose-plum transition-colors text-sm">Abonnements</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-lg mb-4">Adresse</h3>
              <address className="not-italic text-deep-green/80 text-sm leading-relaxed">
                <p>Antananarivo, Madagascar</p>
                <p className="mt-2">Téléphone: +261 00 00 00 00</p>
                <p className="mt-2">Email: contact@taxiamore.com</p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-deep-green/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-deep-green/60 text-xs">© {currentYear} Taxi Amore. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-deep-green/60 hover:text-rose-plum text-xs">Mentions légales</a>
            <a href="#" className="text-deep-green/60 hover:text-rose-plum text-xs">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
