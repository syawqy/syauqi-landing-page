import { useMemo, useState } from 'react';
import { DemoTag } from './DashboardMock';
import { trackEvent } from '../../lib/analytics';

type Cat = 'Semua' | 'Kopi' | 'Non-Kopi' | 'Snack';
interface Product { emoji: string; name: string; price: number; cat: Exclude<Cat, 'Semua'> }

const PRODUCTS: Product[] = [
  { emoji: '☕', name: 'Americano', price: 18, cat: 'Kopi' },
  { emoji: '🥛', name: 'Latte', price: 22, cat: 'Kopi' },
  { emoji: '🍵', name: 'Matcha', price: 25, cat: 'Non-Kopi' },
  { emoji: '🍞', name: 'Roti Bakar', price: 15, cat: 'Snack' },
  { emoji: '🍟', name: 'Kentang', price: 18, cat: 'Snack' },
  { emoji: '🧋', name: 'Milk Tea', price: 20, cat: 'Non-Kopi' },
];

const CATS: { label: Cat; cls: string }[] = [
  { label: 'Semua', cls: 'pill-green' },
  { label: 'Kopi', cls: 'pill-amber' },
  { label: 'Non-Kopi', cls: 'pill-blue' },
  { label: 'Snack', cls: 'pill-red' },
];

interface CartLine { name: string; price: number; qty: number }

export default function PosMock() {
  const [cat, setCat] = useState<Cat>('Semua');
  const [cart, setCart] = useState<CartLine[]>([
    { name: 'Americano', price: 18, qty: 2 },
    { name: 'Roti Bakar', price: 15, qty: 1 },
    { name: 'Milk Tea', price: 20, qty: 1 },
  ]);
  const [paid, setPaid] = useState(false);

  const visible = PRODUCTS.filter(p => cat === 'Semua' || p.cat === cat);
  const total = useMemo(() => cart.reduce((s, l) => s + l.price * l.qty, 0), [cart]);

  const add = (p: Product) => {
    if (paid) return;
    setCart(c => {
      const found = c.find(l => l.name === p.name);
      if (found) return c.map(l => l.name === p.name ? { ...l, qty: l.qty + 1 } : l);
      return [...c, { name: p.name, price: p.price, qty: 1 }];
    });
  };
  const chQty = (name: string, d: number) => {
    if (paid) return;
    setCart(c => c
      .map(l => l.name === name ? { ...l, qty: l.qty + d } : l)
      .filter(l => l.qty > 0));
  };
  const pay = () => {
    if (!cart.length) return;
    setPaid(true);
    trackEvent('demo_interaction', { mock: 'pos', action: 'pay', value: total });
    setTimeout(() => { setPaid(false); setCart([]); }, 2000);
  };

  return (
    <div className="ui" style={{ position: 'relative' }}>
      <div className="ui-topbar">
        <div className="ui-brand"><span className="ui-logo" />Kasir Kedai Kopi Nusantara</div>
        <span className="pill-blue">Shift: Budi · Kasir 1</span>
      </div>
      <div className="pos-wrap" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', minHeight: 210 }}>
        <div style={{ padding: 12, borderRight: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
            {CATS.map(c => (
              <button
                key={c.label}
                onClick={() => setCat(c.label)}
                className={c.label === cat ? c.cls : 'pill-' + (c.cls === 'pill-green' ? 'blue' : 'green')}
                style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', opacity: c.label === cat ? 1 : 0.75 }}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 7 }}>
            {visible.map(p => (
              <button
                key={p.name}
                onClick={() => add(p)}
                style={{
                  background: '#161c25', border: '1px solid var(--border)', borderRadius: 9,
                  padding: 9, textAlign: 'center', cursor: 'pointer', color: 'inherit',
                  fontFamily: 'inherit',
                }}
              >
                <div style={{ fontSize: 15 }}>{p.emoji}</div>
                <b style={{ fontSize: 9.5, display: 'block', marginTop: 3 }}>{p.name}</b>
                <span style={{ color: 'var(--accent)', fontSize: 9 }}>{p.price}rb</span>
              </button>
            ))}
          </div>
        </div>
        <div style={{ padding: 12, background: '#12161d', position: 'relative' }}>
          {paid ? (
            <div style={{ textAlign: 'center', paddingTop: 46 }}>
              <div style={{ fontSize: 26 }}>✅</div>
              <b style={{ fontSize: 12, display: 'block', marginTop: 6, color: 'var(--accent)' }}>Pembayaran Berhasil</b>
              <span style={{ fontSize: 9.5, color: 'var(--muted)', display: 'block', marginTop: 2 }}>Struk #1042 · QRIS</span>
            </div>
          ) : (
            <>
              <b style={{ fontSize: 10.5 }}>Pesanan #1042 · Dine-in</b>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 5, fontSize: 9.5, color: 'var(--muted)' }}>
                {cart.length === 0 && <span style={{ color: 'var(--muted2)' }}>Belum ada item · klik produk di kiri</span>}
                {cart.map(l => (
                  <div key={l.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{l.name}</span>
                    <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                      <button onClick={() => chQty(l.name, -1)} style={qtyBtn}>−</button>
                      <span>×{l.qty}</span>
                      <button onClick={() => chQty(l.name, 1)} style={qtyBtn}>+</button>
                      <b style={{ color: 'var(--text)', minWidth: 24, textAlign: 'right' }}>{l.price * l.qty}rb</b>
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px dashed var(--border2)', marginTop: 9, paddingTop: 8, display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 12 }}>
                <span>Total</span><span>Rp {(total * 1000).toLocaleString('id-ID')}</span>
              </div>
              <button
                onClick={pay}
                disabled={!cart.length}
                style={{
                  width: '100%', marginTop: 9, background: cart.length ? 'var(--accent)' : 'var(--surface)',
                  color: cart.length ? '#05231a' : 'var(--muted2)', textAlign: 'center', border: 'none',
                  borderRadius: 8, padding: 7, fontWeight: 800, fontSize: 10, cursor: cart.length ? 'pointer' : 'not-allowed',
                  fontFamily: 'inherit',
                }}
              >
                Bayar · QRIS / Tunai
              </button>
            </>
          )}
        </div>
      </div>
      <DemoTag />
    </div>
  );
}

const qtyBtn: React.CSSProperties = {
  background: '#20262f', color: 'var(--text)', border: 'none', borderRadius: 5,
  width: 16, height: 16, lineHeight: 1, cursor: 'pointer', fontSize: 10, fontFamily: 'inherit',
};
