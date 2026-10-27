'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

type VantaEffect = { destroy: () => void };

declare global {
  interface Window {
    VANTA?: {
      CLOUDS: (options: {
        el: HTMLElement;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        speed: number;
      }) => VantaEffect;
      FOG: (options: {
        el: HTMLElement;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        highlightColor: number;
        midtoneColor: number;
        lowlightColor: number;
        baseColor: number;
        speed: number;
        zoom: number;
        blurFactor: number;
      }) => VantaEffect;
    };
  }
}

export function VantaClouds({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const createClouds = window.VANTA?.CLOUDS;

    if (!threeReady || !vantaReady || !container || !createClouds) return;

    const effect = createClouds({
      el: container,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 300,
      minWidth: 300,
      speed:2,
    });

    return () => effect.destroy();
  }, [threeReady, vantaReady]);

  return (
    <>
      <div ref={containerRef} aria-hidden="true" className={className} />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onReady={() => setThreeReady(true)}
      />
      {threeReady && (
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.clouds.min.js"
          strategy="afterInteractive"
          onReady={() => setVantaReady(true)}
        />
      )}
    </>
  );
}
