import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { FAQS } from "./data";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="text-[16px] leading-[1.75] text-[#0A0A0A]/65">
              Browse our FAQs for insights on how we work, what you can expect, and how we ensure your project's success.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-[30px] sm:text-[42px] font-black leading-[1.08] tracking-tight text-[#0A0A0A]">
              Have <span className="text-[#ff7418]">questions</span> about our website development services?
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {FAQS.map((f, i) => {
            const active = open === i;
            return (
              <li key={f.q} className={`transition-colors ${active ? "bg-[#F4EFFA]" : "bg-transparent"}`}>
                <button
                  onClick={() => setOpen(active ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 px-4 py-6 text-left sm:px-6"
                >
                  <h3 className="text-[17px] sm:text-[19px] font-semibold tracking-tight text-[#0A0A0A]">{f.q}</h3>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-[#ff7418] transition-transform duration-300 ${active ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[62rem] px-4 pb-8 text-[15.5px] leading-[1.8] text-[#0A0A0A]/70 sm:px-6">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}