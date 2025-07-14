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
        <div className="absolute top-0 right-0 w-[552px] h-[520px] -z-10">
          <Image
            src="/hero-section-imgs/Decore.png"
            alt="Background Image"
            fill
          />
        </div>

        <div className="absolute top-0 left-0 w-[552px] h-[520px] -z-10">
          <Image src="/hero-section-imgs/Ellipse 8.png" alt="Ellipse" fill />
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
