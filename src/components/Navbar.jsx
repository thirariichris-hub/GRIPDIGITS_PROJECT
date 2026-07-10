"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="GripDigits Logo"
            width={55}
            height={55}
            className="object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-xl font-bold text-white">
              GripDigits
            </h1>
            <p className="text-xs text-slate-400">
              Biometric Intelligence
            </p>
          </div>

        </Link>

        {/* Navigation */}
        <ul className="hidden lg:flex gap-10 text-sm">

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-blue-400 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#technology" className="hover:text-blue-400 transition">
              Technology
            </a>
          </li>

          <li>
            <a href="#security" className="hover:text-blue-400 transition">
              Security
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold">
          Request Demo
        </button>

      </nav>
    </header>
  );
}