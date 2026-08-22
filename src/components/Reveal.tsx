import type { ReactNode, CSSProperties } from 'react';
import { useReveal } from '../hooks/useReveal';

/**
 * Wrapper reveal: div dengan class .reveal + animasi masuk viewport.
 * SEMUA elemen ber-animasi harus lewat sini (bukan class="reveal" langsung),
 * agar hook terpasang dan IntersectionObserver aktif.
 */
export default function Reveal({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
