import type { SubjectModel } from '@/types';

export const SUBJECT_MODELS: readonly SubjectModel[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    classBand: 'JSS1–SS3 & SS1–SS3',
    levels: ['JSS', 'SS'],
    iconName: 'calculator',
    colorBg: 'bg-[#EDE7FF]',
    colorText: 'text-[#6D45D9]',
    badgeBg: 'bg-[#F7F4FF] text-[#5B35C5]',
    description:
      'Number & Numeration, Algebraic Processes, Mensuration, Circle Geometry & Introductory Calculus.',
    modulesCount: 24,
    offlinePackSize: '3.2 MB full pack (135 KB/lesson)',
    sampleProgress: 72,
    sampleLesson: {
      title: 'Quadratic Equations: Factorisation Method',
      topic: 'Algebraic Processes · SS2 Module 07',
      classTag: 'NERDC SS2',
      readTime: '6 min read · 128 KB',
      summary:
        'A quadratic equation takes the standard form ax² + bx + c = 0 where a ≠ 0. To solve by factorisation, find two integers whose product equals ac and whose sum equals b.',
      formulaMain: 'ax² + bx + c = 0',
      formulaExample: 'x² + 5x + 6 = 0  ⇒  (x + 2)(x + 3) = 0',
      keyTakeaway: 'Roots: x = -2  or  x = -3',
      pallyPrompt: 'Stuck on splitting the middle term? Ask Pally for a Socratic nudge.',
      pallyHint:
        'List factor pairs of +6: (1, 6) and (2, 3). Which pair adds up to +5? Use those two numbers to split 5x into 2x + 3x, then factor by grouping.'
    },
    syllabus: [
      {
        code: 'MTH-J3',
        term: '1st Term',
        title: 'Binary Numbers, Compound Interest & Variation',
        status: 'Completed',
        scoreLabel: '92%'
      },
      {
        code: 'MTH-S1',
        term: '2nd Term',
        title: 'Indices, Logarithms & Set Theory',
        status: 'Completed',
        scoreLabel: '88%'
      },
      {
        code: 'MTH-S2',
        term: '2nd Term',
        title: 'Quadratic Equations & Simultaneous Linear-Quadratic Systems',
        status: 'In Progress',
        scoreLabel: 'Active'
      },
      {
        code: 'MTH-S3',
        term: '3rd Term',
        title: 'Circle Theorems, Bearings & Trigonometric Graphs',
        status: 'Offline Cached',
        scoreLabel: '140 KB'
      }
    ]
  },
  {
    id: 'english',
    name: 'English Language',
    classBand: 'JSS1–SS3 & SS1–SS3',
    levels: ['JSS', 'SS'],
    iconName: 'languages',
    colorBg: 'bg-[#E0F2FE]',
    colorText: 'text-[#0284C7]',
    badgeBg: 'bg-[#F0F9FF] text-[#0369A1]',
    description:
      'Reading Comprehension, Summary Writing, Essay Structure, Lexis & Structure, and Oral English.',
    modulesCount: 18,
    offlinePackSize: '2.1 MB full pack (115 KB/lesson)',
    sampleProgress: 84,
    sampleLesson: {
      title: 'Structuring Argumentative Essays for WAEC & NECO',
      topic: 'Continuous Writing · SS3 Module 11',
      classTag: 'NERDC SS3',
      readTime: '5 min read · 112 KB',
      summary:
        'A high-scoring argumentative essay opens with a clear vocative and thesis statement, develops three evidence-backed body paragraphs, and refutes the opposing viewpoint.',
      formulaMain: 'Vocative + Thesis + 3 Pillars + Rebuttal',
      formulaExample: 'Topic Sentence → Illustration → Warrant',
      keyTakeaway: 'Target: 450 words · Formal Register',
      pallyPrompt: 'Want to test your thesis statement before writing?',
      pallyHint:
        'Avoid saying "I agree with both sides." Pick one clear position in your opening paragraph, then dedicate Paragraph 4 to dismantling the strongest counter-argument.'
    },
    syllabus: [
      {
        code: 'ENG-J2',
        term: '1st Term',
        title: 'Parts of Speech, Tense Consistency & Direct/Indirect Speech',
        status: 'Completed',
        scoreLabel: '95%'
      },
      {
        code: 'ENG-S1',
        term: '2nd Term',
        title: 'Summary Writing: Extracting Topic Sentences Without Lifting',
        status: 'Completed',
        scoreLabel: '86%'
      },
      {
        code: 'ENG-S3',
        term: '2nd Term',
        title: 'Structuring Argumentative & Expository Essays for WAEC',
        status: 'In Progress',
        scoreLabel: 'Active'
      },
      {
        code: 'ENG-OR',
        term: '3rd Term',
        title: 'Oral English: Vowel Contrasts, Stress & Emphatic Intonation',
        status: 'Offline Cached',
        scoreLabel: '118 KB'
      }
    ]
  },
  {
    id: 'computer',
    name: 'Computer Studies',
    classBand: 'JSS1–SS3 & SS1–SS3',
    levels: ['JSS', 'SS'],
    iconName: 'cpu',
    colorBg: 'bg-[#F0F9FF]',
    colorText: 'text-[#0369A1]',
    badgeBg: 'bg-[#E0F2FE] text-[#0369A1]',
    description:
      'Data Processing, Algorithms & Flowcharts, Boolean Logic Gates, Networking & Database Systems.',
    modulesCount: 20,
    offlinePackSize: '2.6 MB full pack (130 KB/lesson)',
    sampleProgress: 56,
    sampleLesson: {
      title: 'Boolean Logic Gates & Truth Tables',
      topic: 'Digital Logic · SS2 Module 09',
      classTag: 'NERDC SS2',
      readTime: '7 min read · 132 KB',
      summary:
        'Logic gates process binary inputs (0 or 1). An AND gate outputs 1 only when every input is 1, while an OR gate outputs 1 whenever at least one input is 1.',
      formulaMain: 'Y = A · B  (AND)   |   Y = A + B  (OR)',
      formulaExample: 'Inputs (A=1, B=0)  ⇒  AND = 0, OR = 1',
      keyTakeaway: 'NAND & NOR are Universal Gates',
      pallyPrompt: 'Unsure how a NAND gate differs from AND?',
      pallyHint:
        'First compute the standard AND output (1 only if both inputs are 1), then invert the result (0 becomes 1, and 1 becomes 0). That inversion is what the "N" in NAND stands for!'
    },
    syllabus: [
      {
        code: 'CMP-J1',
        term: '1st Term',
        title: 'Generations of Computers, Input/Output Devices & Booting',
        status: 'Completed',
        scoreLabel: '91%'
      },
      {
        code: 'CMP-S1',
        term: '2nd Term',
        title: 'Number Base Conversions (Binary, Octal & Hexadecimal)',
        status: 'Completed',
        scoreLabel: '83%'
      },
      {
        code: 'CMP-S2',
        term: '2nd Term',
        title: 'Boolean Logic Gates, Truth Tables & Flowcharts',
        status: 'In Progress',
        scoreLabel: 'Active'
      },
      {
        code: 'CMP-S3',
        term: '3rd Term',
        title: 'Networking Topologies, OSI Model & Relational SQL Basics',
        status: 'Offline Cached',
        scoreLabel: '134 KB'
      }
    ]
  },
  {
    id: 'basic-science',
    name: 'Basic Science & Technology',
    classBand: 'JSS1–JSS3',
    levels: ['JSS'],
    iconName: 'flask',
    colorBg: 'bg-[#ECFDF5]',
    colorText: 'text-[#047857]',
    badgeBg: 'bg-[#ECFDF5] text-[#047857]',
    description:
      'Matter & Energy, Living Organisms, Simple Machines, Earth & Space, and Basic Technology Workshop.',
    modulesCount: 22,
    offlinePackSize: '2.9 MB full pack (132 KB/lesson)',
    sampleProgress: 64,
    sampleLesson: {
      title: 'Work, Energy & Power in Simple Machines',
      topic: 'Physical Sciences · JSS3 Module 08',
      classTag: 'NERDC JSS3',
      readTime: '6 min read · 130 KB',
      summary:
        'Work is done when a force moves an object through a distance in the direction of the force (W = F × d). Mechanical Advantage compares load lifted to effort applied.',
      formulaMain: 'Work (J) = Force (N) × Distance (m)',
      formulaExample: 'F = 50 N, d = 4 m  ⇒  Work = 200 Joules',
      keyTakeaway: 'Efficiency = (MA ÷ VR) × 100%',
      pallyPrompt: 'Need help distinguishing Mechanical Advantage from Velocity Ratio?',
      pallyHint:
        'Mechanical Advantage depends on forces (Load ÷ Effort), whereas Velocity Ratio depends strictly on geometry/distances moved by effort and load.'
    },
    syllabus: [
      {
        code: 'BSC-J1',
        term: '1st Term',
        title: 'Characteristics of Living Things & Classification of Matter',
        status: 'Completed',
        scoreLabel: '90%'
      },
      {
        code: 'BSC-J2',
        term: '2nd Term',
        title: 'Thermal Energy, Heat Transfer & Chemical Symbols',
        status: 'Completed',
        scoreLabel: '85%'
      },
      {
        code: 'BSC-J3',
        term: '2nd Term',
        title: 'Work, Energy, Power & Simple Machines (Levers & Pulleys)',
        status: 'In Progress',
        scoreLabel: 'Active'
      },
      {
        code: 'BSC-J3B',
        term: '3rd Term',
        title: 'Magnetism, Radioactivity Basics & Environmental Conservation',
        status: 'Offline Cached',
        scoreLabel: '129 KB'
      }
    ]
  },
  {
    id: 'civic-studies',
    name: 'Civic & Social Studies',
    classBand: 'JSS1–SS3',
    levels: ['JSS', 'SS'],
    iconName: 'landmark',
    colorBg: 'bg-[#FFFBEB]',
    colorText: 'text-[#B45309]',
    badgeBg: 'bg-[#FFFBEB] text-[#B45309]',
    description:
      'Nigerian Constitution, Rule of Law, Human Rights, Democracy, National Values & Traffic Regulations.',
    modulesCount: 16,
    offlinePackSize: '1.9 MB full pack (118 KB/lesson)',
    sampleProgress: 78,
    sampleLesson: {
      title: 'Pillars of Democracy & The Rule of Law',
      topic: 'Citizenship Education · SS2 Module 05',
      classTag: 'NERDC SS2',
      readTime: '5 min read · 116 KB',
      summary:
        'Formulated by A.V. Dicey, the Rule of Law establishes supremacy of the regular law, equality of all citizens before the law, and protection of fundamental human rights.',
      formulaMain: 'Supremacy + Equality + Fundamental Rights',
      formulaExample: '1999 Constitution (Chapter IV) guarantees civil liberties',
      keyTakeaway: 'Independent Judiciary safeguards the Rule of Law',
      pallyPrompt: 'Ask Pally how separation of powers prevents abuse of authority.',
      pallyHint:
        'Think about the three arms of government: Legislature makes laws, Executive implements them, and Judiciary interprets them so no single arm holds unchecked power.'
    },
    syllabus: [
      {
        code: 'CIV-J2',
        term: '1st Term',
        title: 'National Values: Integrity, Contentment & Discipline',
        status: 'Completed',
        scoreLabel: '94%'
      },
      {
        code: 'CIV-S1',
        term: '2nd Term',
        title: 'Arms of Government & Federalism in Nigeria',
        status: 'Completed',
        scoreLabel: '89%'
      },
      {
        code: 'CIV-S2',
        term: '2nd Term',
        title: 'Pillars of Democracy, Rule of Law & Civil Society',
        status: 'In Progress',
        scoreLabel: 'Active'
      },
      {
        code: 'CIV-S3',
        term: '3rd Term',
        title: 'Public Service Accountability & Human Trafficking Prevention',
        status: 'Offline Cached',
        scoreLabel: '115 KB'
      }
    ]
  }
];

export const HERO_SUBJECT_TABS = [
  { id: 'mathematics', label: 'Mathematics' },
  { id: 'english', label: 'English Language' },
  { id: 'computer', label: 'Computer Studies' }
] as const;
