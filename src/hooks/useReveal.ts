import { useEffect, useRef } from 'react';

/**
 * Port perilaku scroll-reveal dari versi vanilla:
 * - elemen yang sudah in-view saat mount langsung tampil
 * - elemen lain di-observe, dapat class "in" saat masuk viewport (threshold .12)
 * - safety net: semua tampil maksimal 2.5 detik setelah load
 *
 * Catatan StrictMode: effect dijalankan 2x (mount-unmount-mount).
 * Class "in" tidak pernah dicabut saat cleanup, jadi hasil akhirnya tetap benar.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // sudah tampil (mis. remount StrictMode) · tidak perlu apa-apa
    if (el.classList.contains('in')) return;

    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      el.classList.add('in');
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);

    const safety = setTimeout(() => el.classList.add('in'), 2500);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return ref;
}
