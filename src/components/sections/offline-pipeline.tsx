'use client';

import { useState, type ChangeEvent } from 'react';
import { SlidersHorizontal, Wifi, WifiOff } from 'lucide-react';
import { PipelineIcon } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { OFFLINE_PIPELINE_STEPS, PATHLY_LESSON_KB, VIDEO_LESSON_MB } from '@/data/offline';
import { cn } from '@/lib/utils';

export function OfflinePipeline(): React.JSX.Element {
  const [packCount, setPackCount] = useState<number>(12);
  const [offlineMode, setOfflineMode] = useState<boolean>(true);

  const pathlyMb = (packCount * PATHLY_LESSON_KB) / 1024;
  const videoMb = packCount * VIDEO_LESSON_MB;
  const savedPct = Math.min(99, Math.round((1 - pathlyMb / videoMb) * 100));

  return (
    <section id="offline-ready" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="emerald">
            <WifiOff className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
            <span>Offline Learning Pipeline</span>
          </Badge>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171923]">
            Built to outlast network drops, weak 3G, and expensive data plans.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Pathly caches structured lessons and diagrams directly inside your browser&apos;s local
            storage so learning never stalls when connectivity disappears.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFLINE_PIPELINE_STEPS.map((step) => (
            <Card key={step.stepNumber} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#6D45D9] flex items-center justify-center">
                    <PipelineIcon name={step.iconName} />
                  </div>
                  <Badge variant={step.badgeVariant}>{step.badgeText}</Badge>
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#171923]">
                  {step.stepNumber}. {step.title}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </div>
              <p className="mt-5 pt-3.5 border-t border-[#E2E8F0] text-xs font-mono text-[#64748B]">
                {step.technicalNote}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#6D45D9]">
                <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
                <span>Interactive Offline Data &amp; Storage Calculator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#171923]">
                See how many lessons fit into a tiny data bundle
              </h3>
              <p className="text-sm sm:text-base text-[#64748B]">
                Drag the slider to simulate downloading NERDC topic packs onto a standard student
                phone.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <label htmlFor="lesson-pack-slider" className="text-[#171923]">
                    Cached Topic Lessons:
                  </label>
                  <span className="text-[#6D45D9] font-heading text-lg">{packCount} Lessons</span>
                </div>
                <input
                  id="lesson-pack-slider"
                  type="range"
                  min={4}
                  max={60}
                  step={4}
                  value={packCount}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPackCount(Number(e.target.value))}
                  className="w-full accent-[#6D45D9] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#64748B]">
                  <span>4 lessons (1 Week)</span>
                  <span>32 lessons (1 Term)</span>
                  <span>60 lessons (Full Year)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E2E8F0]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Device Connection Simulation
                </span>
                <button
                  type="button"
                  onClick={() => setOfflineMode((prev) => !prev)}
                  aria-pressed={offlineMode}
                  className={cn(
                    'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer',
                    offlineMode
                      ? 'bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]'
                      : 'bg-[#F0F9FF] text-[#0284C7] border border-[#E0F2FE]'
                  )}
                >
                  {offlineMode ? (
                    <>
                      <WifiOff className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Airplane Mode: Lessons 100% Active</span>
                    </>
                  ) : (
                    <>
                      <Wifi className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Online: Sync + Pally AI Active</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                  <p className="text-xs font-medium text-[#64748B]">Pathly Offline Size</p>
                  <p className="mt-1 font-heading text-2xl font-bold text-[#10B981]">
                    {pathlyMb.toFixed(1)} MB
                  </p>
                  <p className="mt-1 text-xs text-[#64748B]">Text + SVG + Quizzes</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                  <p className="text-xs font-medium text-[#64748B]">Typical Video Equivalent</p>
                  <p className="mt-1 font-heading text-2xl font-bold text-[#64748B] line-through">
                    {videoMb} MB
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#6D45D9]">
                    ~{savedPct}% Mobile Data Saved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
