import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "./data";

const field =
  "w-full rounded-md bg-[#F4EFFA] px-4 py-3.5 text-[14px] font-medium text-[#0A0A0A] placeholder:text-[#0A0A0A]/50 outline-none ring-[#ff7418] transition focus:ring-2";

export default function ConsultForm() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <div className="rounded-2xl border border-white/40 bg-white/85 p-6 sm:p-8 shadow-[0_30px_80px_rgba(10,10,10,0.10)] backdrop-blur-xl">
      <h2 className="text-[26px] sm:text-[28px] font-semibold leading-none text-[#0A0A0A]">
        Schedule a <span className="text-[#ff7418]">Consultation</span>.
      </h2>
      <p className="mt-4 mb-7 text-[15px] leading-relaxed text-[#0A0A0A]/70">
        Tell us about your project and our team will be in touch within one business day.
      </p>

      <form onSubmit={submit} className="space-y-4">
        <input required name="client_name" placeholder="Full Name*" className={field} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required type="tel" name="tel" placeholder="Phone *" className={field} />
          <input required type="email" name="email" placeholder="Email *" className={field} />
        </div>
        <select name="service" defaultValue="" className={field}>
          <option value="" disabled>Choose your service</option>
          {SERVICES.map((s) => <option key={s}>{s}</option>)}
        </select>
        <textarea required name="information" placeholder="Information" rows={4} className={`${field} resize-none`} />
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-linear-to-r from-[#ff7a3d] to-[#ff4d2d] py-4 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(255,116,24,0.45)]"
        >
          Send Message <ArrowRight className="w-4 h-4" />
        </button>
        {sent && (
          <p className="text-center text-[13.5px] font-medium text-[#ff7418]">
            Thanks — your request has been received.
          </p>
        )}
      </form>
    </div>
  );
}