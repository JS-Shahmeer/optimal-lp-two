import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/images/logo-dark.png";

const LINKS = [
  { label: "Benefits", href: "#benefits" },
  { label: "Work", href: "#works" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(10,10,10,0.06)]" : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-[72px] flex items-center justify-between gap-6">
        <a href="#top" className="flex-shrink-0">
          <img src={logoDark} alt="Optimal IT Solutions" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-[14px] font-medium text-[#0A0A0A] hover:text-[#ff7418] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#consult"
            className="rounded-full bg-[#ff7418] px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:shadow-[0_0_28px_rgba(255,116,24,0.5)] hover:-translate-y-0.5"
          >
            Get a Quote
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu toggle"
            className="md:hidden p-2 text-[#0A0A0A]"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white px-5 py-4">
          {LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[15px] font-medium text-[#0A0A0A]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}