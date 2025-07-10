"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-10 flex items-center justify-between px-[140px] py-6">
      <Link className="flex items-center" href="/">
        <Image
          src="/logo/Logo.png"
          alt="Logo"
          width={100}
          height={40}
          className="object-contain"
        />
      </Link>

      <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-700">
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
        <button className="border border-gray-700 rounded-[3px] px-4 py-1 hover:bg-white cursor-pointer transition text-sm">
          Sign up
        </button>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <span>EN</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </nav>
    </header>
  );
}
