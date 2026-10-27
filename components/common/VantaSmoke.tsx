'use client';

import { useEffect, useRef } from 'react';

const THREE_SCRIPT = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
const VANTA_FOG_SCRIPT = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js';

let vantaFogPromise: Promise<void> | null = null;

function loadScript(src: string, isLoaded: () => boolean): Promise<void> {
  if (isLoaded()) return Promise.resolve();

  let script = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);

  return new Promise((resolve, reject) => {
    const handleLoad = () => {
      cleanup();
      if (isLoaded()) {
        resolve();
      } else {
        reject(new Error(`Script loaded without exposing its expected API: ${src}`));
      }
    };
    const handleError = () => {
      cleanup();
      reject(new Error(`Failed to load script: ${src}`));
    };
    const cleanup = () => {
      script?.removeEventListener('load', handleLoad);
      script?.removeEventListener('error', handleError);
    };

    if (!script) {
      script = document.createElement('script');
      script.src = src;
      script.async = true;
    }

    script.addEventListener('load', handleLoad, { once: true });
    script.addEventListener('error', handleError, { once: true });

    if (!script.isConnected) document.head.appendChild(script);
  });
}

function loadVantaFog(): Promise<void> {
  const hasThree = () => Boolean((window as Window & { THREE?: unknown }).THREE);
  const hasFog = () => Boolean(window.VANTA?.FOG);

  if (hasThree() && hasFog()) return Promise.resolve();

  if (!vantaFogPromise) {
    vantaFogPromise = loadScript(THREE_SCRIPT, hasThree)
      .then(() => loadScript(VANTA_FOG_SCRIPT, hasFog))
      .catch((error: unknown) => {
        vantaFogPromise = null;
        throw error;
      });
  }

  return vantaFogPromise;
}

interface VantaSmokeProps {
  className: string;
  highlightColor: number;
  midtoneColor: number;
  lowlightColor: number;
  baseColor: number;
  blurFactor: number;
  speed: number;
}

export function VantaSmoke({
  className = '',
  highlightColor = 0xffffff,
  midtoneColor = 0x000000,
  lowlightColor = 0x000000,
  baseColor = 0xffffff,
  blurFactor= 0.60,
  speed = 2.1,
}: VantaSmokeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let effect: { destroy: () => void } | undefined;

    loadVantaFog()
      .then(() => {
        const container = containerRef.current;
        const createFog = window.VANTA?.FOG;

        if (cancelled || !container || !createFog) return;

        effect = createFog({
          el: container,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor,
          midtoneColor,
          lowlightColor,
          baseColor,
          speed,
          zoom: 1.5,
          blurFactor,
        });
      })
      .catch((error: unknown) => {
        console.error('Unable to initialize Vanta Fog background.', error);
      });

    return () => {
      cancelled = true;
      effect?.destroy();
    };
  }, [highlightColor, midtoneColor, lowlightColor, baseColor, speed]);

  return <div ref={containerRef} aria-hidden="true" className={className} />;
}
