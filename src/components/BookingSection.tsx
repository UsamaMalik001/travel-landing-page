// import Image from "next/image";
// import SectionHeading from "./common/SectionHeading";

// const steps = [
//   {
//     icon: "/booking-section/Group 7.png",
//     title: "Choose Destination",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
//   },
//   {
//     icon: "/booking-section/Group 12.png",
//     title: "Make Payment",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
//   },
//   {
//     icon: "/booking-section/Group 11.png",
//     title: "Reach Airport on Selected Date",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
//   },
// ];

// export default function TripStepsSection() {
//   return (
//     <section className="relative px-4 pb-10 sm:px-8 lg:px-20 xl:px-32 bg-white overflow-hidden justify-items-center">
//       <div className="flex flex-col flex-1/2 lg:flex-row items-center gap-12 lg:gap-24">
//         <div className="w-full lg:w-1/2">
//           <SectionHeading
//             subTitle="Easy and Fast"
//             title="Book Your Next Trip In 3 Easy Steps"
//             className="mb-10 space-y-[15px]"
//             center={false}
//           />

//           <div className="space-y-8">
//             {steps.map((step, index) => (
//               <div key={index} className="flex items-start gap-5">
//                 <div className="w-14 h-14 shrink-0 flex items-center justify-center">
//                   <Image
//                     src={step.icon}
//                     alt={step.title}
//                     width={47}
//                     height={48}
//                     className="object-contain"
//                   />
//                 </div>
//                 <div>
//                   <p className="text-[16px] font-bold font-poppins text-[#5E6282]">
//                     {step.title}
//                   </p>
//                   <p className="text-[16px] font-poppins text-[#5E6282]">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="w-full flex-1/2 lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] relative">
//           <Image
//             src="/booking-section/Image.png"
//             alt="Trip To Greece"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import SectionHeading from "./common/SectionHeading";

const steps = [
  {
    icon: "/booking-section/Group 7.png",
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: "/booking-section/Group 12.png",
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: "/booking-section/Group 11.png",
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

export default function TripStepsSection() {
  return (
    <section className="relative px-4 pb-16 pt-12 sm:px-8 lg:px-20 xl:px-32 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2">
          <SectionHeading
            subTitle="Easy and Fast"
            title="Book Your Next Trip In 3 Easy Steps"
            className="mb-10 space-y-[15px] text-center lg:text-left"
          />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="w-14 h-14 flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={47}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-[16px] font-bold text-[#5E6282] font-poppins">
                    {step.title}
                  </p>
                  <p className="text-[16px] text-[#5E6282] font-poppins">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src="/booking-section/Image.png"
              alt="Trip To Greece"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
