import type { ReactNode, CSSProperties } from 'react';
import { useReveal } from '../hooks/useReveal';

/** Elemen <section> generik dengan reveal + style opsional. */
export function Section({ id, children, style, className = '' }: { id?: string; children: ReactNode; style?: CSSProperties; className?: string }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} className={`sec ${className}`.trim()} style={style}>
      {children}
    </section>
  );
}
