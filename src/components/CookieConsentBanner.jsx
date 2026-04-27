import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "eter_cookie_consent_v1";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
      if (!accepted) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
    >
      <p className="cookie-banner__text">
        Este sitio utiliza cookies propias y de terceros para garantizar la
        operatividad de nuestra plataforma SaaS, gestionar la autenticación y
        realizar análisis de tráfico. Al continuar navegando, usted acepta
        nuestra [
        <Link to="/cookies" className="cookie-banner__link">
          Política de Cookies
        </Link>
        ].
      </p>
      <button className="cookie-banner__button" onClick={handleAccept}>
        Aceptar
      </button>
    </div>
  );
}
