import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative z-10 max-w-7xl px-4 sm:px-8 lg:px-20 xl:px-32 py-8 md:py-8 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      <div className="space-y-6">
        <p className="text-orange-500 font-bold text-lg sm:text-xl uppercase">
          Best destinations around the world
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#181E4B] tracking-tight relative z-auto">
          Travel,{" "}
          <span className="relative inline-block z-10">
            <span className="relative z-20">enjoy</span>
            <img
              src="/hero-section-imgs/Vector.png"
              alt=""
              className="absolute bottom-2 -left-0 w-44 sm:w-56 lg:w-[267px] h-auto"
            />
          </span>
          <br />
          and live a new <br />
          <span>and full life</span>
        </h1>

        <p className="text-[#5E6282] text-base sm:text-lg max-w-[477px]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
          <Button className="bg-yellow-500 text-white w-full sm:w-[170px] h-[55px] rounded-sm text-base sm:text-lg cursor-pointer">
            Find out more
          </Button>
          <button className="flex items-center gap-2 cursor-pointer">
            <div className="w-12 h-12 bg-[#DF6951] rounded-full flex items-center justify-center">
              <Play className="text-white" fill="white" size={16} />
            </div>
            <span className="text-gray-700 text-base sm:text-[17px]">
              Play Demo
            </span>
          </button>
        </div>
      </div>

      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Image src="/hero-section-imgs/Traveller 1.png" alt="Traveler" fill />

        <img
          src="/hero-section-imgs/plane.png"
          alt="Plane"
          className="absolute left-[20%] top-[10%] w-12 sm:w-16 md:w-20"
        />

        <img
          src="/hero-section-imgs/plane.png"
          alt="Plane"
          className="absolute -right-[4%] top-[18%] w-12 sm:w-16 md:w-20"
        />
      </div>
    </section>
  );
}
