import Image from "next/image";
import SectionHeading from "./common/SectionHeading";
import BrandsSection from "./BrandsSection";

export default function TestimonialsSection() {
  return (
    <>
      <section className="relative pt-20 px-4 md:px-[140px] bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-1 relative">
            <SectionHeading
              subTitle="TESTIMONIALS"
              title="What People Say About Us."
              center={false}
            />

            <div className="mt-10">
              <Image
                src="/testimonials-img/Group 61.png"
                alt="Images"
                width={85}
                height={12}
              />
            </div>
          </div>

          <div>
            <Image
              src="/testimonials-img/Group 64.png"
              alt="Images"
              width={569}
              height={356}
            />
          </div>
        </div>
      </section>
      <BrandsSection />
    </>
  );
}
