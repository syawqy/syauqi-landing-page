import { useState } from 'react';
import { DemoTag } from './DashboardMock';

interface Request { id: number; who: string; what: string; status: 'pending' | 'approved' | 'rejected' }

const INITIAL: Request[] = [
  { id: 1, who: 'Siti · Marketing', what: 'izin 1 hari (acara keluarga)', status: 'pending' },
  { id: 2, who: 'Rudi · Gudang', what: 'lembur 3 jam (18 Agu)', status: 'pending' },
];

export default function HrisMock() {
  const [reqs, setReqs] = useState<Request[]>(INITIAL);

  const decide = (id: number, status: 'approved' | 'rejected') => {
    setReqs(rs => rs.map(r => r.id === id ? { ...r, status } : r));
  };

  const pending = reqs.filter(r => r.status === 'pending');
  const done = reqs.filter(r => r.status !== 'pending');

  return (
    <div className="ui" style={{ position: 'relative' }}>
      <div className="ui-topbar">
        <div className="ui-brand"><span className="ui-logo" />HRIS Sentosa Group</div>
        <span className="pill-blue">Kamis, 21 Agu</span>
      </div>
      <div style={{ padding: 12, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 10 }}>
        <Stat label="Hadir" value="142" color="var(--accent)" />
        <Stat label="Izin / Cuti" value={String(8 + done.filter(r => r.status === 'approved').length)} color="#fbbf24" />
        <Stat label="Belum Absen" value="4" color="#f87171" />
      </div>
      <div style={{ padding: '0 12px 12px', display: 'flex', flexDirection: 'column', gap: 7 }}>
        {pending.map(r => (
          <div key={r.id} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: '#161c25', border: '1px solid var(--border)', borderRadius: 9,
            padding: '8px 11px', fontSize: 10,
          }}>
            <span><b>{r.who}</b> · {r.what}</span>
            <span style={{ display: 'flex', gap: 5 }}>
              <button className="pill-green" style={btn} onClick={() => decide(r.id, 'approved')}>Setujui</button>
              <button className="pill-red" style={btn} onClick={() => decide(r.id, 'rejected')}>Tolak</button>
            </span>
          </div>
        ))}
        {done.map(r => (
          <div key={r.id} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: '#12161d', border: '1px dashed var(--border)', borderRadius: 9,
            padding: '8px 11px', fontSize: 10, opacity: .8,
          }}>
            <span style={{ color: 'var(--muted)' }}><b>{r.who}</b> · {r.what}</span>
            <span className={r.status === 'approved' ? 'pill-green' : 'pill-red'}>
              {r.status === 'approved' ? 'Disetujui ✓' : 'Ditolak ✕'}
            </span>
          </div>
        ))}
        {pending.length === 0 && (
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: '#161c25', border: '1px dashed rgba(52,211,153,.4)', borderRadius: 9,
            padding: '8px 11px', fontSize: 10,
          }}>
            <span style={{ color: 'var(--muted)' }}>Payroll Agustus siap diproses · 154 karyawan</span>
            <span className="pill-green">Proses →</span>
          </div>
        )}
      </div>
      <DemoTag />
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ background: '#161c25', border: '1px solid var(--border)', borderRadius: 10, padding: 10, textAlign: 'center' }}>
      <div style={{ color: 'var(--muted2)', fontSize: 9.5 }}>{label}</div>
      <b style={{ fontSize: 15, color }}>{value}</b>
    </div>
  );
}

const btn: React.CSSProperties = {
  border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontStyle: 'normal',
};
