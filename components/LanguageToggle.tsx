"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className="group relative h-9 px-3 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.15] flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer"
      aria-label="Toggle language"
      title={locale === "ar" ? "Switch to English" : "التبديل للعربية"}
    >
      {/* Globe icon */}
      <svg
        className="w-4 h-4 text-[#00c6ff] group-hover:text-white transition-colors duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>

      {/* Language label */}
      <span className="text-xs font-bold text-neutral-300 group-hover:text-white transition-colors duration-300 select-none">
        {t("lang_switch")}
      </span>

      {/* Glow effect */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00c6ff]/0 to-[#7b2ff7]/0 group-hover:from-[#00c6ff]/10 group-hover:to-[#7b2ff7]/10 transition-all duration-300" />
    </button>
  );
}
