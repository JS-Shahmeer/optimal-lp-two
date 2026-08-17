import React from "react";
import Img1 from "../../assets/images/home-brand-slider-img/home-brand-slide-1.png";
import Img2 from "../../assets/images/home-brand-slider-img/home-brand-slide-2.png";
import Img3 from "../../assets/images/home-brand-slider-img/home-brand-slide-3.png";
import Img4 from "../../assets/images/home-brand-slider-img/home-brand-slide-4.png";
import Img5 from "../../assets/images/home-brand-slider-img/home-brand-slide-5.png";
import Img6 from "../../assets/images/home-brand-slider-img/home-brand-slide-6.png";
import Img7 from "../../assets/images/home-brand-slider-img/home-brand-slide-7.png";
import Img8 from "../../assets/images/home-brand-slider-img/home-brand-slide-8.png";
import Img9 from "../../assets/images/home-brand-slider-img/home-brand-slide-9.png";
import Img10 from "../../assets/images/home-brand-slider-img/home-brand-slide-10.png";

import Img001 from "../../assets/images/home-brand-slider-img/001.webp";
import Img002 from "../../assets/images/home-brand-slider-img/002.webp";
import Img003 from "../../assets/images/home-brand-slider-img/003.webp";
import Img004 from "../../assets/images/home-brand-slider-img/004.webp";
import Img005 from "../../assets/images/home-brand-slider-img/005.webp";
import Img006 from "../../assets/images/home-brand-slider-img/006.webp";
import Img007 from "../../assets/images/home-brand-slider-img/007.webp";
import Img008 from "../../assets/images/home-brand-slider-img/008.webp";
import Img009 from "../../assets/images/home-brand-slider-img/009.webp";

const LOGOS_A = [Img001, Img002, Img003, Img004, Img005, Img006, Img007, Img008, Img009];
const LOGOS_B = [Img10, Img9, Img8, Img7, Img6, Img5, Img4, Img3, Img2, Img1];

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
        {/* <Track items={LOGOS_B} reverse /> */}
      </div>
    </section>
  );
}