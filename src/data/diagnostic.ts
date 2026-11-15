import type { DiagnosticQuizQuestion } from '@/types';

export const DIAGNOSTIC_QUESTION: DiagnosticQuizQuestion = {
  id: 'diag-mth-07',
  subject: 'SS2 Mathematics · Quick Diagnostic Check',
  prompt: 'If (x - 4)(x + 3) = 0, what are the two roots of the quadratic equation?',
  options: ['x = -4  or  x = 3', 'x = 4  or  x = -3', 'x = 4  or  x = 3'],
  correctIndex: 1,
  explanation: 'Setting each factor to zero: x - 4 = 0 gives x = 4, and x + 3 = 0 gives x = -3.'
};
