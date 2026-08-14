import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const buttonTexts = [
  "Let's Discuss Your Project",
  "Ready to Start?",
  "Get Your Free Consultation",
  "Talk to Our Experts",
  "Let's Build Together",
];

export default function ConsultButton() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % buttonTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const element = document.getElementById("consult");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="flex justify-center py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        onClick={handleClick}
        className="group cursor-pointer relative rounded-full bg-linear-to-r from-[#ff7a3d] to-[#ff4d2d] px-8 py-4 font-semibold text-white shadow-lg hover:shadow-[0_0_32px_rgba(255,116,24,0.5)] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(255, 116, 24, 0.3)",
            "0 0 40px rgba(255, 116, 24, 0.6)",
            "0 0 20px rgba(255, 116, 24, 0.3)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <motion.span
          key={currentTextIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2"
        >
          {buttonTexts[currentTextIndex]}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
