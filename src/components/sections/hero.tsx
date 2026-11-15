'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  WifiOff
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs } from '@/components/ui/tabs';
import { HERO_SUBJECT_TABS, SUBJECT_MODELS } from '@/data/subjects';
import { fadeUpVariants, staggerContainerVariants } from '@/lib/motion';
import { useModals } from '@/providers/modals-provider';
import type { HeroSubjectId, SubjectModel } from '@/types';

export function Hero(): React.JSX.Element {
  const { openAuth } = useModals();
  const [subjectId, setSubjectId] = useState<HeroSubjectId>('mathematics');
  const [pallyOpen, setPallyOpen] = useState<boolean>(false);

  const subject: SubjectModel = SUBJECT_MODELS.find((s) => s.id === subjectId) ?? SUBJECT_MODELS[0];

  return (
    <section
      id="top"
      className="bg-white border-b border-[#E2E8F0] py-12 sm:py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="lg:col-span-6 space-y-6"
          >
            <motion.div variants={fadeUpVariants}>
              <Badge variant="purple" className="px-3.5 py-1.5 tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#6D45D9]" aria-hidden="true" />
                <span>BUILT FOR NIGERIAN SECONDARY SCHOOLS • JSS1 – SS3</span>
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#171923] tracking-tight"
            >
              Master Every Subject, Even Without Internet.
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-lg text-[#64748B] leading-[1.65] max-w-xl"
            >
              Reading-first, NERDC-aligned lessons that download in seconds (&lt;200 KB) and work
              completely offline. Practise with independent quizzes and get guided Socratic hints
              from Pally AI whenever you&apos;re online.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <Button variant="primary" size="lg" onClick={() => openAuth('signup', 'student')}>
                <span>Start Learning Free</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#171923] bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl transition-colors"
              >
                <span>Explore How It Works</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#64748B]"
            >
              <span className="inline-flex items-center gap-1.5 font-medium text-[#171923]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" aria-hidden="true" />
                NERDC, WAEC &amp; NECO Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-[#171923]">
                <WifiOff className="w-4 h-4 text-[#6D45D9]" aria-hidden="true" />
                95% Less Data Than Video
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-[#171923]">
                <ShieldCheck className="w-4 h-4 text-[#0284C7]" aria-hidden="true" />
                Zero-Cheating Exam Guard
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div
              className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 shadow-sm"
              aria-label="Interactive Student Dashboard UI Mockup"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EDE7FF] text-[#5B35C5] font-heading font-bold text-sm flex items-center justify-center border border-[#6D45D9]/20">
                    AO
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-[#171923]">
                      Adebayo Oluwaseun · SS2
                    </p>
                    <p className="text-xs text-[#64748B]">
                      Local Storage Synced · Lagos State Model Curriculum
                    </p>
                  </div>
                </div>
                <Badge variant="emerald">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>Offline Ready</span>
                </Badge>
              </div>

              <div className="mt-4">
                <Tabs<HeroSubjectId>
                  ariaLabel="Select Hero Dashboard Subject"
                  activeId={subjectId}
                  onChange={(id) => {
                    setSubjectId(id);
                    setPallyOpen(false);
                  }}
                  items={HERO_SUBJECT_TABS}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6D45D9] bg-[#F7F4FF] px-2.5 py-1 rounded-md">
                      {subject.sampleLesson.topic}
                    </span>
                    <span className="text-xs text-[#64748B] inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {subject.sampleLesson.readTime}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#171923]">
                      {subject.sampleLesson.title}
                    </h2>
                    <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                      {subject.sampleLesson.summary}
                    </p>
                  </div>

                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-medium text-[#64748B]">
                      <span>Core Principle</span>
                      <span className="text-[#10B981] font-semibold">Saved on Device</span>
                    </div>
                    <p className="font-mono text-sm sm:text-base font-semibold text-[#171923] bg-white px-3 py-2 rounded-lg border border-[#E2E8F0]">
                      {subject.sampleLesson.formulaMain}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm pt-1">
                      <span className="font-mono text-[#5B35C5] font-medium">
                        {subject.sampleLesson.formulaExample}
                      </span>
                      <span className="font-semibold text-[#171923] bg-[#EDE7FF] px-2.5 py-0.5 rounded-md">
                        {subject.sampleLesson.keyTakeaway}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                      <span className="font-medium text-[#171923]">{subject.name} Term Progress</span>
                      <span className="font-semibold text-[#6D45D9]">
                        {subject.sampleProgress}% Complete
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-[#EDE7FF] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${subject.sampleProgress}%` }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="h-full bg-[#6D45D9] rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 bg-[#F0F9FF] border border-[#E0F2FE] rounded-xl p-3.5 sm:p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                      <BrainCircuit className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wide text-[#0284C7]">
                          Pally AI Companion
                        </span>
                        <span className="text-[11px] font-medium text-[#0369A1] bg-white px-2 py-0.5 rounded-full border border-[#E0F2FE]">
                          Socratic Hint
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#171923] font-medium mt-0.5">
                        {subject.sampleLesson.pallyPrompt}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="sky"
                    size="sm"
                    className="shrink-0"
                    aria-expanded={pallyOpen}
                    onClick={() => setPallyOpen((prev) => !prev)}
                  >
                    {pallyOpen ? 'Hide Hint' : 'Ask Pally'}
                  </Button>
                </div>

                <AnimatePresence>
                  {pallyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-[#E0F2FE] text-xs sm:text-sm text-[#171923] bg-white rounded-lg p-3 leading-relaxed">
                        <span className="font-semibold text-[#0284C7]">Pally Nudge: </span>
                        {subject.sampleLesson.pallyHint}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
