import { useState } from 'react';
import { DemoTag } from './DashboardMock';
import { trackEvent } from '../../lib/analytics';

interface Prod { name: string; price: string; badge: string; badgeCls: string; grad: string }
const PRODUCTS: Prod[] = [
  { name: 'Kemeja Parang', price: 'Rp 189rb', badge: 'Best Seller', badgeCls: 'pill-green', grad: 'linear-gradient(135deg,#7c3aed,#c084fc)' },
  { name: 'Kain Mega Mendung', price: 'Rp 250rb', badge: 'Baru', badgeCls: 'pill-blue', grad: 'linear-gradient(135deg,#0ea5a4,#67e8f9)' },
  { name: 'Selimut Batik', price: 'Rp 320rb', badge: '-20%', badgeCls: 'pill-red', grad: 'linear-gradient(135deg,#d97706,#fbbf24)' },
];

const CATS = ['Semua', 'Pakaian', 'Kain', 'Dekorasi'] as const;

export default function EcommerceMock() {
  const [cat, setCat] = useState<(typeof CATS)[number]>('Semua');
  const [cart, setCart] = useState(3);

  // filter dummy: tiap kategori menampilkan subset berbeda
  const visible =
    cat === 'Semua' ? PRODUCTS :
    cat === 'Pakaian' ? PRODUCTS.filter(p => p.name.startsWith('Kemeja')) :
    cat === 'Kain' ? PRODUCTS.filter(p => p.name.startsWith('Kain')) :
    PRODUCTS.filter(p => p.name.startsWith('Selimut'));

  return (
    <div className="ui" style={{ position: 'relative' }}>
      <div className="ui-topbar">
        <div className="ui-brand"><span className="ui-logo" />Batik Nusantara</div>
        <div style={{ display: 'flex', gap: 10, color: 'var(--muted)', fontSize: 10, alignItems: 'center' }}>
          <span>Katalog</span><span>Promo</span>
          <span style={{ position: 'relative' }}>🛍<i style={{
            position: 'absolute', top: -6, right: -8, background: 'var(--accent)', color: '#05231a',
            borderRadius: 999, fontSize: 7.5, fontWeight: 800, padding: '1px 4px', fontStyle: 'normal',
          }} data-testid="cart-badge">{cart}</i></span>
        </div>
      </div>
      <div style={{ padding: 12 }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
          {CATS.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={'pill-' + (c === cat ? 'green' : 'blue')}
              style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', opacity: c === cat ? 1 : .75 }}
            >
              {c}
            </button>
          ))}
        </div>
        <div style={{
          background: '#161c25', border: '1px solid var(--border)', borderRadius: 9,
          padding: '8px 11px', color: 'var(--muted2)', fontSize: 9.5, marginBottom: 11,
        }}>🔍 Cari batik, kemeja, kaos…</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 9 }}>
          {visible.map(p => (
            <div key={p.name} style={{ background: '#161c25', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ height: 52, background: p.grad }} />
              <div style={{ padding: 7 }}>
                <b style={{ fontSize: 9.5, display: 'block' }}>{p.name}</b>
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 9.5 }}>{p.price}</span>
                <div style={{ marginTop: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={p.badgeCls}>{p.badge}</span>
                  <button
                    onClick={() => { setCart(c => c + 1); trackEvent('demo_interaction', { mock: 'ecommerce', action: 'add-to-cart', value: p.name }); }}
                    style={addBtn}
                  >+ Keranjang</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 10, background: '#161c25', border: '1px solid var(--border)', borderRadius: 9,
          padding: '8px 11px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: 9.5, color: 'var(--muted)' }}>Gratis ongkir min. belanja Rp 300rb · Bayar pakai QRIS</span>
          <span className="pill-green" style={{ cursor: 'pointer' }}>Checkout →</span>
        </div>
      </div>
      <DemoTag />
    </div>
  );
}

const addBtn: React.CSSProperties = {
  background: 'rgba(52,211,153,.15)', color: 'var(--accent)', border: 'none', borderRadius: 6,
  fontSize: 8.5, fontWeight: 700, padding: '3px 6px', cursor: 'pointer', fontFamily: 'inherit',
};
