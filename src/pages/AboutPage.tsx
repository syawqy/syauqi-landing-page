import Reveal from '../components/Reveal';
import TechStrip from '../components/TechStrip';
import CtaContact from '../components/CtaContact';
import { CheckIcon } from '../components/Icon';
import { whyPoints } from '../data/content';
import { usePageTitle } from '../hooks/usePageTitle';

const facts = [
  { k: 'Fokus', v: 'IT consulting & web development untuk UMKM sampai perusahaan' },
  { k: 'Pengalaman', v: '5+ tahun membangun sistem internal, POS, HRIS, e-commerce, dan company profile' },
  { k: 'Cara kerja', v: 'Langsung satu pintu: konsultasi, desain, development, pelatihan, perawatan' },
  { k: 'Komunikasi', v: 'Bahasa manusia, laporan progres rutin, respons maksimal 1×24 jam di hari kerja' },
];

export default function AboutPage() {
  usePageTitle('Tentang · Syauqi Fuadi');
  return (
    <>
      <section className="sec" style={{ paddingTop: 140 }}>
        <div className="container">
          <Reveal>
            <div className="sec-head center" style={{ maxWidth: 720 }}>
              <span className="eyebrow">Tentang Saya</span>
              <h2 className="title">Halo, saya <span className="grad">Syauqi Fuadi</span>.</h2>
              <p>IT consultant &amp; web developer. Saya membantu bisnis bekerja lebih cepat, menjual lebih banyak, dan mengambil keputusan berbasis data melalui aplikasi web yang dirancang khusus untuk kebutuhan Anda.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="steps" style={{ gridTemplateColumns: 'repeat(2,1fr)', marginTop: 12 }}>
              {facts.map(f => (
                <div key={f.k} className="step">
                  <span className="n" style={{ width: 'auto', padding: '0 10px', fontSize: 12 }}>{f.k}</span>
                  <p style={{ marginTop: 10 }}>{f.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="show-row" style={{ marginTop: 72 }}>
              <div className="show-copy">
                <span className="eyebrow">Prinsip Kerja</span>
                <h3 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.8rem)', fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.2 }}>
                  Partner jangka panjang,<br />bukan sekadar vendor.
                </h3>
                <ul className="feat-list">
                  {whyPoints.map(w => (
                    <li key={w.bold}><CheckIcon /><span><b>{w.bold}</b>{w.rest}</span></li>
                  ))}
                </ul>
              </div>
              <TechStrip />
            </div>
          </Reveal>
        </div>
      </section>
      <CtaContact />
    </>
  );
}
