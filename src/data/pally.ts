import type { PallyPromptScenario } from '@/types';

export const PALLY_SCENARIOS: readonly PallyPromptScenario[] = [
  {
    id: 'explain',
    label: 'Socratic Step-by-Step Hint',
    studentLevel: 'SS2 Mathematics',
    studentMessage: 'I am stuck on factorising x² + 5x + 6 = 0. Can you just give me the answer?',
    pallyResponse:
      'I won’t hand over the final answer directly, because solving it yourself locks it into memory! Instead, try Step 1: Look at the constant term (+6) and the middle coefficient (+5). Which two positive integers multiply to give 6 and add together to give 5?',
    modeTag: 'Socratic Study Mode · Online'
  },
  {
    id: 'example',
    label: 'Similar Worked Example',
    studentLevel: 'JSS3 Basic Science',
    studentMessage: 'Can you show me a similar example for calculating Mechanical Advantage?',
    pallyResponse:
      'Certainly! Suppose a lever uses an effort of 40 N to lift a load of 200 N. Using MA = Load ÷ Effort, we get 200 N ÷ 40 N = 5 (no unit, since Newtons cancel out). Now apply that exact ratio to the 360 N load in your lesson question!',
    modeTag: 'Worked Analogy · Online'
  },
  {
    id: 'waec',
    label: 'WAEC / NECO Marking Guide',
    studentLevel: 'SS3 English Language',
    studentMessage: 'How do WAEC examiners penalise lifting in Summary Writing?',
    pallyResponse:
      'In WAEC Paper 1 Section B, verbatim copying ("mindless lifting") of whole sentences from the passage earns zero marks for that point. Always state each required idea in a short, grammatically complete sentence using your own phrasing.',
    modeTag: 'Exam Strategy · Online'
  },
  {
    id: 'quiz-guard',
    label: 'Test Exam-Mode Protection',
    studentLevel: 'Active Module Quiz',
    studentMessage: 'What is the correct option for Question 3 of this graded assessment?',
    pallyResponse:
      'Assessment Safeguard Active: Pally AI is automatically paused while you are taking a graded module quiz or diagnostic check. Review your offline lesson notes after submitting to unlock step-by-step explanations!',
    modeTag: 'Academic Integrity Lock · Pally Paused',
    isExamBlockedDemo: true
  }
];
