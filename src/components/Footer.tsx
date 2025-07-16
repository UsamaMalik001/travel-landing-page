import Image from "next/image";
import Container from "./common/Container";

export default function Footer() {
  return (
    <Container className="bg-white text-[#5E6282] pt-16 pb-6 max-w-[1200px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row justify-between items-start">
        <div className="flex flex-col gap-4 max-w-xs text-center lg:text-left mx-auto lg:mx-0">
          <p className="text-3xl font-semibold text-[#181E4B]">Jadoo.</p>
          <p className="text-sm leading-relaxed">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 text-center sm:text-left mx-auto lg:mx-0">
          {[
            {
              heading: "Company",
              links: ["About", "Careers", "Mobile"],
            },
            {
              heading: "Contact",
              links: ["Help/FAQ", "Press", "Affiliates"],
            },
            {
              heading: "More",
              links: ["Airlinefees", "Airline", "Low fare tips"],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-lg text-[#080809] mb-3">
                {section.heading}
              </h4>
              <ul className="space-y-2 text-base">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-[#181E4B]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left mx-auto lg:mx-0">
          <div className="flex gap-3 justify-center lg:justify-start">
            {[
              {
                src: "Social.png",
                alt: "Facebook",
                href: "https://www.facebook.com/",
              },
              {
                src: "Social (1).png",
                alt: "Instagram",
                href: "https://www.instagram.com/",
              },
              {
                src: "Social (2).png",
                alt: "Twitter",
                href: "https://www.twitter.com/",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px]"
              >
                <img
                  src={`/footer/${item.src}`}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>
          <p className="text-base sm:text-lg font-medium">Discover our app</p>
          <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/footer/Google Play.png"
                alt="Google Play"
                className="w-[120px] h-[40px]"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/footer/Play Store.png"
                alt="App Store"
                className="w-[120px] h-[40px]"
              />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-12 text-[#5E6282]">
        All rights reserved @jadoo.co
      </p>
    </Container>
  );
}
