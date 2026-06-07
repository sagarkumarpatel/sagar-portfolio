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
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105 focus:ring-blue-500',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600',
    outline: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 focus:ring-blue-500',
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