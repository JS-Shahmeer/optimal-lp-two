import React, { useState } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import LogoRibbon from "@/components/site/LogoRibbon";
import Benefits from "@/components/site/Benefits";
import StatBlock from "@/components/site/StatBlock";
import ConsultBand from "@/components/site/ConsultBand";
import Performance from "@/components/site/Performance";
import Works from "@/components/site/Works";
import Process from "@/components/site/Process";
import WhyMadcraft from "@/components/site/WhyMadcraft";
import Faq from "@/components/site/Faq";
import Footer from "@/components/site/Footer";
import WordOnTheStreetSection from "../components/site/WordOnTheStreetSection";
import PricingSection from "../components/site/PricingSection";
import ConsultationPopup from "../components/site/ConsultationPopup";

export default function WebsiteDevelopment() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <ConsultationPopup isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      <div id="top" className="min-h-screen bg-white font-body text-[#0A0A0A] antialiased">
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />
        <main>
          <Hero />
          <LogoRibbon />
          <Benefits />
          {/* <WordOnTheStreetSection /> */}
          <StatBlock />
          <PricingSection />
          <ConsultBand onOpen={() => setIsConsultationOpen(true)} />
          <Performance />
          <Works />
          <Process />
          <WhyMadcraft />
          <Faq />
          <ConsultBand onOpen={() => setIsConsultationOpen(true)} />
        </main>
        <Footer />
      </div>
    </>
  );
}