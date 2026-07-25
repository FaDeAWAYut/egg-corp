"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/70 text-[#005844] shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <Image
        src="/arrow-up.png"
        alt="Scroll to top"
        width={24}
        height={24}
        className="h-6 w-6 object-contain"
      />
    </button>
  );
}
