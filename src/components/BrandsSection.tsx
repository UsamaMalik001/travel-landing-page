import Image from "next/image";

const logos = [
  {
    src: "/brand-icon/image 27.png",
    alt: "Axon",
  },
  {
    src: "/brand-icon/image 28.png",
    alt: "Jetstar",
  },
  {
    src: "/brand-icon/image 29.png",
    alt: "Expedia",
    isHighlighted: true,
  },
  {
    src: "/brand-icon/image 30.png",
    alt: "Qantas",
  },
  {
    src: "/brand-icon/image 31.png",
    alt: "Alitalia",
  },
];

export default function BrandsSection() {
  return (
    <section className="bg-white pb-20 px-[140px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex justify-center items-center w-36 h-16 transition-all duration-300 ${
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
