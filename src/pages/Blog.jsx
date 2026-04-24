import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const posts = [
  {
    id: 'software-modular-clinicas',
    image: '/blog-healthcare.png',
    category: 'Salud',
    date: '18 Abril 2026',
    readTime: '8 min de lectura',
    title: 'Cómo el software modular está transformando la gestión de clínicas y consultorios',
    subtitle: 'Las clínicas modernas necesitan herramientas flexibles que se adapten a sus procesos, no al revés.',
    content: `
      <h2>El problema con el software médico tradicional</h2>
      <p>Durante décadas, los consultorios y clínicas han dependido de sistemas monolíticos: plataformas rígidas que obligan a los profesionales de la salud a adaptarse a flujos de trabajo predefinidos. El resultado es predecible: procesos lentos, datos fragmentados y costos elevados por funciones que nunca se utilizan.</p>
      <p>Según un estudio de la Asociación Mexicana de Industrias de Investigación Farmacéutica (AMIIF), el 67% de los consultorios en México aún gestionan expedientes de forma manual o con hojas de cálculo, no porque no exista tecnología disponible, sino porque las soluciones existentes son demasiado caras, complejas o inflexibles para sus necesidades reales.</p>

      <h2>¿Qué es el enfoque modular y por qué importa?</h2>
      <p>El software modular funciona como bloques de construcción: cada componente es independiente pero se integra perfectamente con los demás. En lugar de comprar un paquete completo con 50 funciones (de las cuales usas 5), eliges solo los módulos que tu práctica necesita.</p>
      <p>Para una clínica general, esto podría significar comenzar con tres módulos: <strong>Agenda</strong> para gestionar citas, <strong>Expediente Clínico Electrónico</strong> para registrar historiales y <strong>Facturación CFDI</strong> para emitir comprobantes fiscales. Cuando la clínica crezca, puede activar módulos de CRM, mensajería automatizada o reportes avanzados sin migrar de plataforma.</p>

      <h2>Beneficios concretos para tu práctica médica</h2>
      <h3>1. Control de costos real</h3>
      <p>En el modelo modular, pagas exactamente por lo que usas. Un consultorio individual podría operar con $299 MXN mensuales usando tres módulos, mientras que una clínica con múltiples especialistas activaría módulos adicionales según su crecimiento. No hay planes forzados ni funciones dormidas que inflan tu factura.</p>
      
      <h3>2. Cumplimiento normativo simplificado</h3>
      <p>Los módulos clínicos de una plataforma como eter están diseñados desde el inicio para cumplir con la NOM-004-SSA3 (Expediente Clínico), la NOM-024-SSA3 (Interoperabilidad) y las regulaciones de protección de datos (LFPDPPP). Esto significa que no necesitas un equipo técnico dedicado para mantener el cumplimiento.</p>

      <h3>3. Implementación en minutos, no en meses</h3>
      <p>Los sistemas tradicionales requieren procesos de implementación que pueden durar de 3 a 6 meses. Con un enfoque modular, un consultorio puede estar operando en menos de 5 minutos: selecciona la plantilla de "Clínica", activa los módulos necesarios y comienza a agendar citas ese mismo día.</p>

      <h2>El futuro de la tecnología en salud</h2>
      <p>La tendencia global apunta hacia la personalización y la interoperabilidad. Los sistemas monolíticos están siendo reemplazados por plataformas modulares que permiten a cada práctica médica construir exactamente el ecosistema tecnológico que necesita, sin compromisos innecesarios.</p>
      <p>La pregunta ya no es si digitalizarse, sino cómo hacerlo de forma inteligente. El modelo modular ofrece la respuesta: tecnología accesible, escalable y centrada en quien importa — el profesional de la salud y sus pacientes.</p>
    `,
  },
  {
    id: 'tecnologia-restaurantes',
    image: '/blog-restaurants.png',
    category: 'Restaurantes',
    date: '12 Abril 2026',
    readTime: '7 min de lectura',
    title: 'Transformación digital en restaurantes: más allá del punto de venta',
    subtitle: 'La tecnología para restaurantes evoluciona de simples cajas registradoras a ecosistemas inteligentes que optimizan cada aspecto de la operación.',
    content: `
      <h2>El ecosistema tecnológico del restaurante moderno</h2>
      <p>Cuando pensamos en tecnología para restaurantes, lo primero que viene a la mente es el punto de venta (POS). Sin embargo, la transformación digital del sector gastronómico va mucho más allá de procesar pagos: involucra la gestión integral de comandas, inventario de ingredientes, reservaciones, relación con el cliente y análisis de datos en tiempo real.</p>
      <p>Los restaurantes que logran integrar estas capas tecnológicas no solo operan más eficientemente — generan, en promedio, un 23% más de ingresos que aquellos que utilizan herramientas aisladas, según datos de Restaurant Business Online.</p>

      <h2>Los 5 pilares de un restaurante digitalizado</h2>
      <h3>1. Comandas digitales: de la libreta al tablet</h3>
      <p>Las comandas manuales son una de las principales fuentes de error en un restaurante. Un mesero con letra ilegible, un pedido olvidado, una modificación que no llega a cocina — cada error cuesta dinero y reputación. Los sistemas de comandas digitales eliminan esta fricción: el pedido se toma en un tablet, se envía instantáneamente a las estaciones de cocina correspondientes y se registra automáticamente en el POS.</p>

      <h3>2. Control de inventario inteligente</h3>
      <p>El desperdicio de alimentos representa entre el 4% y el 10% de los costos de un restaurante. Un módulo de inventario conectado al sistema de comandas puede tracking el consumo de cada ingrediente en tiempo real, alertar cuando los niveles son bajos y hasta sugerir platillos que prioricen ingredientes próximos a vencer.</p>

      <h3>3. Reservaciones y gestión de mesas</h3>
      <p>Un sistema de reservaciones integrado permite optimizar la ocupación del restaurante, reducir los "no shows" con recordatorios automáticos por WhatsApp o SMS, y recopilar datos valiosos sobre las preferencias de los comensales.</p>

      <h3>4. CRM gastronómico</h3>
      <p>Conocer a tu cliente frecuente es un superpoder. Un módulo de CRM registra las preferencias de cada comensal: su mesa favorita, si tiene alergias, cuál es su platillo recurrente. Esta información permite personalizar cada visita y construir lealtad genuina.</p>

      <h3>5. Analíticas y reportes</h3>
      <p>¿Cuál es el platillo con mayor margen? ¿Qué día de la semana vendes más? ¿Cuál es el ticket promedio por mesa? Las decisiones basadas en datos transforman la gestión de un restaurante de "intuición" a estrategia medible.</p>

      <h2>El enfoque modular: solo lo que tu restaurante necesita</h2>
      <p>No todos los restaurantes son iguales. Una taquería de barrio no necesita el mismo sistema que un restaurante de autor con 15 mesas. El enfoque modular permite a cada establecimiento construir su stack tecnológico de acuerdo a su realidad operativa y presupuestal, activando nuevos módulos solo cuando los necesite.</p>
    `,
  },
  {
    id: 'modular-vs-monolitico',
    image: '/blog-modular.png',
    category: 'Tecnología',
    date: '5 Abril 2026',
    readTime: '10 min de lectura',
    title: 'Software modular vs. monolítico: guía definitiva para elegir',
    subtitle: 'Entender la diferencia entre estas arquitecturas es clave para tomar decisiones tecnológicas inteligentes para tu negocio.',
    content: `
      <h2>Definiendo los conceptos</h2>
      <p>En el mundo del software empresarial, existen dos filosofías arquitectónicas fundamentales que determinan cómo una plataforma se construye, se escala y se adapta a los usuarios.</p>
      <p>El <strong>software monolítico</strong> es una aplicación construida como una sola unidad. Todas las funciones — desde el CRM hasta la facturación, desde el inventario hasta los reportes — viven en un solo paquete. Lo compras todo o no compras nada.</p>
      <p>El <strong>software modular</strong> es una plataforma construida a partir de componentes independientes (módulos) que se conectan entre sí. Cada módulo cumple una función específica y puede ser activado o desactivado según las necesidades del usuario.</p>

      <h2>Comparación punto por punto</h2>
      <h3>Costo</h3>
      <p><strong>Monolítico:</strong> Pagas una licencia fija que incluye todas las funciones, uses o no uses. Los planes empresariales de ERPs tradicionales pueden superar los $50,000 MXN mensuales.</p>
      <p><strong>Modular:</strong> Pagas por módulo. Un negocio pequeño puede operar con 3 módulos por $299 MXN, mientras que una empresa grande activa todos los módulos según necesite, conociendo exactamente el costo de cada componente.</p>

      <h3>Implementación</h3>
      <p><strong>Monolítico:</strong> Requiere configurar todo el sistema de una vez. Los proyectos de implementación típicos duran de 3 a 12 meses e involucran consultores especializados.</p>
      <p><strong>Modular:</strong> Puedes empezar con un módulo hoy y agregar más mañana. La implementación inicial toma minutos, no meses.</p>

      <h3>Escalabilidad</h3>
      <p><strong>Monolítico:</strong> Escalar significa migrar a un plan superior (generalmente mucho más caro) o cambiar de plataforma completamente.</p>
      <p><strong>Modular:</strong> Escalar es tan simple como activar un nuevo módulo. No hay migraciones, no hay riesgo de pérdida de datos, no hay curvas de aprendizaje nuevas.</p>

      <h3>Mantenimiento</h3>
      <p><strong>Monolítico:</strong> Una actualización afecta a todo el sistema. Si algo falla en el módulo de inventario, podría impactar la facturación.</p>
      <p><strong>Modular:</strong> Cada módulo se actualiza de forma independiente. Un problema en un módulo no afecta al resto del sistema.</p>

      <h2>¿Cuándo elegir cada enfoque?</h2>
      <p>El software monolítico puede ser adecuado para empresas muy grandes con procesos estandarizados y presupuestos amplios. Sin embargo, para la gran mayoría de negocios — desde consultorios individuales hasta cadenas de restaurantes — el enfoque modular ofrece mayor flexibilidad, menor costo y una experiencia de implementación significativamente más sencilla.</p>
      <p>La arquitectura modular no es solo una tendencia tecnológica: es la respuesta natural a las necesidades reales de negocios que quieren tecnología sin compromiso.</p>
    `,
  },
  {
    id: 'seguridad-datos-empresariales',
    image: '/blog-security.png',
    category: 'Seguridad',
    date: '28 Marzo 2026',
    readTime: '6 min de lectura',
    title: 'Seguridad de datos empresariales: lo que todo negocio debe saber en 2026',
    subtitle: 'En un mundo donde los ciberataques crecen un 38% cada año, la seguridad de los datos de tu negocio no es opcional.',
    content: `
      <h2>El panorama actual de la ciberseguridad</h2>
      <p>México ocupa el segundo lugar en Latinoamérica en intentos de ciberataques, con más de 85,000 millones de intentos registrados en 2025 según datos de Fortinet. Para los negocios pequeños y medianos, esto no es una estadística abstracta: es un riesgo directo a su operación, sus clientes y su reputación.</p>
      <p>El 60% de las PyMEs que sufren un ataque cibernético cierran sus puertas en los siguientes 6 meses. La inversión en seguridad no es un lujo — es un seguro de supervivencia empresarial.</p>

      <h2>Los 5 pilares de la seguridad de datos</h2>
      <h3>1. Encriptación de extremo a extremo</h3>
      <p>Todos los datos deben estar encriptados tanto en tránsito (cuando se envían por internet) como en reposo (cuando se almacenan en servidores). Los estándares actuales incluyen TLS 1.3 para datos en tránsito y AES-256 para datos en reposo — el mismo nivel de encriptación que usan los bancos.</p>

      <h3>2. Autenticación robusta</h3>
      <p>Las contraseñas por sí solas ya no son suficientes. La autenticación multifactor (MFA) agrega una capa adicional de seguridad, típicamente un código temporal enviado a tu teléfono. Esto reduce en un 99.9% la probabilidad de acceso no autorizado.</p>

      <h3>3. Control de acceso basado en roles</h3>
      <p>No todos los empleados deben tener acceso a toda la información. Un sistema de roles permite definir exactamente qué datos puede ver y modificar cada usuario: el recepcionista accede a la agenda pero no a los reportes financieros; el contador accede a la facturación pero no a los expedientes clínicos.</p>

      <h3>4. Backups automáticos con redundancia</h3>
      <p>Los backups deben ser automáticos, frecuentes (al menos cada 24 horas) y almacenados en ubicaciones geográficamente distintas. En caso de un incidente, la recuperación debe ser posible en minutos, no en días.</p>

      <h3>5. Auditoría y monitoreo continuo</h3>
      <p>Cada acción dentro del sistema debe quedar registrada: quién accedió, cuándo, desde dónde y qué datos modificó. Esta trazabilidad no solo ayuda a detectar anomalías en tiempo real, sino que es un requisito legal en muchas industrias reguladas como la salud.</p>

      <h2>Cumplimiento regulatorio en México</h2>
      <p>En México, la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) establece obligaciones específicas para cualquier negocio que maneje datos personales. El incumplimiento puede resultar en multas de hasta 320,000 UMAS (más de $35 millones de pesos).</p>
      <p>Para el sector salud, la NOM-004-SSA3 exige condiciones específicas sobre el manejo de expedientes clínicos electrónicos. Elegir una plataforma que cumpla con estas normativas desde el diseño no es solo una ventaja — es una obligación legal.</p>

      <h2>Cómo elegir una plataforma segura</h2>
      <p>Al evaluar software para tu negocio, verifica que incluya: encriptación AES-256, autenticación multifactor, backups automáticos, control de acceso por roles, registro de auditoría y cumplimiento con las normativas aplicables a tu industria. La seguridad no debe ser un módulo adicional — debe estar integrada en el ADN de la plataforma.</p>
    `,
  },
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="blog-page">
        <div className="container">
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
          <header className="blog-page__header">
            <span className="blog-page__label">Blog</span>
            <h1 className="blog-page__title">Insights para negocios inteligentes</h1>
            <p className="blog-page__description">
              Artículos sobre tecnología, gestión empresarial, seguridad y las mejores prácticas 
              para digitalizar y escalar tu negocio.
            </p>
          </header>

          <div className="blog-page__grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.id}>
                <Link to={`/blog/${post.id}`} className="blog-card__image-link">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="blog-card__image" 
                    loading="lazy"
                  />
                </Link>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <span className="blog-card__category">{post.category}</span>
                    <span className="blog-card__date">{post.date}</span>
                    <span className="blog-card__read-time">{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="blog-card__title">{post.title}</h2>
                  </Link>
                  <p className="blog-card__subtitle">{post.subtitle}</p>
                  <Link to={`/blog/${post.id}`} className="blog-card__link">
                    Leer artículo →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Individual blog post page
export function BlogPost() {
  const postId = window.location.pathname.split('/blog/')[1];
  const post = posts.find(p => p.id === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="legal-page">
          <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
            <h1 className="legal-page__title">Artículo no encontrado</h1>
            <p style={{ marginTop: '1rem', color: '#737373' }}>
              El artículo que buscas no existe o ha sido removido.
            </p>
            <Link to="/blog" className="btn btn--primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
              Volver al blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <article className="blog-post">
        <div className="container" style={{ maxWidth: 800 }}>
          <Link to="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            fontSize: '0.875rem',
            color: '#737373',
            textDecoration: 'none',
            marginTop: '6rem',
          }}>
            ← Volver al blog
          </Link>

          <div className="blog-post__meta">
            <span className="blog-card__category">{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="blog-post__title">{post.title}</h1>
          <p className="blog-post__subtitle">{post.subtitle}</p>

          <img 
            src={post.image} 
            alt={post.title} 
            className="blog-post__hero-image" 
          />

          <div 
            className="blog-post__content" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div className="blog-post__cta">
            <h3>¿Listo para modernizar tu negocio?</h3>
            <p>Prueba eter gratis por 14 días. Sin tarjeta de crédito, sin compromisos.</p>
            <Link to="/#contacto" className="btn btn--accent btn--large">
              Empieza tu prueba gratis →
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
