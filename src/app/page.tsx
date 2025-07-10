import TripStepsSection from "@/components/BookingSection";
import CategorySection from "@/components/CategorySection";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SubscriptionSection from "@/components/SubscriptionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="absolute top-[-149px] left-[736px] w-[606.31px] h-[872.58px] -z-10">
          <Image
            src="/hero-section-imgs/Decore.png"
            alt="Background Image"
            fill
          />
        </div>

        <Navbar />
        <HeroSection />
      </div>
      <CategorySection />
      <Destinations />
      <TripStepsSection />
      <TestimonialsSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
}
