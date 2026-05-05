import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Calendar, Banknote, BarChart2, Package, Lock, Link2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    icon: Rocket,
    title: 'Primeros pasos',
    items: [
      {
        title: 'Crear tu cuenta',
        description: 'Regístrate en Éter con tu correo electrónico. No necesitas tarjeta de crédito para comenzar tu prueba gratuita de 14 días.',
      },
      {
        title: 'Seleccionar tu industria',
        description: 'Elige el tipo de negocio (clínica, restaurante, retail o servicios) para recibir una configuración pre-optimizada con los módulos más relevantes.',
      },
      {
        title: 'Activar módulos',
        description: 'Desde tu panel de control, activa o desactiva módulos en cualquier momento. Cada módulo funciona de forma independiente pero se integra automáticamente con los demás.',
      },
      {
        title: 'Invitar a tu equipo',
        description: 'Agrega usuarios y asígnales roles con permisos granulares. Cada miembro del equipo verá solo las herramientas y datos que necesita para su función.',
      },
    ],
  },
  {
    icon: Calendar,
    title: 'Módulo de Agenda',
    items: [
      {
        title: 'Configuración inicial',
        description: 'Define tus horarios de atención, duración de citas por tipo, días laborables y períodos de descanso. La agenda se adapta a tu práctica, no al revés.',
      },
      {
        title: 'Gestión de citas',
        description: 'Agenda, reprograma o cancela citas con un clic. El sistema maneja automáticamente la disponibilidad y previene conflictos de horario.',
      },
      {
        title: 'Recordatorios automatizados',
        description: 'Envía recordatorios por WhatsApp o SMS antes de cada cita. Configura el tiempo de anticipación (24h, 2h) y personaliza los mensajes.',
      },
      {
        title: 'Vista por profesional',
        description: 'En clínicas con múltiples profesionales, cada uno tiene su propia agenda. La vista general muestra la ocupación de todo el equipo.',
      },
    ],
  },
  {
    icon: Banknote,
    title: 'Módulo de Facturación',
    items: [
      {
        title: 'Facturación CFDI',
        description: 'Emite facturas electrónicas (CFDI 4.0) directamente desde la plataforma. Compatible con el SAT, incluye timbrado automático y envío por correo.',
      },
      {
        title: 'Catálogo de productos y servicios',
        description: 'Registra tus productos o servicios con precios, impuestos y claves SAT correspondientes. Aplica descuentos manuales o automáticos.',
      },
      {
        title: 'Reportes fiscales',
        description: 'Genera reportes de ingresos, IVA trasladado e IVA retenido. Exporta en formatos compatibles con tu contador (PDF, XML, CSV).',
      },
      {
        title: 'Múltiples métodos de pago',
        description: 'Registra pagos en efectivo, tarjeta, transferencia o a crédito. El sistema genera automáticamente los complementos de pago necesarios.',
      },
    ],
  },
  {
    icon: BarChart2,
    title: 'Módulo de Reportes y Analíticas',
    items: [
      {
        title: 'Dashboard en tiempo real',
        description: 'Visualiza las métricas más importantes de tu negocio en un panel actualizado en tiempo real: ingresos del día, citas agendadas, inventario bajo mínimos.',
      },
      {
        title: 'Reportes personalizados',
        description: 'Crea reportes filtrados por fecha, sucursal, profesional, servicio o cualquier dimensión relevante. Guarda filtros frecuentes como plantillas.',
      },
      {
        title: 'Exportación de datos',
        description: 'Exporta cualquier reporte en PDF, Excel o CSV. Programa envíos automáticos de reportes semanales o mensuales a tu correo.',
      },
      {
        title: 'Comparativos y tendencias',
        description: 'Compara el rendimiento entre períodos (mes contra mes, año contra año) para identificar tendencias de crecimiento o áreas de mejora.',
      },
    ],
  },
  {
    icon: Package,
    title: 'Módulo de Inventario',
    items: [
      {
        title: 'Catálogo de productos',
        description: 'Registra todos tus productos con código, nombre, categoría, precio de compra, precio de venta y niveles mínimos de stock.',
      },
      {
        title: 'Alertas de stock bajo',
        description: 'Recibe notificaciones automáticas cuando un producto está por debajo del nivel mínimo configurado. Nunca te quedes sin insumos críticos.',
      },
      {
        title: 'Movimientos de inventario',
        description: 'Registra entradas (compras), salidas (ventas, mermas) y traspasos entre sucursales. Cada movimiento queda registrado con fecha, usuario y motivo.',
      },
      {
        title: 'Integración con ventas',
        description: 'Cuando se registra una venta o comanda, el inventario se actualiza automáticamente. Sin doble captura, sin errores manuales.',
      },
    ],
  },
  {
    icon: Lock,
    title: 'Seguridad y Permisos',
    items: [
      {
        title: 'Roles de usuario',
        description: 'Define roles personalizados (Administrador, Profesional, Recepcionista, Contador) con permisos granulares por módulo y por acción (ver, crear, editar, eliminar).',
      },
      {
        title: 'Registro de auditoría',
        description: 'Cada acción queda registrada: quién hizo qué, cuándo y desde dónde. Indispensable para cumplimiento regulatorio y trazabilidad.',
      },
      {
        title: 'Autenticación segura',
        description: 'Contraseñas encriptadas con bcrypt, soporte para autenticación multifactor (MFA) y bloqueo automático después de intentos fallidos.',
      },
      {
        title: 'Backups automáticos',
        description: 'Tus datos se respaldan automáticamente cada 24 horas en servidores geográficamente distribuidos. Recuperación disponible en minutos.',
      },
    ],
  },
  {
    icon: Link2,
    title: 'API e Integraciones',
    items: [
      {
        title: 'API REST documentada',
        description: 'API completa con autenticación por tokens, documentación Swagger/OpenAPI y ejemplos en curl, JavaScript y Python. Rate limiting configurable.',
      },
      {
        title: 'Webhooks',
        description: 'Recibe notificaciones en tiempo real en tus sistemas cuando ocurren eventos en Éter: nueva cita, factura emitida, pago recibido.',
      },
      {
        title: 'Integraciones nativas',
        description: 'Conexiones pre-construidas con Google Calendar, WhatsApp Business API, servicios de timbrado CFDI y pasarelas de pago.',
      },
      {
        title: 'Zapier y Make',
        description: 'Conecta Éter con más de 5,000 aplicaciones a través de Zapier o Make. Automatiza flujos de trabajo sin escribir código.',
      },
    ],
  },
];

