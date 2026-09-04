import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import Reveal from './Reveal';
import BrowserFrame from './BrowserFrame';
import { CheckIcon } from './Icon';
import { showcases } from '../data/showcases';
import { MOCK_MAP } from './MockUI';

function ShowcaseCard({ s, flip }: { s: (typeof showcases)[number]; flip: boolean }) {
  const Mock = MOCK_MAP[s.slug];
  return (
    <Reveal>
      <div className={'show-row' + (flip ? ' flip' : '')}>
        {!flip && (
          <div className="show-copy">
            <Copy s={s} />
          </div>
        )}
        <BrowserFrame url={s.url}><Suspense fallback={<div style={{ height: 400 }} />}><Mock /></Suspense></BrowserFrame>
        {flip && (
          <div className="show-copy">
            <Copy s={s} />
          </div>
        )}
      </div>
    </Reveal>
  );
}

function Copy({ s }: { s: (typeof showcases)[number] }) {
  return (
    <>
      <span className="num">{s.num} · {s.category}</span>
      <h3>{s.headline}</h3>
      <p>{s.desc}</p>
      <ul className="feat-list">
        {s.features.map(f => (
          <li key={f}><CheckIcon />{f}</li>
        ))}
      </ul>
      <div className="show-tags">
        {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
        <Link to={`/demo/${s.slug}`} className="tag" style={{ color: 'var(--accent)', borderColor: 'rgba(52,211,153,.4)', fontWeight: 700 }}>
          Buka demo interaktif →
        </Link>
      </div>
    </>
  );
}

export default function ShowcaseSection() {
  return (
    <section className="sec" id="karya">
      <div className="container">
        <Reveal>
          <div className="sec-head center">
            <span className="eyebrow">Contoh Karya</span>
            <h2 className="title">Jangan bayangkan. <span className="dim">Lihat contoh UI-nya.</span></h2>
            <p>Contoh antarmuka di bawah ini adalah dummy yang menggambarkan jenis aplikasi yang bisa saya bangun untuk bisnis Anda. Pola desainnya nyata dan sudah terbukti dipakai di lapangan.</p>
          </div>
        </Reveal>
        {showcases.map((s, i) => (
          <ShowcaseCard key={s.slug} s={s} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
