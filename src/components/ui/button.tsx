import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'sky';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-[#6D45D9] text-white hover:bg-[#5B35C5] shadow-xs focus-visible:ring-[#6D45D9]',
  secondary: 'bg-[#EDE7FF] text-[#5B35C5] hover:bg-[#E2D8FF] focus-visible:ring-[#6D45D9]',
  outline:
    'bg-white text-[#171923] border border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-[#CBD5E1] focus-visible:ring-[#6D45D9]',
  ghost:
    'bg-transparent text-[#64748B] hover:text-[#171923] hover:bg-[#F8FAFC] focus-visible:ring-[#6D45D9]',
  sky: 'bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-xs focus-visible:ring-[#0284C7]'
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3.5 py-2 text-xs sm:text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm sm:text-base rounded-xl',
  lg: 'px-6 py-3.5 text-base rounded-xl'
};

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
