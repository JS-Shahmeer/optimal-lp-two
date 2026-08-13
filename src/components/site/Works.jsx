import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const WORKS = [
  {
    name: "Mincon",
    image: "https://media.base44.com/images/public/6a721a0939ebf389c5a88775/d6564d1d4_generated_652a22d8.png",
    categories: ["Branding", "UX/UI Design", "Website Design", "SEO"],
    text: "We partnered with Mincon, one of the world’s leading drilling technology companies, to develop a high-performance, growth-driven website designed to elevate their digital presence and user experience. This custom-built platform focuses on speed, scalability, and seamless navigation, ensuring Mincon’s global audience can easily access products, technical resources, and key company insights.",
    stats: [["+28%", "Conversion"], ["+72%", "Engagement"], ["+34%", "SEO Growth"], ["A", "Speed"]],
  },
  {
    name: "Herdwatch",
    image: "https://media.base44.com/images/public/6a721a0939ebf389c5a88775/48d7d6c33_generated_a7b4afe6.png",
    categories: ["UX/UI Design", "Website Development", "SEO"],
    text: "We partnered with Herdwatch, a leading farm management software provider, to create a high-performing, user-centric website designed to drive engagement and customer acquisition. The new platform enhances navigation, showcases Herdwatch’s solutions effectively, and ensures a seamless experience across all devices, supporting their mission to empower farmers with smarter digital tools.",
    stats: [["+32%", "Conversion"], ["+42%", "Engagement"], ["+27%", "SEO Growth"], ["A", "Speed"]],
  },
];

export default function Works() {
  return (
    <section id="works" className="scroll-mt-24 bg-[#F4EFFA] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="max-w-[40rem] text-[32px] sm:text-[44px] font-black leading-[1.05] tracking-tight text-[#0A0A0A]">
            Some of Our <span className="text-[#ff7418]">Favorite</span> Work
          </h2>
          <p className="mt-6 max-w-[46rem] text-[16px] leading-[1.75] text-[#0A0A0A]/65">
            Explore our latest projects—where strategy meets creativity to deliver real results. Every project is designed
            to drive growth, engagement, and impact.
          </p>
        </Reveal>

        <div className="mt-16 space-y-8">
          {WORKS.map((w, i) => (
            <Reveal key={w.name} delay={i * 0.08}>
              <article className="grid grid-cols-1 overflow-hidden rounded-3xl bg-white lg:grid-cols-2">
                <div className="p-6 lg:flex lg:flex-col lg:justify-center lg:p-10">
                  <Image src={w.image} alt={`${w.name} website project`} className="h-[260px] sm:h-[340px] w-full rounded-2xl" />
                  <div className="mt-5 flex flex-wrap gap-2">
                    {w.categories.map((c) => (
                      <span key={c} className="rounded-full bg-[#F4EFFA] px-3.5 py-1.5 text-[12px] font-semibold text-[#ff7418]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center border-t border-black/5 p-6 lg:border-l lg:border-t-0 lg:p-10">
                  <div>
                    <div className="text-[22px] font-black tracking-tight text-[#0A0A0A]">{w.name}</div>
                    <p className="mt-5 text-[15.5px] leading-[1.75] text-[#0A0A0A]/65">{w.text}</p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {w.stats.map(([n, label]) => (
                      <div key={label}>
                        <div className="font-mono text-[26px] font-bold leading-none text-[#ff7418]">{n}</div>
                        <div className="mt-2 text-[12.5px] uppercase tracking-[0.1em] text-[#0A0A0A]/50">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href="#works"
            className="mt-14 inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#ff7418] hover:shadow-[0_0_30px_rgba(255,116,24,0.4)]"
          >
            All Recent Projects <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}