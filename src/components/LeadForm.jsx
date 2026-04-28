import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import ScrollAnimation from "./ScrollAnimation";
import { trackEvent } from "../utils/analytics";

const initialForm = {
  name: "",
  email: "",
  company: "",
  industry: "",
  message: "",
};

const industries = [
  { value: "", label: "Selecciona tu industria" },
  { value: "salud", label: "Salud / Clínicas" },
  { value: "restaurantes", label: "Restaurantes / Alimentos" },
  { value: "retail", label: "Retail / Comercio" },
  { value: "servicios", label: "Servicios Profesionales" },
  { value: "otro", label: "Otro" },
];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "El nombre es requerido";
  if (!form.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Ingresa un email válido";
  }
  if (!form.company.trim()) errors.company = "La empresa es requerida";
  if (!form.industry) errors.industry = "Selecciona una industria";
  return errors;
}

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate single field on blur
    const fieldErrors = validate(form);
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, company: true, industry: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    trackEvent("form_submit", { industry: form.industry });

    try {
      await emailjs.send(
        "service_7215vfu",
        "template_hik9sjh",
        {
          name: form.name,
          email: form.email,
          to_email: "alejandrodcjm@gmail.com",
          company: form.company,
          industry:
            industries.find((i) => i.value === form.industry)?.label ||
            form.industry,
          message: form.message || "Sin mensaje adicional",
        },
        "9V6CpbphTpnUAVPhQ",
      );

      const leads = JSON.parse(localStorage.getItem("eter_leads") || "[]");
      leads.push({ ...form, timestamp: new Date().toISOString() });
      localStorage.setItem("eter_leads", JSON.stringify(leads));

      setStatus("success");
      trackEvent("form_success", { industry: form.industry });
    } catch (err) {
      setStatus("error");
      trackEvent("form_error", { error: err.message });
    }
  };

  if (status === "success") {
    return (
      <section className="cta-section section" id="contacto">
        <div className="cta-section__bg">
          <div className="cta-section__orb cta-section__orb--1" />
          <div className="cta-section__orb cta-section__orb--2" />
        </div>
        <div className="container">
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div className="lead-form">
              <div className="lead-form__success">
                <div className="lead-form__success-icon">✓</div>
                <h3 className="lead-form__success-title">
                  ¡Bienvenido a eter!
                </h3>
                <p className="lead-form__success-text">
                  Hemos recibido tu solicitud. Nuestro equipo se pondrá en
                  contacto contigo en las próximas 24 horas para configurar tu
                  cuenta de prueba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cta-section section" id="contacto">
      <div className="cta-section__bg">
        <div className="cta-section__orb cta-section__orb--1" />
        <div className="cta-section__orb cta-section__orb--2" />
      </div>
      <div className="container">
        <div className="cta-section__inner">
          <ScrollAnimation>
            <div className="cta-section__content">
              <h2 className="cta-section__title">
                Empieza a transformar tu negocio hoy
              </h2>
              <p className="cta-section__text">
                Únete a más de 50 negocios que ya optimizaron sus operaciones
                con eter. Tu prueba gratis de 14 días comienza en 5 minutos.
              </p>
              <div className="cta-section__benefits">
                <div className="cta-section__benefit">
                  <span className="cta-section__benefit-icon">✓</span>
                  14 días de prueba gratis — sin tarjeta de crédito
                </div>
                <div className="cta-section__benefit">
                  <span className="cta-section__benefit-icon">✓</span>
                  Configuración guiada en menos de 5 minutos
                </div>
                <div className="cta-section__benefit">
                  <span className="cta-section__benefit-icon">✓</span>
                  Soporte personalizado durante tu periodo de prueba
                </div>
                <div className="cta-section__benefit">
                  <span className="cta-section__benefit-icon">✓</span>
                  Cancela cuando quieras — sin compromisos
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={2}>
            <form
              className="lead-form"
              onSubmit={handleSubmit}
              noValidate
              id="lead-form"
            >
              <h3 className="lead-form__title">Únete a la beta</h3>

              <div className="lead-form__group">
                <label className="lead-form__label" htmlFor="name">
                  Nombre completo
                </label>
                <input
                  className={`lead-form__input ${errors.name && touched.name ? "error" : ""}`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={status === "loading"}
                />
                {errors.name && touched.name && (
                  <div className="lead-form__error">⚠ {errors.name}</div>
                )}
              </div>

              <div className="lead-form__group">
                <label className="lead-form__label" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  className={`lead-form__input ${errors.email && touched.email ? "error" : ""}`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@empresa.com"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={status === "loading"}
                />
                {errors.email && touched.email && (
                  <div className="lead-form__error">⚠ {errors.email}</div>
                )}
              </div>

              <div className="lead-form__group">
                <label className="lead-form__label" htmlFor="company">
                  Empresa
                </label>
                <input
                  className={`lead-form__input ${errors.company && touched.company ? "error" : ""}`}
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Nombre de tu empresa o negocio"
                  value={form.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={status === "loading"}
                />
                {errors.company && touched.company && (
                  <div className="lead-form__error">⚠ {errors.company}</div>
                )}
              </div>

              <div className="lead-form__group">
                <label className="lead-form__label" htmlFor="industry">
                  Industria
                </label>
                <select
                  className={`lead-form__select ${errors.industry && touched.industry ? "error" : ""}`}
                  id="industry"
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={status === "loading"}
                >
                  {industries.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.industry && touched.industry && (
                  <div className="lead-form__error">⚠ {errors.industry}</div>
                )}
              </div>

              <div className="lead-form__group">
                <label className="lead-form__label" htmlFor="message">
                  Mensaje (opcional)
                </label>
                <textarea
                  className="lead-form__textarea"
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu negocio y lo que necesitas..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  rows={3}
                />
              </div>

              {status === "error" && (
                <div
                  style={{
                    padding: "var(--space-3) var(--space-4)",
                    background: "rgba(239,68,68,0.1)",
                    borderRadius: "var(--radius-lg)",
                    color: "var(--color-error)",
                    fontSize: "var(--font-size-sm)",
                    marginBottom: "var(--space-4)",
                    textAlign: "center",
                  }}
                >
                  Ocurrió un error. Por favor intenta de nuevo.
                </div>
              )}

              <div className="lead-form__submit">
                <button
                  type="submit"
                  className="btn btn--accent btn--large"
                  disabled={status === "loading"}
                  id="submit-lead"
                  style={{
                    background: "#000",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <span className="spinner" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <span>Empieza tu prueba gratis </span>
                      <span className="btn__arrow">→</span>
                    </>
                  )}
                </button>
              </div>

              <p
                style={{
                  fontSize: "var(--font-size-xs)",
                  color: "var(--color-gray-500)",
                  textAlign: "center",
                  marginTop: "var(--space-4)",
                }}
              >
                Al registrarte aceptas nuestros{" "}
                <Link
                  to="/terminos"
                  style={{
                    textDecoration: "underline",
                    color: "var(--color-gray-400)",
                  }}
                >
                  Términos de Servicio
                </Link>{" "}
                y{" "}
                <Link
                  to="/privacidad"
                  style={{
                    textDecoration: "underline",
                    color: "var(--color-gray-400)",
                  }}
                >
                  Política de Privacidad
                </Link>
              </p>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
