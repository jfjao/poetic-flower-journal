
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
      'relative inline-flex items-center justify-center rounded-md font-handwritten text-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-green/50 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group',
      {
        'bg-deep-green text-cream hover:bg-deep-green/90': variant === 'default',
        'border-2 border-deep-green/70 text-deep-green hover:bg-deep-green/10': variant === 'outline',
        'text-deep-green hover:bg-deep-green/10': variant === 'ghost',
        'text-xl px-3 py-1.5': size === 'sm',
        'text-2xl px-5 py-2.5': size === 'md',
        'text-3xl px-7 py-3': size === 'lg',
      },
      className
    );

    const ButtonContent = () => (
      <>
        <span className="relative z-10 group-hover:text-cream transition-colors duration-300">{children}</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute inset-0 rounded-md bg-rose-plum transition-all duration-500 group-hover:scale-x-100 ease-out origin-left scale-x-0"></span>
        </span>
      </>
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
