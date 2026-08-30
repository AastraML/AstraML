import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { AetherRibbonMesh } from '../ui/AetherRibbonMesh';

export function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background/0">
      <AetherRibbonMesh />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="relative z-10 flex min-h-screen flex-col md:pl-64">
        <Header setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
