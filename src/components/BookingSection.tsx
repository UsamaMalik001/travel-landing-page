import Image from "next/image";
import SectionHeading from "./common/SectionHeading";

const steps = [
  {
    icon: "/booking-section/Group 7.png",
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    bg: "bg-yellow-400",
  },
  {
    icon: "/booking-section/Group 12.png",
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    bg: "bg-orange-500",
  },
  {
    icon: "/booking-section/Group 11.png",
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    bg: "bg-teal-600",
  },
];

export default function TripStepsSection() {
  return (
    <section className="relative -mt-18 pb-20 mb-10 px-[140px] bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-1">
        <div>
          <SectionHeading
            subTitle="Easy and Fast"
            title="Book Your Next Trip In 3 Easy Steps"
            className="mb-10 space-y-[15px]"
            center={false}
          />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className={`w-16 h-16 flex items-center justify-center`}>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={47}
                    height={48}
                  />
                </div>
                <div>
                  <p className="text-md font-semibold text-[#5E6282]">
                    {step.title}
                  </p>
                  <p className="text-md text-[#5E6282]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[490px] top-8 left-10 overflow-hidden">
          <Image
            src="/booking-section/Image.png"
            alt="Trip To Greece"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
