import React from 'react';
import Link from 'next/link';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  id?: string;
  icon?: React.ReactNode;
}

interface ButtonAsButtonProps extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: undefined;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  id,
  icon,
  ...props
}: ButtonProps) {
  // Strict: exactly TWO variants sitewide
  // Primary: Solid vibrant blue (#2563eb), crisp text, subtle hover shade
  // Secondary: Subtle transparent/light border, neutral ink, subtle hover
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-lg cursor-pointer select-none whitespace-nowrap focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'text-sm px-3.5 py-1.5 gap-1.5',
    md: 'text-base px-5 py-2.5 gap-2',
    lg: 'text-base sm:text-lg px-6 py-3 gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-xs',
    secondary:
      'bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 active:bg-neutral-100',
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`.trim();

  if ('href' in props && props.href) {
    const { href, onClick, target, rel } = props as ButtonAsLinkProps;
    return (
      <Link href={href} className={combinedClasses} id={id} onClick={onClick} target={target} rel={rel}>
        {children}
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  return (
    <button className={combinedClasses} id={id} {...buttonProps}>
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
}
