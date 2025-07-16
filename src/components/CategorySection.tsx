import Image from "next/image";
import SectionHeading from "./common/SectionHeading";
import Container from "./common/Container";

const categories = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: "/category-icons/satelite.png",
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: "/category-icons/plane.png",
    highlight: true,
  },
  {
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    icon: "/category-icons/mic.png",
  },
  {
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers",
    icon: "/category-icons/setting.png",
  },
];

export default function CategorySection() {
  return (
    <Container className="relative pt-24 pb-32 max-w-[1300px] w-full z-10">
      <Image
        src="/category-icons/Group 4.png"
        alt="Decor"
        width={153}
        height={166}
        className="absolute top-6 right-4 sm:right-14 sm:top-24 opacity-60 z-0"
      />

      <SectionHeading
        subTitle="CATEGORY"
        title="We Offer Best Services"
        className="mb-16 text-center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative z-10 flex justify-center items-center"
          >
            {category.highlight && (
              <div className="absolute -bottom-6 -left-8 w-[90px] h-[85px] bg-[#DF6951] rounded-br-[10px] rounded-tl-[30px] z-0 sm:-bottom-[35px] sm:-left-[30px]"></div>
            )}

            <div
              className={`relative rounded-[36px] bg-white text-center justify-items-center ${
                category.highlight
                  ? "shadow-depth w-[267px] h-[304px]"
                  : "w-[220px] h-[170px]"
              }`}
            >
              <div
                className={`relative mx-auto mb-4 ${
                  category.highlight
                    ? "w-[146px] h-[143px] -bottom-10"
                    : "w-[92px] h-[78px]"
                }`}
              >
                <Image
                  src={category.icon}
                  alt={category.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-[20px] font-semibold font-open-sans text-[#1E1D4C]">
                {category.title}
              </p>
              <p className="font-poppins mt-2 text-[16px] w-[181px] mx-auto text-[#5E6282] leading-[26px]">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
