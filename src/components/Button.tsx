
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  isExternal?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'default', size = 'md', to, isExternal, ...props }, ref) => {
    const baseStyles = cn(
      'relative inline-flex items-center justify-center font-serif tracking-wide transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden',
      {
        'bg-deep-green text-light-beige border-2 border-deep-green hover:bg-deep-green/90': variant === 'default',
        'border-2 border-deep-green text-deep-green hover:bg-deep-green/10': variant === 'outline',
        'text-deep-green hover:bg-deep-green/10': variant === 'ghost',
        'text-sm px-3 py-1.5 rounded-sm': size === 'sm',
        'text-base px-5 py-2.5 rounded-sm': size === 'md',
        'text-lg px-7 py-3 rounded-sm': size === 'lg',
      },
      className
    );

    const ButtonContent = () => (
      <span className="relative z-10">{children}</span>
    );

    if (to) {
      if (isExternal) {
        return (
          <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className={baseStyles}
          >
            <ButtonContent />
          </a>
        );
      }
      return (
        <Link to={to} className={baseStyles}>
          <ButtonContent />
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseStyles} {...props}>
        <ButtonContent />
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
