import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Demo from "../components/Demo";
import RequestDemo from "../components/RequestDemo";
import Security from "@/components/Security";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white">
       <Hero />

      <About />

      <Features />

     <Demo />

     <HowItWorks />

     <RequestDemo />
     <Security />

     <Contact />
      </main>
    </>
  );
}