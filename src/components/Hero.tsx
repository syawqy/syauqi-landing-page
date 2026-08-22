import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { useCountUp } from '../hooks/useCountUp';
import { stats } from '../data/content';

function StatItem({ count, suffix, label }: { count: number; suffix: string; label: string }) {
  const { ref, display } = useCountUp(count, suffix);
  return (
    <div className="stat">
      <b ref={ref as React.RefObject<HTMLElement>}>{display}</b>
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <Reveal>
          <div className="badge"><span className="pulse" /> Menerima proyek baru · kuota terbatas bulan ini</div>
        </Reveal>
        <Reveal>
          <h1>Wujudkan bisnis Anda jadi <span className="grad">lebih maju</span> dengan teknologi yang tepat.</h1>
        </Reveal>
        <Reveal>
          <p className="sub">Saya Syauqi Fuadi, IT consultant &amp; web developer yang membantu UMKM dan perusahaan bekerja lebih cepat, menjual lebih banyak, dan mengambil keputusan berbasis data melalui aplikasi web yang dirancang khusus untuk kebutuhan Anda.</p>
        </Reveal>
        <Reveal className="cta-row">
          <a href="#kontak" className="btn btn-primary">Konsultasi Gratis
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <Link to="/demo/dashboard" className="btn btn-ghost">Jelajahi Contoh Aplikasi</Link>
        </Reveal>
        <Reveal className="stats">
          {stats.map(s => <StatItem key={s.label} {...s} />)}
        </Reveal>
      </div>
    </section>
  );
}
