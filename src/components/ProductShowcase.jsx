import ScrollAnimation from './ScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Elige tu industria',
    text: 'Selecciona tu tipo de negocio: clínica médica, restaurante, retail o servicios profesionales. eter se configura automáticamente con los módulos más relevantes para ti.',
  },
  {
    number: '02',
    title: 'Activa los módulos que necesitas',
    text: 'Agenda, facturación electrónica, inventario, CRM, expedientes... Activa solo lo que usas. Sin paquetes inflados ni funciones que nunca abrirás.',
  },
  {
    number: '03',
    title: 'Gestiona todo desde un solo lugar',
    text: 'Un dashboard unificado donde todos tus módulos se integran perfectamente. Datos conectados, flujos automatizados y reportes inteligentes.',
  },
];

const modules = [
  { name: 'Agenda', desc: 'Citas y reservaciones' },
  { name: 'Facturación', desc: 'CFDI y cobros' },
  { name: 'Inventario', desc: 'Stock en tiempo real' },
  { name: 'CRM', desc: 'Gestión de clientes' },
  { name: 'Expedientes', desc: 'Historial clínico' },
  { name: 'Reportes', desc: 'Analíticas y KPIs' },
  { name: 'Comandas', desc: 'Pedidos de cocina' },
  { name: 'Mensajería', desc: 'WhatsApp y SMS' },
  { name: 'Punto de Venta', desc: 'POS integrado' },
  { name: 'App Móvil', desc: 'Acceso desde celular' },
  { name: 'Seguridad', desc: 'Roles y permisos' },
  { name: 'Automatización', desc: 'Flujos inteligentes' },
];

export default function ProductShowcase() {
  return (
    <section className="product section" id="producto">
      <div className="container">
        <ScrollAnimation>
          <div className="product__header">
            <div className="product__label">Cómo funciona</div>
            <h2 className="product__title">
              Un sistema que se adapta a ti, no al revés
            </h2>
            <p className="product__description">
              En lugar de pagar por un software gigante que no usas, eter te permite construir 
              tu plataforma ideal módulo por módulo.
            </p>
          </div>
        </ScrollAnimation>

        <div className="product__steps">
          {steps.map((step, i) => (
            <ScrollAnimation key={step.number} delay={i + 1}>
              <div className="product__step">
                <div className="product__step-number">{step.number}</div>
                <h3 className="product__step-title">{step.title}</h3>
                <p className="product__step-text">{step.text}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <div className="product__label">Módulos disponibles</div>
            <h3 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Todo lo que tu negocio necesita
            </h3>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="product__modules-list">
            {modules.map((mod) => (
              <div className="product__module-item" key={mod.name}>
                <div className="product__module-check">✓</div>
                <div className="product__module-info">
                  <span className="product__module-name">{mod.name}</span>
                  <span className="product__module-sep">—</span>
                  <span className="product__module-desc">{mod.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
