import { useState } from 'react';
import { DemoTag } from './DashboardMock';

type SlotState = 'tersedia' | 'penuh' | 'dipilih';
interface Slot { time: string; doctor: string; service: string; state: SlotState }

const DAYS = [
  { d: 'Sen', n: 18 }, { d: 'Sel', n: 19 }, { d: 'Rab', n: 20 },
  { d: 'Kam', n: 21 }, { d: 'Jum', n: 22 }, { d: 'Sab', n: 23 },
];

const INITIAL: Record<string, Slot[]> = {
  Umum: [
    { time: '09.00', doctor: 'dr. Andini', service: 'Umum', state: 'tersedia' },
    { time: '10.00', doctor: 'dr. Andini', service: 'Umum', state: 'penuh' },
    { time: '13.00', doctor: 'dr. Raka', service: 'Gigi', state: 'tersedia' },
  ],
  Gigi: [
    { time: '10.00', doctor: 'dr. Raka', service: 'Gigi', state: 'tersedia' },
    { time: '11.00', doctor: 'dr. Raka', service: 'Gigi', state: 'penuh' },
    { time: '14.00', doctor: 'dr. Salsa', service: 'Gigi', state: 'tersedia' },
  ],
};

export default function BookingMock() {
  const [svc, setSvc] = useState<'Umum' | 'Gigi'>('Umum');
  const [slots, setSlots] = useState<Slot[]>(INITIAL.Umum);

  const switchSvc = (s: 'Umum' | 'Gigi') => {
    setSvc(s);
    setSlots(INITIAL[s].map(x => ({ ...x })));
  };

  const pick = (time: string) => {
    setSlots(ss => ss.map(x =>
      x.time === time && x.state === 'tersedia' ? { ...x, state: 'dipilih' }
        : x.state === 'dipilih' ? { ...x, state: 'tersedia' } : x
    ));
  };

  const left = slots.filter(s => s.state === 'tersedia').length;

  return (
    <div className="ui" style={{ position: 'relative' }}>
      <div className="ui-topbar">
        <div className="ui-brand"><span className="ui-logo" />Klinik Sehat · Jadwal Dokter</div>
        <span className="pill-green" data-testid="slot-left">{left} slot tersisa hari ini</span>
      </div>
      <div style={{ display: 'flex', gap: 6, padding: '10px 12px 0' }}>
        {(['Umum', 'Gigi'] as const).map(s => (
          <button
            key={s}
            onClick={() => switchSvc(s)}
            className={'pill-' + (s === svc ? 'green' : 'blue')}
            style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', opacity: s === svc ? 1 : .75 }}
          >Poli {s}</button>
        ))}
      </div>
      <div style={{ padding: 12, display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 7, marginBottom: 10 }}>
        {DAYS.map((day, i) => (
          <div key={day.d} style={{
            textAlign: 'center', padding: '7px 2px', borderRadius: 9,
            border: i === 2 ? '1px solid rgba(52,211,153,.5)' : '1px solid var(--border)',
            background: i === 2 ? 'var(--accent-dim)' : undefined,
            color: i === 2 ? undefined : 'var(--muted2)',
          }}>
            <b style={{ display: 'block', fontSize: 10, color: i === 2 ? 'var(--accent)' : 'var(--muted)' }}>{day.d}</b>
            <span style={{ fontSize: 12, fontWeight: 800 }}>{day.n}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: '0 12px 12px', display: 'flex', flexDirection: 'column', gap: 7 }}>
        {slots.map(s => (
          <button
            key={s.time}
            onClick={() => pick(s.time)}
            disabled={s.state === 'penuh'}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: '#161c25', borderRadius: 9, padding: '8px 11px',
              border: s.state === 'dipilih' ? '1px solid rgba(52,211,153,.45)'
                : s.state === 'penuh' ? '1px solid var(--border)' : '1px solid var(--border)',
              cursor: s.state === 'penuh' ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit', color: 'inherit', opacity: s.state === 'penuh' ? .6 : 1,
            }}
          >
            <span style={{ fontSize: 10 }}><b>{s.time} · {s.doctor}</b> · {s.service}</span>
            <span className={
              s.state === 'dipilih' ? 'pill-green'
                : s.state === 'penuh' ? 'pill-red' : 'pill-blue'
            }>
              {s.state === 'dipilih' ? 'Terbooking ✓' : s.state === 'penuh' ? 'Penuh' : 'Booking'}
            </span>
          </button>
        ))}
      </div>
      <DemoTag />
    </div>
  );
}
