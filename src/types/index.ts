export type HeroSubjectId = 'mathematics' | 'english' | 'computer';

export type ExplorerSubjectId =
  | 'mathematics'
  | 'english'
  | 'basic-science'
  | 'civic-studies'
  | 'computer';

export type ClassBand = 'JSS1–JSS3' | 'SS1–SS3' | 'JSS1–SS3' | 'JSS1–SS3 & SS1–SS3';

export type ClassLevel = 'JSS' | 'SS';

export type ClassFilter = 'ALL' | ClassLevel;

export type SyllabusModuleStatus = 'Completed' | 'In Progress' | 'Offline Cached';

export interface SampleLesson {
  readonly title: string;
  readonly topic: string;
  readonly classTag: string;
  readonly readTime: string;
  readonly summary: string;
  readonly formulaMain: string;
  readonly formulaExample: string;
  readonly keyTakeaway: string;
  readonly pallyPrompt: string;
  readonly pallyHint: string;
}

export interface SyllabusTermItem {
  readonly code: string;
  readonly term: '1st Term' | '2nd Term' | '3rd Term';
  readonly title: string;
  readonly status: SyllabusModuleStatus;
  readonly scoreLabel: string;
}

export type SubjectIconName = 'calculator' | 'languages' | 'flask' | 'landmark' | 'cpu';

export interface SubjectModel {
  readonly id: ExplorerSubjectId;
  readonly name: string;
  readonly classBand: ClassBand;
  /** Which class levels this subject covers; drives the explorer filter. */
  readonly levels: readonly ClassLevel[];
  readonly iconName: SubjectIconName;
  readonly colorBg: string;
  readonly colorText: string;
  readonly badgeBg: string;
  readonly description: string;
  readonly modulesCount: number;
  readonly offlinePackSize: string;
  readonly sampleProgress: number;
  readonly sampleLesson: SampleLesson;
  readonly syllabus: readonly SyllabusTermItem[];
}

export type PallyPromptCategory = 'explain' | 'example' | 'waec' | 'quiz-guard';

export interface PallyPromptScenario {
  readonly id: PallyPromptCategory;
  readonly label: string;
  readonly studentLevel: string;
  readonly studentMessage: string;
  readonly pallyResponse: string;
  readonly modeTag: string;
  readonly isExamBlockedDemo?: boolean;
}

export type PipelineIconName = 'wifi' | 'download' | 'hard-drive' | 'refresh';

export interface OfflinePipelineStep {
  readonly stepNumber: 1 | 2 | 3 | 4;
  readonly title: string;
  readonly badgeText: string;
  readonly badgeVariant: 'purple' | 'emerald' | 'sky';
  readonly description: string;
  readonly technicalNote: string;
  readonly iconName: PipelineIconName;
}

export interface SubjectMasteryRecord {
  readonly subject: string;
  readonly level: string;
  readonly completedModules: number;
  readonly totalModules: number;
  readonly percentage: number;
  readonly readinessScore: number;
  readonly barColorClass: string;
  readonly pillClass: string;
}

export interface DiagnosticQuizQuestion {
  readonly id: string;
  readonly subject: string;
  readonly prompt: string;
  readonly options: readonly string[];
  readonly correctIndex: number;
  readonly explanation: string;
}

export type AuthMode = 'signin' | 'signup';
export type AuthRole = 'student' | 'school';

export type AuthModalState =
  | { readonly isOpen: false }
  | {
      readonly isOpen: true;
      readonly mode: AuthMode;
      readonly role: AuthRole;
    };
