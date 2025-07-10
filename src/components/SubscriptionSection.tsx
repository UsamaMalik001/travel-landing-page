import { Mail } from "lucide-react";

export default function SubscribeSection() {
  return (
    <section className="relative bg-[#f1eff8] p-20 py-30 mb-20 px-[140px] rounded-[20px] rounded-tl-[129px] max-w-[1000px] mx-auto shadow-sm">
      <div className="text-center">
        <p className="text-2xl md:text-[23px] font-semibold text-[#5E6282] leading-[34px]">
          Subscribe to get information, latest news and other <br />
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
          className="bg-[#FF7D68] text-white px-6 py-3 rounded-md hover:bg-[#FF946D] transition font-medium"
        >
          Subscribe
        </button>
      </form>

      <div className="absolute -top-4 -right-5">
        <img
          src="/subscription-section/Group 77.png"
          alt="arrow"
          className="h-[70px] w-[70px]"
        />
      </div>

      <div className="absolute right-0 top-0 w-[234px] h-[190px]">
        <img src="/subscription-section/Mask Group.png" alt="circles" />
      </div>
    </section>
  );
}
