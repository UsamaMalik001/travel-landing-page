"use client";

import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/common/Container";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="z-50 w-full">
      <Container className="flex items-center justify-between py-12 max-w-[1200px]">
        <Link className="flex items-center" href="/">
          <Image
            src="/logo/Logo.png"
            alt="Logo"
            width={114}
            height={33}
            className="object-contain"
          />
        </Link>

        <nav className="hidden font-google md:flex gap-6 lg:gap-10 items-center text-[17px] font-medium text-[#212832]">
          <a href="#destinations" className="hover:text-black">
            Destinations
          </a>
          <a href="#hotels" className="hover:text-black">
            Hotels
          </a>
          <a href="#flights" className="hover:text-black">
            Flights
          </a>
          <a href="#bookings" className="hover:text-black">
            Bookings
          </a>
          <a href="#login" className="hover:text-black">
            Login
          </a>
          <button className="border border-[#212832] hover:text-black rounded-[5px] px-[22px] py-[9px] cursor-pointer text-[17px] font-medium text-[#212832]">
            Sign up
          </button>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <span>EN</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </Container>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 px-6 pb-6 text-sm font-medium text-gray-700">
          <a href="#destinations" className="hover:text-black">
            Destinations
          </a>
          <a href="#hotels" className="hover:text-black">
            Hotels
          </a>
          <a href="#flights" className="hover:text-black">
            Flights
          </a>
          <a href="#bookings" className="hover:text-black">
            Bookings
          </a>
          <a href="#login" className="hover:text-black">
            Login
          </a>
          <a href="#signup" className="hover:text-black">
            Sign up
          </a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <span>EN</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      )}
    </header>
  );
}
