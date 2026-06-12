"use client";

import React from "react";
import dynamic from "next/dynamic";

const ParticlesBackground = dynamic(() => import("../sections/cap/page"), { ssr: false });
const SparkleCursor = dynamic(() => import("../sections/star/page"), { ssr: false });

export default function ClientEffects() {
  return (
    <>
      <div className="fixed inset-0 w-full h-screen pointer-events-none z-0">
        <ParticlesBackground height="100%" zIndex={0} />
      </div>
      <SparkleCursor distance={40} glow={true} />
    </>
  );
}
