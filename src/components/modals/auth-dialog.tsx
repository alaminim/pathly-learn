'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { BrainCircuit, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { Tabs } from '@/components/ui/tabs';
import type { AuthModalState, AuthRole } from '@/types';

interface AuthDialogProps {
  state: AuthModalState;
  onChange: (next: AuthModalState) => void;
  onClose: () => void;
}

const INPUT_CLASS =
  'w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm sm:text-base text-[#171923] focus:outline-none focus:ring-2 focus:ring-[#6D45D9]';

export function AuthDialog({ state, onChange, onClose }: AuthDialogProps): React.JSX.Element {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('');
  const [studentClass, setStudentClass] = useState<string>('SS2');
  const [schoolName, setSchoolName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = (): void => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={state.isOpen} onClose={handleClose} labelledBy="auth-dialog-title" maxWidthClass="max-w-md">
      {state.isOpen && (
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#F7F4FF] border border-[#EDE7FF] text-[#6D45D9]">
                <BrainCircuit className="w-5 h-5" aria-hidden="true" />
              </span>
              <h3 id="auth-dialog-title" className="text-xl font-bold text-[#171923]">
                {state.mode === 'signup' ? 'Get Started on Pathly' : 'Sign In to Pathly'}
              </h3>
            </div>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close account modal"
              className="p-2 rounded-xl text-[#64748B] hover:text-[#171923] hover:bg-[#F8FAFC] border border-[#E2E8F0] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4">
            <Tabs<AuthRole>
              ariaLabel="Select Account Role"
              activeId={state.role}
              onChange={(role) => {
                setSubmitted(false);
                onChange({ isOpen: true, mode: state.mode, role });
              }}
              items={[
                { id: 'student', label: 'Student (JSS1–SS3)' },
                { id: 'school', label: 'School / Teacher' }
              ]}
            />
          </div>

          {submitted ? (
            <div className="mt-6 space-y-4 text-center py-3">
              <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-bold text-[#171923]">
                {state.role === 'student'
                  ? `${studentClass} Offline Workspace Activated!`
                  : 'School Pilot Request Received!'}
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {state.role === 'student'
                  ? 'Lightweight NERDC topic packs (<200 KB/lesson) are ready to cache on your device.'
                  : `Our Lagos academic onboarding team will send teacher dashboard credentials to ${contactEmail || 'your school email'}.`}
              </p>
              <Button variant="primary" className="w-full" onClick={handleClose}>
                Back to Pathly Learn
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {state.mode === 'signup' && state.role === 'student' && (
                <>
                  <div>
                    <label
                      htmlFor="onboarding-student-name"
                      className="block text-sm font-semibold text-[#171923] mb-1.5"
                    >
                      Student Full Name
                    </label>
                    <input
                      id="onboarding-student-name"
                      type="text"
                      required
                      placeholder="e.g., Chisom Eze"
                      value={studentName}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setStudentName(e.target.value)}
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="onboarding-class-select"
                      className="block text-sm font-semibold text-[#171923] mb-1.5"
                    >
                      Current Class (NERDC Track)
                    </label>
                    <select
                      id="onboarding-class-select"
                      value={studentClass}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => setStudentClass(e.target.value)}
                      className={`${INPUT_CLASS} bg-white`}
                    >
                      <option value="JSS1">Junior Secondary 1 (JSS1)</option>
                      <option value="JSS2">Junior Secondary 2 (JSS2)</option>
                      <option value="JSS3">Junior Secondary 3 (JSS3 · BECE)</option>
                      <option value="SS1">Senior Secondary 1 (SS1)</option>
                      <option value="SS2">Senior Secondary 2 (SS2)</option>
                      <option value="SS3">Senior Secondary 3 (SS3 · WAEC/NECO)</option>
                    </select>
                  </div>
                </>
              )}

              {state.role === 'school' && (
                <div>
                  <label
                    htmlFor="onboarding-school-name"
                    className="block text-sm font-semibold text-[#171923] mb-1.5"
                  >
                    Secondary School Name &amp; State
                  </label>
                  <input
                    id="onboarding-school-name"
                    type="text"
                    required
                    placeholder="e.g., Queens College, Lagos"
                    value={schoolName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSchoolName(e.target.value)}
                    className={INPUT_CLASS}
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="onboarding-email"
                  className="block text-sm font-semibold text-[#171923] mb-1.5"
                >
                  {state.role === 'student' ? 'Email Address or Student ID' : 'Official School / Teacher Email'}
                </label>
                <input
                  id="onboarding-email"
                  type="text"
                  required
                  placeholder={state.role === 'student' ? 'student@pathlylearn.ng' : 'principal@school.edu.ng'}
                  value={contactEmail}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setContactEmail(e.target.value)}
                  className={INPUT_CLASS}
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                {state.mode === 'signup'
                  ? state.role === 'student'
                    ? 'Start Learning Free'
                    : 'Request School Access'
                  : 'Continue to Workspace'}
              </Button>

              <p className="text-center text-sm text-[#64748B] pt-1">
                {state.mode === 'signup' ? (
                  <>
                    Already registered?{' '}
                    <button
                      type="button"
                      onClick={() => onChange({ isOpen: true, mode: 'signin', role: state.role })}
                      className="font-semibold text-[#6D45D9] hover:underline cursor-pointer"
                    >
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    Need an account?{' '}
                    <button
                      type="button"
                      onClick={() => onChange({ isOpen: true, mode: 'signup', role: state.role })}
                      className="font-semibold text-[#6D45D9] hover:underline cursor-pointer"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </p>
            </form>
          )}
        </div>
      )}
    </Dialog>
  );
}
