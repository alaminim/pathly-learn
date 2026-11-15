'use client';

import { useEffect, type MouseEvent, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  maxWidthClass?: string;
  children: ReactNode;
}

export function Dialog({
  open,
  onClose,
  labelledBy,
  maxWidthClass = 'max-w-2xl',
  children
}: DialogProps): React.JSX.Element {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171923]/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className={cn(
              'bg-white rounded-2xl border border-[#E2E8F0] w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl',
              maxWidthClass
            )}
            onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
