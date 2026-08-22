import { useState } from 'react';

const PERIODS = ['Hari', 'Minggu', 'Bulan'] as const;
type Period = (typeof PERIODS)[number];

/** Data seed per periode · interaksi: filter mengubah KPI & bar chart. */
const SEED: Record<Period, { sales: string; salesDelta: string; trx: string; trxDelta: string; lowStock: number; bars: number[]; barLabel?: string }> = {
  Hari: {
    sales: 'Rp 8.4jt', salesDelta: '▲ 23% vs kemarin', trx: '312', trxDelta: '▲ 41 order baru',
    lowStock: 7, bars: [38, 55, 44, 70, 62, 88, 100], barLabel: 'Senin s.d. Minggu',
  },
  Minggu: {
    sales: 'Rp 52.7jt', salesDelta: '▲ 12% vs minggu lalu', trx: '2.104', trxDelta: '▲ 318 order baru',
    lowStock: 12, bars: [60, 48, 72, 55, 80, 66, 92], barLabel: 'Minggu ini per hari',
  },
  Bulan: {
    sales: 'Rp 218jt', salesDelta: '▲ 9% vs bulan lalu', trx: '8.973', trxDelta: '▲ 1.240 order baru',
    lowStock: 18, bars: [30, 42, 50, 47, 58, 64, 72, 69, 78, 85, 80, 94, 100, 88],
  },
};

export default function DashboardMock() {
  const [period, setPeriod] = useState<Period>('Hari');
  const d = SEED[period];

  return (
    <div className="ui">
      <div className="ui-topbar">
        <div className="ui-brand"><span className="ui-logo" />TokoKita Admin</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {PERIODS.map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={'pill-' + (p === period ? 'green' : 'blue')}
              style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: 14, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
        <Kpi label="Penjualan" periode={period} value={d.sales} delta={d.salesDelta} />
        <Kpi label="Transaksi" periode="" value={d.trx} delta={d.trxDelta} />
        <Kpi label="Stok Menipis" periode="" value={`${d.lowStock} item`} delta="Perlu restock" warn />
        <div style={{ gridColumn: '1/-1', background: '#161c25', border: '1px solid var(--border)', borderRadius: 10, padding: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <b style={{ fontSize: 10.5 }}>Penjualan {period === 'Hari' ? '7 Hari Terakhir' : period === 'Minggu' ? 'Per Hari (Minggu Ini)' : '30 Hari Terakhir'}</b>
            <span style={{ color: 'var(--muted2)', fontSize: 9.5 }}>{d.barLabel}</span>
          </div>
          <div className="bar-chart">
            {d.bars.map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
          </div>
        </div>
      </div>
      <DemoTag />
    </div>
  );
}

function Kpi({ label, periode, value, delta, warn }: { label: string; periode: string; value: string; delta: string; warn?: boolean }) {
  return (
    <div style={{ background: '#161c25', border: '1px solid var(--border)', borderRadius: 10, padding: 11 }}>
      <div style={{ color: 'var(--muted2)', fontSize: 10 }}>{label}{periode && ` ${periode.charAt(0) + periode.slice(1).toLowerCase()} Ini`}</div>
      <div style={{ fontSize: 16, fontWeight: 800, marginTop: 2, ...(warn ? { color: '#fbbf24' } : {}) }}>{value}</div>
      <div style={{ color: warn ? '#fbbf24' : 'var(--accent)', fontSize: 9.5, fontWeight: 600 }}>{delta}</div>
    </div>
  );
}

export function DemoTag() {
  return (
    <span style={{
      position: 'absolute', right: 8, bottom: 6, fontSize: 8.5, color: 'var(--muted2)',
      background: 'rgba(10,13,17,.8)', border: '1px solid var(--border)', borderRadius: 999,
      padding: '2px 8px', pointerEvents: 'none',
    }}>Demo · data dummy</span>
  );
}