export default function Docs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="docs-page">
        <div className="container">
          <header className="docs-page__header">
            <Link to="/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: '#737373',
              textDecoration: 'none',
              marginBottom: '2rem',
            }}>
              ← Volver al inicio
            </Link>
            <span className="docs-page__label">Documentación</span>
            <h1 className="docs-page__title">Centro de documentación</h1>
            <p className="docs-page__description">
              Todo lo que necesitas para configurar y aprovechar al máximo 
              cada módulo de la plataforma Éter.
            </p>
          </header>

          <div className="docs-page__sections">
            {sections.map((section) => (
              <div className="docs-section" key={section.title}>
                <div className="docs-section__header">
                  <span className="docs-section__icon">
                    <section.icon size={24} strokeWidth={1.5} />
                  </span>
                  <h2 className="docs-section__title">{section.title}</h2>
                </div>
                <div className="docs-section__grid">
                  {section.items.map((item) => (
                    <div className="docs-item" key={item.title}>
                      <h3 className="docs-item__title">{item.title}</h3>
                      <p className="docs-item__description">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="docs-page__cta">
            <h3>¿Necesitas ayuda personalizada?</h3>
            <p>Nuestro equipo de soporte está listo para guiarte en cada paso de la configuración.</p>
            <Link to="/#contacto" className="btn btn--accent btn--large">
              Contáctanos →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
