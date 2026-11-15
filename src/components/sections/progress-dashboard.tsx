'use client';

import { useState } from 'react';
import { Award, BarChart3, CheckCircle2, Flame, Layers, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { DIAGNOSTIC_QUESTION } from '@/data/diagnostic';
import { MASTERY_RECORDS } from '@/data/mastery';
import { cn } from '@/lib/utils';

export function ProgressDashboard(): React.JSX.Element {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section id="progress" className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#6D45D9]">
              Progress &amp; Assessment Analytics
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171923]">
              Track WAEC &amp; NECO readiness with transparent mastery insights.
            </h2>
          </div>
          <Badge variant="neutral">
            <BarChart3 className="w-3.5 h-3.5 text-[#6D45D9]" aria-hidden="true" />
            <span>Interactive Student Analytics Preview</span>
          </Badge>
        </div>

        <div className="mt-10 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-5 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#64748B]">WAEC / NECO Readiness Index</span>
                <Award className="w-5 h-5 text-[#6D45D9]" aria-hidden="true" />
              </div>
              <p className="mt-2 font-heading text-3xl font-bold text-[#171923]">84%</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[#10B981]">
                +9% improvement over last 30 days
              </p>
            </Card>

            <Card className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#64748B]">Weekly Study Streak</span>
                <Flame className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />
              </div>
              <p className="mt-2 font-heading text-3xl font-bold text-[#171923]">11 Days</p>
              <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                6 offline sessions synced seamlessly
              </p>
            </Card>

            <Card className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#64748B]">Modules Completed</span>
                <Layers className="w-5 h-5 text-[#0284C7]" aria-hidden="true" />
              </div>
              <p className="mt-2 font-heading text-3xl font-bold text-[#171923]">55 / 78</p>
              <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                Verified without AI quiz assistance
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-6 p-5 sm:p-6 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#171923]">Subject Mastery Bars</h3>
                <span className="text-xs font-medium text-[#64748B]">NERDC SS2–SS3</span>
              </div>

              <div className="space-y-4">
                {MASTERY_RECORDS.map((record) => (
                  <div key={record.subject} className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                      <span className="font-semibold text-[#171923]">{record.subject}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#64748B]">
                          {record.completedModules}/{record.totalModules} modules
                        </span>
                        <span className={cn('px-2 py-0.5 rounded-md text-xs font-semibold', record.pillClass)}>
                          {record.readinessScore}% Mastery
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                      <div
                        className={cn('h-full rounded-full', record.barColorClass)}
                        style={{ width: `${record.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="lg:col-span-6 p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-[#171923]">Diagnostic Quiz Preview</h3>
                  <Badge variant="amber">
                    <Lock className="w-3 h-3" aria-hidden="true" />
                    <span>Pally Disabled</span>
                  </Badge>
                </div>
                <p className="mt-1 text-xs font-semibold text-[#6D45D9]">{DIAGNOSTIC_QUESTION.subject}</p>
                <p className="mt-3 text-sm sm:text-base font-medium text-[#171923]">
                  {DIAGNOSTIC_QUESTION.prompt}
                </p>

                <div className="mt-3.5 space-y-2">
                  {DIAGNOSTIC_QUESTION.options.map((option, idx) => {
                    const picked = selectedIdx === idx;
                    const correct = idx === DIAGNOSTIC_QUESTION.correctIndex;
                    let style = 'bg-[#F8FAFC] border-[#E2E8F0] text-[#171923] hover:border-[#6D45D9]';

                    if (selectedIdx !== null) {
                      if (correct) style = 'bg-[#ECFDF5] border-[#10B981] text-[#047857]';
                      else if (picked) style = 'bg-[#FFFBEB] border-[#F59E0B] text-[#B45309]';
                    }

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedIdx(idx)}
                        className={cn(
                          'w-full text-left px-4 py-2.5 rounded-xl border text-sm font-mono font-medium transition-colors cursor-pointer flex items-center justify-between',
                          style
                        )}
                      >
                        <span>{option}</span>
                        {selectedIdx !== null && correct && (
                          <CheckCircle2 className="w-4 h-4 text-[#10B981]" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedIdx !== null && (
                <div className="p-3.5 rounded-xl bg-[#F7F4FF] border border-[#EDE7FF] text-xs sm:text-sm text-[#171923]">
                  <span className="font-bold text-[#6D45D9]">Instant Feedback: </span>
                  {DIAGNOSTIC_QUESTION.explanation}
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
