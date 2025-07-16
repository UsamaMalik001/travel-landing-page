"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import classNames from "classnames";

interface CarouselProps {
  images: string[];
  className?: string;
}

export default function Carousel({ images, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className={classNames("overflow-hidden", className)} ref={emblaRef}>
      <div className="flex">
        {images.map((src, i) => (
          <div className="flex-shrink-0 w-full relative h-full" key={i}>
            <Image
              src={src}
              alt={`Testimonial ${i + 1}`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={classNames(
              "w-3 h-3 rounded-full transition-colors",
              selectedIndex === i ? "bg-[#2C3152]" : "bg-[#E3E3E3]"
            )}
          />
        ))}
      </div>
    </div>
  );
}
