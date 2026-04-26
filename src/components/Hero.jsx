import { useState, useEffect } from "react";
import ScrollAnimation from "./ScrollAnimation";

const allLogos = [
  "MedGroup",
  "FoodTech",
  "RetailMX",
  "ProServ",
  "HealthNet",
  "DataSoft",
  "NovaCare",
  "GastroHub",
  "VitaLab",
  "CloudBiz",
];

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setOffset((prev) => (prev + 5) % allLogos.length);
        setFading(false);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visible = Array.from(
    { length: 5 },
    (_, i) => allLogos[(offset + i) % allLogos.length],
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      {/* Animated mesh background */}
      <div className="hero__bg">
        <div className="hero__mesh">
          <div className="hero__mesh-line hero__mesh-line--1" />
          <div className="hero__mesh-line hero__mesh-line--2" />
          <div className="hero__mesh-line hero__mesh-line--3" />
          <div className="hero__mesh-line hero__mesh-line--4" />
          <div className="hero__mesh-line hero__mesh-line--5" />
          <div className="hero__mesh-line hero__mesh-line--6" />
        </div>
        <div className="hero__gradient-orb hero__gradient-orb--1" />
        <div className="hero__gradient-orb hero__gradient-orb--2" />
        <div className="hero__gradient-orb hero__gradient-orb--3" />

        {/* Animated waves at bottom */}
        <div className="hero__waves">
          <svg
            className="hero__wave hero__wave--1"
            viewBox="0 0 2880 200"
            fill="none"
          >
            <path
              d="M0,100 C480,200 960,0 1440,100 C1920,200 2400,0 2880,100 L2880,200 L0,200 Z"
              fill="rgba(99,102,241,0.3)"
            />
          </svg>
          <svg
            className="hero__wave hero__wave--2"
            viewBox="0 0 2880 200"
            fill="none"
          >
            <path
              d="M0,120 C360,40 720,180 1080,80 C1440,20 1800,160 2160,60 C2520,160 2700,40 2880,120 L2880,200 L0,200 Z"
              fill="rgba(139,92,246,0.2)"
            />
          </svg>
          <svg
            className="hero__wave hero__wave--3"
            viewBox="0 0 2880 200"
            fill="none"
          >
            <path
              d="M0,140 C320,80 640,180 960,100 C1280,20 1600,160 1920,100 C2240,40 2560,140 2880,100 L2880,200 L0,200 Z"
              fill="rgba(59,130,246,0.15)"
            />
          </svg>
        </div>
      </div>

      <div className="container hero__content">
        <div className="hero__left">
          <h1 className="hero__title">
            Tu negocio necesita herramientas.
            <br />
            No <span>software innecesario.</span>
          </h1>

          <p className="hero__subtitle">
            eter es la plataforma modular que se adapta a tu negocio. Médicos,
            restaurantes, retail — elige solo los módulos que necesitas y no
            pagues de más.
          </p>

          <div className="hero__actions">
            <button
              className="btn btn--accent"
              onClick={() => scrollTo("contacto")}
              id="hero-cta"
            >
              Empieza tu prueba gratis <span className="btn__arrow">→</span>
            </button>
            <button
              className="btn btn--secondary"
              onClick={() => scrollTo("producto")}
              id="hero-learn-more"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                color: "#fff",
                borderRadius: "999px",
              }}
            >
              Conoce más
            </button>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__3d-shape">
            <div className="hero__morph hero__morph--1" />
            <div className="hero__morph hero__morph--2" />
            <div className="hero__morph hero__morph--3" />
          </div>
        </div>
      </div>

      <div className="container hero__bottom">
        <div className="hero__logos">
          {visible.map((logo) => (
            <span
              key={logo}
              className="hero__logo-item"
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(4px)" : "translateY(0)",
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
