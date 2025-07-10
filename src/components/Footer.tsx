export default function Footer() {
  return (
    <footer className="bg-white text-[#5E6282] pt-16 pb-6 px-4 sm:px-8 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row justify-between items-start">
        <div className="flex flex-col gap-4 max-w-xs">
          <p className="text-3xl font-semibold text-[#181E4B]">Jadoo.</p>
          <p className="text-sm leading-relaxed">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16">
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

        <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
          <div className="flex gap-3">
            {["Social.png", "Social (1).png", "Social (2).png"].map(
              (src, i) => (
                <div key={i} className="w-[42px] h-[42px]">
                  <img
                    src={`/footer/${src}`}
                    alt="social"
                    className="w-full h-full object-contain"
                  />
                </div>
              )
            )}
          </div>
          <p className="text-base sm:text-lg font-medium">Discover our app</p>
          <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
            <img
              src="/footer/Google Play.png"
              alt="Google Play"
              className="w-[120px] h-[40px]"
            />
            <img
              src="/footer/Play Store.png"
              alt="App Store"
              className="w-[120px] h-[40px]"
            />
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-12 text-[#5E6282]">
        All rights reserved @jadoo.co
      </p>
    </footer>
  );
}
