"use client";

import React, { useLayoutEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

interface ParticlesBackgroundProps {
  colors?: string[];
  size?: number;
  countDesktop?: number;
  countTablet?: number;
  countMobile?: number;
  zIndex?: number;
  height?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  colors = ['#ff223e', '#5d1eb2', '#ff7300'],
  size = 2, // Reduced size
  countDesktop = 25, // Significantly reduced particle count for performance
  countTablet = 15,
  countMobile = 10,
  zIndex = 0,
  height = '100vh',
}) => {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;

    script.onload = () => {
      const particlesElement = document.getElementById('js-particles');
      if (particlesElement && window.particlesJS) {
        const getParticleCount = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth > 1024) return countDesktop;
          if (screenWidth > 768) return countTablet;
          return countMobile;
        };

        window.particlesJS('js-particles', {
          particles: {
            number: {
              value: getParticleCount(),
            },
            color: {
              value: colors,
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.6, // Lower opacity instead of expensive SVG glow filter
              random: false,
            },
            size: {
              value: size,
              random: true,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1, // Slower speed for better performance
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: false, // Disabled retina detect to save memory/CPU
        });
      }
    };
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [colors, size, countDesktop, countTablet, countMobile]);

  return (
    <div
      id="js-particles"
      style={{
        width: '100%',
        height: height,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: zIndex,
        pointerEvents: 'none',
      }}
    >
      <style>{`
        #js-particles canvas {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particles-js-canvas-el {
          position: absolute;
        }

        /* Removed expensive SVG #glow filter for performance */
        .particles-js-canvas-el circle {
          fill: currentColor;
        }
      `}</style>
    </div>
  );
};

export default ParticlesBackground;