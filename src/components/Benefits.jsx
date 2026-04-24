import ScrollAnimation from './ScrollAnimation';

const benefits = [
  {
    icon: '🧩',
    title: 'Solo lo que necesitas',
    text: 'Deja de pagar por funciones que nunca usas. Activa módulos individuales y controla tu presupuesto al centavo.',
  },
  {
    icon: '⚡',
    title: 'Implementación en minutos',
    text: 'Sin proyectos de integración de meses. Configura tu plataforma en minutos con asistentes guiados y plantillas por industria.',
  },
  {
    icon: '🔗',
    title: 'Todo conectado',
    text: 'Tus módulos se comunican entre sí automáticamente. La cita del paciente genera la factura, actualiza el expediente y envía el recordatorio.',
  },
  {
    icon: '📈',
    title: 'Escala sin límites',
    text: 'Desde un consultorio con un médico hasta una cadena completa. eter crece contigo sin cambiar de plataforma.',
  },
  {
    icon: '🛡️',
    title: 'Seguridad empresarial',
    text: 'Encriptación de datos, backups automáticos, cumplimiento normativo y roles de acceso granulares para proteger tu información.',
  },
  {
    icon: '🌐',
    title: 'Acceso desde cualquier lugar',
    text: 'Plataforma 100% en la nube. Accede desde tu computadora, tablet o celular sin instalar nada.',
  },
];

const metrics = [
  { number: '40%', label: 'Ahorro promedio vs. software tradicional' },
  { number: '< 5 min', label: 'Tiempo de configuración inicial' },
  { number: '24/7', label: 'Soporte técnico disponible' },
  { number: '99.9%', label: 'Disponibilidad garantizada' },
];

export default function Benefits() {
  return (
    <section className="benefits section" id="beneficios">
      <div className="container">
        <ScrollAnimation>
          <div className="benefits__header">
            <div className="benefits__label">¿Por qué eter?</div>
            <h2 className="benefits__title">
              El problema no es tu negocio. Es tu software.
            </h2>
            <p className="benefits__description">
              Software inflado, implementaciones eternas y costos ocultos. 
              eter resuelve esto con un enfoque modular que pone a tu negocio primero.
            </p>
          </div>
        </ScrollAnimation>

        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <ScrollAnimation key={b.title} delay={(i % 3) + 1}>
              <div className="benefit-card">
                <div className="benefit-card__icon">{b.icon}</div>
                <h3 className="benefit-card__title">{b.title}</h3>
                <p className="benefit-card__text">{b.text}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="benefits__metrics">
            {metrics.map(m => (
              <div className="metric" key={m.label}>
                <div className="metric__number"><span>{m.number}</span></div>
                <div className="metric__label">{m.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
