import Image from "next/image";
import SectionHeading from "./common/SectionHeading";

const categories = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: "/category-icons/Group 48.png",
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: "/category-icons/Group 51.png",
    highlight: true,
  },
  {
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    icon: "/category-icons/Group 50.png",
  },
  {
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers",
    icon: "/category-icons/Group 49.png",
  },
];

export default function CategorySection() {
  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-20 xl:px-32 bg-white overflow-hidden">
      <Image
        src="/category-icons/Group 4.png"
        alt="Decor"
        width={133}
        height={133}
        className="absolute top-12 right-6 sm:right-14"
      />

      <SectionHeading
        subTitle="CATEGORY"
        title="We Offer Best Services"
        className="mb-12 sm:mb-16 text-center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {categories.map((category, cat) => (
          <div key={cat} className="relative z-10">
            {category.highlight && (
              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-[#DF6951] rounded-br-[10px] rounded-tl-[30px] z-0"></div>
            )}

            <div
              className={`relative p-8 rounded-[30px] bg-white text-center justify-items-center ${
                category.highlight ? "shadow-lg" : ""
              }`}
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src={category.icon}
                  alt={category.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-base font-semibold text-[#1E1D4C]">
                {category.title}
              </p>
              <p className="mt-2 text-sm max-w-[220px] mx-auto text-[#5E6282]">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
