import React from 'react';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';

const sampleData = [
  { id: 'T-PS4-225/45R17', brand: 'Pilot Sport 4', maker: 'Michelin', size: '225/45R17', stock: 142, reserved: 12, price: 189.0, status: 'In Stock' },
  { id: 'T-AT3-265/70R17', brand: 'All Terrain T/A KO2', maker: 'BFGoodrich', size: '265/70R17', stock: 58, reserved: 5, price: 238.5, status: 'Low' },
  { id: 'T-PZ4-245/40R19', brand: 'P Zero PZ4', maker: 'Pirelli', size: '245/40R19', stock: 0, reserved: 8, price: 276.0, status: 'Backorder' },
  { id: 'T-TUR-205/55R16', brand: 'Turanza QuietTrack', maker: 'Bridgestone', size: '205/55R16', stock: 420, reserved: 41, price: 132.9, status: 'In Stock' },
];

export default function InventoryTable() {
  const [query, setQuery] = React.useState('');
  const [sortBy, setSortBy] = React.useState('brand');
  const [sortDir, setSortDir] = React.useState('asc');

  const filtered = sampleData
    .filter((r) =>
      [r.brand, r.maker, r.size, r.id].some((f) => f.toLowerCase().includes(query.toLowerCase()))
    )
    .sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;
      const av = a[sortBy];
      const bv = b[sortBy];
      if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * dir;
      return String(av).localeCompare(String(bv)) * dir;
    });

  const setSort = (key) => {
    if (sortBy === key) setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    else {
      setSortBy(key);
      setSortDir('asc');
    }
  };

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-slate-100 backdrop-blur">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 py-2 pl-10 pr-3 text-sm placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            placeholder="Search by brand, maker, size..."
          />
        </div>
        <div className="hidden text-sm text-slate-400 sm:block">{filtered.length} results</div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-slate-400">
            <tr>
              <Th onClick={() => setSort('id')} active={sortBy === 'id'} dir={sortDir}>SKU</Th>
              <Th onClick={() => setSort('brand')} active={sortBy === 'brand'} dir={sortDir}>Brand</Th>
              <Th onClick={() => setSort('maker')} active={sortBy === 'maker'} dir={sortDir}>Maker</Th>
              <Th onClick={() => setSort('size')} active={sortBy === 'size'} dir={sortDir}>Size</Th>
              <Th onClick={() => setSort('stock')} active={sortBy === 'stock'} dir={sortDir}>In Stock</Th>
              <Th onClick={() => setSort('reserved')} active={sortBy === 'reserved'} dir={sortDir}>Reserved</Th>
              <Th onClick={() => setSort('price')} active={sortBy === 'price'} dir={sortDir}>Price</Th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2"/>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-t border-slate-800 hover:bg-slate-800/40">
                <td className="px-3 py-2 font-mono text-slate-300">{r.id}</td>
                <td className="px-3 py-2">{r.brand}</td>
                <td className="px-3 py-2 text-slate-300">{r.maker}</td>
                <td className="px-3 py-2 text-slate-300">{r.size}</td>
                <td className="px-3 py-2 font-medium">{r.stock}</td>
                <td className="px-3 py-2">{r.reserved}</td>
                <td className="px-3 py-2">${r.price.toFixed(2)}</td>
                <td className="px-3 py-2">
                  <StatusPill status={r.status} />
                </td>
                <td className="px-3 py-2 text-right">
                  <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-500">Create Order</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Th({ children, onClick, active, dir }) {
  return (
    <th className="cursor-pointer select-none px-3 py-2" onClick={onClick}>
      <span className="inline-flex items-center gap-1">
        {children}
        {active ? (
          dir === 'asc' ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />
        ) : null}
      </span>
    </th>
  );
}

function StatusPill({ status }) {
  const styles = {
    'In Stock': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    'Low': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    'Backorder': 'bg-rose-500/15 text-rose-400 border-rose-500/30',
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs ${styles[status] || 'bg-slate-700/30 text-slate-300 border-slate-600/40'}`}>
      {status}
    </span>
  );
}
