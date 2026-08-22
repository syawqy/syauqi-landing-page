import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFoundPage() {
  usePageTitle('Halaman tidak ditemukan · Syauqi Fuadi');
  return (
    <section className="sec" style={{ paddingTop: 180, textAlign: 'center' }}>
      <div className="container">
        <div style={{ fontSize: 54, marginBottom: 10 }}>🧭</div>
        <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 800, letterSpacing: '-.03em' }}>
          Halaman tidak ditemukan.
        </h1>
        <p style={{ color: 'var(--muted)', marginTop: 12 }}>
          Alamat yang Anda buka tidak ada atau sudah dipindahkan.
        </p>
        <div className="cta-row">
          <Link to="/" className="btn btn-primary">Kembali ke Beranda</Link>
          <Link to="/demo/dashboard" className="btn btn-ghost">Lihat Demo Interaktif</Link>
        </div>
      </div>
    </section>
  );
}
