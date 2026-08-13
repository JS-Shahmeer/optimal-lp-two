import React from "react";
import { motion } from "framer-motion";
import ConsultForm from "./ConsultForm";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };
const fadeUp = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

const TITLE = ["Custom Website", "Development", "Built for", "Performance & Scale"];

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
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={container}
            className="text-[40px] sm:text-[56px] lg:text-[68px] font-black leading-[0.95] tracking-tight text-[#0A0A0A]"
          >
            {TITLE.map((line) => (
              <motion.span key={line} variants={fadeUp} className="block">
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-[38rem] text-[16px] leading-[1.7] text-[#0A0A0A]/70">
            Optimal IT Solutions delivers high-performance website development built for scale. Our team combines strategy, UX, and
            technical excellence to create custom websites optimized for speed, SEO, and conversion.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-[38rem] text-[16px] leading-[1.7] text-[#0A0A0A]/70">
            Every build is engineered with clean architecture, fast load times, and a flexible CMS—giving your business a
            platform that performs and grows with you. We don’t just build sites; we create digital systems that drive
            measurable results.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#consult"
              className="rounded-full bg-[#0A0A0A] px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#ff7418] hover:shadow-[0_0_30px_rgba(255,116,24,0.4)]"
            >
              Schedule Consultation
            </a>
            <a
              href="#works"
              className="rounded-full border border-[#0A0A0A]/15 bg-white px-7 py-3.5 text-[14px] font-semibold text-[#0A0A0A] transition-all hover:-translate-y-0.5 hover:border-[#ff7418] hover:text-[#ff7418]"
            >
              View Our Work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          id="consult"
          className="scroll-mt-28"
        >
          <ConsultForm />
        </motion.div>
      </div>
    </section>
  );
}