import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  variant?: 'purple' | 'sky' | 'emerald' | 'amber' | 'neutral';
  className?: string;
  children: ReactNode;
}

const styles: Record<NonNullable<BadgeProps['variant']>, string> = {
  purple: 'bg-[#F7F4FF] text-[#5B35C5] border-[#EDE7FF]',
  sky: 'bg-[#F0F9FF] text-[#0284C7] border-[#E0F2FE]',
  emerald: 'bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]',
  amber: 'bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]',
  neutral: 'bg-[#F8FAFC] text-[#64748B] border-[#E2E8F0]'
};

export function Badge({ variant = 'purple', className, children }: BadgeProps): React.JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border',
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
