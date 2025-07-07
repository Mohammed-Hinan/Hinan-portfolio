"use client";
import * as React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { cn } from "@/lib/utils";

const CarouselContext = React.createContext<any>(null);

export function Carousel({
  children,
  className,
  plugins = [],
  options = {},
  ...props
}: React.PropsWithChildren<{
  className?: string;
  plugins?: any[];
  options?: EmblaOptionsType;
}>) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  return (
    <CarouselContext.Provider value={emblaApi}>
      <div className={cn("relative", className)} ref={emblaRef} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("flex touch-pan-x select-none -ml-2", className)}>
      {React.Children.map(children, (child, i) => (
        React.isValidElement(child)
          ? React.cloneElement(child, { index: i })
          : child
      ))}
    </div>
  );
}

export function CarouselItem({ children, className, index }: React.PropsWithChildren<{ className?: string; index?: number }>) {
  return (
    <div className={cn("min-w-0 flex-[0_0_100%] pl-2", className)} data-carousel-item={index}>
      {children}
    </div>
  );
}

export function CarouselNext({ className }: { className?: string }) {
  const embla = React.useContext(CarouselContext);
  return (
    <button
      type="button"
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow transition",
        className
      )}
      onClick={() => embla && embla.scrollNext()}
      aria-label="Next slide"
    >
      <span aria-hidden>→</span>
    </button>
  );
}

export function CarouselPrevious({ className }: { className?: string }) {
  const embla = React.useContext(CarouselContext);
  return (
    <button
      type="button"
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow transition",
        className
      )}
      onClick={() => embla && embla.scrollPrev()}
      aria-label="Previous slide"
    >
      <span aria-hidden>←</span>
    </button>
  );
} 