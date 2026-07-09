"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-black pt-24">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="text-blue-400 uppercase tracking-[6px]">
            National Security Technology
          </span>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mt-5">

            Palm
            <br />

            Vein
            <br />

            Reader

          </h1>

          <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">

            GripDigits is an advanced biometric authentication
            platform designed for government institutions,
            border control, healthcare, banking,
            education and enterprise security.

          </p>

          <div className="flex gap-5 mt-12">

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition">

              Request Demonstration

            </button>

            <button className="border border-slate-500 hover:border-blue-500 hover:bg-blue-500 px-8 py-4 rounded-xl transition">

              Learn More

            </button>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <Image
            src="/images/gripdigits.jpeg"
            width={650}
            height={650}
            alt="GripDigits Scanner"
            className="drop-shadow-[0_0_60px_rgba(37,99,235,.5)]"
            priority
          />

        </motion.div>

      </div>
      <div className="flex flex-wrap gap-5 mt-10">

  <a
    href="#demo"
    className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700 transition"
  >
    ▶ Watch Demonstration
  </a>

  <a
    href="#request-demo"
    className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
  >
    📅 Request Demo
  </a>

</div>
      

    </section>
  );
}