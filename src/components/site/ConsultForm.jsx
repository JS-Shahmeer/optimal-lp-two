import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "./data";
import Swal from "sweetalert2";

const field =
  "w-full rounded-md bg-[#F4EFFA] px-4 py-3.5 text-[14px] font-medium text-[#0A0A0A] placeholder:text-[#0A0A0A]/50 outline-none ring-[#ff7418] transition focus:ring-2";

export default function ConsultForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    client_name: "",
    email: "",
    phone: "",
    service: "",
    information: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://optimal-lp-backend.optimal-itsolutions.com/api/submit-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success modal
        await Swal.fire({
          icon: "success",
          title: "Thank you for your submission!",
          html: `<div class="text-center">
            <p class="text-[14px] text-[#0A0A0A]/70">We'll review your request and get back to you within one business day.</p>
          </div>`,
          confirmButtonColor: "#ff7418",
          confirmButtonText: "Got it",
          allowOutsideClick: false,
          customClass: {
            popup: "rounded-2xl",
            confirmButton: "px-6 py-3 text-[14px] font-semibold",
          },
        });

        // Reset form
        setFormData({
          client_name: "",
          email: "",
          phone: "",
          service: "",
          information: "",
        });
      } else {
        // Error modal
        await Swal.fire({
          icon: "error",
          title: "Oops!",
          html: `<div class="text-center">
            <p class="text-[#0A0A0A]">${data.message || "Something went wrong. Please try again."}</p>
          </div>`,
          confirmButtonColor: "#ff7418",
          confirmButtonText: "Try Again",
          customClass: {
            popup: "rounded-2xl",
            confirmButton: "px-6 py-3 text-[14px] font-semibold",
          },
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      
      await Swal.fire({
        icon: "error",
        title: "Connection Error",
        html: `<div class="text-center">
          <p class="text-[#0A0A0A]">Unable to connect to the server.</p>
        </div>`,
        confirmButtonColor: "#ff7418",
        confirmButtonText: "Got it",
        customClass: {
          popup: "rounded-2xl",
          confirmButton: "px-6 py-3 text-[14px] font-semibold",
        },
      });
    } finally {
      setLoading(false);
    }
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
        <input
          required
          name="client_name"
          placeholder="Full Name*"
          value={formData.client_name}
          onChange={handleChange}
          disabled={loading}
          className={field}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            required
            type="tel"
            name="phone"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleChange}
            disabled={loading}
            className={field}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className={field}
          />
        </div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          disabled={loading}
          defaultValue=""
          className={field}
        >
          <option value="" disabled>
            Choose your service
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <textarea
          required
          name="information"
          placeholder="Information*"
          rows={4}
          value={formData.information}
          onChange={handleChange}
          disabled={loading}
          className={`${field} resize-none`}
        />
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-linear-to-r from-[#ff7a3d] to-[#ff4d2d] py-4 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(255,116,24,0.45)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {loading ? "Sending..." : "Send Message"} <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}