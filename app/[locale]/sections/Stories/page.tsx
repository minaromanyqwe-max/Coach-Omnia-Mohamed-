"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const OMNIA_TEAM_IMAGES = [
  "WhatsApp Image 2026-05-25 at 12.54.09 AM.jpeg",
  "WhatsApp Image 2026-05-25 at 12.54.10 AM.jpeg",
  "WhatsApp Image 2026-05-25 at 12.54.11 AM.jpeg",
  "WhatsApp Image 2026-05-25 at 12.54.16 AM (2).jpeg",
  "WhatsApp Image 2026-05-25 at 12.54.16 AM.jpeg",
  "WhatsApp Image 2026-05-25 at 12.54.17 AM (1).jpeg",
  "WhatsApp Image 2026-05-25 at 12.54.17 AM.jpeg",
  "WhatsApp Image 2026-05-25 at 12.54.18 AM.jpeg",
];

interface Slider3DProps {
  images?: string[];
  duration?: number;
  cardAspectRatio?: string;
  containerClassName?: string;
  imageClassName?: string;
  rotationDirection?: "left" | "right";
  withMask?: boolean;
}

export default function OmniaTeam3DSlider({
  images = OMNIA_TEAM_IMAGES,
  duration = 25,
  cardAspectRatio = "9/16",
  containerClassName = "",
  imageClassName = "",
  rotationDirection = "left",
  withMask = true,
}: Slider3DProps) {
  const t = useTranslations("Stories");
  const n = images.length;
  const prefersReducedMotion = useReducedMotion();
  const animationDuration = prefersReducedMotion ? duration * 4 : duration;

  const rotationValues = rotationDirection === "left" ? [0, 360] : [360, 0];

  const maskStyles = withMask
    ? {
        WebkitMask: "linear-gradient(90deg, transparent, #000 15% 85%, transparent)",
        mask: "linear-gradient(90deg, transparent, #000 15% 85%, transparent)",
      }
    : {};

  return (
    <div className="py-12 md:py-20 bg-slate-50 dark:bg-[#0A0A0A] overflow-hidden relative" id="Stories">
      {/* عنوان القسم */}
      <div className="text-center mb-6 md:mb-10 px-4">
        <h2 className="text-2xl md:text-4xl font-black text-amber-500 uppercase tracking-widest">
          {t("title")}
        </h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2 italic">{t("subtitle")}</p>
      </div>

      <div
        className={`grid w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden place-items-center 
          [--card-width:11em] sm:[--card-width:14em] md:[--card-width:18em]
          [--perspective:30em] sm:[--perspective:38em] md:[--perspective:45em] 
          ${containerClassName}`}
        style={{
          perspective: "var(--perspective)",
          ...maskStyles,
        }}
      >
        <motion.div
          className="grid place-self-center pointer-events-auto"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: rotationValues,
          }}
          transition={{
            duration: animationDuration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {images.map((src, i) => (
            <Image
              key={i}
              src={`/${src}`}
              alt={`Transformation ${i}`}
              width={288}
              height={512}
              className={`col-start-1 row-start-1 object-cover rounded-xl md:rounded-2xl border border-slate-800 shadow-2xl shadow-amber-500/10 ${imageClassName}`}
              style={{
                width: "var(--card-width)",
                aspectRatio: cardAspectRatio,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: `rotateY(calc(${i} * (1turn / ${n}))) translateZ(calc(-1 * (0.6 * var(--card-width) + 1em) / tan(0.5 * (1turn / ${n}))))`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}