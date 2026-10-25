import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  withTopBorder?: boolean;
  spacing?: 'default' | 'dense' | 'hero';
}

export function Section({
  children,
  id,
  className = '',
  containerClassName = '',
  withTopBorder = false,
  spacing = 'default',
}: SectionProps) {
  const spacingClasses = {
    hero: 'pt-24 pb-16 sm:pt-32 sm:pb-24',
    default: 'py-16 sm:py-24',
    dense: 'py-12 sm:py-16',
  }[spacing];

  return (
    <section
      id={id}
      className={`w-full ${withTopBorder ? 'border-t border-neutral-200/80' : ''} ${spacingClasses} ${className}`}
    >
      <div className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
