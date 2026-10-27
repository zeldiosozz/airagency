'use client';

import { useEffect, type ComponentProps } from 'react';
import { Button } from './Button';

type ConfettiOptions = {
  particleCount: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  scalar?: number;
  origin?: { y: number };
};

declare global {
  interface Window {
    confetti?: (options: ConfettiOptions) => void;
  }
}

const CONFETTI_SCRIPT = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';
let confettiReady: Promise<void> | null = null;

function loadConfetti(): Promise<void> {
  if (window.confetti) return Promise.resolve();

  if (!confettiReady) {
    confettiReady = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = CONFETTI_SCRIPT;
      script.async = true;
      script.onload = () => {
        if (window.confetti) resolve();
        else reject(new Error('The confetti script loaded without exposing its API.'));
      };
      script.onerror = () => reject(new Error('Unable to load the confetti script.'));
      document.head.appendChild(script);
    }).catch((error: unknown) => {
      confettiReady = null;
      throw error;
    });
  }

  return confettiReady;
}

function firePricingConfetti() {
  const confetti = window.confetti;
  if (!confetti) return;

  const count = 200;
  const defaults = { origin: { y: 0.7 } };
  const fire = (particleRatio: number, options: Omit<ConfettiOptions, 'particleCount'>) => {
    confetti({
      ...defaults,
      ...options,
      particleCount: Math.floor(count * particleRatio),
    });
  };

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

export function PricingCTAButton({
  children,
  ...props
}: ComponentProps<typeof Button>) {
  useEffect(() => {
    void loadConfetti().catch(() => {
      // Keep the pricing CTA usable if the optional confetti CDN is unavailable.
    });
  }, []);

  const handleClick = () => {
    if (window.confetti) {
      firePricingConfetti();
      return;
    }

    void loadConfetti().then(firePricingConfetti).catch(() => {
      // Keep the pricing CTA usable if the optional confetti CDN is unavailable.
    });
  };

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
}
