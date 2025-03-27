
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageLoader from './ImageLoader';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

const ImageCarousel = ({ images, className }: ImageCarouselProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={cn(
        "relative w-full max-w-5xl mx-auto", 
        className,
        "transition-all duration-700",
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="handdrawn-frame p-1 w-full">
                  <ImageLoader
                    src={image}
                    alt={`Taxi Amore - Image ${index + 1}`}
                    className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-md"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 md:left-8 bg-white/80 hover:bg-white text-deep-green border-deep-green/20 hover:border-deep-green" />
        <CarouselNext className="right-4 md:right-8 bg-white/80 hover:bg-white text-deep-green border-deep-green/20 hover:border-deep-green" />
      </Carousel>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-deep-green/30"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
