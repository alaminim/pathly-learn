'use client';

import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { SubjectIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { SUBJECT_MODELS } from '@/data/subjects';
import { cn } from '@/lib/utils';
import { useModals } from '@/providers/modals-provider';
import type { ClassFilter } from '@/types';

const FILTERS: readonly { id: ClassFilter; label: string }[] = [
  { id: 'ALL', label: `All Levels (${SUBJECT_MODELS.length})` },
  { id: 'JSS', label: 'JSS1–JSS3' },
  { id: 'SS', label: 'SS1–SS3' }
];

export function SubjectExplorer(): React.JSX.Element {
  const { openSyllabus } = useModals();
  const [filter, setFilter] = useState<ClassFilter>('ALL');

  const subjects = useMemo(
    () =>
      SUBJECT_MODELS.filter((s) => (filter === 'ALL' ? true : s.levels.includes(filter))),
    [filter]
  );

  return (
    <section id="subjects" className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#6D45D9]">
              Subject Explorer · JSS1–SS3
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171923]">
              Explore NERDC-aligned subjects &amp; inspect term syllabi.
            </h2>
          </div>

          <div
            className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] self-start"
            role="group"
            aria-label="Filter subjects by class level"
          >
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={cn(
                  'px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer',
                  filter === f.id ? 'bg-[#6D45D9] text-white' : 'text-[#64748B] hover:text-[#171923]'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {subjects.map((subject) => (
            <motion.article
              key={subject.id}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 flex flex-col justify-between hover:border-[#6D45D9] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center',
                      subject.colorBg,
                      subject.colorText
                    )}
                  >
                    <SubjectIcon name={subject.iconName} />
                  </div>
                  <span className={cn('text-xs font-semibold px-3 py-1 rounded-full', subject.badgeBg)}>
                    {subject.classBand}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#171923]">{subject.name}</h3>
                <p className="mt-2 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {subject.description}
                </p>

                <div className="mt-5 bg-white rounded-xl p-4 border border-[#E2E8F0] space-y-2.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-[#64748B] font-medium">{subject.modulesCount} Modules</span>
                    <span className="font-semibold text-[#10B981]">{subject.offlinePackSize}</span>
                  </div>
                  <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#6D45D9] rounded-full"
                      style={{ width: `${subject.sampleProgress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full hover:bg-[#F7F4FF] hover:text-[#6D45D9] hover:border-[#6D45D9]"
                  onClick={() => openSyllabus(subject)}
                >
                  <span>Preview Term Syllabus</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
