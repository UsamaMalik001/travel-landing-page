import Image from "next/image";
import SectionHeading from "./common/SectionHeading";

const destinations = [
  {
    id: 1,
    icon: "/destinations-imgs/Destination.png",
  },
  {
    id: 2,
    icon: "/destinations-imgs/Destination (2).png",
  },
  {
    id: 3,
    icon: "/destinations-imgs/Destination (1).png",
  },
];

export default function Destinations() {
  return (
    <section className="relative pt-20 pb-4 px-4 sm:px-8 lg:px-20 xl:px-32 bg-white overflow-hidden">
      <SectionHeading
        subTitle="Top Selling"
        title="Top Destinations"
        className="mb-12 sm:mb-16 text-center"
      />

      <Image
        src="/destinations-imgs/Decore (1).png"
        alt="Decor"
        width={80}
        height={143}
        className="absolute bottom-[237px] -right-[200px] sm:right-[85px] z-0"
      />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="overflow-hidden max-w-sm mx-auto"
          >
            <div className="relative w-full h-full">
              <Image
                src={destination.icon}
                alt={`Destination ${destination.id}`}
                width={420}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
