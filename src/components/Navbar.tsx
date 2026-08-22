import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const menuLinks = [
  { to: '/#karya', label: 'Contoh Karya' },
  { to: '/#layanan', label: 'Layanan' },
  { to: '/#proses', label: 'Cara Kerja' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // auto-close saat pindah route
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const home = location.pathname === '/';
  const anchorHref = (hash: string) => (home ? hash : '/' + hash);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">SF</span>Syauqi <span style={{ color: 'var(--accent)' }}>Fuadi</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/demo/dashboard">Demo Interaktif</NavLink>
          <a href={anchorHref('#karya')}>Contoh Karya</a>
          <NavLink to="/layanan">Layanan</NavLink>
          <NavLink to="/tentang">Tentang</NavLink>
          <a href={anchorHref('#kontak')} className="btn btn-primary btn-sm">Konsultasi Gratis</a>
        </nav>
        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setOpen(o => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
        </button>
      </div>
      <div className={'mobile-menu' + (open ? ' open' : '')} id="mmenu">
        {menuLinks.map(l => (
          <a key={l.to} href={anchorHref(l.to.slice(1))}>{l.label}</a>
        ))}
        <Link to="/demo/dashboard">Demo Interaktif</Link>
        <NavLink to="/layanan">Layanan</NavLink>
        <NavLink to="/tentang">Tentang</NavLink>
        <a href={anchorHref('kontak').startsWith('/') ? '/#kontak' : '#kontak'} style={{ color: 'var(--accent)', fontWeight: 700 }}>Konsultasi Gratis →</a>
      </div>
    </header>
  );
}
