import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { PremiumServices } from "@/components/sections/PremiumServices";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      {/* Decorative background gradients */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Services />
        <PremiumServices />
        <Contact />
      </div>
    </main>
  );
}
