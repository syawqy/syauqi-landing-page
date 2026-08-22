import Reveal from './Reveal';
import { WA_LINK } from '../data/site';
import { trackEvent } from '../lib/analytics';

export default function CtaContact() {
  return (
    <section className="sec" id="kontak">
      <div className="container">
        <Reveal>
          <div className="cta-box">
            <span className="eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>Mulai Sekarang</span>
            <h2 className="title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Ceritakan bisnis Anda hari ini.<br /><span className="grad">Saya bantu wujudkan versi digitalnya.</span>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '18px auto 0' }}>
              Konsultasi pertama gratis dan tanpa komitmen. Dalam 30 menit, Anda akan mendapat gambaran jelas solusi apa yang paling cocok, meskipun akhirnya tidak jadi pakai jasa saya.
            </p>
            <div className="cta-row">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '14px 28px', fontSize: 15 }}
                onClick={() => trackEvent('cta_whatsapp', { location: 'cta-section' })}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.87-9.9 9.87zm8.42-18.29A11.82 11.82 0 0 0 12.04 0C5.46 0 .11 5.34.11 11.91c0 2.1.55 4.15 1.59 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.58 0 11.93-5.34 11.93-11.91 0-3.18-1.24-6.17-3.5-8.4z" /></svg>
                Chat WhatsApp Syauqi
              </a>
              <a
                href="mailto:syauqi@fuadi.dev"
                className="btn btn-ghost"
                style={{ padding: '14px 28px', fontSize: 15 }}
                onClick={() => trackEvent('cta_email', { location: 'cta-section' })}
              >syauqi@fuadi.dev</a>
            </div>
            <p style={{ marginTop: 22, fontSize: 13, color: 'var(--muted2)' }}>
              WhatsApp 0813 1813 4471 · Senin s.d. Sabtu · 09.00 s.d. 18.00 WIB · Respons maksimal 1×24 jam
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
