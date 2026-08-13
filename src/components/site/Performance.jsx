import React from "react";
import { Gauge, Smartphone, ShieldCheck, Search, Settings2 } from "lucide-react";
import Reveal from "./Reveal";
import { PERFORMANCE } from "./data";

const ICONS = [Gauge, Smartphone, ShieldCheck, Search, Settings2];

export default function Performance() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <div>
              <h2 className="text-[32px] sm:text-[44px] font-black leading-[1.05] tracking-tight text-[#0A0A0A]">
                Built for Performance
              </h2>
              <p className="mt-6 max-w-[34rem] text-[16px] leading-[1.75] text-[#0A0A0A]/65">
                From speed to SEO, our development approach ensures your website performs flawlessly across all devices,
                channels, and user journeys.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="border-l-4 border-[#ff7418] pl-6 text-[20px] font-semibold leading-snug text-[#0A0A0A] lg:mt-3">
              Performance isn’t an afterthought—it’s built into everything we do.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {PERFORMANCE.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <li className="group h-full rounded-2xl border border-black/[0.07] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#ff7418]/40 hover:shadow-[0_20px_50px_rgba(255,116,24,0.12)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4EFFA] text-[#ff7418]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-[18px] font-bold tracking-tight text-[#0A0A0A]">{p.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-[#0A0A0A]/60">{p.text}</p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}