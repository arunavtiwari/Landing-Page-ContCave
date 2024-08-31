import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <FeaturesTab />
      <FunFact />
      <FAQ />
      <CTA />
      {/* <Testimonial /> */}
      <Contact />
      <Blog />
    </main>
  );
}
