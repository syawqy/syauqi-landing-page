import { useState, useEffect, useRef } from 'react';

/**
 * Port animasi counter dari versi vanilla (data-count / data-suffix):
 * durasi 1400ms, easing cubic out (1-(1-p)^3), trigger saat elemen
 * masuk viewport dengan threshold .5, hanya sekali.
 */
export function useCountUp(target: number, suffix: string) {
  const [display, setDisplay] = useState('0' + suffix);
  const ref = useRef<HTMLElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (started.current) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(target * ease) + suffix);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // sudah in-view saat mount · langsung animasi
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      run();
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      run();
      return;
    }

    const cio = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            run();
            cio.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    cio.observe(el);
    return () => cio.disconnect();
  }, [target, suffix]);

  return { ref, display };
}
