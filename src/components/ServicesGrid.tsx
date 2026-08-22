import Reveal from './Reveal';
import Icon from './Icon';
import { services } from '../data/services';

export default function ServicesGrid({ extended = false }: { extended?: boolean }) {
  return (
    <>
      <Reveal>
        <div className="sec-head">
          <span className="eyebrow">Layanan</span>
          <h2 className="title">
            {extended
              ? 'Enam layanan, satu penanggung jawab.'
              : 'Satu orang untuk semua kebutuhan digital bisnis Anda.'}
          </h2>
          <p>
            {extended
              ? 'Setiap layanan punya scope jelas, timeline transparan, dan satu orang yang mempertanggungjawabkan hasilnya: saya.'
              : 'Dari konsultasi strategi sampai aplikasi jalan, semuanya saya tangani sendiri. Anda tidak perlu pusing koordinasi banyak vendor.'}
          </p>
        </div>
      </Reveal>
      <div className="svc-grid">
        {services.map(s => (
          <Reveal key={s.title}>
            <div className="svc">
              <div className="ic"><Icon name={s.icon} /></div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
