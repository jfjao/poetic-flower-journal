
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

const ImageLoader = ({ src, alt, className, imgClassName }: ImageLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setIsError(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div 
        className={cn(
          "image-placeholder absolute inset-0 transition-opacity duration-700",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />
      {!isError && (
        <img 
          src={src} 
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out",
            !isLoaded && "opacity-0 scale-105 blur-sm",
            isLoaded && "opacity-100 scale-100 blur-0 animate-bloom",
            imgClassName
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsError(true)}
        />
      )}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-rose-plum/10 text-deep-green text-sm">
          Image non disponible
        </div>
      )}
    </div>
  );
};

export default ImageLoader;
