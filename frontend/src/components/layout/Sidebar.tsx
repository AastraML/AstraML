
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Upload,
  BrainCircuit,
  MessageSquare,
  FlaskConical,
  BarChart3,
  Menu,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Upload Data', href: '/upload', icon: Upload },
  { name: 'Train Model', href: '/train', icon: BrainCircuit },
  { name: 'Explainability', href: '/explain', icon: BarChart3 },
  { name: 'Prompt Config', href: '/chat', icon: MessageSquare },
  { name: 'Experiments', href: '/experiments', icon: FlaskConical },
];

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 -translate-x-full border-r border-r-muted/50 bg-background/60 backdrop-blur-md transition-transform duration-300 ease-in-out md:translate-x-0',
          isOpen && 'translate-x-0'
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <span className="text-lg font-bold">AstraML</span>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <nav className="space-y-1 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
