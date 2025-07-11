import Image from "next/image";
import SectionHeading from "./common/SectionHeading";
import BrandsSection from "./BrandsSection";

export default function TestimonialsSection() {
  return (
    <>
      <section className="relative py-20 px-4 sm:px-8 lg:px-20 xl:px-32 bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start gap-[70px]">
          <div className="w-full lg:w-1/2">
            <SectionHeading
              subTitle="TESTIMONIALS"
              title="What People Say About Us."
              center={false}
            />

            <div className="mt-8 flex space-x-4">
              <span className="w-4 h-4 rounded-full bg-[#2C3152]"></span>
              <span className="w-4 h-4 rounded-full bg-[#E3E3E3]"></span>
              <span className="w-4 h-4 rounded-full bg-[#E3E3E3]"></span>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[356px]">
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
