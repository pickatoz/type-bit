import type { LucideIcon } from 'lucide-react';
import { Construction } from 'lucide-react';

type ComingSoonPanelProps = {
  title: string;
  icon?: LucideIcon;
  description?: string;
};

function ComingSoonPanel({
  title,
  icon: Icon = Construction,
  description = 'This section is being prepared. It will be available soon.',
}: ComingSoonPanelProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 bg-slate-50/80 px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white shadow-sm">
        <Icon className="h-8 w-8 text-primary" strokeWidth={1.8} />
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
          Coming Soon
        </p>
        <h3 className="mt-2 font-space-grotesk text-2xl font-bold text-slate-800">{title}</h3>
      </div>

      <p className="max-w-md text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

export default ComingSoonPanel;
