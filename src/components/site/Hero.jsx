import React from "react";
import ConsultForm from "./ConsultForm";
import Awardone from "@/assets/images/award-one.webp";
import Awardtwo from "@/assets/images/award-two.webp";
import Awardthree from "@/assets/images/award-three.webp";
import Awardfour from "@/assets/images/award-four.webp";
import Awardfive from "@/assets/images/award-five.webp";
import { Dot } from "lucide-react";

const TITLE = ["$199. Your Business Website.", "Done in 48 Hours.", "Custom-Built for Performance,", "SEO & Growth"];


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFFA] pt-[120px] pb-24 lg:pt-[150px] lg:pb-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(216,0,141,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(216,0,141,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="pointer-events-none absolute -top-24 -right-24 h-[460px] w-[460px] rounded-full bg-[#ff7418]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-5 lg:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <h1 className="text-[34px] sm:text-[47px] lg:text-[54px] font-black leading-[0.95] tracking-tight text-[#0A0A0A]">
            {TITLE.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-[38rem] text-[16px] leading-[1.7] text-[#0A0A0A]/70">
            A professionally designed 5-page website combining strategy, UX and high-performance development — built to get found on Google, generate bookings and grow with your business.
          </p>
          <div className="space-y-3 flex flex-wrap gap-3 mt-4 items-center">
            <span className="flex items-center">
              <Dot className="text-[#ff7418] mr-1" />
              Custom website + professional logo
            </span>

            <span className="flex items-center">
              <Dot className="text-[#ff7418] mr-1" />
              Google-ready local SEO
            </span>

            <span className="flex items-center">
              <Dot className="text-[#ff7418] mr-1" />
              Contact & booking forms
            </span>

            <span className="flex items-center">
              <Dot className="text-[#ff7418] mr-1" />
              5 high-performance pages
            </span>

            <span className="flex items-center">
              <Dot className="text-[#ff7418] mr-1" />
              Fast, mobile-ready & conversion-focused
            </span>

            <span className="flex items-center">
              <Dot className="text-[#ff7418] mr-1" />
              Live in 48 hours
            </span>

            <span className="flex items-center">
              <Dot className="text-[#ff7418] mr-1" />
              Full ownership of every file
            </span>

            <span className="flex items-center">
              <Dot className="text-[#ff7418] mr-1" />
              No monthly fees. No lock-in.
            </span>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="rounded-full bg-[#0A0A0A] px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#ff7418] hover:shadow-[0_0_30px_rgba(255,116,24,0.4)]"
            >
              GET YOUR $199 WEBSITE
            </a>
            <a
              href="#works"
              className="rounded-full border border-[#0A0A0A]/15 bg-white px-7 py-3.5 text-[14px] font-semibold text-[#0A0A0A] transition-all hover:-translate-y-0.5 hover:border-[#ff7418] hover:text-[#ff7418]"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div id="consult" className="scroll-mt-28">
          <ConsultForm />
          <div className="flex items-center gap-3 md:flex-nowrap flex-wrap justify-center md:justify-between mt-4">
            <a target="_blank" href="https://www.trustpilot.com/review/optimal-itsolutions.com" rel="noopener noreferrer">
              <img className="w-auto h-14 md:h-12 object-contain" src={Awardone} alt="" />
            </a>
            <a target="_blank" href="https://clutch.co/profile/optimal-it-solutions" rel="noopener noreferrer">
              <img className="w-auto h-14 md:h-12 object-contain" src={Awardtwo} alt="" />
            </a>
            <a target="_blank" href="https://www.designrush.com/agency/profile/optimal-it-solutions" rel="noopener noreferrer">
              <img className="w-auto h-14 md:h-12 object-contain" src={Awardthree} alt="" />
            </a>
            <a target="_blank" href="https://www.goodfirms.co/company/optimal-it-solutions" rel="noopener noreferrer">
              <img className="w-auto h-14 md:h-12 object-contain" src={Awardfour} alt="" />
            </a>
            <a target="_blank" href="https://www.bark.com/en/us/company/optimal-it-solutions/GRNG3B/" rel="noopener noreferrer">
              <img className="w-auto h-14 md:h-12 object-contain" src={Awardfive} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}