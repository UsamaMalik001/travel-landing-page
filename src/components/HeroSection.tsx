import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Container from "@/components/common/Container";

export default function HeroSection() {
  return (
    <Container className="relative z-10 w-full max-w-[1200px]">
      <div className="space-y-6 w-full max-w-[630px]">
        <p className="text-[#DF6951] font-bold text-lg sm:text-xl uppercase">
          Best destinations around the world
        </p>
        <h1 className="text-[84px] leading-[89px] tracking-[-0.04em] font-bold leading-tighter text-[#181E4B] relative z-auto">
          Travel,{" "}
          <span className="relative inline-block z-10">
            <span className="relative z-20">enjoy</span>
            <img
              src="/hero-section-imgs/Vector.png"
              alt=""
              className="absolute bottom-1 -left-0 w-44 sm:w-56 lg:w-[267px] h-auto"
            />
          </span>
          <br />
          and live a new <br />
          <span>and full life</span>
        </h1>

        <p className="text-[#5E6282] max-w-[477px] text-base sm:text-[16px] font-medium font-poppins">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
          <Button className="bg-yellow-500 text-white w-full sm:w-[170px] h-[55px] rounded-sm text-base sm:text-lg cursor-pointer shadow-yellow-glow">
            Find out more
          </Button>
          <button className="flex items-center gap-2 cursor-pointer">
            <div className="w-12 h-12 bg-[#DF6951] shadow-coral-glow rounded-full flex items-center justify-center">
              <Play className="text-white" fill="white" size={16} />
            </div>
            <span className="text-gray-700 text-base sm:text-[17px]">
              Play Demo
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[765px] h-full">
        <Image
          src="/hero-section-imgs/girl-hero-section.png"
          alt="Traveler"
          fill
          objectFit="contain"
        />
      </div>
    </Container>
  );
}
