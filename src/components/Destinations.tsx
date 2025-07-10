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
    <section className="relative py-20 px-[140px] bg-white overflow-hidden">
      <SectionHeading
        subTitle="Top Selling"
        title="Top Destinations"
        className="mb-16"
      />

      <Image
        src="/destinations-imgs/Decore (1).png"
        alt="Decor"
        width={80}
        height={143}
        className="absolute top-[340px] right-[129px] z-0"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <div key={destination.id} className="w-[1200px] justify-center">
            <Image
              src={destination.icon}
              alt={`Destination ${destination.id}`}
              width={420}
              height={400}
              className="object-cover -ml-16"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
