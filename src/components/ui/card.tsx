import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ className, children, ...props }: CardProps): React.JSX.Element {
  return (
    <div
      className={cn('bg-white rounded-2xl border border-[#E2E8F0] transition-colors', className)}
      {...props}
    >
      {children}
    </div>
  );
}
