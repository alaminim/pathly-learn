'use client';

import { motion } from 'motion/react';
import { BookOpen, BrainCircuit, WifiOff } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { fadeUpVariants, staggerContainerVariants } from '@/lib/motion';

export function ValueProps(): React.JSX.Element {
  return (
    <section id="why-pathly" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUpVariants}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[#6D45D9]">
            Why Pathly Learn
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171923]">
            Engineered for Nigerian classrooms, low-bandwidth reality, and deep retention.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          <motion.div variants={fadeUpVariants}>
            <Card className="p-6 sm:p-8 h-full flex flex-col justify-between hover:border-[#6D45D9]/50">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EDE7FF] text-[#6D45D9] flex items-center justify-center">
                  <BookOpen className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#171923]">NERDC-Aligned Curriculum</h3>
                <p className="mt-3 text-base text-[#64748B] leading-relaxed">
                  Every module maps directly to Nigerian JSS1–SS3 scheme of work, BECE, WAEC, and
                  NECO standards—written in clear, structured prose students can re-read at their
                  own pace.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-sm font-semibold text-[#5B35C5]">
                1st, 2nd &amp; 3rd Term Topic Breakdowns
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <Card className="p-6 sm:p-8 h-full flex flex-col justify-between hover:border-[#10B981]/50">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] text-[#10B981] flex items-center justify-center">
                  <WifiOff className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#171923]">Offline-First Architecture</h3>
                <p className="mt-3 text-base text-[#64748B] leading-relaxed">
                  Download complete subject packs in seconds (&lt;200 KB per lesson) and keep
                  studying through power cuts or zero mobile data. Quiz scores save locally and sync
                  automatically later.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-sm font-semibold text-[#047857]">
                Works seamlessly with zero signal
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <Card className="p-6 sm:p-8 h-full flex flex-col justify-between hover:border-[#0284C7]/50">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#171923]">AI Study Companion (Pally)</h3>
                <p className="mt-3 text-base text-[#64748B] leading-relaxed">
                  When online, Pally breaks down tough topics using Socratic hints and WAEC marking
                  tips—never giving away raw exam answers and automatically pausing during graded
                  quizzes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-sm font-semibold text-[#0284C7]">
                Optional online · Disabled in exams
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
