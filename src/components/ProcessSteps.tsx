import Reveal from './Reveal';
import { steps } from '../data/content';

export default function ProcessSteps() {
  return (
    <section className="sec" id="proses">
      <div className="container">
        <Reveal>
          <div className="sec-head center">
            <span className="eyebrow">Cara Kerja</span>
            <h2 className="title">Proses transparan. <span className="dim">Tanpa istilah teknis yang membingungkan.</span></h2>
            <p>Anda selalu tahu proyek sedang berada di tahap apa dan kapan selesai, lengkap dengan laporan progres rutin dalam bahasa yang mudah dipahami.</p>
          </div>
        </Reveal>
        <div className="steps">
          {steps.map(st => (
            <Reveal key={st.n}>
              <div className="step">
                <span className="n">{st.n}</span>
                <h4>{st.title}</h4>
                <p>{st.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
