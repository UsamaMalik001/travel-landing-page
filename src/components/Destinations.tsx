import Image from "next/image";
import { Navigation } from "lucide-react";
import SectionHeading from "./common/SectionHeading";
import Container from "./common/Container";

export default function TravelCards() {
  const destinations = [
    {
      id: 1,
      location: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip",
      image: "/destinations-imgs/Rectangle 14 (1).png",
      alt: "Colosseum in Rome with golden sunlight",
    },
    {
      id: 2,
      location: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
      image: "/destinations-imgs/Rectangle 14 (3).png",
      alt: "Big Ben in London with autumn leaves",
    },
    {
      id: 3,
      location: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
      image: "/destinations-imgs/Rectangle 14 (2).png",
      alt: "European cityscape with cathedral",
    },
  ];

  return (
    <Container className="relative py-20 bg-white w-full max-w-[1252px]">
      <SectionHeading
        subTitle="Top Selling"
        title="Top Destinations"
        className="mb-16 text-center"
      />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="h-[457px] w-[315px] text-center justify-items-center"
          >
            <div className="absolute w-[394px] h-72 overflow-hidden z-10">
              <Image
                src={destination.image}
                alt={destination.alt}
                width={440}
                height={450}
                className="object-cover"
              />
            </div>

            <div className="relative px-4 py-4 w-[262px] h-[115px] space-y-[16px] rounded-b-[24px] border shadow-depth top-72">
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-poppins font-normal text-[#5E6282] leading-[125%]">
                    {destination.location}
                  </p>
                </div>
                <div>
                  <span className="text-lg font-normal font-poppins text-[#5E6282]">
                    {destination.price}
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <Navigation className="w-4 h-4 mr-2" fill="black" />
                <span className="text-[16px] text-[#5E6282] font-normal font-poppins">
                  {destination.duration}
                </span>
              </div>
            </div>
            <div className="absolute bottom-[97px] right-[50px] sm:right-[30px] z-0 opacity-30">
              <Image
                src="/destinations-imgs/Decore (1).png"
                alt="Decor"
                width={90}
                height={163}
                className="pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
