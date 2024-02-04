import About from "@/components/About";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative z-0 bg-primary">
      <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero/>
      </section>
      <section className="flex flex-col gap-6 items-center">
        <About />
        <Services />
        <Feedback />
        <Contact />
      </section>
    </main>
  );
}
