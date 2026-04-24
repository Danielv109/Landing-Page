import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const plans = [
  {
    name: 'Starter',
    desc: 'Para emprendedores y negocios que inician.',
    monthly: 299,
    annual: 249,
    features: [
      'Hasta 3 módulos',
      '1 usuario incluido',
      'Soporte por email',
      'Actualizaciones automáticas',
      'Backups diarios',
    ],
    featured: false,
    popular: false,
    isContact: false,
  },
  {
    name: 'Profesional',
    desc: 'Para negocios en crecimiento que necesitan más.',
    monthly: 699,
    annual: 579,
    features: [
      'Hasta 6 módulos',
      '2 usuarios incluidos',
      'Soporte prioritario 24/7',
      'API de integración',
      'Reportes avanzados',
      'Automatizaciones inteligentes',
    ],
    featured: true,
    popular: true,
    isContact: false,
  },
  {
    name: 'Empresa',
    desc: 'Para operaciones grandes con necesidades complejas.',
    monthly: null,
    annual: null,
    features: [
      'Hasta 15 módulos',
      'Usuarios ilimitados',
      'Gerente de cuenta dedicado',
      'SLA 99.99%',
      'Integración personalizada',
      'On-boarding completo',
      'Facturación personalizada',
    ],
    featured: false,
    popular: false,
    isContact: true,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pricing section" id="precios">
      <div className="container">
        <ScrollAnimation>
          <div className="pricing__header">
            <div className="pricing__label">Precios</div>
            <h2 className="pricing__title">
              Precios transparentes, sin sorpresas
            </h2>
            <p className="pricing__description">
              Todos los planes incluyen los módulos base. Escala a tu ritmo y paga solo por lo que usas.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="pricing__toggle">
            <span className={`pricing__toggle-label ${!annual ? 'active' : ''}`}>Mensual</span>
            <div
              className={`pricing__toggle-switch ${annual ? 'active' : ''}`}
              onClick={() => setAnnual(!annual)}
              role="switch"
              aria-checked={annual}
              tabIndex={0}
              id="pricing-toggle"
            />
            <span className={`pricing__toggle-label ${annual ? 'active' : ''}`}>Anual</span>
            {annual && <span className="pricing__save-badge">Ahorra 20%</span>}
          </div>
        </ScrollAnimation>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <ScrollAnimation key={plan.name} delay={i + 1}>
              <div className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}>
                {plan.popular && (
                  <div className="pricing-card__popular">Más popular</div>
                )}
                <div className="pricing-card__name">{plan.name}</div>
                <div className="pricing-card__desc">{plan.desc}</div>
                <div className="pricing-card__price">
                  {plan.isContact ? (
                    <span className="pricing-card__amount" style={{ fontSize: '1.5rem' }}>
                      Precio a medida
                    </span>
                  ) : (
                    <>
                      <span className="pricing-card__amount">
                        ${annual ? plan.annual : plan.monthly}
                      </span>
                      <span className="pricing-card__period">MXN/mes</span>
                    </>
                  )}
                </div>
                <div className="pricing-card__billing">
                  {plan.isContact
                    ? 'Según las necesidades de tu operación'
                    : annual ? 'Facturado anualmente' : 'Facturado mensualmente'}
                </div>
                <div className="pricing-card__features">
                  {plan.features.map(f => (
                    <div className="pricing-card__feature" key={f}>
                      <span className="pricing-card__feature-check">✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                <div className="pricing-card__action">
                  <button
                    className={`btn ${plan.featured ? 'btn--white' : 'btn--primary'} btn--large`}
                    onClick={() => scrollTo('contacto')}
                    id={`pricing-cta-${plan.name.toLowerCase()}`}
                  >
                    {plan.isContact
                      ? 'Solicitar plan empresarial'
                      : plan.featured ? 'Empieza gratis ahora' : 'Empieza tu prueba gratis'}
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
