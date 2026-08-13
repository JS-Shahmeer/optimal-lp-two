import React from "react";
import Reveal from "./Reveal";
import { BENEFITS } from "./data";

export default function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-24 bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-[52rem] text-center text-[32px] sm:text-[44px] lg:text-[52px] font-black leading-[1.05] tracking-tight text-[#0A0A0A]">
            Your <span className="text-[#ff7418]">search</span> for web development services{" "}
            <span className="text-[#ff7418]">ends here</span>
          </h2>
        </Reveal>

        <ul className="mt-16 lg:mt-24 divide-y divide-black/[0.08] border-t border-black/[0.08]">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <li className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <h3 className="relative flex items-center pl-6 text-[22px] sm:text-[26px] font-bold leading-tight tracking-tight text-[#0A0A0A]">
                  <span className="absolute left-0 top-1.5 h-[calc(100%-0.75rem)] w-[4px] rounded-full bg-[#ff7418]" />
                  {b.title}
                </h3>
                <p className="text-[16px] leading-[1.75] text-[#0A0A0A]/65">{b.text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}