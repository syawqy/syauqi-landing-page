import { Link, useParams, Navigate } from 'react-router-dom';
import BrowserFrame from '../components/BrowserFrame';
import Reveal from '../components/Reveal';
import { CheckIcon } from '../components/Icon';
import { MOCK_MAP, isMockSlug } from '../components/MockUI';
import { showcases } from '../data/showcases';
import { usePageTitle } from '../hooks/usePageTitle';
import { WA_LINK } from '../data/site';
import { useEffect } from 'react';
import { trackEvent } from '../lib/analytics';

export default function DemoPage() {
  const { slug = '' } = useParams();

  const valid = isMockSlug(slug);
  useEffect(() => {
    if (valid) trackEvent('view_demo', { slug });
  }, [valid, slug]);

  if (!valid) return <Navigate to="/404" replace />;

  const meta = showcases.find(s => s.slug === slug)!;
  const Mock = MOCK_MAP[slug];
  const others = showcases.filter(s => s.slug !== slug);

  const titles: Record<string, string> = {
    dashboard: 'Demo Dashboard Analytics',
    pos: 'Demo Aplikasi Kasir (POS)',
    ecommerce: 'Demo Toko Online',
    booking: 'Demo Sistem Booking',
    hris: 'Demo HRIS',
    profile: 'Demo Company Profile',
  };
  usePageTitle(`${titles[slug]} · Syauqi Fuadi`);

  return (
    <section className="sec" style={{ paddingTop: 120 }}>
      <div className="container">
        <Reveal>
          <div className="sec-head center" style={{ maxWidth: 720 }}>
            <span className="eyebrow">Demo Interaktif · Data Dummy</span>
            <h2 className="title">{meta.headline}</h2>
            <p>{meta.desc}</p>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ maxWidth: 620, margin: '0 auto' }}>
            <BrowserFrame url={meta.url}><Mock /></BrowserFrame>
            <p style={{ textAlign: 'center', color: 'var(--muted2)', fontSize: 13, marginTop: 14 }}>
              Coba langsung: klik produk, filter data, setujui pengajuan. Semua interaksi nyata di front-end, tanpa server.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="show-row" style={{ marginTop: 64 }}>
            <div className="show-copy">
              <span className="num">{meta.num} · {meta.category}</span>
              <h3>Fitur yang terlihat di demo ini:</h3>
              <ul className="feat-list">
                {meta.features.map(f => <li key={f}><CheckIcon />{f}</li>)}
              </ul>
              <div className="show-tags">
                {meta.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <div className="cta-box" style={{ padding: 'clamp(28px,4vw,44px)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-.02em' }}>Butuh aplikasi seperti ini?</h3>
              <p style={{ color: 'var(--muted)', fontSize: '.95rem', marginTop: 10 }}>
                Demo ini versi dummy. Versi aslinya dibuat khusus sesuai proses bisnis Anda.
              </p>
              <div className="cta-row" style={{ marginTop: 22 }}>
                <a href={WA_LINK} className="btn btn-primary">Konsultasi Gratis</a>
                <Link to="/" className="btn btn-ghost">Kembali ke Beranda</Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ marginTop: 72 }}>
            <span className="eyebrow">Jelajahi demo lainnya</span>
            <div className="chips" style={{ justifyContent: 'flex-start', marginTop: 18 }}>
              {others.map(o => (
                <Link key={o.slug} to={`/demo/${o.slug}`} className="chip" style={{ transition: '.2s' }}>{o.category.split(' / ')[0]}</Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
