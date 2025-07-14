import { Mail } from "lucide-react";

export default function SubscribeSection() {
  return (
    <section className="relative bg-[#f1eff8] px-4 sm:px-8 lg:px-20 xl:px-32 py-16 sm:py-20 mb-20 rounded-[20px] rounded-tl-[80px] sm:rounded-tl-[129px] max-w-6xl mx-auto shadow-sm overflow-hidden">
      <div className="text-center">
        <p className="text-lg sm:text-xl md:text-[23px] font-semibold text-[#5E6282] leading-relaxed sm:leading-[34px]">
          Subscribe to get information, latest news and other{" "}
          <br className="hidden sm:block" />
          interesting offers about Jadoo
        </p>
      </div>

      <form className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
        <div className="relative w-full z-0 sm:w-[380px]">
          <div className="absolute -left-40 -top-24 opacity-10 sm:w-[349px] sm:h-[389px] sm:-left-[210px] sm:-top-[89px] z-[-1] pointer-events-none">
            <img src="/subscription-section/Group 42.png" alt="circles" />
          </div>

          <div className="relative z-10">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-10 py-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#FF7D68] text-white px-6 py-3 rounded-md hover:bg-[#FF946D] transition font-medium w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>

      <div className="absolute top-0 right-0 w-10 h-10 sm:w-[70px] sm:h-[70px]">
        <img
          src="/subscription-section/Group 77.png"
          alt="arrow"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute right-0 top-0 w-24 h-20 sm:w-[234px] sm:h-[190px]">
        <img src="/subscription-section/Mask Group.png" alt="right-circles" />
      </div>
    </section>
  );
}
