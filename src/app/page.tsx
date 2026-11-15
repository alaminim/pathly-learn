import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { ValueProps } from '@/components/sections/value-props';
import { SubjectExplorer } from '@/components/sections/subject-explorer';
import { HowItWorks } from '@/components/sections/how-it-works';
import { MeetPally } from '@/components/sections/meet-pally';
import { OfflinePipeline } from '@/components/sections/offline-pipeline';
import { ProgressDashboard } from '@/components/sections/progress-dashboard';
import { FinalCta } from '@/components/sections/final-cta';
import { ModalsProvider } from '@/providers/modals-provider';

export default function HomePage(): React.JSX.Element {
  return (
    <ModalsProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-[#6D45D9] focus:px-4 focus:py-2.5 focus:text-white focus:font-semibold"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <ValueProps />
        <SubjectExplorer />
        <HowItWorks />
        <MeetPally />
        <OfflinePipeline />
        <ProgressDashboard />
        <FinalCta />
      </main>
      <Footer />
    </ModalsProvider>
  );
}
