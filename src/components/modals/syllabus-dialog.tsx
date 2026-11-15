'use client';

import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import type { SubjectModel } from '@/types';

interface SyllabusDialogProps {
  open: boolean;
  subject: SubjectModel | null;
  onClose: () => void;
  onStart: () => void;
}

export function SyllabusDialog({
  open,
  subject,
  onClose,
  onStart
}: SyllabusDialogProps): React.JSX.Element {
  return (
    <Dialog open={open} onClose={onClose} labelledBy="syllabus-dialog-title">
      {subject && (
        <div>
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="purple">{subject.classBand}</Badge>
                <Badge variant="emerald">{subject.offlinePackSize}</Badge>
              </div>
              <h3 id="syllabus-dialog-title" className="mt-2.5 text-2xl font-bold text-[#171923]">
                {subject.name} — NERDC Term Syllabus
              </h3>
              <p className="mt-1 text-sm sm:text-base text-[#64748B]">{subject.description}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close syllabus preview"
              className="p-2 rounded-xl text-[#64748B] hover:text-[#171923] hover:bg-[#F8FAFC] border border-[#E2E8F0] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              Term-by-Term Module Breakdown
            </p>
            {subject.syllabus.map((item) => (
              <div
                key={item.code}
                className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#5B35C5] bg-[#EDE7FF] px-2 py-0.5 rounded-md">
                      {item.code}
                    </span>
                    <span className="text-xs font-semibold text-[#64748B]">{item.term}</span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-[#171923]">{item.title}</p>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <span className="text-xs font-medium text-[#64748B]">{item.status}</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white border border-[#E2E8F0] text-[#171923]">
                    {item.scoreLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onStart}>
              Start {subject.name}
            </Button>
          </div>
        </div>
      )}
    </Dialog>
  );
}
