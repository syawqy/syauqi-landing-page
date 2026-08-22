/**
 * Lapisan analitik provider-agnostic.
 *
 * Provider aktif dikontrol lewat env Vite (di-set di Netlify → Site settings
 * → Environment variables, atau file .env lokal):
 *   VITE_GA_ID      = G-XXXXXXXXXX        → Google Analytics 4 aktif
 *   VITE_UMAMI_SRC  = https://.../script.js  (URL script Umami)
 *   VITE_UMAMI_ID   = <website-id-umami>
 *
 * Kalau keduanya kosong → semua no-op, halaman tetap jalan normal.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    umami?: {
      track: (event?: string, data?: Record<string, string | number | boolean>) => void;
    };
  }
}

export type AnalyticsEvent =
  | 'cta_whatsapp'       // klik tombol Chat WhatsApp / Konsultasi Gratis ke WA
  | 'cta_email'          // klik alamat email
  | 'view_demo'          // buka halaman demo interaktif
  | 'demo_interaction';  // mainkan kontrol di dalam mockup

type Payload = Record<string, string | number | boolean>;

function gaId(): string | undefined {
  return import.meta.env.VITE_GA_ID as string | undefined;
}

function umamiCfg() {
  return {
    src: import.meta.env.VITE_UMAMI_SRC as string | undefined,
    id: import.meta.env.VITE_UMAMI_ID as string | undefined,
  };
}

/** Suntik script provider ke <head> · dipanggil sekali dari main.tsx. */
export function initAnalytics() {
  const ga = gaId();
  if (ga && !document.querySelector(`script[src*="googletagmanager"]`)) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${ga}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', ga, { send_page_view: false }); // SPA: kita kirim manual per route
  }

  const { src, id } = umamiCfg();
  if (src && id && !document.querySelector(`script[src="${src}"]`)) {
    const s = document.createElement('script');
    s.async = true;
    s.defer = true;
    s.src = src;
    s.setAttribute('data-website-id', id);
    document.head.appendChild(s);
  }
}

/** Page view manual — wajib untuk SPA karena ganti route tidak memuat ulang dokumen. */
export function trackPageView(path: string, title?: string) {
  // Cek window.gtag langsung (bukan gaId()) agar tidak ter-tree-shake saat build tanpa VITE_GA_ID.
  if (window.gtag) {
    window.gtag('event', 'page_view', { page_path: path, page_title: title });
  }
  // Umami melacak page view otomatis via history API.
}

/** Kirim event konversi ke semua provider yang aktif. */
export function trackEvent(name: AnalyticsEvent, payload: Payload = {}) {
  if (window.gtag) window.gtag('event', name, payload);
  if (window.umami) window.umami.track(name, payload);
}
