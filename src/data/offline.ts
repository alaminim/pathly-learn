import type { OfflinePipelineStep } from '@/types';

export const OFFLINE_PIPELINE_STEPS: readonly OfflinePipelineStep[] = [
  {
    stepNumber: 1,
    title: 'Connect & Sync Once',
    badgeText: 'Brief Data Window',
    badgeVariant: 'purple',
    description:
      'Sign in on any Android phone, tablet, or school Chromebook using a brief 3G/4G connection.',
    technicalNote: 'Initial shell < 450 KB',
    iconName: 'wifi'
  },
  {
    stepNumber: 2,
    title: 'Download Topic Packs',
    badgeText: '< 200 KB / Lesson',
    badgeVariant: 'sky',
    description:
      'Save entire NERDC term modules in seconds. Text-first formatting uses 95% less data than video.',
    technicalNote: 'Compressed JSON + SVG diagrams',
    iconName: 'download'
  },
  {
    stepNumber: 3,
    title: 'Study Anywhere Offline',
    badgeText: 'Zero Signal Required',
    badgeVariant: 'emerald',
    description:
      'Read lessons, work through examples, and complete module quizzes with airplane mode turned on.',
    technicalNote: 'Local IndexedDB persistence',
    iconName: 'hard-drive'
  },
  {
    stepNumber: 4,
    title: 'Auto-Sync Progress',
    badgeText: 'Conflict-Free Sync',
    badgeVariant: 'purple',
    description:
      'Whenever connectivity returns, completed quizzes and mastery scores sync automatically to your profile.',
    technicalNote: 'Background queue reconciliation',
    iconName: 'refresh'
  }
];

/** Average size of one Pathly lesson pack, in KB. */
export const PATHLY_LESSON_KB = 135;
/** Typical size of an equivalent video lesson, in MB. */
export const VIDEO_LESSON_MB = 48;
