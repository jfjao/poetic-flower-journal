
import { useState } from 'react';
import { cn } from '@/lib/utils';
import ImageLoader from './ImageLoader';

interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
  description?: string;
  className?: string;
}

const GalleryItem = ({ image, title, category, description, className }: GalleryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        'relative group overflow-hidden rounded-md handdrawn-frame transition-all duration-500 hover:shadow-xl',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageLoader 
        src={image} 
        alt={title}
        className="aspect-square w-full h-full"
      />
      
      <div 
        className={cn(
          'absolute inset-0 bg-deep-green/60 backdrop-blur-[2px] transition-all duration-500 flex flex-col justify-end p-4',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className={cn(
          'transition-all duration-500 transform',
          isHovered ? 'translate-y-0' : 'translate-y-6'
        )}>
          <span className="font-handwritten text-cream/90 text-sm">{category}</span>
          <h3 className="font-serif text-cream text-xl mb-2">{title}</h3>
          {description && (
            <p className="text-cream/90 text-sm line-clamp-2">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
