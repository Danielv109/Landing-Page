import { Stethoscope, UtensilsCrossed, Store, Briefcase } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const industries = [
  {
    icon: Stethoscope,
    title: 'Clínicas y Consultorios',
    text: 'Gestiona expedientes clínicos, agenda de citas, recetas electrónicas y facturación. Todo en cumplimiento con la NOM-004-SSA3.',
    features: ['Expediente clínico', 'Recetas digitales', 'Agenda médica', 'Facturación CFDI', 'Historial del paciente'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurantes y Cafeterías',
    text: 'Comandas digitales, control de inventario de ingredientes, punto de venta, reservaciones y análisis de ventas por platillo.',
    features: ['Comandas cocina', 'Inventario ingredientes', 'POS integrado', 'Reservaciones', 'Análisis de ventas'],
  },
  {
    icon: Store,
    title: 'Retail y Comercio',
    text: 'Punto de venta, gestión de inventario multi-sucursal, seguimiento de proveedores, facturación y programas de lealtad.',
    features: ['Multi-sucursal', 'Punto de venta', 'Proveedores', 'Lealtad', 'Inventario en tiempo real'],
  },
  {
    icon: Briefcase,
    title: 'Servicios Profesionales',
    text: 'Ideal para despachos, consultorías, salones de belleza y más. CRM, facturación, agenda y seguimiento de proyectos en un solo lugar.',
    features: ['CRM avanzado', 'Proyectos', 'Agenda online', 'Facturación', 'Cotizaciones'],
  },
];

export default function Industries() {
  return (
    <section className="industries section" id="industrias">
      <div className="container">
        <ScrollAnimation>
          <div className="industries__header">
            <div className="industries__label">Industrias</div>
            <h2 className="industries__title">
              Diseñado para tu industria, personalizado para tu negocio
            </h2>
            <p className="industries__description">
              Cada industria tiene necesidades únicas. Éter ofrece configuraciones especializadas
              para que arranques en minutos, no en meses.
            </p>
          </div>
        </ScrollAnimation>

        <div className="industries__grid">
          {industries.map((ind, i) => (
            <ScrollAnimation key={ind.title} delay={(i % 4) + 1}>
              <div className="industry-card">
                <div className="industry-card__icon">
                  <ind.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="industry-card__title">{ind.title}</h3>
                <p className="industry-card__text">{ind.text}</p>
                <div className="industry-card__features">
                  {ind.features.map(f => (
                    <span className="industry-card__feature" key={f}>{f}</span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
