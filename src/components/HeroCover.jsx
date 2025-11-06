import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">{/* Background 3D */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-end p-6 sm:p-10">
        <div className="max-w-3xl text-white">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs tracking-wide text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Live Inventory Insights
          </div>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Performance CRM for Tire Brands & Distributors
          </h1>
          <p className="mt-3 text-slate-300 md:text-lg">
            A modern command center to monitor inventory, track sales momentum, and create purchase orders in one streamlined workspace.
          </p>

          {/* Quick stats */}
          <div className="mt-6 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard label="SKUs" value="2,418" trend="up" change="+3.2%" />
            <StatCard label="In Stock" value="18,420" trend="up" change="+1.8%" />
            <StatCard label="Backorders" value="126" trend="down" change="-0.6%" />
            <StatCard label="Open POs" value="37" trend="up" change="+12%" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, trend, change }) {
  const isUp = trend === 'up';
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-white backdrop-blur">
      <div className="text-xs uppercase tracking-wider text-slate-400">{label}</div>
      <div className="mt-1 flex items-end justify-between">
        <div className="text-xl font-semibold">{value}</div>
        <div className={`text-xs ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>{change}</div>
      </div>
    </div>
  );
}
