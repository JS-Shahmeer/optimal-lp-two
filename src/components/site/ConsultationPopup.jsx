import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import ConsultForm from "./ConsultForm";

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Close popup with Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0A0A0A]/60 backdrop-blur-md" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute md:right-3 right-0 md:top-3 top-1 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0A0A0A] shadow-lg transition-all hover:scale-105 hover:bg-[#ff7418] hover:text-white"
          aria-label="Close consultation form"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Existing Form */}
        <ConsultForm />
      </div>
    </div>
  );
}