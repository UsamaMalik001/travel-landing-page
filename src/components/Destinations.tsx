// import Image from "next/image";
// import SectionHeading from "./common/SectionHeading";
// import { Navigation } from "lucide-react";

// const destinations = [
//   {
//     id: 1,
//     icon: "/destinations-imgs/Rectangle 14 (1).png",
//     location: "Rome, Italy",
//     price: "$5.42k",
//     duration: "10 Days Trip",
//   },
//   {
//     id: 2,
//     icon: "/destinations-imgs/Rectangle 14 (3).png",
//     location: "London, UK",
//     price: "$4.2k",
//     duration: "12 Days Trip",
//   },
//   {
//     id: 3,
//     icon: "/destinations-imgs/Rectangle 14 (2).png",
//     location: "Full Europe",
//     price: "$15k",
//     duration: "28 Days Trip",
//   },
// ];

// export default function Destinations() {
//   return (
//     <section className="relative pt-20 pb-4 px-4 sm:px-8 lg:px-20 xl:px-32 bg-white overflow-hidden">
//       <SectionHeading
//         subTitle="Top Selling"
//         title="Top Destinations"
//         className="mb-12 sm:mb-16 text-center"
//       />

//       <Image
//         src="/destinations-imgs/Decore (1).png"
//         alt="Decor"
//         width={80}
//         height={143}
//         className="absolute bottom-[237px] -right-[200px] sm:right-[85px] z-0"
//       />

//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {destinations.map((destination) => (
//           <div
//             key={destination.id}
//             className="bg-white rounded-3xl shadow-md overflow-hidden max-w-sm mx-auto"
//           >
//             <div className="relative w-full h-60">
//               <Image
//                 src={destination.icon}
//                 alt={`Destination ${destination.id}`}
//                 width={420}
//                 height={400}
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <div className="flex justify-between text-gray-800 font-semibold text-lg">
//                 <span>{destination.location}</span>
//                 <span>{destination.price}</span>
//               </div>

//               <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
//                 <Navigation className="text-gray-400" />
//                 <span>{destination.duration}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import { Navigation } from "lucide-react";
import SectionHeading from "./common/SectionHeading";

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
    <section className="relative py-20 px-4 sm:px-8 lg:px-20 xl:px-32 bg-white overflow-hidden justify-items-center">
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
        className="absolute bottom-[177px] -right-[200px] sm:right-[140px] z-0"
      />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="h-[457px] text-center justify-items-center"
          >
            <div className="absolute w-[394px] h-72 overflow-hidden z-0">
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
          </div>
        ))}
      </div>
    </section>
  );
}
