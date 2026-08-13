import React from "react";
import { Star } from "lucide-react";

const PARTNERS = [
  "BigCommerce",
  "Google Partner",
  "Meta Business",
  "Shopify Plus",
  "Pipedrive",
  "WordPress",
  "Klaviyo",
  "Partner",
];

export default function PartnerLogos() {
  return (
    <div className="w-full border-y border-white/15 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-8 lg:flex-row lg:px-8">
        {/* Clutch review */}
        <div className="flex shrink-0 items-center gap-4 text-center lg:text-left">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.25em] text-white/60">
              REVIEWED<span className="block">ON</span>
            </div>
            <div className="mt-1 text-[26px] font-black leading-none text-white">Clutch</div>
          </div>
          <div className="border-l border-white/15 pl-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#FF0000] text-[#FF0000]" />
              ))}
            </div>
            <div className="mt-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/80">5 STAR RATING</div>
          </div>
        </div>

        {/* Partner logos (placeholders) */}
        <div className="grid w-full grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4 lg:flex lg:w-auto lg:items-center lg:gap-10">
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="flex h-10 items-center justify-center rounded bg-white/5 px-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white/45 lg:h-12"
              title={name}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}