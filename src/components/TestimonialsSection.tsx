"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "./common/SectionHeading";
import BrandsSection from "./BrandsSection";
import Container from "./common/Container";
import clsx from "clsx";

const images = [
  "/testimonials-img/testimonial.png",
  "/testimonials-img/testimonial2.png",
  "/testimonials-img/testimonial3.png",
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container className="relative pt-16 sm:pt-20 max-w-[1230px] bg-white">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <SectionHeading
              subTitle="TESTIMONIALS"
              title="What People Say About Us."
              className="text-center lg:text-left"
            />

            <div className="mt-8 flex justify-center lg:justify-start space-x-3">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={clsx(
                    "w-4 h-4 rounded-full transition-colors duration-300",
                    activeIndex === idx ? "bg-[#2C3152]" : "bg-[#E3E3E3]"
                  )}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[356px] overflow-hidden">
              {images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    "absolute top-0 left-0 w-full h-full transition-opacity duration-700",
                    activeIndex === idx
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  )}
                >
                  <Image
                    src={imgSrc}
                    alt={`Testimonial ${idx + 1}`}
                    fill
                    className="object-contain"
                    priority={activeIndex === idx}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <BrandsSection />
    </>
  );
}
