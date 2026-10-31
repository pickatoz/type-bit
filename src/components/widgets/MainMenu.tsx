import { useState, type ReactNode } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { Activity, ClipboardList, Info, Settings, Sparkles, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ComingSoonPanel from '@/components/widgets/ComingSoonPanel';
import logo from '@/assets/type-bit.jpg';

type SidebarTab = {
  id: string;
  label: string;
  icon: typeof Zap;
};

const sidebarTabs: SidebarTab[] = [
  { id: 'quick-start', label: 'Quick Start', icon: Zap },
  { id: 'typing-meter', label: 'Typing Meter', icon: Activity },
  { id: 'typing-test', label: 'Typing Test', icon: ClipboardList },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'about', label: 'About', icon: Info },
];

const panelMap: Record<string, ReactNode> = {
  'quick-start': <ComingSoonPanel title="Quick Start" icon={Sparkles} />,
  'typing-meter': <ComingSoonPanel title="Typing Meter" icon={Activity} />,
  'typing-test': <ComingSoonPanel title="Typing Test" icon={ClipboardList} />,
  settings: <ComingSoonPanel title="Settings" icon={Settings} />,
  about: <ComingSoonPanel title="About" icon={Info} />,
};

function MainMenu() {
  const [activeTab, setActiveTab] = useState('quick-start');

  const handleClose = async () => {
    await invoke('close_application');
  };

  return (
    <div className="relative flex min-h-screen w-full select-none overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle,_#94a3b8_1px,_transparent_1px)] [background-size:24px_24px]" />

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-[12vw] -top-[16vh] h-[clamp(260px,38vw,680px)] w-[clamp(260px,38vw,680px)] rounded-full bg-primary/90" />

      <div className="pointer-events-none absolute -bottom-[16vh] -right-[12vw] h-[clamp(260px,38vw,680px)] w-[clamp(260px,38vw,680px)] rounded-full bg-primary/90" />

      {/* Main Container */}
      <div className="relative z-10 m-auto flex h-[min(80vh,580px)] w-[min(95vw,1100px)] overflow-hidden rounded-lg border border-border bg-white shadow-xl">
        {/* Main Content Panel */}
        <main className="flex-[4] overflow-hidden bg-white">{panelMap[activeTab]}</main>

        {/* Divider */}
        <div className="w-px shrink-0 bg-border" />

        {/* Sidebar Panel */}
        <aside className="relative flex flex-[1] flex-col bg-white py-3">
          <div className="flex h-full flex-col">
            {/* Close Button */}
            <div className="flex items-center justify-end px-3">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleClose}
                title="Close"
                className="cursor-pointer text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Logo */}
            <div className="mt-3 flex justify-center px-3">
              <div className="flex aspect-square h-36 w-36 items-center justify-center overflow-hidden rounded-full border border-border bg-white shadow-sm">
                <img
                  src={logo}
                  alt="Type Bit logo"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Sidebar Navigation */}
            <nav className="mt-5 flex w-full flex-col gap-1.5 px-3 pb-2">
              {sidebarTabs.map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`
                      flex h-11 w-full items-center gap-3 rounded-md px-3 cursor-pointer
                      font-space-grotesk text-xs font-semibold tracking-wide
                      transition-all duration-200 ease-in-out
                      focus-visible:outline-none focus-visible:ring-2
                      focus-visible:ring-ring focus-visible:ring-offset-2
                      ${
                        isActive
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground'
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={isActive ? 2.5 : 2}
                      className="shrink-0 transition-all duration-200"
                    />

                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default MainMenu;
