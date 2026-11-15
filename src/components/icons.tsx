import { Calculator, Cpu, Download, FlaskConical, HardDrive, Landmark, Languages, RefreshCw, Wifi } from 'lucide-react';
import type { PipelineIconName, SubjectIconName } from '@/types';

export function SubjectIcon({
  name,
  className = 'w-6 h-6'
}: {
  name: SubjectIconName;
  className?: string;
}): React.JSX.Element {
  switch (name) {
    case 'calculator':
      return <Calculator className={className} aria-hidden="true" />;
    case 'languages':
      return <Languages className={className} aria-hidden="true" />;
    case 'flask':
      return <FlaskConical className={className} aria-hidden="true" />;
    case 'landmark':
      return <Landmark className={className} aria-hidden="true" />;
    case 'cpu':
      return <Cpu className={className} aria-hidden="true" />;
  }
}

export function PipelineIcon({
  name,
  className = 'w-5 h-5'
}: {
  name: PipelineIconName;
  className?: string;
}): React.JSX.Element {
  switch (name) {
    case 'wifi':
      return <Wifi className={className} aria-hidden="true" />;
    case 'download':
      return <Download className={className} aria-hidden="true" />;
    case 'hard-drive':
      return <HardDrive className={className} aria-hidden="true" />;
    case 'refresh':
      return <RefreshCw className={className} aria-hidden="true" />;
  }
}
