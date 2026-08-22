import { useState } from 'react';
import { DemoTag } from './DashboardMock';
import { trackEvent } from '../../lib/analytics';

export default function ProfileMock() {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [toast, setToast] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setToast(true);
    trackEvent('demo_interaction', { mock: 'profile', action: 'submit-form' });
    setName('');
    setMsg('');
    setTimeout(() => setToast(false), 2200);
  };

  return (
    <div className="ui" style={{ position: 'relative' }}>
      <div className="ui-topbar">
        <div className="ui-brand"><span className="ui-logo" />Bangun Perkasa</div>
        <div style={{ display: 'flex', gap: 10, color: 'var(--muted)', fontSize: 10 }}>
          <span>Tentang</span><span>Proyek</span><span>Layanan</span><span className="pill-green">Hubungi Kami</span>
        </div>
      </div>
      <div style={{ padding: '16px 14px', textAlign: 'center', background: 'linear-gradient(180deg,#141a23,#10141a)' }}>
        <b style={{ fontSize: 14, display: 'block', letterSpacing: '-.01em' }}>Membangun Karya Nyata Sejak 2009</b>
        <span style={{ fontSize: 9.5, color: 'var(--muted)', display: 'block', marginTop: 4 }}>
          Kontraktor gedung &amp; infrastruktur bersertifikat ISO 9001
        </span>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 9 }}>
          <span className="pill-green">Konsultasi Gratis</span><span className="pill-blue">Lihat Portofolio</span>
        </div>
      </div>
      <form onSubmit={submit} style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 7 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
          <input
            value={name} onChange={e => setName(e.target.value)}
            placeholder="Nama Anda" required
            style={input}
          />
          <input placeholder="No. WhatsApp" required style={input} />
        </div>
        <textarea
          value={msg} onChange={e => setMsg(e.target.value)}
          placeholder="Ceritakan kebutuhan proyek Anda…" rows={2} required
          style={{ ...input, resize: 'none' }}
        />
        <button type="submit" style={{
          background: 'var(--accent)', color: '#05231a', border: 'none', borderRadius: 8,
          padding: 7, fontWeight: 800, fontSize: 10, cursor: 'pointer', fontFamily: 'inherit',
        }}>Kirim via Website →</button>
      </form>
      {toast && (
        <div data-testid="toast" style={{
          position: 'absolute', left: '50%', bottom: 10, transform: 'translateX(-50%)',
          background: '#0d2b21', border: '1px solid rgba(52,211,153,.5)', color: 'var(--accent)',
          borderRadius: 999, padding: '5px 14px', fontSize: 9.5, fontWeight: 700, whiteSpace: 'nowrap',
        }}>✓ Pesan terkirim · tim kami akan menghubungi Anda</div>
      )}
      <DemoTag />
    </div>
  );
}

const input: React.CSSProperties = {
  background: '#161c25', border: '1px solid var(--border)', borderRadius: 8,
  color: 'var(--text)', fontSize: 9.5, padding: '6px 9px', fontFamily: 'inherit',
  outline: 'none',
};
