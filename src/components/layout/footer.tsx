'use client';

import { BrainCircuit } from 'lucide-react';
import { SUBJECT_MODELS } from '@/data/subjects';
import { useModals } from '@/providers/modals-provider';
import Link from 'next/link';

export function Footer(): React.JSX.Element {
  const { openAuth, openSyllabus } = useModals();

  return (
    <footer className="bg-white py-12 sm:py-16">
      <div className="max-w-\[1280px\] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#E2E8F0]">
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D45D9]"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#F7F4FF] border border-[#EDE7FF] text-[#6D45D9]">
                <BrainCircuit className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-bold text-[#171923]">
                Pathly <span className="text-[#6D45D9]">Learn</span>
              </span>
            </a>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-md">
              Reading-first secondary education platform built for Nigerian JSS1–SS3 learners.
              NERDC-aligned, offline-resilient, and protected by Socratic academic integrity.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#171923]">
              JSS1–SS3 Subjects
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-[#64748B]">
              {SUBJECT_MODELS.map((subj) => (
                <li key={subj.id}>
                  <button
                    type="button"
                    onClick={() => openSyllabus(subj)}
                    className="hover:text-[#6D45D9] transition-colors text-left cursor-pointer"
                  >
                    {subj.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#171923]">Platform</h3>
            <ul className="space-y-2 text-sm sm:text-base text-[#64748B]">
              <li>
                <a href="#why-pathly" className="hover:text-[#6D45D9] transition-colors">
                  Why Pathly
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#6D45D9] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#meet-pally" className="hover:text-[#0284C7] transition-colors">
                  Meet Pally AI
                </a>
              </li>
              <li>
                <a href="#offline-ready" className="hover:text-[#10B981] transition-colors">
                  Offline Ready
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#171923]">Governance</h3>
            <ul className="space-y-2 text-sm sm:text-base text-[#64748B]">
              <li>
                <a href="#how-it-works" className="hover:text-[#6D45D9] transition-colors">
                  Academic Integrity
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openAuth('signup', 'school')}
                  className="hover:text-[#6D45D9] transition-colors text-left cursor-pointer"
                >
                  For Schools
                </button>
              </li>
              <li>
                <a href="#progress" className="hover:text-[#6D45D9] transition-colors">
                  WAEC/NECO Prep
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#64748B]">
          <p>© {new Date().getFullYear()} Pathly Learn Nigeria. All rights reserved.</p>
          <Link href='https://github.com/alaminim'><p>Built by imalamin</p></Link>
        </div>
      </div>
    </footer>
  )
}
