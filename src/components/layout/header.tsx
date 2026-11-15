'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BrainCircuit, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModals } from '@/providers/modals-provider';

const MOBILE_LINKS = [
  { href: '#why-pathly', label: 'Why Pathly' },
  { href: '#subjects', label: 'Subjects (JSS1–SS3)' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#meet-pally', label: 'Meet Pally AI' },
  { href: '#offline-ready', label: 'Offline Ready' }
] as const;

export function Header(): React.JSX.Element {
  const { openAuth } = useModals();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#top"
            className="flex items-center gap-2.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D45D9]"
            aria-label="Pathly Learn Home"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F7F4FF] border border-[#EDE7FF] text-[#6D45D9]">
              <BrainCircuit className="w-6 h-6" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <span className="font-heading text-xl sm:text-[22px] font-bold tracking-tight text-[#171923]">
              Pathly <span className="text-[#6D45D9]">Learn</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary Navigation">
            <a href="#why-pathly" className="text-sm font-medium text-[#64748B] hover:text-[#6D45D9] transition-colors py-2">
              Why Pathly
            </a>
            <a href="#subjects" className="text-sm font-medium text-[#64748B] hover:text-[#6D45D9] transition-colors py-2">
              Subjects
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-[#64748B] hover:text-[#6D45D9] transition-colors py-2">
              How It Works
            </a>
            <a href="#meet-pally" className="text-sm font-medium text-[#64748B] hover:text-[#0284C7] transition-colors py-2">
              Meet Pally
            </a>
            <a
              href="#offline-ready"
              className="text-sm font-medium text-[#64748B] hover:text-[#10B981] transition-colors py-2 inline-flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              Offline Ready
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" onClick={() => openAuth('signin', 'student')}>
              Sign In
            </Button>
            <Button variant="primary" onClick={() => openAuth('signup', 'student')}>
              Start Learning
            </Button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setDrawerOpen((prev) => !prev)}
              aria-expanded={drawerOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
              className="p-2.5 rounded-xl text-[#171923] hover:bg-[#F8FAFC] border border-[#E2E8F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D45D9]"
            >
              {drawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden bg-white border-b border-[#E2E8F0]"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                {MOBILE_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="px-3.5 py-3 rounded-xl text-base font-medium text-[#171923] hover:bg-[#F7F4FF] hover:text-[#6D45D9]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="pt-3 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setDrawerOpen(false);
                    openAuth('signin', 'student');
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    setDrawerOpen(false);
                    openAuth('signup', 'student');
                  }}
                >
                  Start Learning
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
