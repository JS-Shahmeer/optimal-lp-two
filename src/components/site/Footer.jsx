import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebook, FaYoutube, FaXTwitter } from "react-icons/fa6";
import PartnerLogos from "./PartnerLogos";
import logoLight from "@/assets/images/logo-light.png";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div>
            <a href="#top" className="inline-block">
              <img src={logoLight} alt="Optimal IT Solutions" className="h-12 w-auto" />
            </a>
            <p className="mt-4 max-w-136 text-[15px] leading-[1.7] text-white/55">
              Custom website development built for performance & scale. Strategy, UX, and technical excellence in one team.
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/optimal-itsolutions/" },
              { Icon: FaFacebook, href: "https://www.facebook.com/share/157vYxjn9i/" },
              { Icon: FaInstagram, href: "https://www.instagram.com/optimal_itsolutions/" },
              { Icon: FaYoutube, href: "https://www.youtube.com/@OptimalITSolutions" },
              { Icon: FaXTwitter, href: "https://x.com/Optitsol" },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all hover:border-[#ff7418] hover:bg-[#ff7418]"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* <div className="-mx-5 lg:-mx-8 mt-12">
          <PartnerLogos />
        </div> */}

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-center">
          <div className="text-[13px] text-white/50">© 2026 Optimal IT Solutions. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}