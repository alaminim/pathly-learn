'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BrainCircuit, Lock, Sparkles, Wifi } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PALLY_SCENARIOS } from '@/data/pally';
import { cn } from '@/lib/utils';
import type { PallyPromptCategory, PallyPromptScenario } from '@/types';

export function MeetPally(): React.JSX.Element {
  const [activeId, setActiveId] = useState<PallyPromptCategory>('explain');
  const scenario: PallyPromptScenario =
    PALLY_SCENARIOS.find((p) => p.id === activeId) ?? PALLY_SCENARIOS[0];
  const blocked = Boolean(scenario.isExamBlockedDemo);

  return (
    <section id="meet-pally" className="py-16 sm:py-20 bg-[#F0F9FF] border-b border-[#E0F2FE]">
      <div className="max-w-\[1280px\] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <Badge variant="sky" className="bg-white">
              <BrainCircuit className="w-4 h-4 text-[#0284C7]" aria-hidden="true" />
              <span>Meet Pally · Socratic AI Tutor</span>
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171923]">
              Your study buddy that teaches you how to think.
            </h2>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              Whenever you have internet access, Pally answers questions in context of your current
              NERDC lesson—offering worked analogies, WAEC marking advice, and step-by-step nudges.
            </p>

            <div className="bg-white rounded-xl border border-[#E0F2FE] p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0284C7]">
                <Wifi className="w-4 h-4" aria-hidden="true" />
                <span>Optional when online · Pauses gracefully offline</span>
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Test the interactive prompt pills to see how Pally refuses shortcut cheating and
                blocks assistance during active quizzes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E0F2FE] p-4 sm:p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center">
                    <BrainCircuit className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-base text-[#171923]">
                      Pally Interactive Sandbox
                    </p>
                    <p className="text-xs text-[#64748B]">{scenario.studentLevel}</p>
                  </div>
                </div>

                <Badge variant={blocked ? 'amber' : 'sky'}>
                  {blocked ? (
                    <Lock className="w-3 h-3" aria-hidden="true" />
                  ) : (
                    <Sparkles className="w-3 h-3" aria-hidden="true" />
                  )}
                  <span>{scenario.modeTag}</span>
                </Badge>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2.5">
                  Select a student scenario:
                </p>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Pally scenarios">
                  {PALLY_SCENARIOS.map((s) => {
                    const selected = s.id === activeId;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setActiveId(s.id)}
                        aria-pressed={selected}
                        className={cn(
                          'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]',
                          selected
                            ? 'bg-[#0284C7] text-white'
                            : 'bg-[#F8FAFC] text-[#171923] border border-[#E2E8F0] hover:border-[#0284C7] hover:text-[#0284C7]'
                        )}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={scenario.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mt-5 space-y-4"
                  aria-live="polite"
                >
                  <div className="flex justify-end">
                    <div className="max-w-md bg-[#6D45D9] text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm sm:text-base leading-relaxed">
                      {scenario.studentMessage}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1',
                        blocked ? 'bg-[#FFFBEB] text-[#F59E0B]' : 'bg-[#E0F2FE] text-[#0284C7]'
                      )}
                    >
                      {blocked ? (
                        <Lock className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Sparkles className="w-4 h-4" aria-hidden="true" />
                      )}
                    </div>
                    <div
                      className={cn(
                        'flex-1 rounded-2xl rounded-tl-sm p-4 border space-y-1.5',
                        blocked ? 'bg-[#FFFBEB]/60 border-[#FDE68A]' : 'bg-[#F8FAFC] border-[#E2E8F0]'
                      )}
                    >
                      <span
                        className={cn('text-xs font-bold', blocked ? 'text-[#B45309]' : 'text-[#0284C7]')}
                      >
                        {blocked ? 'Pathly Exam Guard' : 'Pally AI'}
                      </span>
                      <p className="text-sm sm:text-base text-[#171923] leading-relaxed">
                        {scenario.pallyResponse}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
