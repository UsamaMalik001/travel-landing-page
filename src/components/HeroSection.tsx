import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative z-10 max-w-7xl py-4 px-[140px] grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="space-y-6">
        <p className="text-orange-500 font-bold text-xl uppercase">
          Best destinations around the world
        </p>
        <h1 className="text-6xl z-auto font-extrabold leading-[4rem] text-[#181E4B] tracking-tight">
          Travel,{" "}
          <span className="relative inline-block z-10">
            <span className="relative z-20">enjoy</span>
            <img
              src="/hero-section-imgs/Vector.png"
              alt=""
              className="absolute bottom-1 -left-6 max-w-[267px] h-auto"
            />
          </span>
          <br />
          and live a new <br />
          <span>and full life</span>
        </h1>

        <p className="text-[#5E6282] text-[16px] max-w-[477px]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex items-center gap-12">
          <Button className="bg-yellow-500 text-white w-[170px] h-[60px] rounded-sm text-lg cursor-pointer">
            Find out more
          </Button>
          <button className="flex items-center gap-2 cursor-pointer">
            <div className="w-13 h-13 bg-[#DF6951] rounded-full flex items-center justify-center">
              <Play className="text-white" fill="white" size={16} />
            </div>
            <span className="text-gray-700 text-[17px]">Play Demo</span>
          </button>
        </div>
      </div>

      <div className="relative w-full h-[500px]">
        <Image src="/hero-section-imgs/Traveller 1.png" alt="Traveler" fill />

        <img
          src="/hero-section-imgs/plane.png"
          alt="Plane"
          className="absolute left-[15%] top-[10%] w-25 h-auto"
        />

        <img
          src="/hero-section-imgs/plane.png"
          alt="Plane"
          className="absolute -right-[4%] top-[18%] w-25 h-auto"
        />
      </div>
    </section>
  );
}
