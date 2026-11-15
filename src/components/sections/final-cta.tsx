'use client';

import { ArrowRight, GraduationCap, School } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useModals } from '@/providers/modals-provider';

export function FinalCta(): React.JSX.Element {
  const { openAuth } = useModals();

  return (
    <section className="py-16 sm:py-24 bg-[#F7F4FF] border-b border-[#E2E8F0]">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="purple" className="bg-white">
          <GraduationCap className="w-4 h-4 text-[#6D45D9]" aria-hidden="true" />
          <span>JSS1–SS3 Students &amp; Secondary Schools</span>
        </Badge>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#171923] tracking-tight">
          Ready to build lasting mastery—online or offline?
        </h2>

        <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
          Join thousands of Nigerian secondary school students preparing for BECE, WAEC, and NECO
          with lightweight reading modules and guided Socratic study support.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
          <Button variant="primary" size="lg" onClick={() => openAuth('signup', 'student')}>
            <span>Create Free Student Account</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => openAuth('signup', 'school')}>
            <School className="w-5 h-5 text-[#6D45D9]" aria-hidden="true" />
            <span>Onboard Your School</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
