'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  external?: boolean;
  small?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'medium',
  icon,
  onClick,
  className = '',
  download,
  external,
  small,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px] hover:-translate-y-1';
  
  const variants = {
    primary: 'bg-dark-accent text-white hover:bg-dark-accentHover hover:shadow-[0_4px_14px_0_rgba(255,87,51,0.39)] focus:ring-dark-accent',
    secondary: 'bg-dark-card border border-dark-borderGlow text-dark-textMain hover:bg-gray-800 focus:ring-gray-500',
    outline: 'border-2 border-dark-textMuted text-dark-textMuted hover:border-dark-accent hover:text-dark-accent focus:ring-dark-accent',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const buttonSize = small ? sizes.small : sizes[size];
  const buttonStyles = `${baseStyles} ${variants[variant]} ${buttonSize} ${className}`;

  const content = (
    <>
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          download={download}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={buttonStyles}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonStyles}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={buttonStyles}
    >
      {content}
    </motion.button>
  );
}