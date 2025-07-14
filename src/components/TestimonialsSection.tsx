import Image from "next/image";
import SectionHeading from "./common/SectionHeading";
import BrandsSection from "./BrandsSection";

export default function TestimonialsSection() {
  return (
    <>
      <section className="relative pt-16 sm:pt-20 px-4 sm:px-8 lg:px-20 xl:px-32 bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[70px]">
          <div className="w-full lg:w-1/2">
            <SectionHeading
              subTitle="TESTIMONIALS"
              title="What People Say About Us."
              className="text-center lg:text-left"
            />

            <div className="mt-8 flex justify-center lg:justify-start space-x-3">
              <span className="w-4 h-4 rounded-full bg-[#2C3152]"></span>
              <span className="w-4 h-4 rounded-full bg-[#E3E3E3]"></span>
              <span className="w-4 h-4 rounded-full bg-[#E3E3E3]"></span>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[356px]">
              <Image
                src="/testimonials-img/Group 64.png"
                alt="Testimonial"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <BrandsSection />
    </>
  );
}
