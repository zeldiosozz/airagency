'use client';

import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'none';
  className?: string;
  id?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  id,
}: FadeInProps) {
  const initialY = direction === 'up' ? 12 : 0;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.35,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
