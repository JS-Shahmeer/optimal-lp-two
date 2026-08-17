import React from "react";
import Reveal from "./Reveal";

export default function ConsultBand() {
  return (
    <section className="bg-white px-5 py-10 lg:px-10 lg:py-16">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#ff7a3d] to-[#ff4d2d] px-6 py-10 text-center sm:px-16 lg:py-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <h2 className="relative text-[30px] sm:text-[42px] font-black leading-tight tracking-tight text-white">
            Schedule a Consultation
          </h2>
          <p className="relative mx-auto mt-6 max-w-[46rem] text-[16px] leading-[1.75] text-white/85">
            Get a one-on-one consultation to explore the best approach for your website—whether you're building from the
            ground up or optimizing for performance, scalability, and long-term growth.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              className="rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#0A0A0A] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
              GET YOUR $199 WEBSITE
            </a>
            <a
              href="#works"
              className="rounded-full border border-white/50 px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Our Work
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}