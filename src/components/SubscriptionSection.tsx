import { Mail } from "lucide-react";

export default function SubscribeSection() {
  return (
    <section className="relative bg-[#f1eff8] px-4 sm:px-8 lg:px-20 xl:px-32 py-16 sm:py-20 mb-20 rounded-[20px] rounded-tl-[80px] sm:rounded-tl-[129px] max-w-6xl mx-auto shadow-sm overflow-hidden">
      <div className="text-center">
        <p className="text-xl sm:text-2xl md:text-[23px] font-semibold text-[#5E6282] leading-relaxed sm:leading-[34px]">
          Subscribe to get information, latest news and other{" "}
          <br className="hidden sm:block" />
          interesting offers about Jadoo
        </p>
      </div>

      <form className="mt-[74px] flex flex-col sm:flex-row justify-center items-center gap-6">
        <div className="relative w-full z-0 sm:w-[380px]">
          <div className="absolute left-[-210px] top-[-89px] opacity-10 w-[349px] h-[389px] -z-10">
            <img src="/subscription-section/Group 42.png" alt="circles" />
          </div>

          <div className="relative z-10">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-10 py-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Mail className="absolute left-1 top-3 text-gray-400 size-6 ml-2" />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#FF7D68] text-white px-6 py-3 rounded-md hover:bg-[#FF946D] transition font-medium w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>

      <div className="absolute -top-0 -right-0 w-16 h-16 sm:w-[70px] sm:h-[70px]">
        <img
          src="/subscription-section/Group 77.png"
          alt="arrow"
          className="h-[70px] w-[70px]"
        />
      </div>

      <div className="absolute right-0 top-0 w-36 sm:w-[234px] sm:h-[190px]">
        <img src="/subscription-section/Mask Group.png" alt="right-circles" />
      </div>
    </section>
  );
}
