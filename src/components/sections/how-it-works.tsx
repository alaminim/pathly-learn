'use client';

import { motion } from 'motion/react';
import { Lock, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { fadeUpVariants, staggerContainerVariants } from '@/lib/motion';

const STEPS = [
  {
    step: '01',
    title: 'Pick Your Class & Subject',
    desc: 'Choose JSS1–SS3 topics mapped directly to your Nigerian school term scheme.'
  },
  {
    step: '02',
    title: 'Read & Cache Offline',
    desc: 'Study structured lessons with worked examples. Download once to read anywhere without data.'
  },
  {
    step: '03',
    title: 'Practise With Socratic Hints',
    desc: 'Use Pally AI during study sessions for step-by-step guidance that builds real problem-solving skill.'
  },
  {
    step: '04',
    title: 'Pass Independent Quizzes',
    desc: 'Complete end-of-module assessments with Pally paused so your mastery score is 100% authentic.'
  }
] as const;

export function HowItWorks(): React.JSX.Element {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUpVariants}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[#6D45D9]">
            How Pathly Works
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171923]">
            Four focused steps from reading to verified exam readiness.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STEPS.map((item) => (
            <motion.div key={item.step} variants={fadeUpVariants}>
              <Card className="p-6 h-full">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-[#EDE7FF] text-[#5B35C5] font-heading font-bold text-sm">
                  Step {item.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#171923]">{item.title}</h3>
                <p className="mt-2.5 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
          className="mt-10 bg-white rounded-2xl border-2 border-[#0284C7]/35 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-5"
          role="note"
          aria-label="Academic Integrity Policy"
        >
          <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-7 h-7" aria-hidden="true" />
          </div>
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="text-lg sm:text-xl font-bold text-[#171923]">
                Guided Socratic Hints — Never Direct Exam Answers
              </h3>
              <Badge variant="sky">
                <Lock className="w-3 h-3" aria-hidden="true" />
                <span>Exam-Mode Integrity Lock</span>
              </Badge>
            </div>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Pathly enforces strict academic integrity: Pally coaches students through underlying
              concepts during study mode, and is{' '}
              <strong className="text-[#171923]">
                automatically disabled during active module quizzes and diagnostic tests
              </strong>{' '}
              so teachers, parents, and students can trust every score.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
