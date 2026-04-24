import ScrollAnimation from './ScrollAnimation';

const testimonials = [
  {
    stars: 5,
    text: '"Antes usábamos 4 herramientas distintas. Con eter condensamos todo en una sola plataforma y nuestro equipo dejó de perder tiempo cambiando entre apps."',
    name: 'Dra. María López',
    role: 'Directora de Clínica Integral',
    initials: 'ML',
  },
  {
    stars: 5,
    text: '"El módulo de comandas cambió completamente nuestra cocina. Los pedidos llegan en tiempo real, los errores bajaron un 80% y los clientes reciben su comida más rápido."',
    name: 'Roberto Sánchez',
    role: 'Gerente de Restaurante La Mesa',
    initials: 'RS',
  },
  {
    stars: 5,
    text: '"Lo mejor de eter es que solo pago por lo que uso. Empecé con agenda y facturación, y cuando crecí agregué inventario. Sin sorpresas en la cuenta."',
    name: 'Ana García',
    role: 'Fundadora de Estudio Belleza AG',
    initials: 'AG',
  },
];

const logos = [
  'MedGroup', 'FoodTech', 'RetailMX', 'ProServ', 'HealthNet',
  'DataSoft', 'NovaCare', 'GastroHub', 'VitaLab', 'CloudBiz',
];

export default function Testimonials() {
  // Duplicate the logos array to create seamless infinite loop
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="testimonials section" id="testimonios">
      <div className="container">
        <ScrollAnimation>
          <div className="testimonials__header">
            <div className="testimonials__label">Testimonios</div>
            <h2 className="testimonials__title">
              Lo que dicen quienes ya usan eter
            </h2>
          </div>
        </ScrollAnimation>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <ScrollAnimation key={t.name} delay={i + 1}>
              <div className="testimonial-card">
                <div className="testimonial-card__stars">
                  {'★'.repeat(t.stars)}
                </div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="testimonials__marquee-wrapper">
            <div className="testimonials__marquee-fade testimonials__marquee-fade--left" />
            <div className="testimonials__marquee-fade testimonials__marquee-fade--right" />
            <div className="testimonials__marquee">
              <div className="testimonials__marquee-track">
                {marqueeLogos.map((logo, i) => (
                  <span key={`${logo}-${i}`} className="testimonials__marquee-item">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
