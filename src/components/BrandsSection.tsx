import Image from "next/image";

const logos = [
  { src: "/brand-icon/image 27.png", alt: "Axon" },
  { src: "/brand-icon/image 28.png", alt: "Jetstar" },
  { src: "/brand-icon/image 29.png", alt: "Expedia", isHighlighted: true },
  { src: "/brand-icon/image 30.png", alt: "Qantas" },
  { src: "/brand-icon/image 31.png", alt: "Alitalia" },
];

export default function BrandsSection() {
  return (
    <section className="bg-white pb-32 px-4 sm:px-8 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex justify-center items-center w-32 sm:w-36 h-14 sm:h-16 transition-all duration-300 ${
                logo.isHighlighted ? "bg-white shadow-sm rounded-xl" : ""
              }`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className={`object-contain transition duration-300 ease-in-out ${
                  logo.isHighlighted ? "" : "grayscale hover:grayscale-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
