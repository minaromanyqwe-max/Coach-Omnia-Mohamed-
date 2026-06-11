'use client'
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from "next-intl";

interface Slide {
    id: number;
    src: string;
    href: string;
}

interface ThreeDImageCarouselProps {
    itemCount?: 3 | 5;
    autoplay?: boolean;
    delay?: number;
    pauseOnHover?: boolean;
    className?: string;
    slides?: Slide[];
}

const DEFAULT_SLIDES: Slide[] = [
    {
        id: 1,
        src: "/IMG_1785.JPG.jpeg",
        href: '#slide1'
    },
    {
        id: 2,
        src: "/IMG_4630.jpeg",
        href: '#slide2'
    },
    {
        id: 3,
        src: "/IMG_7462.jpeg",
        href: '#slide3'
    },
];

const EMBEDDED_CSS = `
.cascade-slider_container {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    z-index: 20;
    user-select: none;
    -webkit-user-select: none;
    touch-action: pan-y;
    height: 350px;
}

.cascade-slider_slides {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.cascade-slider_item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0);
    transition: all 0.5s ease-in-out;
    opacity: 0;
    z-index: 1;
    cursor: grab;
}

.cascade-slider_item.now {
    cursor: default;
    transform: translateY(-50%) translateX(-50%) scale(1);
    opacity: 1;
    z-index: 5;
}

.cascade-slider_item.next {
    transform: translateY(-50%) translateX(10%) scale(0.75);
    opacity: 0.7;
    z-index: 4;
}

.cascade-slider_item.prev {
    transform: translateY(-50%) translateX(-110%) scale(0.75);
    opacity: 0.7;
    z-index: 4;
}

.cascade-slider_item.next2 {
    transform: translateY(-50%) translateX(60%) scale(0.55);
    opacity: 0.4;
    z-index: 2;
}

.cascade-slider_item.prev2 {
    transform: translateY(-50%) translateX(-160%) scale(0.55);
    opacity: 0.4;
    z-index: 2;
}

/* Hide next2/prev2 when itemCount=3 */
.cascade-slider_container[data-item-count="3"] .cascade-slider_item.next2,
.cascade-slider_container[data-item-count="3"] .cascade-slider_item.prev2 {
    opacity: 0;
    pointer-events: none;
    z-index: 0;
}

.cascade-slider_item:not(.now) {
    cursor: grab;
}

.cascade-slider_item:active {
    cursor: grabbing;
}

.cascade-slider_arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 30;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
}

.cascade-slider_arrow-left { left: 10px; }
.cascade-slider_arrow-right { right: 10px; }

.cascade-slider_slides img {
    width: 280px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    display: block;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    transition: filter 0.5s ease;
    pointer-events: none;
}

.cascade-slider_item:not(.now) img {
    filter: grayscale(0.8);
}

@media screen and (max-width: 640px) {
    .cascade-slider_container { height: 260px; }
    .cascade-slider_slides img { width: 180px; height: 140px; }
    .cascade-slider_item.next { transform: translateY(-50%) translateX(5%) scale(0.7); }
    .cascade-slider_item.prev { transform: translateY(-50%) translateX(-105%) scale(0.7); }
    .cascade-slider_item.next2,
    .cascade-slider_item.prev2 { display: none; }
}
`;

const getSlideClasses = (
    index: number,
    activeIndex: number,
    total: number,
    visibleCount: 3 | 5
): string => {
    let diff = index - activeIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) return 'now';
    if (diff === 1) return 'next';
    if (diff === -1) return 'prev';

    if (visibleCount === 5) {
        if (diff === 2) return 'next2';
        if (diff === -2) return 'prev2';
    }

    return '';
};

