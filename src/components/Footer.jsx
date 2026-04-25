export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img 
              src="/logo-eter-white.png" 
              alt="eter" 
              height="22" 
              style={{ display: 'block' }} 
            />
            <p>
              Plataforma SaaS modular que se adapta a tu negocio. 
              Solo activa los módulos que necesitas, solo paga por lo que usas.
            </p>
          </div>

          <div>
            <div className="footer__column-title">Producto</div>
            <a href="/#producto" className="footer__link">Módulos</a>
            <a href="/#precios" className="footer__link">Precios</a>
            <a href="/#industrias" className="footer__link">Industrias</a>
            <a href="/#contacto" className="footer__link">Demo</a>
          </div>

          <div>
            <div className="footer__column-title">Recursos</div>
            <a href="/blog" className="footer__link">Blog</a>
            <a href="/#contacto" className="footer__link">Centro de ayuda</a>
          </div>

          <div>
            <div className="footer__column-title">Legal</div>
            <a href="/terms" className="footer__link">Términos de servicio</a>
            <a href="/privacy" className="footer__link">Política de privacidad</a>
            <a href="/legal" className="footer__link">Aviso legal</a>
            <a href="/cookies" className="footer__link">Cookies</a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} eter. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
