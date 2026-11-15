'use client';

import { cn } from '@/lib/utils';

export interface TabItem<T extends string> {
  readonly id: T;
  readonly label: string;
}

export interface TabsProps<T extends string> {
  items: readonly TabItem<T>[];
  activeId: T;
  onChange: (id: T) => void;
  ariaLabel: string;
  accent?: 'purple' | 'sky';
}

export function Tabs<T extends string>({
  items,
  activeId,
  onChange,
  ariaLabel,
  accent = 'purple'
}: TabsProps<T>): React.JSX.Element {
  return (
    <div
      className="grid gap-1.5 p-1 bg-white rounded-xl border border-[#E2E8F0]"
      style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
      role="tablist"
      aria-label={ariaLabel}
    >
      {items.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative py-2 px-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer focus:outline-none focus-visible:ring-2',
              accent === 'purple' ? 'focus-visible:ring-[#6D45D9]' : 'focus-visible:ring-[#0284C7]',
              isActive
                ? accent === 'purple'
                  ? 'bg-[#6D45D9] text-white'
                  : 'bg-[#0284C7] text-white'
                : 'text-[#64748B] hover:text-[#171923] hover:bg-[#F8FAFC]'
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
