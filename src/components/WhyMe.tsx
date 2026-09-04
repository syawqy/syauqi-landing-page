import Reveal from './Reveal';
import Icon, { CheckIcon } from './Icon';
import { whyPoints, whyCards } from '../data/content';

export default function WhyMe() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="show-row" style={{ marginTop: 0, gap: 64 }}>
            <div className="show-copy">
              <span className="eyebrow">Kenapa Syauqi Fuadi</span>
              <h2 className="title" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}>Partner jangka panjang,<br />bukan sekadar vendor.</h2>
              <p style={{ marginTop: 16 }}>Banyak proyek IT gagal bukan karena teknologinya, tapi karena developer-nya hilang setelah bayaran lunas. Cara saya bekerja beda:</p>
              <ul className="feat-list">
                {whyPoints.map(w => (
                  <li key={w.bold}><CheckIcon /><span><b>{w.bold}</b>{w.rest}</span></li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, gridAutoRows: '1fr' }}>
              {whyCards.map(c => (
                <Reveal key={c.title}>
                  <div className="svc" style={{ margin: 0 }}>
                    <div className="ic"><Icon name={c.icon} size={20} /></div>
                    <h3 style={{ fontSize: '.9rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{c.title}</h3>
                    <p style={{ fontSize: '.82rem' }}>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
