'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { AuthDialog } from '@/components/modals/auth-dialog';
import { SyllabusDialog } from '@/components/modals/syllabus-dialog';
import type { AuthMode, AuthModalState, AuthRole, SubjectModel } from '@/types';

interface ModalsContextValue {
  openAuth: (mode: AuthMode, role?: AuthRole) => void;
  openSyllabus: (subject: SubjectModel) => void;
}

const ModalsContext = createContext<ModalsContextValue | null>(null);

export function useModals(): ModalsContextValue {
  const ctx = useContext(ModalsContext);
  if (!ctx) throw new Error('useModals must be used within <ModalsProvider>');
  return ctx;
}

export function ModalsProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [authModal, setAuthModal] = useState<AuthModalState>({ isOpen: false });
  // Subject is kept separately from `open` so exit animations still have content to render.
  const [syllabusSubject, setSyllabusSubject] = useState<SubjectModel | null>(null);
  const [syllabusOpen, setSyllabusOpen] = useState<boolean>(false);

  const openAuth = useCallback((mode: AuthMode, role: AuthRole = 'student'): void => {
    setAuthModal({ isOpen: true, mode, role });
  }, []);

  const closeAuth = useCallback((): void => setAuthModal({ isOpen: false }), []);

  const openSyllabus = useCallback((subject: SubjectModel): void => {
    setSyllabusSubject(subject);
    setSyllabusOpen(true);
  }, []);

  const closeSyllabus = useCallback((): void => setSyllabusOpen(false), []);

  const value = useMemo<ModalsContextValue>(
    () => ({ openAuth, openSyllabus }),
    [openAuth, openSyllabus]
  );

  return (
    <ModalsContext.Provider value={value}>
      {children}
      <SyllabusDialog
        open={syllabusOpen}
        subject={syllabusSubject}
        onClose={closeSyllabus}
        onStart={() => {
          closeSyllabus();
          openAuth('signup', 'student');
        }}
      />
      <AuthDialog state={authModal} onChange={setAuthModal} onClose={closeAuth} />
    </ModalsContext.Provider>
  );
}
