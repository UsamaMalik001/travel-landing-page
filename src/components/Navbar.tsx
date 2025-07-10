"use client";

import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 w-full">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-20 xl:px-32 py-6">
        <Link className="flex items-center" href="/">
          <Image
            src="/logo/Logo.png"
            alt="Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex gap-6 lg:gap-8 items-center text-sm font-medium text-gray-700">
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
          <button className="border border-gray-700 rounded px-4 py-1 hover:bg-white cursor-pointer transition text-sm">
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
      </div>

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
