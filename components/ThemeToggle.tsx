"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.15] flex items-center justify-center transition-all duration-300 cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light Mode" : "Dark Mode"}
    >
      {/* Sun icon */}
      <svg
        className={`w-[18px] h-[18px] absolute transition-all duration-500 ${
          isDark
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100 text-amber-400"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>

      {/* Moon icon */}
      <svg
        className={`w-[18px] h-[18px] absolute transition-all duration-500 ${
          isDark
            ? "opacity-100 rotate-0 scale-100 text-indigo-300"
            : "opacity-0 -rotate-90 scale-0"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>

      {/* Glow effect on hover */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/0 to-indigo-500/0 group-hover:from-amber-400/10 group-hover:to-indigo-500/10 transition-all duration-300" />
    </button>
  );
}
