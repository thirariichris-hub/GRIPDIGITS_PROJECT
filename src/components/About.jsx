"use client";

import { ShieldCheck, Cpu, Globe } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: ShieldCheck,
    title: "Trusted Security",
    text: "Military-grade encryption protects biometric information throughout the authentication process.",
  },
  {
    icon: Cpu,
    title: "AI Recognition",
    text: "Advanced algorithms analyze unique hand characteristics with exceptional speed and accuracy.",
  },
  {
    icon: Globe,
    title: "National Scale",
    text: "Designed to support nationwide deployments across government ministries and agencies.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.6}}
          viewport={{once:true}}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold">
            About GripDigits
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">

            GripDigits is a next-generation biometric authentication
            platform built to securely identify individuals using
            advanced hand recognition technology.

            It enables fast, reliable and secure verification for
            government institutions, healthcare, banking,
            border control and enterprise environments.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{y:-10}}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-10"
              >

                <Icon size={45} className="text-blue-500"/>

                <h3 className="text-2xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {item.text}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}