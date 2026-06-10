"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-[#090514] z-50 backdrop-blur-sm">
      {/* Glow effect */}
      <div className="absolute w-40 h-40 bg-[#7b2ff7] rounded-full blur-[80px] opacity-20 animate-pulse"></div>

      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Rings */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 border-4 border-transparent border-t-[#00c6ff] border-r-[#7b2ff7] rounded-full animate-spin shadow-[0_0_15px_rgba(0,198,255,0.2)]"></div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-transparent border-l-[#7b2ff7] border-b-[#00c6ff] rounded-full animate-[spin_2s_reverse_infinite] shadow-[0_0_15px_rgba(123,47,247,0.2)]"></div>
        </div>

        {/* Brand Text */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#00c6ff] to-[#7b2ff7] bg-clip-text text-transparent tracking-widest font-sans animate-pulse drop-shadow-lg">
            OMNIA
          </h1>
          <p className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-2 uppercase tracking-[0.3em]">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}
