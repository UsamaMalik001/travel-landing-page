import Image from "next/image";
import Container from "./common/Container";

const logos = [
  { src: "/brand-icon/image 27.png", alt: "Axon" },
  { src: "/brand-icon/image 28.png", alt: "Jetstar" },
  { src: "/brand-icon/image 29.png", alt: "Expedia", isHighlighted: true },
  { src: "/brand-icon/image 30.png", alt: "Qantas" },
  { src: "/brand-icon/image 31.png", alt: "Alitalia" },
];

export default function BrandsSection() {
  return (
    <Container className="bg-white pb-32 max-w-[1273px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-x-6 gap-y-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex justify-center items-center min-w-[100px] sm:w-36 h-14 sm:h-16 transition-all duration-300 ${
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
    </Container>
  );
}
