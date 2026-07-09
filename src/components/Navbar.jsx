"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            G
          </div>

          <div>
            <h1 className="text-xl font-bold">GripDigits</h1>
            <p className="text-xs text-slate-400">
              Biometric Intelligence
            </p>
          </div>

        </Link>

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

        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold">
          Request Demo
        </button>

      </nav>
    </header>
  );
}