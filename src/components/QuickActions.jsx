import React from 'react';
import { Plus, ShoppingCart, FileText, Truck } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    { icon: Plus, label: 'Add SKU', desc: 'Create a new tire product', color: 'from-blue-500 to-cyan-500' },
    { icon: ShoppingCart, label: 'New Order', desc: 'Place a purchase order', color: 'from-emerald-500 to-teal-500' },
    { icon: FileText, label: 'Sales Quote', desc: 'Generate a customer quote', color: 'from-amber-500 to-orange-500' },
    { icon: Truck, label: 'Inbound Shipment', desc: 'Receive and reconcile', color: 'from-fuchsia-500 to-pink-500' },
  ];

  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {actions.map((a) => (
        <button
          key={a.label}
          className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-left text-white transition-colors hover:border-slate-700"
        >
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.color} opacity-0 transition-opacity duration-300 group-hover:opacity-20`} />
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/70">
              <a.icon className="h-5 w-5 text-slate-200" />
            </div>
            <div>
              <div className="font-medium">{a.label}</div>
              <div className="text-xs text-slate-400">{a.desc}</div>
            </div>
          </div>
        </button>
      ))}
    </section>
  );
}
