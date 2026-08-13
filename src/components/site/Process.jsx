import React from "react";
import { Compass, PenTool, Code2, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import { PROCESS } from "./data";

const ICONS = [Compass, PenTool, Code2, TrendingUp];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 className="text-[32px] sm:text-[44px] font-black leading-[1.05] tracking-tight text-[#0A0A0A]">
              Our website <span className="text-[#ff7418]">development</span> process
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[16px] leading-[1.75] text-[#0A0A0A]/65">
              We are committed to the long-term success of your website project. Our project managers collaborate closely
              with your team to ensure that we deliver exceptional results while staying on budget and on schedule.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROCESS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-black/[0.07] bg-white p-8 transition-all hover:-translate-y-1 hover:border-[#ff7418]/30 hover:shadow-[0_20px_50px_rgba(255,116,24,0.1)]">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff7418] text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-[20px] sm:text-[22px] font-bold tracking-tight text-[#0A0A0A]">{p.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-[1.7] text-[#0A0A0A]/65">{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}