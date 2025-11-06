import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function SalesOverview() {
  const metrics = [
    { label: 'Revenue (30d)', value: '$482,930', change: '+8.4%', up: true },
    { label: 'Units Sold', value: '5,214', change: '+4.1%', up: true },
    { label: 'Avg. Order Value', value: '$92.50', change: '-1.2%', up: false },
    { label: 'Return Rate', value: '2.1%', change: '-0.3%', up: true },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-white backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Sales Overview</h3>
        <div className="text-xs text-slate-400">Last 30 days</div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
            <div className="text-xs uppercase tracking-wider text-slate-400">{m.label}</div>
            <div className="mt-2 flex items-end justify-between">
              <div className="text-2xl font-semibold">{m.value}</div>
              <div className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${m.up ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'}`}>
                {m.up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                {m.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
