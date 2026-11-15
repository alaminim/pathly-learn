import type { SubjectMasteryRecord } from '@/types';

export const MASTERY_RECORDS: readonly SubjectMasteryRecord[] = [
  {
    subject: 'English Language',
    level: 'SS2–SS3 Track',
    completedModules: 15,
    totalModules: 18,
    percentage: 84,
    readinessScore: 89,
    barColorClass: 'bg-[#0284C7]',
    pillClass: 'bg-[#F0F9FF] text-[#0284C7]'
  },
  {
    subject: 'Civic & Social Studies',
    level: 'SS2 Track',
    completedModules: 12,
    totalModules: 16,
    percentage: 78,
    readinessScore: 86,
    barColorClass: 'bg-[#10B981]',
    pillClass: 'bg-[#ECFDF5] text-[#047857]'
  },
  {
    subject: 'Mathematics',
    level: 'SS2 Track',
    completedModules: 17,
    totalModules: 24,
    percentage: 72,
    readinessScore: 82,
    barColorClass: 'bg-[#6D45D9]',
    pillClass: 'bg-[#F7F4FF] text-[#5B35C5]'
  },
  {
    subject: 'Computer Studies',
    level: 'SS2 Track',
    completedModules: 11,
    totalModules: 20,
    percentage: 56,
    readinessScore: 79,
    barColorClass: 'bg-[#0EA5E9]',
    pillClass: 'bg-[#E0F2FE] text-[#0369A1]'
  }
];
