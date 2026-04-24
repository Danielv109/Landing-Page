import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'Producto', id: 'producto' },
    { label: 'Industrias', id: 'industrias' },
    { label: 'Beneficios', id: 'beneficios' },
    { label: 'Precios', id: 'precios' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="nav">
        <div className="container navbar__inner">
          <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            <img 
              src="/icon-eter.jpg" 
              alt="eter" 
              width="28" 
              height="28" 
              style={{ borderRadius: 6, filter: scrolled ? 'none' : 'invert(1)' }} 
            />
            <span style={{ 
              fontWeight: 800, 
              fontSize: '1.25rem', 
              letterSpacing: '-0.03em',
              color: scrolled ? '#000' : '#fff'
            }}>eter</span>
          </div>

          <div className="navbar__links">
            {links.map(link => (
              <span
                key={link.id}
                className="navbar__link"
                onClick={() => scrollTo(link.id)}
                style={{ color: scrolled ? undefined : 'rgba(255,255,255,0.7)' }}
              >
                {link.label}
              </span>
            ))}
          </div>

          <div className="navbar__cta">
            <button
              className="btn btn--primary"
              onClick={() => scrollTo('contacto')}
              style={!scrolled ? { 
                background: '#fff', 
                color: '#000' 
              } : {}}
            >
              Únete a la beta
            </button>
            <button
              className="navbar__mobile-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <span style={{ background: scrolled ? '#000' : '#fff' }} />
              <span style={{ background: scrolled ? '#000' : '#fff' }} />
              <span style={{ background: scrolled ? '#000' : '#fff' }} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`navbar__mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="navbar__mobile-close" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú">
          ✕
        </button>
        {links.map(link => (
          <span
            key={link.id}
            className="navbar__link"
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </span>
        ))}
        <button className="btn btn--primary btn--large" onClick={() => scrollTo('contacto')}>
          Únete a la beta
        </button>
      </div>
    </>
  );
}
