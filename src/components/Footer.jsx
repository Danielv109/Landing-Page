import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img
              src="/logo-eter-white.png"
              alt="Éter"
              height="22"
              style={{ display: "block" }}
            />
            <p>
              Plataforma SaaS modular que se adapta a tu negocio. Solo activa
              los módulos que necesitas, solo paga por lo que usas.
            </p>
          </div>

          <div>
            <div className="footer__column-title">Producto</div>
            <Link to="/#producto" className="footer__link">
              Módulos
            </Link>
            <Link to="/#precios" className="footer__link">
              Precios
            </Link>
            <Link to="/#industrias" className="footer__link">
              Industrias
            </Link>
            <Link to="/#contacto" className="footer__link">
              Demo
            </Link>
          </div>

          <div>
            <div className="footer__column-title">Recursos</div>
            <Link to="/blog" className="footer__link">
              Blog
            </Link>
            <Link to="/#contacto" className="footer__link">
              Centro de ayuda
            </Link>
          </div>

          <div>
            <div className="footer__column-title">Legal</div>
            <Link to="/terminos" className="footer__link">
              Términos de servicio
            </Link>
            <Link to="/privacidad" className="footer__link">
              Política de privacidad
            </Link>
            <Link to="/legal" className="footer__link">
              Aviso legal
            </Link>
            <Link to="/cookies" className="footer__link">
              Cookies
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} Éter. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
