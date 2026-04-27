import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container" style={{ maxWidth: 800 }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
            fontSize: "0.875rem",
            color: "#737373",
            textDecoration: "none",
          }}
        >
          ← Volver al inicio
        </Link>

        <h1 className="legal-page__title">Política Integral de Cookies</h1>
        <p
          className="legal-page__subtitle"
          style={{
            fontSize: "1.1rem",
            color: "#525252",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Mecanismos de Rastreo Tecnológico y Almacenamiento Local de la
          Plataforma ETER
        </p>
        <p className="legal-page__date">Última actualización: Abril 2026</p>

        <div className="legal-page__content">
          <h2>
            PRIMERA. Definición, Naturaleza y Despliegue de Mecanismos de
            Rastreo
          </h2>
          <p>
            En estricto cumplimiento con las disposiciones aplicables en materia
            de comercio electrónico, protección de datos y telecomunicaciones,
            se notifica a todo visitante, usuario o Suscriptor (en adelante, de
            manera conjunta, el "Usuario") que el ecosistema web, las interfaces
            públicas y la arquitectura SaaS multi-tenant de la plataforma ETER,
            de titularidad exclusiva de su creador legítimo ("EL TITULAR"),
            emplean cookies, web beacons, píxeles de seguimiento, tokens de
            sesión, almacenamiento local (Local Storage/Session Storage) y
            tecnologías homólogas de rastreo automatizado.
          </p>
          <p>
            Para la correcta interpretación de este instrumento, se entenderá
            por "cookie" a los archivos de datos cifrados o texto plano que se
            descargan, instalan y almacenan en el directorio del navegador web
            del dispositivo (computadora, terminal móvil o tableta) empleado por
            el Usuario al acceder, navegar o interactuar con los dominios y
            subdominios de ETER, los cuales permiten el intercambio de
            información de estado entre el sitio web y el cliente del Usuario
            para viabilizar la operatividad del sistema.
          </p>

          <h2>
            SEGUNDA. Tipología, Finalidades de Implementación y Clasificación
            Técnica
          </h2>
          <p>
            La plataforma ETER despliega de manera simultánea e indivisible
            diversas categorías de mecanismos de rastreo que resultan técnica y
            operativamente imprescindibles.
          </p>
          <p>
            En primer término, se instalan{" "}
            <strong>"Cookies Estrictamente Necesarias o Técnicas"</strong>, las
            cuales son ineludibles para la navegación fluida, la validación del
            contrato de navegación versionado, la distribución del tráfico en
            los servidores de infraestructura, la prevención de fraudes y la
            gestión del Core de autenticación (identificación de inicio de
            sesión y validación de permisos dinámicos del Tenant).
          </p>
          <p>
            En segundo término, se despliegan{" "}
            <strong>"Cookies Analíticas y de Rendimiento"</strong>, sean estas
            propias o de terceros (proveedores de métricas o infraestructura en
            la nube), cuya finalidad es la cuantificación del impacto de los
            paquetes funcionales, la medición de latencia, el análisis del
            comportamiento de navegación mediante datos disociados y la
            optimización continua de la interfaz gráfica (UI/UX).
          </p>
          <p>
            El Usuario reconoce que la habilitación de los paquetes modulares
            del SaaS depende directamente de la persistencia de estos archivos
            técnicos durante la sesión.
          </p>

          <h2>
            TERCERA. Aceptación Tácita, Restricciones de Operatividad y Exención
            de Responsabilidad
          </h2>
          <p>
            El acceso voluntario, la navegación continuada, el desplazamiento
            por las páginas (scrolling), o el inicio de sesión dentro de la
            instancia asignada al Tenant en los portales de ETER, constituye una
            manifestación de voluntad inequívoca y representa el consentimiento
            expreso y la aceptación plena del Usuario para la descarga,
            instalación y ejecución de todas las tecnologías de rastreo
            descritas en la presente política.
          </p>
          <p>
            EL TITULAR declara de manera categórica que el Usuario posee en todo
            momento la libertad técnica y el control absoluto para restringir,
            bloquear o eliminar dichos mecanismos a través de los ajustes de
            configuración, seguridad y privacidad de su propio navegador web.
          </p>
          <p>
            No obstante, el Usuario acepta y asume incondicionalmente que la
            deshabilitación, bloqueo o eliminación de las cookies técnicas o de
            sesión degradará drásticamente la funcionalidad del sistema,
            inhabilitará el acceso a la instancia multi-tenant, impedirá la
            ejecución de operaciones comerciales o financieras dentro del SaaS y
            producirá errores de validación, eximiendo el Usuario a ETER y a EL
            TITULAR de cualquier responsabilidad civil, mercantil o
            administrativa, directa o indirecta, derivada de la pérdida de
            servicio, lucro cesante o imposibilidad operativa originada por la
            alteración voluntaria de dichos archivos temporales en el
            dispositivo del cliente.
          </p>

          <h2>CUARTA. Vigencia Tecnológica y Jurisdicción Aplicable</h2>
          <p>
            La persistencia de las cookies en el dispositivo del Usuario
            dependerá de su naturaleza técnica, existiendo{" "}
            <strong>"Cookies de Sesión"</strong> que se destruyen
            automáticamente al cerrar el navegador, y{" "}
            <strong>"Cookies Persistentes"</strong> que permanecen en el
            terminal por periodos de tiempo predefinidos en su código de origen
            para facilitar futuros inicios de sesión.
          </p>
          <p>
            La presente política podrá ser modificada de manera unilateral por
            EL TITULAR sin previo aviso, entrando en vigor las actualizaciones
            de manera inmediata tras su publicación en el portal.
          </p>
          <p>
            Para la resolución de cualquier controversia emanada de la
            implementación de estos mecanismos de rastreo, las partes se someten
            irrevocablemente a la jurisdicción de las leyes federales de los
            Estados Unidos Mexicanos y a los tribunales competentes en la ciudad
            de Victoria de Durango, Durango, renunciando expresamente a
            cualquier otro fuero concurrente.
          </p>

<<<<<<< HEAD
          <div
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              background: "#f5f5f5",
              borderRadius: "12px",
              borderLeft: "4px solid #6366f1",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.875rem", color: "#525252" }}>
              <strong>Contacto:</strong> Para consultas sobre esta política de
              cookies, escriba a <strong>etermx00@gmail.com</strong>
=======
          <div style={{
            marginTop: '3rem',
            padding: '1.5rem',
            background: '#f5f5f5',
            borderRadius: '12px',
            borderLeft: '4px solid #6366f1',
          }}>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#525252' }}>
              <strong>Contacto:</strong> Para consultas sobre esta política de cookies, 
              escriba a <strong>etermx00@gmail.com</strong>
>>>>>>> b0defec16bc123311053d61a8bb98cc5de48dd3a
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
