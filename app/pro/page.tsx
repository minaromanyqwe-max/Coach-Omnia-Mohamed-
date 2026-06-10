/*Ensure you have installed the package
or read our installation document. (go to lightswind.com/components/Installation)
npm i lightswind@latest*/

// ThreeDScrollTrigger.tsx
"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { cn } from "../../lib/utils";
import { useTranslations } from "next-intl";

/* -------------------------
   Utility: wrap (unchanged)
   ------------------------- */
export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

/* -----------------------------------
   Context to share velocity between rows
   ----------------------------------- */
const ThreeDScrollTriggerContext =
  React.createContext<MotionValue<number> | null>(null);

/* --------------------------
   Container that provides velocity
   -------------------------- */
export function ThreeDScrollTriggerContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1;
    const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5);
    return sign * magnitude;
  });

  return (
    <ThreeDScrollTriggerContext.Provider value={velocityFactor}>
      <div className={cn("relative w-full", className)} {...props}>
        {children}
      </div>
    </ThreeDScrollTriggerContext.Provider>
  );
}

/* --------------------------
   Row entry that chooses shared or local velocity
   -------------------------- */
export function ThreeDScrollTriggerRow(props: ThreeDScrollTriggerRowProps) {
  const sharedVelocityFactor = useContext(ThreeDScrollTriggerContext);
  if (sharedVelocityFactor) {
    return (
      <ThreeDScrollTriggerRowImpl
        {...props}
        velocityFactor={sharedVelocityFactor}
      />
    );
  }
  return <ThreeDScrollTriggerRowLocal {...props} />;
}

/* --------------------------
   Props
   -------------------------- */
interface ThreeDScrollTriggerRowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  baseVelocity?: number; 
  direction?: 1 | -1;
  resetIntervalMs?: number;
}

/* --------------------------
   Impl with velocity passed in
   -------------------------- */
interface ThreeDScrollTriggerRowImplProps extends ThreeDScrollTriggerRowProps {
  velocityFactor: MotionValue<number>;
}

function ThreeDScrollTriggerRowImpl({
  children,
  baseVelocity = 3, // تم تقليل السرعة قليلاً لجعل النص مقروءاً ومميزاً
  direction = 1,
  className,
  velocityFactor,
  ...props
}: ThreeDScrollTriggerRowImplProps) {
  const t = useTranslations("Marquee");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [numCopies, setNumCopies] = useState(4);
  const x = useMotionValue(0);

  const prevTimeRef = useRef<number | null>(null);
  const unitWidthRef = useRef(0);
  const baseXRef = useRef(0);

  // نصوص الجيم والتدريب الاونلاين
  const defaultGymContent = (
    <div className="flex items-center gap-12 px-6 text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-white select-none">
      <span className="flex items-center gap-3">{t("pt")}</span>
      <span className="text-amber-500 flex items-center gap-3">{t("online")}</span>
      <span className="flex items-center gap-3">{t("plan")}</span>
      <span className="text-amber-500 flex items-center gap-3">{t("app")}</span>
      <span className="flex items-center gap-3">{t("trans")}</span>
      <span className="text-amber-500 flex items-center gap-3">{t("support")}</span>
    </div>
  );

  const finalChildren = children || defaultGymContent;
  const childrenArray = useMemo(() => React.Children.toArray(finalChildren), [finalChildren]);

  const BlockContent = useMemo(() => {
    return (
      <div className="inline-flex shrink-0" style={{ contain: "paint" }}>
        {childrenArray}
      </div>
    );
  }, [childrenArray]);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;

      const block = container.querySelector(".threed-scroll-trigger-block") as HTMLElement;
      if (block && block.scrollWidth > 0) {
        unitWidthRef.current = block.scrollWidth;
        const containerWidth = container.offsetWidth || window.innerWidth;
        const needed = Math.max(3, Math.ceil(containerWidth / unitWidthRef.current) + 2);
        setNumCopies(needed);
      }
    };

    const timeoutId = setTimeout(measure, 100);
    
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", measure);
    };
  }, [childrenArray]);

  const isInView = useInView(containerRef, { margin: "40%" });

  useAnimationFrame((time) => {
    if (!isInView) return;

    if (prevTimeRef.current == null) prevTimeRef.current = time;
    const dt = Math.max(0, (time - prevTimeRef.current) / 1000);
    prevTimeRef.current = time;

    const unitWidth = unitWidthRef.current;
    if (unitWidth <= 0) return;

    const velocity = velocityFactor.get();
    const speedMultiplier = Math.min(5, Math.abs(velocity));
    const scrollDirection = velocity >= 0 ? 1 : -1;
    const currentDirection = direction * scrollDirection;

    const pixelsPerSecond = (unitWidth * baseVelocity) / 100;
    const moveBy = currentDirection * pixelsPerSecond * (1 + speedMultiplier) * dt;

    let newX = baseXRef.current + moveBy;

    if (newX >= unitWidth) {
      newX = newX % unitWidth;
    } else if (newX < 0) {
      newX = unitWidth + (newX % unitWidth);
    }
    
    baseXRef.current = newX;
    x.set(newX);
  });

  const xTransform = useTransform(x, (v) => `translate3d(${-v}px,0,0)`);

  return (
    <div
      ref={containerRef}
      className={cn("w-full overflow-hidden whitespace-nowrap bg-background py-6 border-y border-neutral-800", className)}
      {...props}
    >
      <motion.div
        className="inline-flex will-change-transform transform-gpu"
        style={{ transform: xTransform }}
      >
        {Array.from({ length: numCopies }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "inline-flex shrink-0",
              i === 0 ? "threed-scroll-trigger-block" : ""
            )}
          >
            {BlockContent}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* --------------------------
   Local row (if no shared velocity)
   -------------------------- */
function ThreeDScrollTriggerRowLocal(props: ThreeDScrollTriggerRowProps) {
  const { scrollY } = useScroll();
  const localVelocity = useVelocity(scrollY);
  const localSmoothVelocity = useSpring(localVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const localVelocityFactor = useTransform(localSmoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1;
    const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5);
    return sign * magnitude;
  });

  return (
    <ThreeDScrollTriggerRowImpl
      {...props}
      velocityFactor={localVelocityFactor}
    />
  );
}

export default ThreeDScrollTriggerRow;