export default function CompleteThreeDCarousel({
    itemCount = 5,
    autoplay = true,
    delay = 3,
    pauseOnHover = true,
    className = '',
    slides = DEFAULT_SLIDES,
}: ThreeDImageCarouselProps) {
    const t = useTranslations("Stories");

    const [activeIndex, setActiveIndex] = useState(0);
    const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const total = slides.length;

    const [isDragging, setIsDragging] = useState(false);
    const dragActive = useRef(false); // ref for reliable access inside handlers
    const [startX, setStartX] = useState(0);
    const swipeThreshold = 40;

    const navigate = useCallback((direction: 'next' | 'prev') => {
        setActiveIndex(current => {
            if (direction === 'next') return (current + 1) % total;
            return (current - 1 + total) % total;
        });
    }, [total]);

    const stopAutoplay = useCallback(() => {
        if (autoplayIntervalRef.current !== null) {
            clearInterval(autoplayIntervalRef.current);
            autoplayIntervalRef.current = null;
        }
    }, []);

    const startAutoplay = useCallback(() => {
        if (!autoplay || total <= 1) return;
        stopAutoplay();
        autoplayIntervalRef.current = setInterval(() => {
            navigate('next');
        }, delay * 1000);
    }, [autoplay, delay, navigate, stopAutoplay, total]);

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [startAutoplay, stopAutoplay]);

    // --- Drag / Swipe handlers ---
    const handleStart = useCallback((clientX: number) => {
        dragActive.current = true;
        setIsDragging(true);
        setStartX(clientX);
        stopAutoplay();
    }, [stopAutoplay]);

    const handleEnd = useCallback((clientX: number) => {
        if (!dragActive.current) return;
        dragActive.current = false;
        setIsDragging(false);

        const distance = clientX - startX;
        if (Math.abs(distance) > swipeThreshold) {
            navigate(distance < 0 ? 'next' : 'prev');
        }

        startAutoplay();
    }, [navigate, startAutoplay, startX]);

    const handleMouseLeave = useCallback((clientX: number) => {
        if (dragActive.current) {
            handleEnd(clientX);
        } else if (pauseOnHover) {
            startAutoplay();
        }
    }, [handleEnd, pauseOnHover, startAutoplay]);

    return (
        <div className="w-full min-h-[450px] flex flex-col items-center justify-center p-4 bg-background text-white rounded-xl">
            <style dangerouslySetInnerHTML={{ __html: EMBEDDED_CSS }} />

            <h2 className="text-2xl font-bold mb-6 text-indigo-400">
                {t("title2")}
            </h2>

            <div
                className={`cascade-slider_container ${className} w-full`}
                data-item-count={itemCount}
                onMouseEnter={() => {
                    if (pauseOnHover) stopAutoplay();
                }}
                onMouseLeave={(e) => handleMouseLeave(e.clientX)}
                onMouseDown={(e) => handleStart(e.clientX)}
                onMouseUp={(e) => handleEnd(e.clientX)}
                onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
            >
                <div className="cascade-slider_slides">
                    {slides.map((slide, index) => {
                        const slideClass = getSlideClasses(index, activeIndex, total, itemCount);
                        const isActive = slideClass === 'now';

                        return (
                            <div
                                key={slide.id}
                                className={`cascade-slider_item ${slideClass}`}
                                onClick={() => {
                                    if (!isActive) setActiveIndex(index);
                                }}
                            >
                                <a
                                    href={slide.href}
                                    onClick={(e) => {
                                        if (!isActive) e.preventDefault();
                                    }}
                                    tabIndex={isActive ? 0 : -1}
                                    aria-label={`Slide ${index + 1}`}
                                >
                                    <img
                                        src={slide.src}
                                        alt={`Slide ${index + 1}`}
                                        draggable="false"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = `https://placehold.co/350x200/4F46E5/ffffff?text=Slide%20${index + 1}`;
                                        }}
                                    />
                                </a>
                            </div>
                        );
                    })}
                </div>

                {total > 1 && (
                    <>
                        <button
                            className="cascade-slider_arrow cascade-slider_arrow-left rounded-full bg-black/40 text-white p-1 hover:bg-black/70 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate('prev');
                            }}
                            aria-label="Previous slide"
                            type="button"
                        >
                            <ArrowLeftCircle size={32} />
                        </button>

                        <button
                            className="cascade-slider_arrow cascade-slider_arrow-right rounded-full bg-black/40 text-white p-1 hover:bg-black/70 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate('next');
                            }}
                            aria-label="Next slide"
                            type="button"
                        >
                            <ArrowRightCircle size={32} />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}