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

const LOGOS_A = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];
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
        <Track items={LOGOS_B} reverse />
      </div>
    </section>
  );
}