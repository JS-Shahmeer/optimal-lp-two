import React from "react";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { ADVANTAGES } from "./data";

export default function WhyMadcraft() {
  return (
    <section id="why" className="scroll-mt-24 bg-[#F4EFFA] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-[32px] sm:text-[44px] font-black leading-[1.05] tracking-tight text-[#0A0A0A]">
            Why <span className="text-[#ff7418]">Optimal IT Solutions </span> ?
          </h2>
        </Reveal>
        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ADVANTAGES.map((a, i) => (
            <Reveal key={a} delay={i * 0.05}>
              <li className="flex h-full items-start gap-4 rounded-2xl border border-white/60 bg-white/75 p-7 backdrop-blur-md">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff7418] text-white">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-[16px] font-medium leading-[1.6] text-[#0A0A0A]">{a}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}