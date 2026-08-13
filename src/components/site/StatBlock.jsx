import React from "react";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";
import { STATS } from "./data";

const SHOTS = [
  { title: "Sooner than Later", url: "https://media.base44.com/images/public/6a721a0939ebf389c5a88775/d6564d1d4_generated_652a22d8.png" },
  { title: "Thompson Flooring Solutions", url: "https://media.base44.com/images/public/6a721a0939ebf389c5a88775/48d7d6c33_generated_a7b4afe6.png" },
];

export default function StatBlock() {
  return (
    <section className="bg-[#F4EFFA] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="text-[16px] leading-[1.75] text-[#0A0A0A]/65">
              Every site is strategically crafted to elevate your brand, improve engagement, and drive measurable results.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] font-black leading-[1.08] tracking-tight text-[#0A0A0A]">
              Optimal IT Solutions will <span className="text-[#ff7418]">design</span> and <span className="text-[#ff7418]">build</span> a
              custom responsive website geared to achieve your <span className="text-[#ff7418]">goals</span>
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <li className="h-full rounded-2xl border border-white/60 bg-white/70 p-8 backdrop-blur-md">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#0A0A0A]/50">{s.title}</h3>
                <div className="mt-6 font-mono text-[48px] font-bold leading-none text-[#ff7418]">{s.value}</div>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SHOTS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <figure className="overflow-hidden rounded-2xl bg-white">
                <Image src={s.url} alt={`${s.title} website mockup`} className="h-[300px] sm:h-[380px] w-full" />
                <figcaption className="px-6 py-5 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#0A0A0A]/60">
                  {s.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}