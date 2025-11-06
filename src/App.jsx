import React from 'react';
import HeroCover from './components/HeroCover';
import QuickActions from './components/QuickActions';
import SalesOverview from './components/SalesOverview';
import InventoryTable from './components/InventoryTable';
import { Settings } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-cyan-500 font-bold">TR</div>
            <div className="text-sm text-slate-300">Tire CRM</div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-800">
            <Settings className="h-4 w-4" />
            Settings
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6">
        {/* Hero with Spline */}
        <HeroCover />

        {/* Quick actions */}
        <QuickActions />

        {/* Sales overview metrics */}
        <SalesOverview />

        {/* Inventory table */}
        <InventoryTable />

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Tire CRM — Designed for high‑performance automotive teams
        </footer>
      </main>
    </div>
  );
}
