import React from "react";
import { LOGOS_A, LOGOS_B } from "./data";

function Track({ items, reverse }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="group overflow-hidden py-3">
      <div
        className={`flex w-max gap-14 ${reverse ? "animate-ribbon-reverse" : "animate-ribbon"}`}
      >
        {row.map((imagePath, i) => (
          <img
            key={`${imagePath}-${i}`}
            src={imagePath}
            alt="Brand logo"
            className="h-12 w-auto object-contain shrink-0 transition-opacity duration-300 group-hover:opacity-60"
          />
        ))}
      </div>
    </div>
  );
}

export default function LogoRibbon() {
  return (
    <section className="border-y border-black/5 bg-white py-4">
      <div className="mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Track items={LOGOS_A} />
        <Track items={LOGOS_B} reverse />
      </div>
    </section>
  );
}