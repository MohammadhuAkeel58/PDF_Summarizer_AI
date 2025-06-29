import Hero from "@/components/home/Hero";
import Demo from "@/components/home/Demo";
import HowitWorks from "@/components/home/How/HowitWorks";
import PricingCard from "@/components/home/Pricing/PricingCard";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className=" relative">
      <div>
        <Hero />
        <Demo />
        <HowitWorks />
        <PricingCard />
        <CTA />
      </div>
    </div>
  );
}
